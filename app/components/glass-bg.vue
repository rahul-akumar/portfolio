<template>
  <div class="absolute inset-0 pointer-events-none">
    <!-- Noise and glass overlay -->
    <div class="absolute inset-0 z-10 pointer-events-none">
      <div class="h-full w-full bg-gradient-to-tr from-fuchsia-600/10 via-emerald-500/10 to-amber-500/10 backdrop-blur-3xl">
        <div class="absolute inset-0 opacity-40 mix-blend-overlay" style="background-image: url('/noise.png'); background-size: 60px 60px; background-repeat: repeat;" />
      </div>
    </div>
  </div>
</template>
