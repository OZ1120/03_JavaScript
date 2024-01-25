const numbers =document.querySelectorAll(".number")
const input = document.querySelector("#input")
const add = document.querySelector("#add")
const reset = document.querySelector("#reset")
const test2 = document.querySelector("#test2")

// 숫자입력
for(let i=0; i<numbers.length; i++){
  numbers[i].addEventListener("click", e=>{

    if(input.textContent.length == 11){ //11자리까지만 입력
      return;
    } 
    input.textContent+=e.target.textContent;
  })
}
// 초기화 버튼
reset.addEventListener("click", ()=>{
  input.textContent="";
})


// 추가 버튼
add.addEventListener("click", ()=>{

  /* 요소 추가 */
  const resultBox =document.createElement("div");
  resultBox.classList.add("resultBox");

  const result = document.createElement("div")
  result.classList.add("result")
  result.textContent +=(`${input.textContent}`);

  const bookmark = document.createElement("span");
  bookmark.classList.add("bookmark")
  bookmark.textContent="☆";
  //별표클릭시 변화주기
  bookmark.addEventListener("click", ()=>{
    if(bookmark.innerText==("☆")){
      bookmark.innerText="★";
      bookmark.style.color=("orange")
      result.style.color=("red")
    }else{
      bookmark.innerText="☆"
      bookmark.style.color=("black")
      result.style.color=("black")
    }
  })

  /* 요소 제거 */
  const remove=document.createElement("span");
  remove.classList.add("remove");
  remove.innerHTML="&times;";
  remove.addEventListener("click", e=>{
    const parent = e.target.parentElement;
    parent.remove();
  })
  // 자식으로 추가
  resultBox.append(result, bookmark, remove);
  test2.append(resultBox)
})

