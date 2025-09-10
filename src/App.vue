<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-vue-next";

// Organized utility classes
const styles = {
  sectionItem:
    " text-white underline underline-offset-12 decoration-white/50 hover:decoration-white hover:text-white/80 focus:ring-2 hover:after:content-['_↗'] after:text-amber-500",
};

// Interactive gradient state
const gradientContainer = ref(null);
const mousePosition = ref({ x: 0.5, y: 0.5 });
const isInteracting = ref(false);

// Mouse and touch interaction handlers
const handleMouseMove = (event) => {
  if (!gradientContainer.value) return;
  
  const rect = gradientContainer.value.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  
  mousePosition.value = { x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) };
};

const handleTouchMove = (event) => {
  if (!gradientContainer.value || event.touches.length === 0) return;
  
  event.preventDefault();
  const touch = event.touches[0];
  const rect = gradientContainer.value.getBoundingClientRect();
  const x = (touch.clientX - rect.left) / rect.width;
  const y = (touch.clientY - rect.top) / rect.height;
  
  mousePosition.value = { x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) };
};

const handleInteractionStart = () => {
  isInteracting.value = true;
};

const handleInteractionEnd = () => {
  isInteracting.value = false;
  // Smoothly return to center
  mousePosition.value = { x: 0.5, y: 0.5 };
};

// Computed style for dynamic gradient positioning
const dynamicGradientStyle = ref('');

// Update gradient position based on mouse/touch
const updateGradientStyle = () => {
  const { x, y } = mousePosition.value;
  const intensity = isInteracting.value ? 1.2 : 0.8;
  
  // Calculate background position based on interaction
  const posX = (x * 100);
  const posY = (y * 100);
  
  dynamicGradientStyle.value = `
    background-position: ${posX}% ${posY}%;
    filter: hue-rotate(${x * 60 - 30}deg) saturate(${intensity}) brightness(${0.9 + y * 0.2});
    transform: translateZ(0) scale(${isInteracting.value ? 1.02 : 1});
    transition: transform 0.3s ease-out, filter 0.2s ease-out;
  `;
};

// Watch for position changes and update styles
const animationFrame = ref(null);
const updateAnimation = () => {
  updateGradientStyle();
  animationFrame.value = requestAnimationFrame(updateAnimation);
};

onMounted(() => {
  updateAnimation();
});

onUnmounted(() => {
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value);
  }
});
</script>

<template>
  <div class="mx-auto flex h-lvh w-screen px-10 flex-col justify-between py-16 md:w-screen lg:w-5xl">
    <header class="flex justify-between items-baseline">
      <h1 class="text-sm md:text-base font-semibold tracking-wide">
        Rahul
      </h1>
      <p>
        <a
          href="https://www.linkedin.com/in/rahul-akumar/"
          target="_blank"
          rel="noopener noreferrer"
          class="gradient-link text-sm md:text-base font-medium"
        >
          Get in touch
        </a>
      </p>
    </header>

    <main class="-top-20">
      <div class="flex flex-col gap-4">
        <div 
          ref="gradientContainer"
          class="gradient-container rounded-lg md:rounded-3xl"
          @mousemove="handleMouseMove"
          @mouseenter="handleInteractionStart"
          @mouseleave="handleInteractionEnd"
          @touchmove="handleTouchMove"
          @touchstart="handleInteractionStart"
          @touchend="handleInteractionEnd"
        >
          <div class="running-gradient" :style="dynamicGradientStyle">
            <div class="gradient-text text-sm md:text-lg p-4">
              Currently building integrations at
              <a
                href="https://www.dialpad.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="gradient-link"
              >
                Dialpad</a
              >.
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between md:px-20 gap-4 md:gap-0">
          <p class="text-xs text-stone-200 md:text-base font-medium tracking-wider">
            Systems—first
          </p>
          <p class="text-xs text-stone-200 md:text-base font-medium tracking-wider">
            Form—second
          </p>
          <p class="text-xs text-stone-200 md:text-base font-medium tracking-wider">
            Software designer
          </p>
        </div>
      </div>
    </main>

    <footer class="flex flex-col md:flex-row items-start md:items-center justify-between md:px-20 pt-4 md:pt-0 gap-4 md:gap-0">
      <p>
        <a
          href="https://rahul-akumar.github.io/webintosh/"
          target="_blank"
          rel="noopener noreferrer"
          class="gradient-link text-xs md:text-base"
        >
          Webintosh
        </a>
      </p>
      <p class="text-xs md:text-base md:block hidden">•</p>
      <p>
        <a
          href="https://rahul-akumar.github.io/REGO/"
          target="_blank"
          rel="noopener noreferrer"
          class="gradient-link text-xs md:text-base"
        >
          REGO
        </a>
      </p>
      <p class="text-xs md:text-base md:block hidden">•</p>
      <p class="text-xs md:text-base">
        <a 
          href="https://rahulkumar.notion.site/Integrations-in-DP-UCaaS-2643f4f51b46805ca09fc8844782c3ef" 
          target="_blank" 
        rel="noopener noreferrer" 
        class="gradient-link text-xs md:text-base">
        Dialpad - UCaaS
        </a>
      </p>
    <p class="text-xs md:text-base md:block hidden">•</p>
    <p class="text-xs md:text-base">
        <a 
          href="https://www.behance.net/rahul_kumar" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="gradient-link text-xs md:text-base">
        Behance
        </a>
      </p>
    </footer>
  </div>
</template>

<style scoped>
/* Performance optimizations */
.gradient-container {
  position: relative;
  overflow: hidden;
  height: 420px;
  background: linear-gradient(45deg, #000000, #fecfef, #fecfef);
  will-change: transform;
  backface-visibility: hidden;
  z-index: 10;
}


.running-gradient {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    #ff0080,
    /* Hot Pink */ #ff4500,
    /* Orange Red */ #00ffff,
    /* Cyan */ #9400d3,
    /* Violet */ #00ff00,
    /* Lime */ #ff1493,
    /* Deep Pink */ #1e90ff,
    /* Dodger Blue */ #ffd700,
    /* Gold */ #ff6347,
    /* Tomato */ #00fa9a,
    /* Medium Spring Green */ #ff0080 /* Back to Hot Pink */
  );
  background-size: 600% 600%;
  animation:
    gradientShift 48s ease-in-out infinite,
    gradientRotate 3s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  font-size: 18px;
  position: relative;
  z-index: 10;
  /* Performance optimizations */
  will-change: background-position, filter;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Multiple gradient layers for depth */
.running-gradient::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    -45deg,
    rgba(255, 0, 128, 0.1),
    rgba(255, 69, 0, 1),
    rgba(0, 255, 255, 1),
    rgba(148, 0, 211, 0.1),
    rgba(0, 255, 0, 1),
    rgba(255, 20, 147, 1),
    rgba(30, 144, 255, 0.1),
    rgba(255, 215, 0, 1)
  );
  background-size: 400% 400%;
  animation: gradientShift 4s ease-in-out infinite reverse;
  z-index: 11;
  /* Performance optimizations */
  will-change: background-position;
  transform: translateZ(0);
}

.running-gradient::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  animation: shine 3s linear infinite;
  z-index: 12;
  /* Performance optimizations */
  will-change: transform;
  backface-visibility: hidden;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes gradientRotate {
  0% {
    filter: hue-rotate(0deg) saturate(1);
  }
  50% {
    filter: hue-rotate(180deg) saturate(1.2);
  }
  100% {
    filter: hue-rotate(360deg) saturate(1);
  }
}


@keyframes shine {
  0% {
    transform: translateX(-100%) skewX(-15deg);
  }
  100% {
    transform: translateX(200%) skewX(-15deg);
  }
}

@keyframes containerPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

/* Enhanced glow effect */
.gradient-container::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  background: linear-gradient(
    45deg,
    #9c004e,
    #a52c00,
    #009191,
    #650091,
    #008b00,
    #9c0053,
    #004c97,
    #978100,
    #8f0047
  );
  background-size: 600% 600%;
  animation: gradientShift 6s ease-in-out infinite;
  border-radius: 29px;
  z-index: -1;
  filter: blur(15px);
  opacity: 0.8;
  /* Performance optimizations */
  will-change: background-position;
  transform: translateZ(0);
}

.gradient-text {
  position: relative;
  z-index: 15;
}

@keyframes textGlow {
  0% {
    text-shadow:
      2px 2px 4px rgba(0, 0, 0, 0.8),
      0 0 20px rgba(255, 255, 255, 0.3);
  }
  100% {
    text-shadow:
      2px 2px 4px rgba(0, 0, 0, 0.8),
      0 0 30px rgba(255, 255, 255, 0.6),
      0 0 40px rgba(255, 255, 255, 0.3);
  }
}

/* Enhanced Link Micro-interactions */
.gradient-link {
  position: relative;
  display: inline-block;
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.5);
  text-underline-offset: 7px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, text-shadow;
}

.gradient-link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    #ff0080,
    #ff4500,
    #00ffff,
    #9400d3,
    #00ff00
  );
  background-size: 200% 100%;
  animation: gradientFlow 3s linear infinite;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.gradient-link:hover {
  transform: translateY(-1px);
  text-decoration-color: rgba(255, 255, 255, 0.8);
  text-shadow: 
    0 0 8px rgba(255, 255, 255, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.2);
}

.gradient-link:hover::before {
  width: 100%;
}

.gradient-link:hover::after {
  content: ' ↗';
  color: #ffd700;
  animation: bounce 0.8s ease-out;
  display: inline-block;
}

/* Gradient link inside the main gradient container */
.gradient-text .gradient-link {
  color: rgb(0, 0, 0);
  font-weight: 600;
}

.gradient-text .gradient-link:hover {
  color: rgb(0, 0, 0);
  text-shadow: 
    0 0 12px rgba(255, 255, 255, 0.8),
    0 2px 8px rgba(0, 0, 0, 0.3);
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(-1px);
  }
}

/* Sophisticated Typography */
.gradient-accent {
  background: linear-gradient(
    135deg,
    #ff0080,
    #ff4500,
    #00ffff,
    #9400d3,
    #00ff00
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAccent 6s ease-in-out infinite;
  font-weight: 700;
  letter-spacing: 0.05em;
}

@keyframes gradientAccent {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Enhanced typography spacing and hierarchy */
body {
  line-height: 1.6;
  letter-spacing: 0.01em;
}

h1, h2, h3 {
  line-height: 1.4;
  font-weight: 600;
}

p {
  line-height: 1.7;
}

.gradient-text {
  line-height: 1.5;
  letter-spacing: 0.02em;
  font-weight: 500;
}


/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .running-gradient {
    animation: gradientShift 120s ease-in-out infinite;
  }
  
  .running-gradient::before {
    animation: gradientShift 24s ease-in-out infinite reverse;
  }
  
  .running-gradient::after {
    animation: none;
  }
  
  .gradient-container::before {
    animation: gradientShift 30s ease-in-out infinite;
  }
  
  .gradient-link {
    transition: none;
  }
  
  .gradient-link::before {
    animation: none;
  }
  
  .gradient-link:hover::after {
    animation: none;
  }
}
</style>
