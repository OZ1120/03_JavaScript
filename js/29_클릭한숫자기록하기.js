const numbers = document.querySelectorAll(".number")
const result = document.querySelector("#result")
const reset = document.querySelector("#reset")

// for(let i = 0; i<=10; i++){
//   numbers[i].addEventListener("click", ()=>{})


//   }

  for(let item of numbers){
     item.addEventListener("click", e => {

    if(result.textContent.length == 10){
      alert("10글자 까지만 입력 가능");
      return;
    } 

    result.textContent += e.target.textContent;
  });
  }

  /* 초기화 버튼 */

  reset.addEventListener("click", ()=>{
    result.textContent="";
  })
    






/* 
클릭한 숫자 기록하기

1~0까지의 숫자판이있다
숫자판을 클릭한다
값을 가져온다
가져온값을 reselt에 출력한다
클릭한 숫자 : 에 클릭한 숫자가 출력된다

숫자는 10글자까지만 가능하다(11글자부터는 출력되지 않음)

초기화를 누르면 클릭한 숫자가 지워진다

*/