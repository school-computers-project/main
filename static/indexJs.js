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



gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)

// create the smooth scroller FIRST!
// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
//   normalizeScroll: true
// });

// // pin box-c when it reaches the center of the viewport, for 300px
// ScrollTrigger.create({
//   trigger: ".secondContainer",
//   pin: true,
//   start: "center center",
//   end: "+=300",
//   markers: true
// });
console.log(document.querySelector("#smooth-content")); // ?

ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});

ScrollTrigger.create({
  trigger: ".secondContainer",
  pin: true,
  start: "100vh",
  end: "+=0",
  markers: false //remove when fix
});

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

if isInViewport(document.querySelector('.centered')) {
  console.log('in viewport');
}

var tl,
    bgColor = "white",
    easing = Power0.easeNone;

tl = new TimelineMax({
        repeat:0,
        yoyo:false
});


tl.addLabel('start')
// top
tl.fromTo("#top-side", 1, 
   {
    width: 0, 
    background: bgColor,
    immediateRender: false,
    autoRound: false,
    ease: easing
   }, 
   {
    width: "40vw", 
    background: bgColor
   }
);

// right
tl.fromTo("#right-side", 1, 
   {
    height: 0, 
    background: bgColor,
    immediateRender: false,
    autoRound: false,
    ease: easing
   }, 
   {
    height: 200, 
    background: bgColor
   }
);

// bottom
tl.fromTo("#bottom-side", 1, 
   {
    width: 0, 
    background: bgColor,
    immediateRender: false,
    autoRound: false,
    ease: easing
   }, 
   {
    width: "40vw", 
    background: bgColor
   }
);

// left
tl.fromTo("#left-side", 1, 
   {
    height: 0, 
    background: bgColor,
    immediateRender: false,
    autoRound: false,
    ease: easing
   }, 
   {
    height: 200, 
    background: bgColor
   }
);

