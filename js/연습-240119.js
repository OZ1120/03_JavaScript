function plus(){
const inputList = document.querySelectorAll(".input")

let sum=0;

for(let i=0; i<inputList.length ; i++){
  const value = Number(inputList[i].value);

  sum += value;

}
console.log(`결과 :${sum}`);
}


// 태그 요소접근 연습

function tag(){
  const tagList = document.querySelectorAll("<li>")

  for(let i= 0; i<tagList.length ; i++){
    tagList[i].innerText
    tagList[i].style.backgroudnColor= tagList[i].innerText

  }


}