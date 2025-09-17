// Universal 3D tilt directive with parallax and shine (SSR-safe registration)
// Usage: v-tilt="{ max: 12, scale: 1.02, shine: true, parallaxSelector: '.tilt-parallax', perspective: 800 }"

import type { Directive, DirectiveBinding } from "vue";

import { defineNuxtPlugin } from "nuxt/app";

type TiltOptions = {
  max?: number;
  scale?: number;
  shine?: boolean;
  parallaxSelector?: string;
  parallaxStrength?: number;
  parallaxZ?: number;
  perspective?: number;
  reset?: boolean;
  gyroscope?: boolean;
};

type TiltState = {
  rect: DOMRect | null;
  shineEl: HTMLElement | null;
  parallaxEl: HTMLElement | null;
  opts: Required<TiltOptions>;
  onEnter: (e: PointerEvent) => void;
  onMove: (e: PointerEvent) => void;
  onLeave: () => void;
};

const defaultOptions: Required<TiltOptions> = {
  max: 12,
  scale: 1,
  shine: true,
  parallaxSelector: ".tilt-parallax",
  parallaxStrength: 6,
  parallaxZ: 24,
  perspective: 800,
  reset: true,
  gyroscope: false,
};

function setStyle(el: HTMLElement, styles: Record<string, string>) {
  for (const key in styles) {
    // @ts-expect-error - TypeScript is not able to infer the type of the style object
    el.style[key] = styles[key];
  }
}

function applyTransform(el: HTMLElement, rotateX: number, rotateY: number, scale: number, perspective: number) {
  setStyle(el, {
    transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
  });
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

const TiltDirective: Directive<HTMLElement, TiltOptions> = {
  // Provide SSR no-op props to avoid SSR directive errors
  getSSRProps() {
    return {};
  },
  mounted(el: HTMLElement, binding: DirectiveBinding<TiltOptions>) {
    const opts: Required<TiltOptions> = { ...defaultOptions, ...(binding.value || {}) };

    // Ensure will-change and preserve-3d for children
    setStyle(el, {
      transformStyle: "preserve-3d",
      willChange: "transform",
      transition: "transform 180ms ease-out",
    });

    const state: TiltState = {
      rect: null,
      shineEl: null,
      parallaxEl: null,
      opts,
      onEnter: () => {},
      onMove: () => {},
      onLeave: () => {},
    };

    // Optional shine layer
    if (opts.shine) {
      const shine = document.createElement("div");
      shine.className = "tilt-shine";
      setStyle(shine as HTMLElement, {
        position: "absolute",
        inset: "0",
        pointerEvents: "none",
        borderRadius: getComputedStyle(el).borderRadius || "0px",
        background: "radial-gradient(650px circle at var(--shine-x,50%) var(--shine-y,50%), rgba(255,255,255,0.18), rgba(255,255,255,0.08), transparent 70%)",
        transform: "translateZ(1px)",
      });
      if (!el.style.position)
        el.style.position = "relative";
      el.appendChild(shine);
      state.shineEl = shine;
    }

    // Parallax element (e.g., logo container)
    state.parallaxEl = el.querySelector(opts.parallaxSelector) as HTMLElement | null;
    if (state.parallaxEl) {
      setStyle(state.parallaxEl, {
        transform: `translateZ(${opts.parallaxZ}px)`,
        willChange: "transform",
      });
    }

    const handleMove = (e: PointerEvent) => {
      if (!state.rect)
        state.rect = el.getBoundingClientRect();
      const rect = state.rect;
      const px = clamp((e.clientX - rect.left) / rect.width, 0, 1);
      const py = clamp((e.clientY - rect.top) / rect.height, 0, 1);
      const rotateY = (px - 0.5) * (opts.max * 2);
      const rotateX = -(py - 0.5) * (opts.max * 2);

      applyTransform(el, rotateX, rotateY, opts.scale, opts.perspective);

      if (state.parallaxEl) {
        if (opts.parallaxStrength > 0) {
          const offsetX = (px - 0.5) * opts.parallaxStrength;
          const offsetY = (py - 0.5) * opts.parallaxStrength;
          setStyle(state.parallaxEl, {
            transform: `translateZ(${opts.parallaxZ}px) translate(${offsetX * -1}px, ${offsetY * -1}px)`,
          });
        }
        else {
          setStyle(state.parallaxEl, {
            transform: `translateZ(${opts.parallaxZ}px)`,
          });
        }
      }

      if (state.shineEl) {
        el.style.setProperty("--shine-x", `${px * 100}%`);
        el.style.setProperty("--shine-y", `${py * 100}%`);
      }
    };

    const handleEnter = (e: PointerEvent) => {
      state.rect = el.getBoundingClientRect();
      setStyle(el, { transition: "transform 90ms ease-out" });
      handleMove(e);
    };

    const handleLeave = () => {
      if (opts.reset) {
        setStyle(el, { transition: "transform 220ms ease-out" });
        applyTransform(el, 0, 0, 1, opts.perspective);
        if (state.parallaxEl)
          setStyle(state.parallaxEl, { transform: `translateZ(${opts.parallaxZ}px)` });
      }
    };

    state.onEnter = handleEnter;
    state.onMove = handleMove;
    state.onLeave = handleLeave;

    el.addEventListener("pointerenter", handleEnter);
    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave)

    ;(el as any).__tiltState = state;
  },
  unmounted(el: HTMLElement) {
    const state: TiltState | undefined = (el as any).__tiltState;
    if (state) {
      el.removeEventListener("pointerenter", state.onEnter);
      el.removeEventListener("pointermove", state.onMove);
      el.removeEventListener("pointerleave", state.onLeave);
      delete (el as any).__tiltState;
    }
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("tilt", TiltDirective);
});
