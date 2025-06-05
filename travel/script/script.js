gsap.registerPlugin(ScrollTrigger);

// 헤더 header 영역 애니메이션 **********************************************
const tl = gsap.timeline();
// ▼ 타임라인 활용 ***************
// tl.from(".slogan>h2",{
//   opacity: 0,
//   y: -50,
//   duration: 1,
// })
// .from(".slogan>h1",{
//   opacity: 0,
//   y: -50,
//   duration: 1,
// }, "-=0.5")
// .from(".slogan>p",{
//   opacity: 0,
//   y: -50,
//   duration: 1,
// }, "-=0.5");

// ▼ 반복되는 옵션이 있을 경우 묶어서 적용 가능
gsap.from(".slogan>h2,.slogan>h1,.slogan>p",{
  opacity: 0,
  y: -50,
  duration: 1,
  stagger: 0.5  // 하나씩 따로따로 실행
});


// 메인 main 영역 애니메이션 **********************************************
// 어바웃미 about me 영역 --------------------------------------
gsap.from("#aboutme",{
  opacity: 0,
  y:100,
  // duration: 1,
  scrollTrigger: {
    trigger: "#aboutme",
    start: "top 60%",
    end: "top 30%"
  }
});

// 라스터 laster 영역 ****************************
const $ul = document.querySelector("#laster>ul");
// const dist = $ul.scrollWidth - window.innerWidth;  // 이동되어야 하는 width 값
const dist = $ul.scrollWidth - (window.innerWidth*0.7);

gsap.to($ul,{
  x:-(dist),
  ease:"none",
  scrollTrigger: {
    trigger: "#laster",
    start: "top top",
    end: "+="+dist,
    pin: true,
    scrub: true
  }
});

// 컨텍스 contact 영역 ****************************
gsap.from("#contact .title",{
  opacity: 0,
  scale: 0.7,
  duration: 1,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 50%"
  }
});