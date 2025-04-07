<template>
  <div class="container" ref="container">
    <div class="top-bar">
      <p class="counter">{{ collisionCount }}</p>
      <ThemeChanger />
    </div>
    <img :style="styleObject" class="dvd-logo" src="/thomas.jpg" alt="DVD" />
  </div>
</template>


<script setup>
import ThemeChanger from './ThemeChanger.vue';
</script>

<script>
export default {
  name: "DvdBounce",
  data() {
    return {
      x: window.innerWidth / 2 - 40,
      y: window.innerHeight / 2 - 40,
      dx: 3,
      dy: 3,
      width: 100,
      height: 100,
      containerWidth: 0,
      containerHeight: 0,
      collisionCount: Number(localStorage.getItem("collisionCount")) || 0,
    };
  },
  computed: {
    styleObject() {
      return {
        transform: `translate(${this.x}px, ${this.y}px)`,
        position: 'absolute',
      };
    },
  },
  mounted() {
    this.updateContainerSize();
    window.addEventListener("resize", this.updateContainerSize);
    this.moveDvd();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateContainerSize);
  },
  methods: {
    updateContainerSize() {
      this.$nextTick(() => {
        const container = this.$refs.container;
        if (container) {
          this.containerWidth = container.clientWidth;
          this.containerHeight = container.clientHeight;
        }
      });
    },
    updateCollisionCount() {
      this.collisionCount++;
      localStorage.setItem("collisionCount", this.collisionCount);
    },
    moveDvd() {
      setInterval(() => {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.width > this.containerWidth || this.x < 0) {
          this.dx *= -1;
          this.updateCollisionCount();
        }

        if (this.y + this.height > this.containerHeight || this.y < 0) {
          this.dy *= -1;
          this.updateCollisionCount();
        }
      }, 10);
    },
  },
};
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.counter {
  font-family: 'Comic Sans MS', sans-serif;
  font-size: 1.5rem;
}


.container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.dvd-logo {
  width: 100px;
  height: 100px;
}
</style>
