<template>
  <section class="portfolio-container mt-16" id="portfolio">
    <h2 class="section-title">
      <span class="section-title-span">[2].</span> My Portfolio
    </h2>
    <div class="projects flex flex-col mt-8 gap-4">
      <single-project
        title="Personal Website"
        desc="Third version of my personal website, built with Vue 3 and Vite."
        tech="Vue 3, Vite, Tailwind"
      ></single-project>
      <single-project
        title="Google Keep Clone"
        desc="A simple app I built in order to learn React and Firebase."
        tech="React, Firebase, Vite"
        url="https://react-firestore.netlify.app/"
        githubUrl="https://github.com/pablo-menor/google-keep-react-firebase"
      ></single-project>
      <single-project
        title="Rick & Morty WebApp"
        desc="A simple webapp that allows you to search for a character in the Rick and Morty API."
        tech="HTML5, CSS3, JavaScript"
      ></single-project>
    </div>
  </section>
</template>

<script>
// Components
import SingleProject from "./SingleProject.vue";
export default {
  name: "Portfolio",
  components: {
    SingleProject,
  },
};
</script>

<style>
</style>