// 1. 버튼 가져오기
const btn = document.querySelector("button");

// 2. 버튼 클릭시 특정 동작 수행 지정
btn.addEventListener("click", hello);

// 3. 특정 동작 내용
function hello(){
    // alert("하이");
    const heading = document.querySelector("h1");
    const hi = prompt("이름을 입력하세요 : ");
    heading.append(hi+"님");
}
