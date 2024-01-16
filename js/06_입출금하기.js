/* prompt 사용 연습 */

/* function test(){
    const password = prompt("비밀번호를 입력하세요");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null){
        alert("취소");
    } else { //확인
        
        // 입력한 비밀번호가 '1234'가 맞는지 확인
        if(password == '1234'){
            alert("비밀번호 일치");
        } else {
            alert("비밀번호가 일치하지 않습니다");
        }
    }
}
 */

const output = document.getElementById("output");
const amount = document.getElementById("input");

let balance = 10000;       // 잔액 기록 변수 (초기값 10000)
const password = '1234';     //비밀번호 저장 변수(초기 비밀번호 1234)

output.innerText = balance;


 //입금
function deposit(){

}


function withdrawal(){ //출금



    const password = prompt("비밀번호를 입력하세요");

    if(password == null){
        alert("취소")
    } else{
        if(password == 1234){
            alert("비밀번호 일치")
        } else {
            alert("비밀번호가 일치하지 않슴")
        }
    }

}



 밸런스에 입금(더하기)값 출력
 밸런스에 출금(빼기) 값 출력
 인데 이제 10000에서부터 시작
 인데 0이하는 안되고
 패스워드는 1234 이외에 안됨
 흠?

balance= balance + input

balance.innerText = Number(balance)+Number(input);