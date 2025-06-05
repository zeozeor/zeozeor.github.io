(function(){
//header
gsap.from(".title>li",{
  y: -100,
  opacity: 0,
  stagger: 0.3,
  delay: 1
});

// 화살표가 위에서 아래로 이동, 1번 화살표 실행되면서 2번 화살표 실행
gsap.set(".arrow > p", { y: 0 });
const tl3 = gsap.timeline({ repeat: -1 });
tl3.to(".arrow > p", {
  y: 10,
  opacity: 1,
  stagger: 0.2,
  duration: 0.2,
  ease: "power1.out",
})
.to(".arrow > p", {
  y: 20,
  opacity: 0,
  stagger: 0.2,
  duration: 0.2,
}, "-=0.2");

//aboutme 에 들어가는 텍스트들
// 사이즈가 작아지고 안보였다가 해당 항목이 보이면 커지면서 보이도록
const $aboutMsg = document.querySelectorAll(".about-wrap>.info>p");
$aboutMsg.forEach((msg) => {
  gsap.from(msg, {
    scale: 0.4,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      trigger: msg,
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    }
  });
});

// keyword 부분이 가로로 왔다갔다 처리
const $keywordList = document.querySelectorAll(".keyword>li");
// $keywordList.forEach((word,idx)=>{
//   const posX = (idx===1) ? 50 : -50;
//   gsap.fromtTo(word,
//     { x:posX},
//     {
//       x:-posX,
//       duration: 1,
//       // delay: idx*0.2,
//       repeatDelay: idx*0.3,
//       repeat:-1,
//       yoyo: true,
//       ease: "none"
//     });
// })
const tl2 = gsap.timeline({repeat:-1, yoyo:true});
tl2.to($keywordList,{
  x:(i)=>(i===1 ? -80:80),
  duration: 0.5,
  ease: "sine.inOut",
  stagger: {
    each:0.2
  }
});

// project 영역의 .item들은 아래에서 올라오면서 보이도록
const fromTop = (elem, posY) => {
  gsap.from(elem, {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: elem,
      start: `top ${posY}%`,
      end: "top 25%",
      scrub: true,
    }
  });
};

const $project = document.querySelectorAll("#projects>.nomal");
$project.forEach((article)=>{
  const $item = article.querySelectorAll(".item");
  $item.forEach((item, idx)=>{
    let posY = 90 - idx*15;
    fromTop(item,posY);
  });
});


// const $project = document.querySelectorAll("#projects>.nomal");
// $project.forEach((article)=>{
//   const $item = article.querySelectorAll(".item");
//   $item.forEach((item)=>{
//     gsap.from(item,{
//       y:100,
//       opacity:0,
//       duration:1,
//       scrollTrigger: {
//         trigger: item,
//         start: "top 80%",
//         end: "top 40%",
//         scrub: true
//       }
//     });
//   });
// });

// practice project 영역은 계단식 애니메이션 처리 ****************************
const $practice = document.querySelectorAll("#projects>.practice .item");
$practice.forEach((item,idx)=>{
  let posY = 90 - idx*2;
  fromTop(item,posY);
});



//skills에서 li들은 작아진 상태에서 커지게 : stagger *****************************
const $shapes = document.querySelectorAll(".skill-item>li");
gsap.from($shapes,{
  opacity: 0,
  scale: 0.5,
  duration: 0.5,
  stagger: 0.2,
  ease: "back.out",
  scrollTrigger: {
    trigger: "#skills",
    start: "top 50%",
    toggleActions: "play reverse play reverse"
  }
});

// footer
gsap.fromTo("footer",{
  backgroundColor: "#2957E2",
},{
  backgroundColor: "#eeeeee",
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger:{
    trigger: "footer",
    start: "top 80%",
    end: "bottom bottom",
    scrub: true,
    toggleActions: "play reverse play reverse"
  }
});

// 첫번째 링크 버튼 애니메이션
gsap.to(".link>li",{
  backgroundColor: (i)=>(i===0 ? "#2957E2":"#eeeeee" ),
  color: (i)=>(i===0 ? "#eeeeee":"#2957E2" ),
  borderColor : (i)=>(i===0 ? "#2957E2":"#eeeeee"),
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "footer",
    start: "top 50%",
    toggleActions: "play reverse play reverse"
  }
});

// gsap.to(".link>li:nth-child(1)",{
//   backgroundColor: "#2957E2",
//   color: "#eeeeee",
//   borderColor:"#2957E2",
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "power1.inout",
//   scrollTrigger: {
//     trigger: "footer",
//     start: "top 50%",
//     toggleActions: "play reverse play reverse"
//   }
// });
// gsap.to(".link>li:nth-child(2)",{
//   backgroundColor: "#eeeeee",
//   color: "#2957E2",
//   // borderColor:"#2957E2",
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "power1.inout",
//   scrollTrigger: {
//     trigger: "footer",
//     start: "top 50%",
//     toggleActions: "play reverse play reverse"
//   }
// });
})();