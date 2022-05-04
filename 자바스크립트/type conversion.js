// 문자형으로 변환

let value = true;
alert(typeof value); // boolean

value = String(value); // 변수 value엔 문자열 "true"가 저장된다.
alert(typeof value); // string

// 숫자형으로 변환

alert( "6" / "2" ); // 3, 문자열이 숫자형으로 자동변환된 후 연산이 수행된다.

let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환된다.
alert(typeof num); // number

alert(Number("123")); // 123
alert(Number("123z")); // NaN ("z"를 숫자로 변환하는 데 실패함)
alert(Number(true)); // 1, fales이면 0
alert(Number(null)); // 0, undefined일 경우 NaN

// 불린형으로 변환

alert(Boolean(1)); // 숫자 1(true)
alert(Boolean(0)); // 숫자 0(false)

alert(Boolean("hello")); // 문자열(true), 문자열 "0"은 true
alert(Boolean("")); // 빈 문자열(false), " " 공백이 있는 문자열도 비어있지 않은 문자열로 간주해서 true
