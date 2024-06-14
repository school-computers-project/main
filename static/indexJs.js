document.addEventListener("DOMContentLoaded", function () {
    const textContainer = new SplitType('#textContainer')

    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })
});

gsap.registerPlugin(ScrollTrigger)

gsap.to('.textappear', {
    scrollTrigger: '.textappear', // start animation when ".box" enters the viewport
    delay: 0.5,
    duration:2.5,
    // ease: "back.out(1.7)",
    ease: "bounce.out",
    x: 500
});