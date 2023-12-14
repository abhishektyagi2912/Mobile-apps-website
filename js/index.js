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
document.addEventListener("DOMContentLoaded", function () {
    var mobileWarning = document.getElementById("mobile-warning");

    // Check if the user is on a mobile device
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobileWarning.style.display = "block";

        var contentElements = document.querySelectorAll("#main, #footer");
        contentElements.forEach(function (element) {
            element.style.display = "none";
        });
    } else {
        mobileWarning.style.display = "none";
    }
});