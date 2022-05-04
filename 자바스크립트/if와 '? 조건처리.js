let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015) {
  alert( '정답입니다!' );
  alert( "아주 똑똑하시네요!" )
}

if (0) {
} // 0은 falsy입니다. 1은 truthy입니다.

let cond = (year == 2015); // 동등 비교를 통해 true/false 여부를 결정합니다.
// if (cond) { ... }

// 조건부 연산자 '?'
let result = condition ? value1 : value2; // condition이 truthy라면 value1이, 그렇지 않으면 value2가 반환

// 다중 '?'
let age = prompt('나이를 입력해주세요.', 18);

let message = (age < 3) ? '아기야 안녕?' :
  (age < 18) ? '안녕!' :
  (age < 100) ? '환영합니다!' :
  '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';

alert( message );
