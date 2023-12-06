// 화살표 함수 : new 연산자 안됨  즉 : 객체 생성안됨
//자바의 람다 함수와 같은 방식 (function키워드 대신 => 사용)
/*

#1) 
function 함수명() {
    함수로직
}
const 변수 = function() {
    함수로직
}

const 변수 = () => {
    함수로직
}
*/

//일반함수
function f1() {
    console.log("일반함수 f1");
}
f1();

//화살표 함수
let f2 =()=>console.log("화살표 함수f2");
f2();

function f3(a,b) {
    return a+b;
}
let a3 = f3(5,7);
console.log(a3);

//화살표 (한줄 일때는 return 도 삭제)
let f4=(a,b)=>a+b;
let b=f4(11,22);
console.log(b);

function f5(x,y,z=100) {
    return x+y+z;
}
console.log(f5(1,2,3));
console.log(f5(40,50));

console.log("--------------")

let f6 = (x,y,z)=>x+y+z;
console.log(f6(100,100,100));