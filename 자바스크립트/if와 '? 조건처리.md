## if문
- if(...)문은 괄호 안에 들어가는 조건을 평가하는데, 그 결과가 true이면 코드 블록이 실행됩니다.
```javascript
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015) {
  alert( '정답입니다!' );
  alert( "아주 똑똑하시네요!" )
}
```
## 불린형으로 변환
- if (…) 문은 괄호 안의 표현식을 평가하고 그 결과를 불린값으로 변환합니다.
- 숫자 0, 빈 문자열"", null, undefined, NaN은 불린형으로 변환 시 모두 false가 됩니다. 이런 값들은 ‘falsy(거짓 같은)’ 값이라고 부릅니다.
- 이 외의 값은 불린형으로 변환시 true가 되므로 ‘truthy(참 같은)’ 값이라고 부릅니다.
 아래 예시의 코드 블록은 절대 실행되지 않습니다.
```javascript
if (0) { // 0은 falsy입니다.
  ...
}
```
아래 예시의 코드 블록은 항상 실행됩니다.
```javascript
if (0) { // 1은 falsy입니다.
  ...
}
```
- 아래와 같이 평가를 통해 확정된 불린값을 if문에 전달할 수도 있습니다.
```javascript
let cond = (year == 2015); // 동등 비교를 통해 true/false 여부를 결정합니다.

if (cond) { 
   ...
 }
 ```

## 'else’절
- if문엔 else 절을 붙일 수 있습니다. else 뒤에 이어지는 코드 블록은 조건이 거짓일 때 실행됩니다.
```javascript
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015) {
  alert( '정답입니다!' );
} else {
  alert( '오답입니다!' ); // 2015 이외의 값을 입력한 경우
}
```

## 'else if’로 복수 조건 처리하기
- 유사하지만 약간씩 차이가 있는 조건 여러 개를 처리해야 할 때가 있습니다. 이때 else if를 사용할 수 있습니다.
```javascript
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year < 2015) {
  alert( '숫자를 좀 더 올려보세요.' );
} else if (year > 2015) {
  alert( '숫자를 좀 더 내려보세요.' );
} else {
  alert( '정답입니다!' );
}
```

## 조건부 연산자 '?'
- '물음표(question mark) 연산자’라고도 불리는 '조건부(conditional) 연산자’를 사용하면 위 예시를 더 짧고 간결하게 변형할 수 있습니다.
- 조건부 연산자는 물음표?로 표시합니다. 피연산자가 세 개이기 때문에 조건부 연산자를 '삼항(ternary) 연산자’라고 부르는 사람도 있습니다.
- 자바스크립트에서 피연산자가 3개나 받는 연산자는 조건부 연산자가 유일합니다.
```javascript
let result = condition ? value1 : value2; 
```
- condition이 truthy라면 value1이, 그렇지 않으면 value2가 반환됩니다.

## 다중 '?'
- 물음표 연산자?를 여러 개 연결하면 복수의 조건을 처리할 수 있습니다.
```javascript
let age = prompt('나이를 입력해주세요.', 18);

let message = (age < 3) ? '아기야 안녕?' :
  (age < 18) ? '안녕!' :
  (age < 100) ? '환영합니다!' :
  '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';

alert( message );
```
- 첫 번째 물음표에선 조건문 age < 3을 검사합니다.
- 그 결과가 참이면 '아기야 안녕?'를 반환합니다. 그렇지 않다면 첫 번째 콜론 ":"에 이어지는 조건문 age < 18을 검사합니다.
- 그 결과가 참이면 '안녕!'를 반환합니다. 그렇지 않다면 다음 콜론 ":"에 이어지는 조건문 age < 100을 검사합니다.
- 그 결과가 참이면 '환영합니다!'를 반환합니다. 그렇지 않다면 마지막 콜론 ":" 이후의 표현식인 '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!'를 반환합니다.

- if..else를 사용하면 위 예시를 아래와 같이 변형할 수 있습니다.
```javascript
if (age < 3) {
  message = '아기야 안녕?';
} else if (age < 18) {
  message = '안녕!';
} else if (age < 100) {
  message = '환영합니다!';
} else {
  message = '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
}
```

## 부적절한 '?'
- 물음표?를 if 대용으로 쓰는 경우가 종종 있습니다.
```javascript
let company = prompt('자바스크립트는 어떤 회사가 만들었을까요?', '');

(company == 'Netscape') ?
   alert('정답입니다!') : alert('오답입니다!');
```
- 조건 company == 'Netscape'의 검사 결과에 따라 ? 뒤에 이어지는 첫 번째 혹은 두 번째 표현식이 실행되어 얼럿 창이 뜹니다.
- 위 예시에선 평가 결과를 변수에 할당하지 않고, 결과에 따라 실행되는 표현식이 달라지도록 하였습니다.
- 그런데 이런 식으로 물음표 연산자를 사용하는 것은 좋지 않습니다.
- 개발자 입장에선 if문을 사용할 때 보다 코드 길이가 짧아진다는 점 때문에 물음표?를 if 대용으로 쓰는 게 매력적일 순 있습니다.
- 하지만 이렇게 코드를 작성하면 가독성이 떨어집니다.
```javascript
let company = prompt('자바스크립트는 어떤 회사가 만들었을까요?', '');

if (company == 'Netscape') {
  alert('정답입니다!');
} else {
  alert('오답입니다!');
}
```
- 코드를 읽을 때 우리의 눈은 수직으로 움직입니다. 수평으로 길게 늘어진 코드보단 여러 줄로 나뉘어 작성된 코드 블록이 더 읽기 쉽죠.
- 물음표 연산자?는 조건에 따라 반환 값을 달리하려는 목적으로 만들어졌습니다. 이런 목적에 부합하는 곳에 물음표를 사용하시길 바랍니다. 
- 여러 분기를 만들어 처리할 때는 if를 사용하세요.
