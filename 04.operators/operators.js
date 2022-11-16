'use strict';

const strawberry = 200;
const kiwi = 800;
const banana = 500;

console.log("딸기 가격 : " + strawberry + "원");
console.log("키위 가격 : " + kiwi + "원"); 
console.log(`바나나 가격 : ${banana} 원`); 

const result1 = strawberry + kiwi - banana;
console.log(result1);

const result2 = 5* strawberry / banana;
console.log(result2);

const result3 = banana - strawberry *5 + kiwi;
console.log(result3);

/// 이하 내용 생략

console.log(500 + 2 + "3"); // 문자열로 반환 5023
console.log("3" + 500 + 2 ); // 35002