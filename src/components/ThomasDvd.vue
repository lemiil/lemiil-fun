<template>
  <div class="container">
    <p class="counter">{{ collisionCount }}</p>
    <img :style="styleObject" class="dvd-logo" src="/thomas.jpg" alt="DVD" />
  </div>
</template>

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
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      collisionCount: localStorage.getItem("collisionCount") || 0,
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
    window.addEventListener("resize", this.updateWindowSize);
    this.moveDvd();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  },
  methods: {
    updateWindowSize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
    updateCollisionCount() {
      this.collisionCount++;
      localStorage.setItem("collisionCount", this.collisionCount);
    },
    moveDvd() {
      setInterval(() => {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.width > this.windowWidth || this.x < 0) {
          this.dx *= -1;
          this.updateCollisionCount();
        }

        if (this.y + this.height > this.windowHeight || this.y < 0) {
          this.dy *= -1;
          this.updateCollisionCount();
        }
      }, 10);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background-color: black;
  color: white;
}

.counter {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.dvd-logo {
  width: 100px;
  height: 100px;
}
</style>
