document.addEventListener("DOMContentLoaded", function () {
    const textContainer = new SplitType('#textContainer')

    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })
});
