const number1 = document.querySelector("#width")
const input = document.querySelector("#input")
const size = document.querySelector("#size")
const color = document.querySelector("#color")
const back = document.querySelector("#back")
const active = document.querySelector("#active");



active.addEventListener("click", ()=>{

  // 출력 문자열
  result.textContent= "";
  
  result.textContent=(input.value);

  result.style.color=(color.value);

  result.style.backgroundColor=(back.value);
  
  
})
