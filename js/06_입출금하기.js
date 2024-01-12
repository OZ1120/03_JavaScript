/* prompt 사용 연습 */

function test(){
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


const amount = document.getElementById("input");

let balance = document.getElementById("balance");
// let balance = 10000;

const password = 1234;


function deposit(){ //입금

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
 갸아아아아앙아아아아앙아앙아아몰라몰랄몰라몰라몰라몰라몰라

balance= balance + input

balance.innerText = balance