let name = "진현규";
let birth = 1999;
let likefood="국밥";

let curYear = new Date().getFullYear(); //숫자 4자리 반환

//예전
let result = "이름 : " + name + "\n태어난 연도: " + birth + "\n나이:" + (curYear-birth)+"\n좋아하는 음식 : "+likefood
console.log(result);

//리터럴(백틱 ``)
let result2 = `이름 : ${name}
태어난연도: ${birth}
나이: ${curYear-birth}
최애음식: ${likefood}`;

console.log(result2);