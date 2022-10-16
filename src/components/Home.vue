<template>
  <section class="flex flex-col items-center pt-20 h-screen min-h-[700px]" id="home">
    <div class="avatar online placeholder animate__animated animate__rotateIn">
      <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
        <span class="text-3xl">PM</span>
      </div>
    </div>

    <div class="flex flex-col mt-9 word-effect text-center">
      <span
        class="first"
        style="
          --content: 'Full-Stack';
          --startcolor: #d39b02;
          --endcolor: #c903c9;
          <!-- line-height: 95px; -->
        "
        >Full-Stack</span
      >
      <!-- <span style='--content: "Developer";  --startcolor: #691dec;  --endcolor: #a94cf9;'>Developer</span> -->
      <span
        class="second"
        style="
          --content: 'Developer';
          --startcolor: #797979;
          --endcolor: #f0f0f0;
        "
        >Developer</span
      >
    </div>

    <div class="mockup-code mt-28 ">
      <pre data-prefix="$"><code>npm install pablo-menor</code></pre>
      <pre
        data-prefix=">"
        class="text-warning"
      ><code>Welcome to my portfolio...</code></pre>
      <pre data-prefix=">" class="text-success"><code>Enjoy!</code></pre>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.word-effect span {
  position: relative;
  font-size: 4rem;
  /* line-height: normal; */
  color: transparent;
}

.word-effect span::before {
  letter-spacing: -0.08em;
  content: var(--content);
  position: absolute;
  inset: 0;
  /* background: linear-gradient(90deg, #0081EF 0%, #6419E6 100%); */
  background: linear-gradient(
    90deg,
    var(--startcolor) 0%,
    var(--endcolor) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* #222630 darker*/
/* #242933 a lil bit lighter */
/* #877A82  lighter*/

/* -----------------------RESPONSIVE------------------------- */
@media (min-width: 335px) {
  .word-effect span {
    font-size: 4.4rem;
  }
}
@media (min-width: 385px) {
  .word-effect span {
    font-size: 5rem;
  }
}
</style>