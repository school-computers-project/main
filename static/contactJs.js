gsap.registerPlugin(ScrollTrigger);

function applyGlobalAnimation() {
  const elements = document.querySelectorAll("h1, h2, p");
  let delay = 0; 

  elements.forEach((element) => {
    const split = new SplitType(element, {
      types: "lines",
      linesClass: "lineChild",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom+=100",
        end: "bottom top+=100",
      },
    });

    tl.set(
      element,
      {
        perspective: "1000px",
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
      },
      delay
    );

    tl.fromTo(
      split.lines,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.15,
        stagger: 0.15,
      },
      delay
    );

    tl.fromTo(
      split.lines,
      {
        yPercent: 100,
        skewY: 2,
        scale: 0.8,
        rotateX: -60,
      },
      {
        yPercent: 0,
        skewY: 0,
        rotateX: 0,
        scale: 1,
        ease: "expo.out",
        stagger: 0.1,
        duration: 2.3,
        force3D: true,
      },
      delay
    );

    tl.set(
      element,
      {
        willChange: "auto",
      },
      "+=0.1"
    );

    delay += 0.3; // Increment delay for the next element
  });
}

window.addEventListener("load", applyGlobalAnimation);

// submit button