'use strinct';

// 숫자타입
const birthYear = 1986;
console.log(birthYear);

const weight = 75.24;
console.log(weight);

// 문자타입
const myName = "성현";
const starSign = '처녀자리';
const bloodType = `Rh-O형`;
console.log(myName);
console.log(starSign);
console.log(bloodType);

console.log(typeof 1234);
console.log(typeof '1234');
console.log(typeof starSign);

// 불리언 타입
console.log(typeof true)
console.log(typeof false)

const hungry = true;
console.log(hungry)

// undefined VS null 
let dinner;                 // undefined
console.log(typeof dinner) 

dinner = "🍕 피자";         //// 문자열 지정으로 string 으로 타입 변환
console.log(typeof dinner) 

dinner = null;
console.log(typeof dinner)  // null 타입은 object 로 나옴