// 요소 선택
const $menu = document.querySelectorAll("main>ul>li"); //li 가져오기
const $section = document.querySelector("section"); // 섹션 가져오기

// li 메뉴 클릭
$menu.forEach((elem)=>{
  elem.addEventListener("click",()=>{
    // 다른 li에 on이라는 클래스가 추가되어 있으면 삭제
    const $on = document.querySelector('main > ul > li.on');
    // console.log( $on );
    if( $on ){
      $on.classList.remove('on');
    }
    elem.classList.add("on");

    // 클릭한 메뉴 텍스트 가져오기
    const filter = elem.textContent.trim().toLowerCase();
    const $article = document.querySelectorAll("section>article");
    $article.forEach((article)=>{

      // ▼ 삼항 연산자 적용
      // const text = article.classList.contains("odd") ? "odd" :   //contains 클래스의 유무를 확인
      //              article.classList.contains("even") ? "even" : "";
      let text = '';
      if( article.classList.contains("odd") ){
        text = "odd";
      } else if( article.classList.contains("even") ){
        text="even"
      } else {
        text = '';
      }
      // const text = article.className;
      if( filter === 'all' || filter === text ){
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  });
});

// imgList 에서 정보를 가져와서 요소 생성
// section에 추가
imgList.forEach((data)=>{
  const $article = document.createElement("article");  // 아티클 태그 생성
  const $div = document.createElement("div"); // div 태그 생성
  const $img = document.createElement("img"); // img 태그 생성
  const $h2 = document.createElement("h2");   // h2 태그 생성
  const $p = document.createElement("p");   // p 태그 생성
  $img.src = data.img;
  $img.alt = data.title;
  $h2.textContent = data.title;
  $p.textContent = data.desc;
  $div.appendChild($img);   // img의 부모는 div
  $div.appendChild($h2);
  $div.appendChild($p);
  $article.appendChild($div);
  $section.appendChild($article);

  $article.classList.add(data.type);      // type list 추가
  // console.log( $article );
});




  // console.log( elem );