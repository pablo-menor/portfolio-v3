import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
createApp(App).mount('#app')


// ------------Scroll effects------------

// Home
ScrollReveal().reveal(".avatar", {
    reset: false,
    distance: "15px",
    duration: 3000,
    origin: "top"
});
ScrollReveal().reveal(".first", {
    reset: false,
    distance: "30px",
    duration: 2500,
    origin: "left"
});
ScrollReveal().reveal(".second", {
    reset: false,
    distance: "30px",
    duration: 2500,
    origin: "right"
});

ScrollReveal().reveal(".mockup-code", {
    reset: false,
    distance: "30px",
    duration: 2500,
    origin: "bottom"
});
// Section Title
ScrollReveal().reveal(".section-title", {
    reset: false,
    distance: "50px",
    duration: 2500,
    origin: "left",
    delay: 350
});

// Skills
// ScrollReveal().reveal(".svg-front", {
//     reset: true,
//     distance: "30px",
//     duration: 2000,
//     origin: "top"
// });
// ScrollReveal().reveal(".front-title", {
//     reset: true,
//     distance: "30px",
//     duration: 2000,
//     origin: "top"
// });

ScrollReveal().reveal(".front-tech, .back-tech, .tools-tech", {
    reset: false,
    distance: "30px",
    duration: 2000,
    origin: "top",
    delay: 350
});
ScrollReveal().reveal(".svg-front, .front-list", {
    reset: false,
    distance: "30px",
    duration: 2000,
    origin: "top",
    delay: 350
});
ScrollReveal().reveal(".single-project", {
    reset: false,
    distance: "30px",
    duration: 2000,
    origin: "top",
    delay: 350

});

