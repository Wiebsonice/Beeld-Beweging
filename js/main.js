

gsap.set("#base1", {scale:.5, transformOrigin: "center bottom"})
gsap.set("#baseL", {scale:.2,opacity:0, transformOrigin: "right bottom"})
gsap.set("#flower, #flowerL, #flowerR", {opacity:0, transformOrigin: "right bottom"})
gsap.set("#baseL1", {scale:.2, opacity:0, transformOrigin: "right bottom"})
gsap.set("#baseL2", {scale:.2, opacity:0, transformOrigin: "center bottom"})
gsap.set("#baseR", {scale:.2,opacity:0, transformOrigin: "left bottom"})
gsap.set("#baseR1", {scale:.2, opacity:0, transformOrigin: "right bottom"})
gsap.set("#baseR2", {scale:.2, opacity:0, transformOrigin: "left center"})

gsap.set(".st2", {opacity:0, transformOrigin: "center top"})
gsap.set(".st0", {opacity:0, scale:.1, transformOrigin: "center top"})
gsap.set(".st1", {opacity:0, scale:.1, transformOrigin: "center top"})
gsap.set("svg", {marginTop:100, transformOrigin: "center top"})

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
        if (ani2HasStarted === false) {
            ani2HasStarted = true;
            tlAniTwo.play()
            return
        } else if (ani2HasStarted === true) {
            ani2HasStarted = false;
            tlAniTwo.reverse();
            tlCan.restart();
            tlCan.pause();
            return
        }
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
        .to("#flowerL, #flowerR", .5, {opacity:1});

var tlAniTwo = new TimelineMax({onComplete:function(){tlCan.play()}});

tlAniTwo.pause()
        .to(".st2", .5, {scale:1, opacity:1})
        .to(".st0,.st1", .2, { opacity:1 })
        .to(".st0", 1, { scale:1, ease: "back.out(1.7)" })
        .to("svg",.5, {marginTop:50, ease: "back.out(1.7)"}, '-=.8')
        .to(".st1",.7, { scale:.8, ease: "back.out(1.7)" },'-=.6')


var tlCan = new TimelineMax({repeat:-1, paused:true});
    tlCan.to('svg', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
         .to('svg', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})
         .to('svg', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
         .to('svg', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
         .to('svg', 3, { y:'-=50', ease:Power1.easeInOut})
         .to('svg', 3, { y:'+=50', ease:Power1.easeInOut})
         .to('svg', 3, { y:'-=30', ease:Power1.easeInOut})
         .to('svg', 3, { y:'+=30', ease:Power1.easeInOut})
         .to('svg', 2, { y:'-=30', ease:Power1.easeInOut})
         .to('svg', 2, { y:'+=30', ease:Power1.easeInOut})

        TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})
