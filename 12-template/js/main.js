const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
const len = lists.length-1;
let i = 0;

for(let el of lists){
    let pic = el.querySelector(".pic");
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(./img/member${i+1}.jpg)`; /* 배경 이미지 추가 */
    i++;

    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");

    //play클릭 시
    play.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            // play 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화
            e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
            // play 버튼부터 audio 요소까지 탐색한 뒤 음악 재생
            e.currentTarget.closest("article").querySelector("audio").play();
        }
    })
    //pause클릭 시
    pause.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            // pause 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 제거하여 비활성화
            e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
            // pause 버튼부터 audio 요소까지 탐색한 뒤 음악 정지
            e.currentTarget.closest("article").querySelector("audio").pause();
        }
    })
    //load클릭 시
    pause.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            // load 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화
            e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
            // pause 버튼부터 audio 요소까지 탐색한 뒤 음악 다시 로드하고 재생
            e.currentTarget.closest("article").querySelector("audio").load();
            e.currentTarget.closest("article").querySelector("audio").play();

        }
    })
}

const prev = document.querySelector(".btnPrev")
const next = document.querySelector(".btnNext")

let num = 0;
prev.addEventListener("click", ()=>{
    initMusic()
    num++;
    frame.style.transform=`rotate(${deg*num}deg)`;

    //현재 패널의 순번이 0이면 다시 마지막 패널의 순번으로 변경하고
    //그렇지 않으면 현재 패널 순번에서 1씩 감소시켜서 activation함수 호출
    (active == 0) ? active = len: active--;
    activation(active, lists);
})
next.addEventListener("click", ()=>{
    initMusic()
    num--;
    frame.style.transform=`rotate(${deg*num}deg)`;

    //현재 패널의 순번이 마지막이면 다시 처음 패널의 순번으로 변경하고
    //그렇지 않으면 현재 패널 순번에서 1씩 증가시켜서 activation함수 호출
    (active == len) ? active = 0: active++;
    activation(active, lists);
})

let active = 0;
function activation(index, lists){
    for(let el of lists){
        el.classList.remove("on");
    }
    lists[index].classList.add("on")
}

const audio = frame.querySelectorAll("audio");

//모든 오디오 요소를 반복하면서 정지시키고, .pic 요소의 모션을 중지해서 초기화하는 함수
function initMusic(){
    for(let el of audio){
        el.pause();
        el.load();
        el.parentElement.previousElementSibling.classList.remove("on");
    }
}