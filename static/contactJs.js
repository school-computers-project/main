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

function handleSubmit() {
  console.log('Button pressed!');
}


const btn = document.querySelector('.btn-content');
const wrapper = document.querySelector(".btn-wrapper>a");
function hoverAnimation(){
  const t1 = gsap.timeline();
  
  t1.to(btn,{
    x:-10,
    duration:0.65,
    ease: "expo.out",
  })
  t1.to('.btn-circle',{
    scale:1,
    duration:0.65,
    ease: "expo.out",
  },0)
  t1.to('.btn-circle>svg',{
    x:23,
    duration:0.65,
    ease: "expo.out",
    delay:-0.55,
  })
}
function hoverAnimationReset(){
  const t2 = gsap.timeline();
  
  t2.to(btn,{
    x:10,
    duration:0.65,
    ease: "expo.out",
  })
   t2.to('.btn-circle',{
     scale:0,
    duration:0.65,
     ease: "expo.out",
  },0)
    t2.to('.btn-circle>svg',{
    x:-23,
    duration:0.65,
    ease: "expo.out",
    delay:-0.55,
  })
}
wrapper.addEventListener("mouseenter", hoverAnimation);
wrapper.addEventListener("mouseleave", hoverAnimationReset);