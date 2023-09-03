const wrap = document.querySelector("#wrap");
const box = wrap.querySelector("article");

// css 스타일 직접 삽입 -> css 우선순위에 따라 문제가 발생할 수 있음
wrap.addEventListener("click", ()=>{
    //box.style.backgroundColor = "hotpink";
});

// on이라는 클래스가 추가되면서 css 적용
wrap.addEventListener("click", () =>{
    //wrap.classList.add("on");
});

// on이라는 클래스가 해제되면 css 적용
wrap.addEventListener("click", () => {
    //let isOn = wrap.classList.contains("on");
    //console.log(isOn);

    //if(isOn){
    //    wrap.classList.remove("on");
    //}else{
    //    wrap.classList.add("on");
    //}
});

// classList.add 와 classList.remove 의 기능이 모두 합쳐진 toggle() 사용
wrap.addEventListener("click", () => {
    wrap.classList.toggle("on"); //선택한 요소에 클래스가 있으면 제거, 없으면 추가
});