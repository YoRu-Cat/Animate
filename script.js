// "use client";
// import * as THREE from "three";
// locomotive

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// GSAP

gsap.from(".nLink", {
  stagger: 0.2,
  y: 50,
  duration: 2,
  ease: "power2.out",
  opacity: 0,
});

// shery js

Shery.textAnimate("#headings h1" /* Element to target.*/, {
  //Parameters are optional.
  stagger: 0.2,
  style: 2,
  y: 50,
  duration: 3,
  delay: 0.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});

// GSAP anim2

gsap.from(".anim2", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 1,
});

// shery js image effect

// Shery.imageEffect("#imageText img", {
//   style: 1, //Select Style
//   debug: true, // Debug Panel
//   // opacity: 1,
// });
// Shery.imageEffect("#hCenterImg", {
//   style: 2, //Select Style
//   debug: true, // Debug Panel
//   config: {
//     /* Config made from debug panel */
//   },
//   // preset: "./presets/wigglewobble.json",
// });
// Shery.imageEffect("#bImg img", {
//   style: 1,
//   debug: true,
// });
document
  .querySelector("#ftext button")
  .addEventListener("mouseover", function () {
    // alert();
    gsap.to("#future video", {
      opacity: 1,
      duration: 1.5,
      ease: Power4,
    });
  });

document
  .querySelector("#ftext button")
  .addEventListener("mouseleave", function () {
    // alert();
    gsap.to("#future video", {
      opacity: 0,
      duration: 1.5,
      ease: Power4,
    });
  });
