<template>
  <span class="inline-block relative">
    <NuxtImg
      :src="src"
      :alt="alt || ''"
      v-bind="$attrs"
      class="cursor-zoom-in transition-transform duration-200 hover:scale-[1.01]"
      @click="openLightbox"
    />
  </span>

  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="isLightboxOpen"
        class="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        @click.self="closeLightbox"
      >
        <button
          type="button"
          aria-label="Close image"
          class="absolute top-4 right-4 z-20 text-white/80 hover:text-white hover:cursor-pointer focus:outline-none"
          @click="closeLightbox"
        >
        <Icon name="lucide:x" size="24" />
        </button>

        <img
          :src="src"
          :alt="alt || ''"
          class="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl select-none"
          @click.stop
        />
        <div v-if="alt" class="absolute bottom-4 left-0 right-0 z-20 px-6 text-center text-white/80 text-sm">
          {{ alt }}
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const props = defineProps<{
  src: string
  alt?: string
  title?: string
  width?: number | string
  height?: number | string
}>()

const { src, alt } = toRefs(props)

const isLightboxOpen = ref(false)

function openLightbox() {
  isLightboxOpen.value = true
}

function closeLightbox() {
  isLightboxOpen.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>


