<template>
  <div :class="['text-center', containerClasses]">
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
      {{ title }} <span :class="['bg-clip-text text-transparent tracking-wide', gradientClasses]">{{ highlight }}</span>
    </h2>
    <p v-if="subtitle" class="text-white/70 text-md max-w-2xl mx-auto">
      {{ subtitle }}
    </p>
  </div>
  
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  highlight: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  gradientClasses: { 
    type: String, 
    default: 'bg-gradient-to-r from-sky-400 via-fuchsia-300 to-amber-400' 
  },
  containerClasses: { type: String, default: 'mb-4' }
})
</script>

<style scoped>

span {
font-family: 'Lora', serif;
}
</style>


