<template>
  <nav class="relative sticky mx-auto top-6 w-sm sm:w-md md:w-3xl lg:w-5xl z-50 backdrop-blur-lg bg-gradient-to-r from-white/10 via-emerald-500/10 to-fuchsia-600/5 border border-white/10 rounded-full">
    <div class="pl-8 pr-4">
      <div class="flex items-center justify-between py-3">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <a href="/#hero" @click.prevent="go('#hero')" class="text-white font-bold text-lg hover:text-white/80 transition-colors">
            Rahul
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a 
              href="/#case-studies"
              @click.prevent="go('#case-studies')"
              class="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Case studies
            </a>
            <a 
              href="/#experience"
              @click.prevent="go('#experience')"
              class="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Experience
            </a>
            <a 
              href="/#tools"
              @click.prevent="go('#tools')"
              class="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Tools
            </a>
            <a 
              href="/#community-work"
              @click.prevent="go('#community-work')"
              class="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Community work
            </a>

          <button 
            href="/#footer" 
            @click.prevent="go('#footer')" 
            class="bg-black/75 hover:bg-black/50 hover:cursor-pointer backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-white/10 hover:border-white/20"
          >
            Contact
          </button>
        </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-white hover:text-white/80 focus:outline-none focus:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg 
              :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }"
              class="h-6 w-6" 
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
              class="h-6 w-6" 
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div 
      :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
      class="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10"
    >
      <div class="px-6 pt-2 pb-3 space-y-1">
        <a 
          href="/#case-studies"
          class="block text-white/70 hover:text-white transition-colors duration-200 py-2 text-base font-medium"
          @click.prevent="go('#case-studies', true)"
        >
          <span>Case studies</span>
        </a>
        <a 
          href="/#experience"
          class="block text-white/70 hover:text-white transition-colors duration-200 py-2 text-base font-medium"
          @click.prevent="go('#experience', true)"
        >
          <span>Experience</span>
        </a>
        <a 
          href="/#tools"
          class="block text-white/70 hover:text-white transition-colors duration-200 py-2 text-base font-medium"
          @click.prevent="go('#tools', true)"
        >
          <span>Tools</span>
        </a>
        <a 
          href="/#community-work"
          class="block text-white/70 hover:text-white transition-colors duration-200 py-2 text-base font-medium"
          @click.prevent="go('#community-work', true)"
        >
          <span>Community work</span>
        </a>
        <button href="/#footer" class="w-fit mt-2 bg-black/75 hover:bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-white/10 hover:border-white/20"
          @click.prevent="go('#footer', true)"
        >
          <span>Contact</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const { scrollToHash } = useSmoothScroll()
const route = useRoute()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const go = async (hash, shouldClose = false) => {
  if (route.path !== '/') {
    if (shouldClose) closeMobileMenu()
    await navigateTo({ path: '/', hash })
    return
  }
  scrollToHash(hash, { duration: 700, updateHash: true })
  if (shouldClose) closeMobileMenu()
}

// Close mobile menu when clicking outside or pressing escape
if (process.client) {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      isMobileMenuOpen.value = false
    }
  }
  
  const handleClickOutside = (e) => {
    if (isMobileMenuOpen.value && !e.target.closest('nav')) {
      isMobileMenuOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
    document.removeEventListener('click', handleClickOutside)
  })
}
</script>


