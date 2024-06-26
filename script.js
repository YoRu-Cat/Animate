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

Shery.textAnimate("#headings h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  duration: 2,
  delay: 0.1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});
