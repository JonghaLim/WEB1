함수: 프로그램을 구성하는 주요 구성 요쇼, 중복 없이 유사한 동작을 하는 코드를 여러번 호출할 수 있습니다.
함수 선언(function declaration)
```javascript
function name(parameters) {
  alert('함수본문');
}
name();
```
지역 변수: 함수 내에서 선언한 변수인 지역 변수(local variable)는 함수 안에서만 접근할 수 있습니다.
```javascript
function showMessage() {
  let message = "안녕하세요!"; // 지역 변수

  alert( message );
}

showMessage(); // 안녕하세요!

alert( message ); // ReferenceError: message is not defined (message는 함수 내 지역 변수이기 때문에 에러가 발생합니다.)
```
외부 변수: 함수 내부에서 함수 외부의 변수인 외부 변수에 접근할 수 있습니다.
```javascript
let userName = 'John';
function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
```
함수에선 외부 변수에 접근 뿐만 아니라, 수정도 할 수 있습니다.
```javascript
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) 외부 변수를 수정함

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // 함수 호출 전이므로 John 이 출력됨

showMessage();

alert( userName ); // 함수에 의해 Bob 으로 값이 바뀜
```
함수 내부에 외부 변수와 동일한 이름을 가진 변수가 선언되었다면, 내부 변수는 외부 변수를 가립니다.
```javascript
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // 같은 이름을 가진 지역 변수를 선언합니다.

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}
```
함수는 내부 변수인 userName만 사용합니다.
```javascript
showMessage();

alert( userName ); // 함수는 외부 변수에 접근하지 않습니다. 따라서 값이 변경되지 않고, John이 출력됩니다.
```
위 예시의 userName처럼, 함수 외부에 선언된 변수는 전역 변수(global variable)라고 부릅니다.
전역 변수는 같은 이름을 가진 지역 변수에 의해 가려지지만 않는다면 모든 함수에서 접근할 수 있습니다.
변수는 연관되는 함수 내에 선언하고, 전역 변수는 되도록 사용하지 않는 것이 좋습니다. 
다만 프로젝트 전반에서 사용되는 데이터는 전역 변수에 저장하는 것이 유용한 경우도 있으니 이 점을 알아두시기 바랍니다.

매게변수(parameter)를 이용하면 임의의 데이터를 함수 안에 전달할 수 있습니다.
매개변수는 인수(argument)라고 불리기도 합니다.
```javascript
function showMessage(from, text) { // 인수: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

function showMessage(from, text) {

  from = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며줍니다.

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않습니다.
alert( from ); // Ann

// 매게변수에 값을 전달하지 않으면 그 값은 undefined가 된다.
// showMessage(from, text)는 매개변수가 2개다
// showMessage("Ann"); -> "Ann: undefined"
// undefined가 출력되지 않게 하려면 기본값(default value)을 설정해주면 된다.
// 매개변수 오른쪽에 =을 붙이고 undefined 대신 설정하고자 하는 기본값을 써주면 된다.

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
// 아래와 같이 복잡한 표현식도 기본값으로 설정할 수 있다.
function showMessage(from, text = anotherFunction()) {
  // anotherFunction()은 text값이 없을 때만 호출됨
  // anotherFunction()의 반환 값이 text의 값이 됨
}
// 자바스크립트에선 함수를 호출할 때마다 매개변수 기본값을 평가합니다. 물론 해당하는 매개변수가 없을 때만 기본값을 평가한다.
// 위 예시에선 매개변수 text에 값이 없는 경우 showMessage()를 호출할 때마다 anotherFunction()이 호출됩니다.
// 가끔은 함수 선언부에서 매개변수 기본값을 설정하는 것 대신 함수가 실행되는 도중에 기본값을 설정하는 게 논리에 맞는 겨우가 생기기도 한다.
// 이런 경우엔 일단 매개변수를 undefined와 비교하여 함수 호출시 매개변수가 생략되었는지를 확인한다.

function showMessage(text) {
  if (text === undefined) {
    text = '빈 문자열';
  }

  alert(text);
}

showMessage(); // 빈 문자열
// if문 대신 ||도 사용 가능하다.
// 매개변수가 생략되었거나 빈 문자열("")이 넘어오면 변수에 '빈 문자열'이 할당됩니다.
function showMessage(text) {
  text = text || '빈 문자열';
  ...
}
// nullish 병합 연산자 ??를 사용할수 있다.
// 매개변수 'count'가 넘어오지 않으면 'unknown'을 출력해주는 함수
function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

// 반환 값(return value): 함수를 호출했을 때 함수를 호출한 그곳에 특정 값을 반환하게 할 수 있다.
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
// return문은 함수 하나에 여러 개가 가능하다.
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('보호자의 동의를 받으셨나요?');
  }
}

let age = prompt('나이를 알려주세요', 18);

if ( checkAge(age) ) {
  alert( '접속 허용' );
} else {
  alert( '접속 차단' );
}
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "영화 상영" ); // (*)
  // ...
}
// checkAge(age)가 false를 반환하면, (*)로 표시한 줄은 실행이 안 되기 때문에 함수 showMovie는 얼럿 창을 보여주지 않습니다.
// return문이 없거나 return 지시자만 있는 함수는 undefined를 반환합니다.

// function doNothing() { /* emptu */ }
// alert ( doNothing() === undefined); -> true

// function doNothing() { return; }
// alert ( doNothing() === undefined); -> true
  
// return과 값 사이에 절대 줄을 삽입하지 마세요.
// return
//  (some + long + expression + or + whatever * f(a) + f(b))
// 위와 같은 코드의 경우 자바스크립트는 return문 끝에 세미콜론을 자동으로 넣기 때문에
// return;
//  (some + long + expression + or + whatever * f(a) + f(b))
// 위 코드와 같이 동작하여 반환하고자 했던 표현식을 반환하지 못하고 아무것도 반환하지 않는 것 처럼 되어버립니다.
// 따라서 return 지시자가 있는 줄에서 시작하도록 작성해야 합니다. 또는 아래와 같이 여는 괄호를 return 지시자와 같은 줄에 써줘도 괜찮습니다.
// return (
// some + long + expression
// + or +
// whatever * f(a) + f(b)
// )  

// 함수 == 주석
// 함수는 간결하고, 한 가지 기능만 수행할 수 있께 만들어야 합니다.
// 함수가 길어지면 함수를 잘게 쪼갤 때가 되었다는 신호로 받아들이고 분리해 작성하면 많은 장점이 있습니다.
// 예를 들어 n까지의 소수를 출력하는 함수를 만들 때
// 1
  function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // 소수
  }
}
// 2
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
  
// 두 번째 showPrimes(n)가 더 이해하기 쉬운걸 알 수 있다. 이렇게 이름만 보고도 어떤 동작을 하는지 알 수 있는
// 코드를 자기 설명적(self-describing)코드라고 부른다, 이렇게 함수를 활용하면 코드가 정돈되고 가속성이 높아진다. 
  
```
