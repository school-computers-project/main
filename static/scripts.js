<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
document.addEventListener("DOMContentLoaded", function () {
    gsap.from("#textContainer", {
        duration: 1.5, 
        opacity: 0, // Start with opacity 0
        y: -50, // Move up 50px
        ease: "power4.out" // Easing
    });
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
    smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });