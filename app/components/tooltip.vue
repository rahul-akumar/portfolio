<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref } from "vue";

type Placement = "auto" | "top" | "bottom";

const props = withDefaults(defineProps<{
  text: string;
  placement?: Placement;
  disabled?: boolean;
  showDelay?: number;
  hideDelay?: number;
  maxWidthPx?: number;
}>(), {
  placement: "auto",
  disabled: false,
  showDelay: 80,
  hideDelay: 80,
  maxWidthPx: 280,
});

const tooltipId = `tt-${Math.random().toString(36).slice(2, 10)}`;

const triggerEl = ref<HTMLElement | null>(null);
const tooltipEl = ref<HTMLElement | null>(null);

const isOpen = ref(false);
const resolvedPlacement = ref<Exclude<Placement, "auto">>("top");
const pos = ref({ leftPx: 0, topPx: 0 });

let showTimer: number | undefined;
let hideTimer: number | undefined;
let removeWindowListeners: (() => void) | undefined;
let canHoverMedia: MediaQueryList | undefined;
let onCanHoverChange: ((e: MediaQueryListEvent) => void) | undefined;

const canHover = ref(true);
if (import.meta.client) {
  canHoverMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
  canHover.value = canHoverMedia.matches;
  onCanHoverChange = (e) => {
    canHover.value = e.matches;
    if (!canHover.value)
      closeNow();
  };
  canHoverMedia.addEventListener?.("change", onCanHoverChange);
}

function setTriggerRef(el: unknown) {
  if (!el) {
    triggerEl.value = null;
    return;
  }
  if (el instanceof HTMLElement) {
    triggerEl.value = el;
    return;
  }
  const maybeComponent = el as { $el?: unknown };
  if (maybeComponent?.$el instanceof HTMLElement) {
    triggerEl.value = maybeComponent.$el;
    return;
  }
  triggerEl.value = null;
}

const triggerAttrs = computed(() => ({
  "aria-describedby": isOpen.value ? tooltipId : undefined,
}));

function clearTimers() {
  if (showTimer)
    window.clearTimeout(showTimer);
  if (hideTimer)
    window.clearTimeout(hideTimer);
  showTimer = undefined;
  hideTimer = undefined;
}

function attachWindowListeners() {
  if (!import.meta.client || removeWindowListeners)
    return;

  const handler = () => {
    if (isOpen.value)
      void positionTooltip();
  };

  window.addEventListener("scroll", handler, { passive: true, capture: true });
  window.addEventListener("resize", handler, { passive: true });
  removeWindowListeners = () => {
    window.removeEventListener("scroll", handler, true);
    window.removeEventListener("resize", handler);
    removeWindowListeners = undefined;
  };
}

function detachWindowListeners() {
  removeWindowListeners?.();
}

function openWithDelay() {
  if (props.disabled || !props.text || !import.meta.client || !canHover.value)
    return;

  clearTimers();
  showTimer = window.setTimeout(async () => {
    isOpen.value = true;
    await positionTooltip();
    attachWindowListeners();
  }, props.showDelay);
}

function closeWithDelay() {
  clearTimers();
  hideTimer = window.setTimeout(() => {
    closeNow();
  }, props.hideDelay);
}

function closeNow() {
  clearTimers();
  isOpen.value = false;
  detachWindowListeners();
}

async function positionTooltip() {
  if (!import.meta.client)
    return;
  if (!triggerEl.value)
    return;

  await nextTick();
  if (!tooltipEl.value)
    return;

  const padding = 8;
  const gap = 10;

  const triggerRect = triggerEl.value.getBoundingClientRect();
  const tipRect = tooltipEl.value.getBoundingClientRect();

  const centerX = triggerRect.left + triggerRect.width / 2;

  const topY = triggerRect.top - gap - tipRect.height;
  const bottomY = triggerRect.bottom + gap;

  let place: Exclude<Placement, "auto"> = props.placement === "bottom" ? "bottom" : "top";
  if (props.placement === "auto") {
    place = topY < padding ? "bottom" : "top";
  }
  if (place === "top" && topY < padding && bottomY + tipRect.height <= window.innerHeight - padding)
    place = "bottom";
  if (place === "bottom" && bottomY + tipRect.height > window.innerHeight - padding && topY >= padding)
    place = "top";

  resolvedPlacement.value = place;

  const minLeft = padding + tipRect.width / 2;
  const maxLeft = window.innerWidth - padding - tipRect.width / 2;
  const leftPx = Math.min(maxLeft, Math.max(minLeft, centerX));

  let topPx = place === "top" ? topY : bottomY;
  topPx = Math.min(window.innerHeight - padding - tipRect.height, Math.max(padding, topPx));

  pos.value = { leftPx, topPx };
}

const triggerEvents = {
  mouseenter: openWithDelay,
  mouseleave: closeWithDelay,
  focus: openWithDelay,
  blur: closeWithDelay,
};

onBeforeUnmount(() => {
  closeNow();
  if (onCanHoverChange)
    canHoverMedia?.removeEventListener?.("change", onCanHoverChange);
});
</script>

<template>
  <slot
    :trigger-attrs="triggerAttrs"
    :trigger-events="triggerEvents"
    :set-trigger-ref="setTriggerRef"
  />

  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isOpen"
        :id="tooltipId"
        ref="tooltipEl"
        role="tooltip"
        class="fixed z-[1000] pointer-events-none -translate-x-1/2"
        :style="{ left: `${pos.leftPx}px`, top: `${pos.topPx}px`, maxWidth: `${props.maxWidthPx}px` }"
      >
        <div class="relative rounded-xl border border-white/15 bg-black/75 backdrop-blur-md px-3 py-2 text-xs text-white/80 shadow-lg">
          {{ text }}

          <div
            class="absolute left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border border-white/15 bg-black/75"
            :class="resolvedPlacement === 'top' ? 'bottom-[-5px] border-t-0 border-l-0' : 'top-[-5px] border-b-0 border-r-0'"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>


