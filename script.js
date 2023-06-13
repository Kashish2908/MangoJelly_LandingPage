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

gsap.from("footer", {
    opacity: 0,
    duration:  1,
    delay: 0.4,
    y: 60
})


function myFunction() {
    var x = document.querySelector("#nav2 #nav2-right   ");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  myFunction()