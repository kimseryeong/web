// 속성값 알아내기
const link = document.querySelector("a");
const link_href = link.getAttribute("href");
console.log(link_href);

//속성값 변경하기
const new_href = "https://www.google.com";
link.setAttribute("href", new_href);


//사용자 브라우저 판별하기
const ver = navigator.userAgent; //모든 브라우저는 navigator객체가 있고, 이 객체 안의 userAgent에는 브라우저의 정보가 문자 형태로 담겨있음
console.log(ver);