<script setup>
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-vue-next";

// Organized utility classes
const styles = {
  sectionItem:
    " text-white underline underline-offset-12 decoration-white/50 hover:decoration-white hover:text-white/80 focus:ring-2 hover:after:content-['_↗'] after:text-amber-500",
};
</script>

<template>
  <div class="mx-auto flex h-lvh w-7xl flex-col justify-between py-20">
    <header class="flex justify-between">
      <h3 class="text-lg">Rahul</h3>
      <p>
        <a
          href="https://www.linkedin.com/in/rahul-akumar/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline-offset-8 hover:underline"
        >
          Get in touch
        </a>
      </p>
    </header>

    <main class="">
      <div class="flex flex-col gap-8">
        <div class="gradient-container">
          <div class="running-gradient">
            <div class="gradient-text">
              Currently designing at
              <a
                href="https://www.dialpad.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="underline-offset-8 hover:underline"
              >
                Dialpad</a
              >.
            </div>
          </div>
        </div>
        <div class="flex justify-between px-20">
          <p>Systems—first</p>

          <p>Form—second</p>

          <p>Software designer</p>
        </div>
      </div>
    </main>

    <footer class="flex justify-between px-20">
      <p>Projects</p>
      <p>-></p>
      <p>
        <a
          href="https://rahul-akumar.github.io/webintosh/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline-offset-8 hover:underline"
        >
          Webintosh
        </a>
      </p>
      <p>•</p>
      <p>
        <a
          href="https://rahul-akumar.github.io/REGO/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline-offset-8 hover:underline"
        >
          REGO
        </a>
      </p>
      <p>•</p>
      <p>
        <a
          href="https://rahul-akumar.github.io/DRONA/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline-offset-8 hover:underline"
        >
          Animated gradient builder
        </a>
      </p>
      <p>•</p>
      <p>
        <a
          href="https://rahul-akumar.github.io/gradient/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline-offset-8 hover:underline"
        >
          DRONA
        </a>
      </p>
    </footer>
  </div>
</template>

<style scoped>
h1 a:hover {
  transition: all 0.3s ease-in-out;
  color: var(--color-stone-300);
  text-decoration-color: var(--color-stone-100);
}

h1 a:hover::after {
  content: " ↗";
  color: var(--color-amber-500);
}

.footer-link {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 12px;
  text-decoration-color: var(--color-stone-600);
}

.footer-link:hover {
  transition: all 0.2s ease-in-out;
  color: var(--color-stone-300);
  text-decoration-color: var(--color-stone-100);
}

.footer-link:hover::after {
  content: " ↗";
  color: var(--color-amber-500);
}

.gradient-container {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  height: 420px;
  /* box-shadow: 
  0 30px 60px rgba(0, 0, 0, 0.4),
  inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: containerPulse 8s ease-in-out infinite; */
  background: linear-gradient(45deg, #000000, #fecfef, #fecfef);
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
  /* text-shadow: 
                2px 2px 4px rgba(0, 0, 0, 0.8),
                0 0 20px rgba(255, 255, 255, 0.3); */
  position: relative;
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
  z-index: 1;
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
  z-index: 2;
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
}

.gradient-text {
  position: relative;
  z-index: 3;
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
</style>
