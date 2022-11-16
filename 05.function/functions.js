'use strict';

function sayHi(username){
    console.log(`안녕하세요, 저는 ${username}입니다`)
    return undefined;
}
//function call
sayHi("강성현");

function cube (number){
    return number**3;
}
const a = cube(4);
console.log(`4의 3제곱은 ${a}입니다`);

function createMandoo(ingredient) {
    return `${ingredient}가 들어간 만두`;
}
const mandoo1 = createMandoo("고기");
console.log(mandoo1);

function createKimbab(a, b) {
    return console.log(`${a}와 ${b} 가 들어간 김밥`);
}
createKimbab("참치", "와사비");

function test() {
    console.log("no retrun");
}
const result = test();  // "no result"
console.log(result);    // undefined

function changeParameter(x) {
    x+=3;
    console.log(`x = ${x}`);
}
changeParameter(30);

function changeLocalVariable(x){
    let y = x+1;    // 지역변수 y .. 함수 내부에서만 사용 가능 
    console.log(`y = ${y}`);
}
changeLocalVariable(20);

function differentScope(x) {
    let z = x;
    console.log(`z = ${z}`);
}
let z = 7;
console.log(`z = ${z}`);    // let 으로 선언한 z 출력
differentScope(3)           // 함수 내부의 지역변수 z 반환값 출력
console.log(`z = ${z}`);    // let 으로 선언한 z 출력 

