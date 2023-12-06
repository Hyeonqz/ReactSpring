/*
var : 함수형 변수
    1) 재선언 가능
    2) 업데이트 가능
*/
var hello = "안녕";
var hello ="hi?"
var cnt = 5;

if(cnt<6) {
    var hello1 = "안녕이다";
    console.log(hello1);
}
console.log(hello1);
console.log(hello);


/*
let : 영역형 변수 -> 변수 재선언이 안된다.
    1) 재선언 불가
    2) 업데이트 가능
    */
let hi = "안녕";
let times = 5;
if(times>3) {
    let hi1 = "hi~~";
    console.log(hi1);
}
console.log(hi);

/*
const : 영역형 변수(상수) -> final 이라고 생각.
*/
const  hi3 = {
    message : "안녕 안녕 안녕",
    times : 4
}

console.log(hi3);

hi3.message="이거 되나?";
console.log(hi3);