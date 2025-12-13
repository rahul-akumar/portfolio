<script setup>
import { nextTick, onMounted, onUnmounted, ref, watchEffect } from "vue";

const isMobileMenuOpen = ref(false);
const navEl = ref(null);
const dropdownStyle = ref({ left: "0px", top: "0px", width: "0px" });
const { scrollToHash } = useSmoothScroll();
const route = useRoute();

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}

async function go(hash, shouldClose = false) {
  if (route.path !== "/") {
    if (shouldClose)
      closeMobileMenu();
    await navigateTo({ path: "/", hash });
    return;
  }
  scrollToHash(hash, { duration: 700, updateHash: true });
  if (shouldClose)
    closeMobileMenu();
}

// Close mobile menu with Escape and outside click
if (import.meta.client) {
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      isMobileMenuOpen.value = false;
    }
  };

  const updateDropdownPosition = () => {
    if (!navEl.value)
      return;
    const rect = navEl.value.getBoundingClientRect();
    // place dropdown just under the navbar and match its width
    dropdownStyle.value = {
      left: `${rect.left}px`,
      top: `${rect.bottom + 8}px`,
      width: `${rect.width}px`,
    };
  };

  const handleOpenReposition = async () => {
    await nextTick();
    updateDropdownPosition();
  };

  const handleClickOutside = (e) => {
    const dropdown = document.querySelector("[data-anchored-dropdown]");
    if (
      isMobileMenuOpen.value
      && !e.target.closest("nav")
      && dropdown && !dropdown.contains(e.target)
    ) {
      isMobileMenuOpen.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", updateDropdownPosition, { passive: true });
    window.addEventListener("resize", updateDropdownPosition);
  });

  watchEffect(() => {
    if (isMobileMenuOpen.value) {
      handleOpenReposition();
    }
  });

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
    document.removeEventListener("click", handleClickOutside);
    window.removeEventListener("scroll", updateDropdownPosition);
    window.removeEventListener("resize", updateDropdownPosition);
  });
}
</script>

<template>
  <nav ref="navEl" class="relative sticky mx-auto top-6 w-fit sm:w-md md:w-fit lg:w-4xl z-50 backdrop-blur-lg bg-black/55 shadow-[0_10px_30px_rgba(0,0,0,0.35)] bg-gradient-to-r from-white/10 via-emerald-500/10 to-fuchsia-600/5 border border-white/15 rounded-full">
    <div class="pl-6 pr-4">
      <div class="flex items-center sm:justify-between gap-32 sm:gap-0 py-3">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <a href="/#hero" class="text-white font-medium text-lg tracking-wide hover:text-white/80 transition-colors" @click.prevent="go('#hero')">
            Rahul
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a
              href="/#showcase"
              class="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
              @click.prevent="go('#showcase')"
            >
              Showcase
            </a>
            <a
              href="/#experience"
              class="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
              @click.prevent="go('#experience')"
            >
              Experience
            </a>
            <a
              href="/#tools"
              class="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
              @click.prevent="go('#tools')"
            >
              Tools
            </a>
            <a
              href="/#community-work"
              class="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
              @click.prevent="go('#community-work')"
            >
              Community work
            </a>

            <button
              href="/#footer"
              class="bg-black/75 hover:bg-black/50 hover:cursor-pointer backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-white/10 hover:border-white/20"
              @click.prevent="go('#footer')"
            >
              Contact
            </button>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden pr-2">
          <button
            class="flex text-white hover:text-white/80 hover:cursor-pointer focus:outline-none focus:text-white transition-colors justify-center items-center"
            aria-label="Toggle mobile menu"
            aria-controls="mobile-menu"
            :aria-expanded="isMobileMenuOpen"
            @click="toggleMobileMenu"
          >
            <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" size="18" class="m-2 transform-gpu" />
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Teleported anchored dropdown (outside nav to enable backdrop-blur) -->
  <Teleport to="body">
    <transition
      enter-active-class="transition-transform transition-opacity duration-300 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-transform transition-opacity duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        :style="dropdownStyle"
        class="fixed z-40 md:hidden"
        role="menu"
        aria-label="Mobile navigation"
        data-anchored-dropdown
      >
        <div class="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md shadow-lg overflow-hidden">
          <div class="px-6 py-3 space-y-1">
            <a
              href="/#showcase"
              class="block text-white/70 hover:text-white transition-colors duration-200 py-2 text-base font-medium"
              @click.prevent="go('#showcase', true)"
            >
              <span>Showcase</span>
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
            <button
              href="/#footer" class="w-fit mt-2 bg-black/75 hover:bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-white/10 hover:border-white/20"
              @click.prevent="go('#footer', true)"
            >
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
