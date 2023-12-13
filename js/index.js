Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr", {
    videos: ["./assets/videos/0th.mp4", "./assets/videos/1.mp4", "./assets/videos/2nd.mp4"],
});

gsap.to(".fleftelem", {
    scrollTrigger: {
        trigger: "#featuredimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
    },
    y: "-300%",
    ease: Power1
});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
    style: 5,
    // debug : true,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress + index);
                },
            });
        });
    },
});

// function locomotive() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector(".smooth-scroll"),
//         smooth: true
//     });

//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", () => {
//         ScrollTrigger.update();
//     });

//     // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy(".smooth-scroll", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         // LocomotiveScroll handles things completely differently on mobile devices
//         pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
//     });

//     // Refresh ScrollTrigger when the window is resized
//     window.addEventListener("resize", () => {
//         locoScroll.update();
//         ScrollTrigger.refresh();
//     });

//     // Refresh ScrollTrigger when content is added or removed dynamically
//     locoScroll.on("call", (value, way, obj) => {
//         if (value === "refreshScrollTrigger") {
//             ScrollTrigger.refresh();
//         }
//     });
// }

// locomotive();
