

gsap.set("#base1", {scale:.5, transformOrigin: "center bottom"})
gsap.set("#baseL", {scale:.2,opacity:0, transformOrigin: "right bottom"})
gsap.set("#flower, #flowerL, #flowerR", {opacity:0, transformOrigin: "right bottom"})
gsap.set("#baseL1", {scale:.2, opacity:0, transformOrigin: "right bottom"})
gsap.set("#baseL2", {scale:.2, opacity:0, transformOrigin: "center bottom"})
gsap.set("#baseR", {scale:.2,opacity:0, transformOrigin: "left bottom"})
gsap.set("#baseR1", {scale:.2, opacity:0, transformOrigin: "right bottom"})
gsap.set("#baseR2", {scale:.2, opacity:0, transformOrigin: "left center"})

var ani1HasStarted = false;
var ani2HasStarted = false;
var ani3HasStarted = false;

document.querySelectorAll('.anibtn').forEach(item => {
  item.addEventListener('click', event => {
    if (item.className.includes("1")) {
        if (ani1HasStarted === false) {
            ani1HasStarted = true;
            tlAniOne.play()
            return
        } else if (ani1HasStarted === true) {
            ani1HasStarted = false;
            tlAniOne.reverse()
            return
        }

    } else if (item.className.includes("2")) {

    } else if (item.className.includes("3")) {

    }
  })
})


var tlAniOne = new TimelineMax();

tlAniOne.pause()
        .to("#base1", .5, {scale:1, transformOrigin: "center bottom"})
        .to("#flower1", .5, {opacity:1, delay:.5, transformOrigin: "center bottom"})
        .to("#baseL, #baseR", .1, {opacity:1})
        .to("#baseL, #baseR", .5, {scale:1},'-=.1')
        .to("#baseL1, #baseL2, #baseR1, #baseR2", .1, {opacity:1})
        .to("#baseL1, #baseL2, #baseR1, #baseR2", .5, {scale:1},'-=.1')
        .to("#flowerL, #flowerR", .5, {opacity:1})
