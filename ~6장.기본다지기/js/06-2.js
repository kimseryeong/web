const frame = document.querySelector("#wrap");
console.log(frame);

console.log("2023/09/03")

const box1 = document.querySelector("#wrap .box1");
console.log(box1);

const item = document.querySelector("#wrap article");
console.log(item);

const items = document.querySelectorAll("#wrap article");
console.log(items);

for(let item of items){
    console.log(item);
}

for(let i=0; i<items.length; i++){
    console.log(items[i])
}

// 자식 요소 선택하기
const list = document.querySelector(".list");
const item1234 = list.children;

console.log(item1234);
console.log(item1234[0]);
console.log(item1234[1]);
console.log(item1234[2]);
console.log(item1234[3]);

// 부모 요소 선택하기
const item2 = document.querySelector(".item2");
console.log(item2.parentElement); //직계 부모만 선택 가능

// 제일 가까운 상위 부모 요소 선택하기
const li = document.querySelector("p");
console.log(li.closest("main"));

// 형제 요소 선택하기
const item3 = document.querySelector(".item3");
console.log(item3.previousElementSibling); //이전 형제 요소
console.log(item3.nextElementSibling); //다음 형제 요소