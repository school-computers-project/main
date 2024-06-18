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

// gsap.to('.kartAnim', {
//     scrollTrigger: '.kartAnim', // start animation when ".box" enters the viewport
//     delay: 0.5,
//     duration:2.5,
//     // ease: "back.out(1.7)",
//     ease: "bounce.out",
//     x: 500
// });
gsap.fromTo('.kartAnim', 
    { x: -1000 }, // Initial position
    {
        // scrollTrigger: {
        //     trigger: '.kartAnim',
        //     start: 'top center', 
        //     end: 'bottom center', 
        //     scrub: true, // Smooths animation
        //     markers: true // Optional: Adds visual markers
        // },
        delay: 0.5,
        duration: 3.5, 
        ease: "bounce.out",
        x: 4000 // Final position, adjust smaller if you want to see kart bounce back
    }
);
