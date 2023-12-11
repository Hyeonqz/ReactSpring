const Array = [1,2,3,4,5]; 

//삭제할 인덱스 2번 인덱스 1개만 삭제 splice
Array.splice(2,1); 
console.log(Array);

//slice
//원본 배열은 건드리지 않고, 수정된 복사 배열을 리턴한다(교체는X)
//3,4를 출력
//2,3,4를 출력
var array2=[1,2,3,4,5];
//시작인덱스, 마지막인덱스-1, 
var a2 = array2.slice(2,4);
var a3 = array2.slice(1,4);
console.log("array2 : " + array2);
console.log("a2 : " + a2);
console.log("a3 : " + a3);

//Arrays.concat(value);
//concat메소드는 원하는 값을 원본 배열 끝에 추가한 뒤 새로운 배열을 만든다.
let con = [1,2,3].concat([4,5],[6,7]);
console.log(con);

//filter
var arr=[1,2,3,4,5]; //2를 제거해보자
var delIndex=1; //2의 인덱스는 1이다

arr = arr.filter(function(item,index){

    return index !==delIndex;

});
console.log(arr);