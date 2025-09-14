<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  speed: {
    type: Number,
    default: 5
  },
  className: {
    type: String,
    default: ""
  }
});

const animationDuration = computed(() => `${props.speed}s`);
</script>

<template>
  <div
    class="shiny-text"
    :class="[props.disabled ? 'disabled' : '', props.className]"
    :style="{ animationDuration }"
  >
    {{ props.text }}
  </div>
</template>

<style scoped>
.shiny-text {
  color: #d3d3d3a4; /* Adjust this color to change intensity/style */
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 60%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
  animation: shine 5s linear infinite;
}

@keyframes shine {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
}

.shiny-text.disabled {
  animation: none;
}
</style>
