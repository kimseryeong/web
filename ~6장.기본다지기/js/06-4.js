//[클릭 이벤트 연결하기]]
const link = document.querySelector("a");

link.addEventListener("click", (e)=>{
    e.preventDefault(); //이벤트의 기본 기능을 실행하지 못하도록 하는 명령어 (== 링크 이동을 막고 console.log()문 실행)
    console.log("링크 클릭!");
});

//[호버 이벤트 연결하기]
const box = document.querySelector("#box");

box.addEventListener("mouseenter", ()=>{
    box.style.backgroundColor = "#aaff69";
});
box.addEventListener("mouseleave", ()=>{
    box.style.backgroundColor = "pink";
})

//[반복되는 요소에 이벤트 한꺼번에 연결하기]
const list = document.querySelectorAll(".list li");

for(let el of list){
    el.addEventListener("click", e=>{
        e.preventDefault();
        console.log(e.currentTarget.innerText); //text 내용 가져오기
    });
}

//[클릭 이벤트가 발생할 때 숫자를 증가, 감소하기]
const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let num = 0; //제어할 숫자 0으로 초기화

btnPlus.addEventListener("click", e=>{
    e.preventDefault();
    num++;
    console.log(num);
});
btnMinus.addEventListener("click", e=>{
    e.preventDefault();
    num--;
    console.log(num);
});

//[문자 안에 변수 삽입하기]
const myName = "seryeong";
console.log("내 이름은 Myname 입니다.")
console.log(`내 이름은 ${myName} 입니다.`); //맥북은 영어버전에서만 백틱 사용

//[클릭하면 좌우로 회전하는 박스 만들기]
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const turnBox = document.querySelector("#turn-box");
const deg = 45;
let number = 0;

btnLeft.addEventListener("click", e=>{
    e.preventDefault();
    number--;
    turnBox.style.transform=`rotate(${number*deg}deg)` //45도 각도에 감소된 number*deg
});
btnRight.addEventListener("click", e=>{
    e.preventDefault();
    number++;
    turnBox.style.transform=`rotate(${number*deg}deg)` //45도 각도에 증가된 number*deg
});

