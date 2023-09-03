function plus(num1, num2){
    console.log(num1+num2);
}

plus(2, 3);
const btns = document.querySelectorAll(".btns li button");
const boxs = document.querySelectorAll("section article");

//버튼 개수만큼 반복하며 클릭 이벤트 연결
for(let i=0; i<btns.length; i++){
    //각 버튼을 클릭할 때마다
    btns[i].addEventListener("click", ()=>{
        //각 인수로 순섯값과 버튼, 박스 그룹을 넣어서
        activation(i, btns);
        activation(i, boxs);

    });
}

//첫번째 인수로 순섯값, 두번째 인수로 그룹을 전달받아
function activation(index, list){
    //인수로 받은 요소의 그룹 개수만큼 반복하며 비활성화
    for(let el of list){
        el.classList.remove("on");
    }

    //첫번째 인수로 받은 순서에 해당하는 그룹의 요소만 찾아서 활성화
    list[index].classList.add("on");
}