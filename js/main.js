

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
        // if (ani3HasStarted === false) {
        //     ani3HasStarted = true;
        //     tlAniThree.play()
        //     return
        // } else if (ani3HasStarted === true) {
        //     ani3HasStarted = false;
        //     tlAniThree.pause();
        //     tlAniThree.restart();
        //     // tlCan.restart();
        //     // tlCan.pause();
        //     return
        // }
        tlAniThree.restart();
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


var tlAniThree = new TimelineMax();

tlAniThree.pause()
        .to("svg", .5, {marginTop:50, ease: "back.out(1.7)"})
        .to("svg", .5, {rotation:360, transformOrigin:"center 47%"})
        .to("svg", .5, {marginTop:100, ease: "back.in(1.7)"})






// ---------- ! icons ! ------------

const can = document.querySelector(".launch");

const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

TweenLite.set(can, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(can, 1);
moveY(can, -1);
rotate(can, 1);

function rotate(target, direction) {

  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {

  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {

  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}


var saltoIcon = new TimelineMax({repeat:-1, repeatDelay:2});

saltoIcon.to(".salto", 2, {marginTop:"-50", ease: "back.out(1.7)"})
         .to(".salto", 2, {rotation:360, transformOrigin:"center 47%"}, '-=.5')
         .to(".salto", 2, {marginTop:50, ease: "back.in(1.7)"}, '-=.5')
