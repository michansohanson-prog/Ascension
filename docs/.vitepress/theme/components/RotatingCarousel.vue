<template>
  <div
    class="carousel-container"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @touchstart="startTouch"
    @touchmove="onTouch"
    @touchend="endTouch"
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
            <div class="holo-foil"></div>
            <div class="holo-glare"></div>
            <div class="image-container">
              <img :src="item.image" :alt="item.title" draggable="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const tiltAngle = -15;
const currentAngle = ref(0);
const targetAngle = ref(0);
const activeIndex = ref(0);

const itemCount = computed(() => props.items.length);
const angleStep = computed(() => 360 / itemCount.value);

// Responsive radius for mobile vs desktop
const carouselRadius = ref(320);
const updateRadius = () => {
  if (typeof window !== "undefined") {
    carouselRadius.value = window.innerWidth <= 640 ? 190 : 320;
  }
};

onMounted(() => {
  updateRadius();
  window.addEventListener("resize", updateRadius);
  animationFrameId = requestAnimationFrame(animate);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateRadius);
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});

// Counter-rotate each item on X axis so cards face camera upright
const getItemStyle = (index) => {
  const itemAngle = index * angleStep.value;
  return {
    transform: `rotateY(${itemAngle}deg) translateZ(${carouselRadius.value}px) rotateX(${-tiltAngle}deg)`,
  };
};

// Smooth animation loop
let animationFrameId = null;
const animate = () => {
  currentAngle.value += (targetAngle.value - currentAngle.value) * 0.08;

  const normalizedAngle = ((-currentAngle.value % 360) + 360) % 360;
  const rawIndex =
    Math.round(normalizedAngle / angleStep.value) % itemCount.value;
  activeIndex.value = (rawIndex + itemCount.value) % itemCount.value;

  animationFrameId = requestAnimationFrame(animate);
};

// Controls logic (prevents click when dragging)
let isDragging = false;
let hasMoved = false;
let startX = 0;
let startY = 0;
let startAngle = 0;
let velocity = 0;
let lastX = 0;
let lastTime = 0;

const startDrag = (e) => {
  isDragging = true;
  hasMoved = false;
  startX = e.clientX;
  startY = e.clientY;
  startAngle = targetAngle.value;
  lastX = e.clientX;
  lastTime = performance.now();
  velocity = 0;
};

const onDrag = (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;

  if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
    hasMoved = true;
  }

  targetAngle.value = startAngle + deltaX * 0.25;

  const now = performance.now();
  const dt = now - lastTime;
  if (dt > 0) {
    velocity = ((e.clientX - lastX) / dt) * 8;
  }
  lastX = e.clientX;
  lastTime = now;
};

const endDrag = () => {
  if (!isDragging) return;
  isDragging = false;
  targetAngle.value += velocity * 2;
  snapToNearest();
};

const startTouch = (e) => {
  if (!e.touches.length) return;
  isDragging = true;
  hasMoved = false;
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  startAngle = targetAngle.value;
  lastX = e.touches[0].clientX;
  lastTime = performance.now();
  velocity = 0;
};

const onTouch = (e) => {
  if (!isDragging || !e.touches.length) return;
  const clientX = e.touches[0].clientX;
  const clientY = e.touches[0].clientY;
  const deltaX = clientX - startX;
  const deltaY = clientY - startY;

  if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
    hasMoved = true;
  }

  targetAngle.value = startAngle + deltaX * 0.3;

  const now = performance.now();
  const dt = now - lastTime;
  if (dt > 0) {
    velocity = ((clientX - lastX) / dt) * 8;
  }
  lastX = clientX;
  lastTime = now;
};

const endTouch = () => {
  if (!isDragging) return;
  isDragging = false;
  targetAngle.value += velocity * 2;
  snapToNearest();
};

const onWheel = (e) => {
  targetAngle.value -= e.deltaY * 0.1;
  snapToNearest();
};

const snapToNearest = () => {
  setTimeout(() => {
    if (!isDragging) {
      const step = angleStep.value;
      const nearest = Math.round(targetAngle.value / step) * step;
      targetAngle.value = nearest;
    }
  }, 150);
};

const handleItemClick = (item, index) => {
  if (hasMoved) return;

  if (index === activeIndex.value && item.link) {
    window.location.href = item.link;
  } else {
    const targetItemAngle = index * angleStep.value;
    targetAngle.value = -targetItemAngle;
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
  touch-action: pan-y;
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
}

/* Glassmorphism + Intense Metallic/Dark Holofoil Card styling */
.card-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(20, 25, 40, 0.25);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s ease,
    border-color 0.35s ease;
  border: 2px solid rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

/* Masculine Metallic Rainbow Foil: Dark Cyan, Electric Cobalt, Emerald, Flame Orange, Deep Violet */
.holo-foil {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    135deg,
    rgba(0, 180, 255, 0.65) 0px,
    rgba(0, 255, 150, 0.65) 20px,
    rgba(255, 140, 0, 0.65) 40px,
    rgba(130, 0, 255, 0.65) 60px,
    rgba(0, 180, 255, 0.65) 80px
  );
  background-size: 300% 300%;
  mix-blend-mode: color-dodge;
  opacity: 0.95;
  pointer-events: none;
  border-radius: 14px;
  animation: holo-shimmer 3.5s linear infinite;
}

@keyframes holo-shimmer {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

/* Sharp Metallic Glare Reflection */
.holo-glare {
  position: absolute;
  inset: -80%;
  background: linear-gradient(
    45deg,
    transparent 35%,
    rgba(180, 230, 255, 0.8) 46%,
    rgba(255, 255, 255, 1) 50%,
    rgba(180, 230, 255, 0.8) 54%,
    transparent 65%
  );
  mix-blend-mode: hard-light;
  pointer-events: none;
  animation: glare-sweep 3s ease-in-out infinite;
}

@keyframes glare-sweep {
  0% {
    transform: translateY(-120%) translateX(-120%);
  }
  50% {
    transform: translateY(120%) translateX(120%);
  }
  100% {
    transform: translateY(120%) translateX(120%);
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
  /* Requested drop shadow */
  filter: drop-shadow(8px 8px 3px rgba(0, 0, 0, 0.4));
}

/* Front active card scaling and vivid electric glow */
.carousel-item:has(.card-wrapper.active) {
  top: -125px;
  left: -87px;
  width: 174px;
  height: 250px;
  z-index: 100;
}

.card-wrapper.active {
  width: 174px;
  height: 250px;
  background: rgba(30, 40, 65, 0.4);
  border-color: rgba(255, 255, 255, 1);
  box-shadow:
    0 30px 70px rgba(0, 180, 255, 0.5),
    inset 0 0 35px rgba(255, 255, 255, 0.8);
}

.card-wrapper.active .holo-foil {
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
    top: -100px;
    left: -70px;
    width: 140px;
    height: 200px;
  }
  .card-wrapper.active {
    width: 140px;
    height: 200px;
  }
}
</style>
