<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
document.addEventListener("DOMContentLoaded", function () {
    gsap.from("#textContainer", {
        duration: 1.5, 
        opacity: 0, // Start with opacity 0
        y: -50, // Move up 50px
        ease: "power4.out" // Easing
    });
});
