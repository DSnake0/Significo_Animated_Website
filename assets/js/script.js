function homepageAnimation() {
    gsap.set(".slidesm", { scale: 4 })

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            strat: "top top",
            end: "bottom top",
            pin: true,
            scrub: 2
        }
    })

    tl.to(".videodiv", {
        '--clip': "0%",
        ease: Power2
    }, 'a')

    tl.to(".slidesm", {
        scale: 1,
        ease: Power2
    }, 'a')

    tl.to(".lft", {
        xPercent: -10,
        stagger: .03,
        ease: Power4
    }, 'b')

    tl.to(".rgt", {
        xPercent: 10,
        stagger: .03,
        ease: Power4
    }, 'b')
}

function realAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            strat: "top 900%",
            end: "400% top",
            scrub: 1,
            pin: true
        },
        x: "-320%",
        ease: Power4
    })
}

function teamAnimation() {
    document.querySelectorAll(".listelem").forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {
            gsap.to(this.querySelectorAll(".picture"), {
                opacity: 1,
                ease: Power4,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                y: gsap.utils.mapRange(0, window.innerHeight, -100, 100, dets.clientY),
                duration: 0.5
            })
        })

        el.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelectorAll(".picture"), {
                opacity: 0,
                ease: Power4,
                duration: 0.5
            })
        })
    })
}

function locoMotive() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsuleAnimation() {
    gsap.to(".capsule2", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 90%",
            end: "bottom bottom",
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}

function emojiAnimation() {
    gsap.to("#emcard", {
        scrollTrigger: {
            trigger: ".emoji",
            scrub: 1,
            start: "top 90%",
            end: "bottom bottom"
        },
        y: 0,
        ease: Power4
    })
}

function footerAnimatin() {
    gsap.from(".footertext", {
        scrollTrigger: {
            trigger: ".footer",
            scrub: 1,
            start: "top 60%",
            end: "bottom bottom"
        },
        y: "40%",
        ease: Power4
    })
}

homepageAnimation();
realAnimation();
teamAnimation();
locoMotive();
capsuleAnimation();
emojiAnimation();
footerAnimatin();


const mainBody = document.querySelector("body");
const blackColor = document.querySelector("#black");
const whiteColor = document.querySelector("#white");
const salmonColor = document.querySelector("#salmon");
const cyanColor = document.querySelector("#cyan");

blackColor.addEventListener("click", function () {
    mainBody.setAttribute('theme', 'black');
});

whiteColor.addEventListener("click", function () {
    mainBody.setAttribute('theme', 'white');
})

salmonColor.addEventListener("click", function () {
    mainBody.setAttribute('theme', 'salmon');
})

cyanColor.addEventListener("click", function () {
    mainBody.setAttribute('theme', 'cyan');
})
