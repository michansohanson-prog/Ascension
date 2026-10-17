<template>
  <div
    class="carousel-container"
    @pointerdown="handlePointerDown"
    @wheel.prevent="onWheel"
  >
    <div class="carousel-scene">
      <div
        class="carousel-wheel"
        :style="{
          transform: `perspective(1400px) translateY(30px) rotateX(${tiltAngle}deg) rotateY(${currentAngle}deg)`,
        }"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="carousel-item"
          :style="getItemStyle(index)"
          @click.stop="handleItemClick(item, index)"
        >
          <div class="card-wrapper" :class="{ active: index === activeIndex }">
            <div class="dark-void-bg"></div>
            <div class="subtle-glare"></div>
            <div class="image-container">
              <img
                :src="item.image"
                :alt="item.title || ''"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vitepress";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const router = useRouter();

const tiltAngle = -15;
const currentAngle = ref(0);
const targetAngle = ref(0);
const activeIndex = ref(0);

const itemCount = computed(() => props.items.length);
const angleStep = computed(() => (itemCount.value ? 360 / itemCount.value : 0));

// Responsive radius
const carouselRadius = ref(320);
const updateRadius = () => {
  if (typeof window !== "undefined") {
    carouselRadius.value = window.innerWidth <= 640 ? 190 : 320;
  }
};

let animationFrameId = null;
let isAnimating = false;
let snapTimer = null;

onMounted(() => {
  updateRadius();
  window.addEventListener("resize", updateRadius);
  startAnimationLoop();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateRadius);
  window.removeEventListener("pointermove", handlePointerMove);
  window.removeEventListener("pointerup", handlePointerUp);
  window.removeEventListener("pointercancel", handlePointerUp);
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  if (snapTimer) clearTimeout(snapTimer);
});

// Counter-rotate each item on X axis so cards face camera upright
const getItemStyle = (index) => {
  const itemAngle = index * angleStep.value;
  return {
    transform: `rotateY(${itemAngle}deg) translateZ(${carouselRadius.value}px) rotateX(${-tiltAngle}deg)`,
  };
};

// Start or resume the animation loop when interaction occurs
const startAnimationLoop = () => {
  if (!isAnimating) {
    isAnimating = true;
    animationFrameId = requestAnimationFrame(animate);
  }
};

// Smooth animation loop that pauses when idle
const animate = () => {
  const diff = targetAngle.value - currentAngle.value;

  if (Math.abs(diff) > 0.001) {
    currentAngle.value += diff * 0.08;
  } else {
    currentAngle.value = targetAngle.value;
    isAnimating = false;
  }

  if (itemCount.value > 0) {
    const normalizedAngle = ((-currentAngle.value % 360) + 360) % 360;
    const rawIndex =
      Math.round(normalizedAngle / angleStep.value) % itemCount.value;
    activeIndex.value = (rawIndex + itemCount.value) % itemCount.value;
  }

  if (isAnimating) {
    animationFrameId = requestAnimationFrame(animate);
  }
};

// Unified Controls & Pointer Events Handlers
let isDragging = false;
let hasMoved = false;
let startX = 0;
let startY = 0;
let startAngle = 0;
let velocity = 0;
let lastX = 0;
let lastTime = 0;
let currentPointerId = null;

const handlePointerDown = (e) => {
  isDragging = true;
  hasMoved = false;
  currentPointerId = e.pointerId;

  // Capture pointer on target if supported
  if (e.target && typeof e.target.setPointerCapture === "function") {
    try {
      e.target.setPointerCapture(e.pointerId);
    } catch (_) {
      // Fallback silent fail
    }
  }

  startX = e.clientX;
  startY = e.clientY;
  startAngle = targetAngle.value;
  lastX = e.clientX;
  lastTime = performance.now();
  velocity = 0;

  window.addEventListener("pointermove", handlePointerMove);
  window.addEventListener("pointerup", handlePointerUp);
  window.addEventListener("pointercancel", handlePointerUp);

  startAnimationLoop();
};

const handlePointerMove = (e) => {
  if (
    !isDragging ||
    (currentPointerId !== null && e.pointerId !== currentPointerId)
  )
    return;

  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;

  // Euclidean distance check to prevent micro-jitters on mobile/high-DPI mice from canceling clicks
  if (Math.hypot(deltaX, deltaY) > 8) {
    hasMoved = true;
  }

  const sensitivity = e.pointerType === "touch" ? 0.3 : 0.25;
  targetAngle.value = startAngle + deltaX * sensitivity;

  const now = performance.now();
  const dt = now - lastTime;
  if (dt > 0) {
    velocity = ((e.clientX - lastX) / dt) * 8;
  }
  lastX = e.clientX;
  lastTime = now;
  startAnimationLoop();
};

const handlePointerUp = (e) => {
  if (
    !isDragging ||
    (currentPointerId !== null && e.pointerId !== currentPointerId)
  )
    return;

  if (
    e.target &&
    typeof e.target.releasePointerCapture === "function" &&
    currentPointerId !== null
  ) {
    try {
      e.target.releasePointerCapture(currentPointerId);
    } catch (_) {
      // Fallback silent fail
    }
  }

  isDragging = false;
  currentPointerId = null;

  window.removeEventListener("pointermove", handlePointerMove);
  window.removeEventListener("pointerup", handlePointerUp);
  window.removeEventListener("pointercancel", handlePointerUp);

  targetAngle.value += velocity * 2;
  snapToNearest();
  startAnimationLoop();
};

const onWheel = (e) => {
  targetAngle.value -= e.deltaY * 0.1;
  snapToNearest();
  startAnimationLoop();
};

// Safe snap to nearest function with lifecycle cleanup
const snapToNearest = () => {
  if (snapTimer) clearTimeout(snapTimer);
  snapTimer = setTimeout(() => {
    if (!isDragging && angleStep.value) {
      const step = angleStep.value;
      const nearest = Math.round(targetAngle.value / step) * step;
      targetAngle.value = nearest;
      startAnimationLoop();
    }
  }, 150);
};

const handleItemClick = (item, index) => {
  if (hasMoved) return;

  if (index === activeIndex.value && item.link) {
    router.go(item.link);
  } else {
    const targetItemAngle = index * angleStep.value;
    targetAngle.value = -targetItemAngle;
    startAnimationLoop();
  }
};
</script>

<style scoped>
/* Force all VitePress layout parents to disable clipping */
:deep(.vp-doc),
:deep(.content),
:deep(.content-container),
:deep(.main),
:deep(.container) {
  overflow: visible !important;
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto -80px auto;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: visible !important;
  background: transparent;
  user-select: none;
  touch-action: none; /* Prevents vertical scroll interference during carousel swipes */
  cursor: grab;
  padding: 0;
}

.carousel-container:active {
  cursor: grabbing;
}

.carousel-scene {
  width: 100%;
  height: 480px;
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 140px;
  overflow: visible !important;
}

@media (max-width: 425px) {
  .carousel-scene {
    margin-top: 100px;
  }
}

.carousel-wheel {
  position: relative;
  width: 0px;
  height: 0px;
  transform-style: preserve-3d;
  will-change: transform;
}

.carousel-item {
  position: absolute;
  top: -100px;
  left: -70px;
  width: 140px;
  height: 200px;
  transform-style: preserve-3d;
  cursor: pointer;
  overflow: visible !important;
  /* Smooth out layout positioning transitions */
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Glassmorphism + Dark Green/Black Foundation with Vibrant Blue Highlights */
.card-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(6, 12, 10, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow:
    0 16px 35px rgba(0, 0, 0, 0.6),
    0 0 14px rgba(0, 150, 255, 0.2);
  transition:
    width 0.4s cubic-bezier(0.25, 1, 0.5, 1),
    height 0.4s cubic-bezier(0.25, 1, 0.5, 1),
    transform 0.4s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.4s ease,
    border-color 0.4s ease,
    background 0.4s ease;
  border: 2px solid rgba(40, 130, 90, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  animation: border-glow-pulse 4s ease-in-out infinite alternate;
}

@keyframes border-glow-pulse {
  0% {
    border-color: rgba(40, 130, 90, 0.4);
    box-shadow:
      0 16px 35px rgba(0, 0, 0, 0.6),
      0 0 10px rgba(0, 140, 255, 0.15);
  }
  50% {
    border-color: rgba(0, 210, 255, 0.75);
    box-shadow:
      0 16px 35px rgba(0, 0, 0, 0.6),
      0 0 22px rgba(0, 190, 255, 0.45);
  }
  100% {
    border-color: rgba(50, 150, 110, 0.45);
    box-shadow:
      0 16px 35px rgba(0, 0, 0, 0.6),
      0 0 12px rgba(0, 120, 255, 0.2);
  }
}

.dark-void-bg {
  position: absolute;
  inset: -50%;
  background: radial-gradient(
    circle,
    rgba(8, 45, 30, 0.65) 0%,
    rgba(5, 25, 45, 0.5) 40%,
    rgba(2, 5, 10, 0.85) 70%,
    transparent 90%
  );
  opacity: 0.8;
  pointer-events: none;
  border-radius: 40%;
  animation: void-breathe 8s ease-in-out infinite alternate;
}

@keyframes void-breathe {
  0% {
    transform: scale(0.9) translate(-15px, -15px);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2) translate(15px, 15px);
    opacity: 0.95;
  }
  100% {
    transform: scale(0.95) translate(-10px, 10px);
    opacity: 0.6;
  }
}

.subtle-glare {
  position: absolute;
  inset: -60%;
  background: linear-gradient(
    135deg,
    transparent 40%,
    rgba(0, 200, 255, 0.22) 50%,
    transparent 60%
  );
  pointer-events: none;
  animation: glare-drift 9s ease-in-out infinite;
}

@keyframes glare-drift {
  0% {
    transform: translateY(-45%) translateX(-45%);
  }
  50% {
    transform: translateY(45%) translateX(45%);
  }
  100% {
    transform: translateY(-45%) translateX(-45%);
  }
}

.image-container {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: visible;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  display: block;
  filter: drop-shadow(8px 8px 3px rgba(0, 0, 0, 0.4));
}

/* Front active card scaling */
.carousel-item:has(.card-wrapper.active) {
  top: -140px;
  left: -98px;
  width: 196px;
  height: 280px;
  z-index: 100;
}

.card-wrapper.active {
  width: 196px;
  height: 280px;
  background: rgba(10, 30, 22, 0.8);
  border-color: rgba(0, 220, 255, 0.9);
  box-shadow:
    0 25px 60px rgba(0, 80, 50, 0.4),
    0 0 32px rgba(0, 200, 255, 0.55),
    inset 0 0 25px rgba(0, 210, 255, 0.25);
  animation: none;
}

.card-wrapper.active .dark-void-bg {
  opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .carousel-container {
    height: 460px;
  }
  .carousel-scene {
    height: 380px;
  }
  .carousel-item {
    top: -80px;
    left: -55px;
    width: 110px;
    height: 160px;
  }
  .carousel-item:has(.card-wrapper.active) {
    top: -110px;
    left: -77px;
    width: 154px;
    height: 224px;
  }
  .card-wrapper.active {
    width: 154px;
    height: 224px;
  }
}
</style>
