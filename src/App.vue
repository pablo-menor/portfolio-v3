<template>
  <div class="app-container">
    <mobile-menu :isOpen="isOpen" @click="toggleMenu()"></mobile-menu>
    <home></home>
    <skills></skills>
  </div>
</template>

<script>
// Components
import MobileMenu from "./components/MobileMenu.vue";
import Home from "./components/Home.vue";
import Skills from "./components/Skills.vue";

export default {
  name: "App",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  components: {
    MobileMenu,
    Home,
    Skills,
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-x: hidden;
  padding: 0px 20px;
}
body {
  background-color: #242933;
  font-weight: 700;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "JetBrains Mono", monospace;
  position: relative;
}
.section-title-span {
  font-size: 1rem;
  color: rgb(89, 201, 136);
}
</style>
