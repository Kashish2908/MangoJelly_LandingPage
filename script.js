gsap.from("#nav2-left img", {
    opacity: 0,
    duration:  1,
    delay: 0.4,
    x: -60
})

gsap.from("#nav2-right", {
    opacity: 0,
    duration:  1,
    delay: 0.4,
    x: 60
})

gsap.from("#nav1", {
    opacity: 0,
    duration:  1,
    delay: 0.4,
    y: -60
})

gsap.from(["#center-left"], {
    opacity: 0,
    duration:  1,
    delay: 0.4,
    x: -60
})

gsap.from(["#center-right img"], {
    opacity: 0,
    duration:  3,
    delay: 0.4,
    x: 60
})

gsap.from("#last-part", {
    opacity: 0,
    duration:  1,
    delay: 0.4,
    y: 60
})

