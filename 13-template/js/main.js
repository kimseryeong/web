
//자주 수정할 수 있는 정보값들을 상단에 전역변수로 설정
const frame = "section";
const box = "article"
const speed = "0.5s"
const activeClass = "on";
const btn = document.querySelectorAll("main ul li")//클릭한 모든 버튼 변수 저장
let grid; //플러그인의 정보 값이 담길 변수를 이것에 전역으로 설정


//페이지 로드 이벤트
//article 요소 재배치
window.addEventListener("load", ()=>{
    init();
    filter(btn);
})

//화면 초기화 함수 정의
function init(){
    //변수 grid에 담길 결과값이 다른 함수인 filter에서도 활용되어야 하므로 전역변수로 선언
    grid = new Isotope(frame,{ //배치할 요소를 감싸고 있는 부모 요소명
        itemselector: box,         //배치할 요소명
        columnWidth: box,          //너빗값을 구할 요소명
        transitionDuration: speed       //화면 재배치 시 요소가 움직이는 속도
    })
}

//정렬 버튼 기능의 함수 정의
function filter(arr){
    //각 버튼에 클릭 이벤트 연결
    for(let el of arr){
        el.addEventListener("click", e=>{
            e.preventDefault();

            //변수 sort에 클릭한 대상의 자식인 a 요소의 href 속성값 지정
            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            //grid에 저장된 결괏값을 불러와 재정렬 기능 연결
            grid.arrange({
                //옵션값으로 sort 값 지정
                filter:sort
            })

            //다시 모든 버튼의 개수만큼 반복해서
            for(let el of arr){
                //각 버튼의 클래스명 on 을 제거해 비활성화
                el.classList.remove(activeClass);
            }

            //클릭한 대상만 선택해서 클래스명 on 추가해 활성화
            e.currentTarget.classList.add(activeClass);
        })
    }
}
