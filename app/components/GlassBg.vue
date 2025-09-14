<template>
  <div class="absolute inset-0 pointer-events-none">
    <!-- Noise and glass overlay -->
    <div class="absolute inset-0 z-10 pointer-events-none">
      <div class="h-screen w-full bg-gradient-to-tr from-fuchsia-500/10 via-emerald-400/10 to-amber-400/10 backdrop-blur-3xl">
        <div class="absolute inset-0 opacity-40 mix-blend-overlay" style="background-image: url('/noise.png'); background-size: 60px 60px; background-repeat: repeat;">
        </div>
      </div>
    </div>
  </div>
</template>