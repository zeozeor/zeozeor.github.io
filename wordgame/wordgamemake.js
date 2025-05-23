// 객체 가져오기
const $startBtn = document.querySelector("#startBtn"); // 시작화면 버튼
const $list = document.querySelector("#list"); // 단어 리스트
const $chat = document.querySelector("#chat"); // 게임화면 입력창
const $chatBtn = document.querySelector(".chatBtn"); // 게임화면 버튼

const createLi = (keyword) => {
  const $Li = document.createElement("li");
  $Li.textContent = keyword;
  $list.appendChild($Li);
  if( $list.children.length > 7 ){
    const $first = $list.children[0];
    $list.removeChild($first);
  }
};

const handleStartBtn = () => {
  const elem = document.querySelector("#startWord").value;
  if (elem !== "") {
    createLi(elem); //ul에 추가
    const $box2 = document.querySelector("#box2");
    $box2.style.display = "block";
    const $box1 = document.querySelector("#box1");
    $box1.style.display = "none";
  } else {
    alert("낱말을 입력하세요");
    return;
  }
};
$startBtn.addEventListener("click", handleStartBtn);

// 맞는 낱말인지 체크하기
const handleWordInput = () => {
  const keyword = $chat.value.trim();
  if (keyword === "") {
    alert("낱말을 입력하세요");
    return;
  }
  //이전 입력 문자
  const last = $list.lastElementChild.textContent;
  const lastword = last[last.length - 1];
  const firstword = keyword[0];
  //올바르게 입력되었는지 체크
  if (lastword === firstword) {
    // ul > li로 추가
    createLi(keyword);
  } else {
    //끝말잇기 실패
    alert(`틀렸어요 ${lastword} 시작해야 합니다.`);
  }
  $chat.value = "";
  $chat.focus();
};
$chatBtn.addEventListener("click", handleWordInput);
$chat.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleWordInput();
  }
});