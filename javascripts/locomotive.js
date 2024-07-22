function alpha() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        learp: 0.4,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
alpha()



var tl = gsap.timeline({

    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 30%",
        end: "top 0",
        scrub: 3,
    }
})
var tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -80%",
        end: "top  130%",
        scrub: 3,
    }
})
var tl3 = gsap.timeline({

    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -340%",
        end: "top  400%",
        scrub: 3,
    }
})
var tlpage3 = gsap.timeline({

    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -200%",
        end: "top  250%",
        scrub: 3,
    }
})

tl.to(".page1 h1", {
    x: -120,
}, "anime")
tl.to(".page1 h2", {
    x: 120,
}, "anime")

tl.to(".page1 video", {
    width: "90%",
}, "anime")

tl.to("#nav img", {
    y: -100,
}, "anime")

tl.to("#nav2 h4", {
    y: -100,
}, "anime")

tl.to("#circel", {
    y: -100,
}, "anime")

tl2.to(".main", {
    backgroundColor: "#fff"
}, "animes")

tl2.from('.page2 h1', {
    y: 200,
    opacity: 0.7,
}, "anime")

tl2.from('.page2 h2', {
    y: 200,
    opacity: 0.7,
}, "anime")

tl2.from('.page2 button', {
    y: 200,
    opacity: 0.7,
}, "anime")


tlpage3.from(".page3 h1", {
    y: 300,
    opacity: 0.7,
}, "anime")

tlpage3.from(".page3part1 img", {
    y: 900,
    opacity: 0.7,
}, "anime")

tlpage3.from(".page3part1 video", {
    y: 900,
    opacity: 0.7,
}, "anime")


tl3.to(".main", {
    backgroundColor: "#0F0D0D"
}, "animes") 
