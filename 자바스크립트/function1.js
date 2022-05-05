// 함수: 프로그램을 구성하는 주요 구성 요쇼, 중복 없이 유사한 동작을 하는 코드를 여러번 호출할 수 있습니다.
// 함수 선언(function declaration)

function name(parameters) {
  alert('함수본문');
}
name();

// 지역 변수: 함수 내에서 선언한 변수인 지역 변수(local variable)는 함수 안에서만 접근할 수 있습니다.

function showMessage() {
  let message = "안녕하세요!"; // 지역 변수

  alert( message );
}

showMessage(); // 안녕하세요!

alert( message ); // ReferenceError: message is not defined (message는 함수 내 지역 변수이기 때문에 에러가 발생합니다.)

// 외부 변수: 함수 내부에서 함수 외부의 변수인 외부 변수에 접근할 수 있습니다.

let userName = 'John';
function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John

// 함수에선 외부 변수에 접근 뿐만 아니라, 수정도 할 수 있습니다.

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) 외부 변수를 수정함

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // 함수 호출 전이므로 John 이 출력됨

showMessage();

alert( userName ); // 함수에 의해 Bob 으로 값이 바뀜

// 함수 내부에 외부 변수와 동일한 이름을 가진 변수가 선언되었다면, 내부 변수는 외부 변수를 가립니다.

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // 같은 이름을 가진 지역 변수를 선언합니다.

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// 함수는 내부 변수인 userName만 사용합니다,
showMessage();

alert( userName ); // 함수는 외부 변수에 접근하지 않습니다. 따라서 값이 변경되지 않고, John이 출력됩니다.

// 위 예시의 userName처럼, 함수 외부에 선언된 변수는 전역 변수(global variable)라고 부릅니다.
// 전역 변수는 같은 이름을 가진 지역 변수에 의해 가려지지만 않는다면 모든 함수에서 접근할 수 있습니다.
// 변수는 연관되는 함수 내에 선언하고, 전역 변수는 되도록 사용하지 않는 것이 좋습니다. 
// 다만 프로젝트 전반에서 사용되는 데이터는 전역 변수에 저장하는 것이 유용한 경우도 있으니 이 점을 알아두시기 바랍니다.

// 매게변수(parameter)를 이용하면 임의의 데이터를 함수 안에 전달할 수 있습니다.
// 매개변수는 인수(argument)라고 불리기도 합니다.

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








