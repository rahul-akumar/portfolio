<template>
  <div class="absolute inset-0 pointer-events-none">
    <!-- Noise and glass overlay -->
    <div class="absolute inset-0 z-10 pointer-events-none">
      <div class="h-full w-full bg-gradient-to-tr from-fuchsia-500/10 via-emerald-400/10 to-amber-400/10 backdrop-blur-3xl">
        <div class="absolute inset-0 opacity-40 mix-blend-overlay" style="background-image: url('/noise.png'); background-size: 60px 60px; background-repeat: repeat;">
        </div>
      </div>
    </div>
    
    <!-- Multiple interacting blobs -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="scene">
        <div
          v-for="blob in blobs"
          :key="blob.id"
          class="blob"
          :style="{
            transform: `translate3d(${blob.x}px, ${blob.y}px, 0) scale(${blob.scale})`,
            background: blob.gradient,
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            zIndex: blob.zIndex
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// Physics constants
const GRAVITY_STRENGTH = 0.0001
const DAMPING = 0.999
const MIN_DISTANCE = 100
const BOUNDARY_FORCE = 0.002

// Blob configuration
const BLOB_COUNT = 5
const MIN_SIZE = 200
const MAX_SIZE = 400

// Reactive blob data
const blobs = ref([])
let animationId = null
const canvasSize = reactive({ width: 0, height: 0 })

// Color gradients for different blobs
const gradients = [
  'linear-gradient(135deg, #c41681, #45ad45)',
  'linear-gradient(135deg, #a440d3, #ffff00)',
  'linear-gradient(135deg, #0410b9, #c41681)',
  'linear-gradient(135deg, #45ad45, #a440d3)',
  'linear-gradient(135deg, #ffff00, #0410b9)'
]

// Initialize blobs with random positions and properties
const initializeBlobs = () => {
  canvasSize.width = window.innerWidth
  canvasSize.height = window.innerHeight
  
  blobs.value = Array.from({ length: BLOB_COUNT }, (_, index) => ({
    id: index,
    x: Math.random() * (canvasSize.width - 400) + 200,
    y: Math.random() * (canvasSize.height - 400) + 200,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
    mass: 1 + Math.random() * 2,
    scale: 0.8 + Math.random() * 0.4,
    gradient: gradients[index % gradients.length],
    zIndex: Math.floor(Math.random() * 10)
  }))
}

// Calculate gravitational force between two blobs
const calculateGravity = (blob1, blob2) => {
  const dx = blob2.x - blob1.x
  const dy = blob2.y - blob1.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  
  if (distance < MIN_DISTANCE) return { fx: 0, fy: 0 }
  
  const force = (GRAVITY_STRENGTH * blob1.mass * blob2.mass) / (distance * distance)
  const fx = (dx / distance) * force
  const fy = (dy / distance) * force
  
  return { fx, fy }
}

// Apply boundary forces to keep blobs within viewport
const applyBoundaryForces = (blob) => {
  const margin = blob.size / 2
  let fx = 0, fy = 0
  
  // Left boundary
  if (blob.x < margin) {
    fx += BOUNDARY_FORCE * (margin - blob.x)
  }
  // Right boundary
  if (blob.x > canvasSize.width - margin) {
    fx -= BOUNDARY_FORCE * (blob.x - (canvasSize.width - margin))
  }
  // Top boundary
  if (blob.y < margin) {
    fy += BOUNDARY_FORCE * (margin - blob.y)
  }
  // Bottom boundary
  if (blob.y > canvasSize.height - margin) {
    fy -= BOUNDARY_FORCE * (blob.y - (canvasSize.height - margin))
  }
  
  return { fx, fy }
}

// Physics simulation step
const updatePhysics = () => {
  const blobArray = blobs.value
  
  // Calculate forces for each blob
  for (let i = 0; i < blobArray.length; i++) {
    let totalFx = 0, totalFy = 0
    
    // Gravitational forces from other blobs
    for (let j = 0; j < blobArray.length; j++) {
      if (i !== j) {
        const force = calculateGravity(blobArray[i], blobArray[j])
        totalFx += force.fx
        totalFy += force.fy
      }
    }
    
    // Boundary forces
    const boundaryForce = applyBoundaryForces(blobArray[i])
    totalFx += boundaryForce.fx
    totalFy += boundaryForce.fy
    
    // Update velocity
    blobArray[i].vx += totalFx / blobArray[i].mass
    blobArray[i].vy += totalFy / blobArray[i].mass
    
    // Apply damping
    blobArray[i].vx *= DAMPING
    blobArray[i].vy *= DAMPING
    
    // Update position
    blobArray[i].x += blobArray[i].vx
    blobArray[i].y += blobArray[i].vy
  }
}

// Animation loop
const animate = () => {
  updatePhysics()
  animationId = requestAnimationFrame(animate)
}

// Handle window resize
const handleResize = () => {
  canvasSize.width = window.innerWidth
  canvasSize.height = window.innerHeight
}

// Lifecycle hooks
onMounted(() => {
  initializeBlobs()
  animate()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* 3D perspective context for the blobs */
.scene {
  perspective: 1200px;
  position: relative;
  width: 100%;
  height: 100%;
}

/* Individual blob styles */
.blob {
  position: absolute;
  border-radius: 40% 60% 70% 30% / 30% 40% 60% 70%;
  animation: morph 12s ease-in-out infinite, gradientShift 25s ease infinite;
  transform-style: preserve-3d;
  will-change: transform;
  background-size: 300% 300%;
  filter: blur(1px);
  opacity: 0.8;
  transition: transform 0.1s ease-out;
}

/* Add different animation delays for each blob to make them feel more organic */
.blob:nth-child(1) { animation-delay: 0s; }
.blob:nth-child(2) { animation-delay: -2s; }
.blob:nth-child(3) { animation-delay: -4s; }
.blob:nth-child(4) { animation-delay: -6s; }
.blob:nth-child(5) { animation-delay: -8s; }

/* Enhanced morphing animation with more complex transitions */
@keyframes morph {
  0% {
    border-radius: 40% 60% 70% 30% / 30% 40% 60% 70%;
  }
  20% {
    border-radius: 60% 40% 30% 70% / 40% 60% 30% 60%;
  }
  40% {
    border-radius: 30% 70% 50% 50% / 60% 30% 70% 40%;
  }
  60% {
    border-radius: 70% 30% 60% 40% / 50% 70% 30% 60%;
  }
  80% {
    border-radius: 50% 50% 40% 60% / 70% 50% 40% 30%;
  }
  100% {
    border-radius: 40% 60% 70% 30% / 30% 40% 60% 70%;
  }
}

/* Animated gradient shift with more dynamic movement */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 25%;
  }
  50% {
    background-position: 50% 100%;
  }
  75% {
    background-position: 25% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Performance optimizations */
.blob {
  transform-origin: center center;
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .blob {
    filter: blur(2px);
    opacity: 0.6;
  }
}

/* Add subtle hover effects when blobs get close to the center */
.blob:hover {
  opacity: 0.9;
  filter: blur(0.5px);
}
</style>
