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
  smooth: 1,
  effects: true,
  normalizeScroll: true,
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)

});

// ScrollTrigger.create({
//   trigger: ".secondContainer",
//   pin: true,
//   start: "100vh",
//   end: "+=0",
//   markers: false //remove when fix
// });


let panels = gsap.utils.toArray(".panel");
// we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true,
    pinSpacing: false
  });
});

ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
      let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
        snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
      return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
    },
    duration: 0.5
  }
});



// if (isInViewport(document.querySelector(".containerBackground"))) {
//   console.log("In viewport");
// }
// if (ScrollTrigger.isInViewport(".centered", 0.2)) {
//   console.log("In viewport");

// }


var tl;
const bgColor = "white";
const easing = Power0.easeNone;

// Define your animation timeline
tl = gsap.timeline({
    repeat: -1,
    yoyo: false
});

// Add animations to the timeline
tl.fromTo("#top-side", 0.5, 
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
)
.fromTo("#right-side", 0.5, 
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
)
.fromTo("#bottom-side", 0.4, 
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
)
.fromTo("#left-side", 2, 
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
   });

// Create a ScrollTrigger instance for the.centered element
ScrollTrigger.create({
    trigger: ".centered",
    start: "top center", // Adjust this value based on when you want the animation to start
    end: "bottom center", // Adjust this value based on when you want the animation to end
    onEnter: () => tl.play(), // Play the animation when the trigger enters the viewport
    onLeaveBack: () => tl.pause(0) // Pause the animation when leaving the viewport backwards (e.g., scrolling up)
});

// var tl,
//     bgColor = "white",
//     easing = Power0.easeNone;

// tl = new TimelineMax({
//         repeat:-1,
//         yoyo:false
// });

// // top
// tl.fromTo("#top-side", 1, 
//    {
//     width: 0, 
//     background: bgColor,
//     immediateRender: false,
//     autoRound: false,
//     ease: easing
//    }, 
//    {
//     width: "40vw", 
//     background: bgColor
//    }
// );

// // right
// tl.fromTo("#right-side", 1, 
//    {
//     height: 0, 
//     background: bgColor,
//     immediateRender: false,
//     autoRound: false,
//     ease: easing
//    }, 
//    {
//     height: 200, 
//     background: bgColor
//    }
// );

// // bottom
// tl.fromTo("#bottom-side", 1, 
//    {
//     width: 0, 
//     background: bgColor,
//     immediateRender: false,
//     autoRound: false,
//     ease: easing
//    }, 
//    {
//     width: "40vw", 
//     background: bgColor
//    }
// );

// // left
// tl.fromTo("#left-side", 1, 
//    {
//     height: 0, 
//     background: bgColor,
//     immediateRender: false,
//     autoRound: false,
//     ease: easing
//    }, 
//    {
//     height: 200, 
//     background: bgColor
//    }
// );