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
* {
  scroll-behavior: smooth;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 0px 20px;
}
body {
  background-color: #242933;
  font-weight: 700;
}

/* .skills-container{
  max-width: 1200px;
  margin: auto;
} */
.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "JetBrains Mono", monospace;
  position: relative;
  /* min-width: 352px; */
  /* max-width: 400px; */
  width: 300px;
  color: #b6b6b6
}
.section-title-span {
  font-size: 1rem;
  color: rgb(89, 201, 136);
}
</style>
