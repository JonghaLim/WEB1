// || (OR) 연산자
result = a || b;

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( '영업시간이 아닙니다.' ); // 주말이기 때문임
}

alert( 1 || 0 ); // 1 (1은 truthy임)

alert( null || 1 ); // 1 (1은 truthy임)
alert( null || 0 || 1 ); // 1 (1은 truthy임)

alert( undefined || null || 0 ); // 0 (모두 falsy이므로, 마지막 값을 반환함)
// 1. 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert( firstName || lastName || nickName || "익명"); // 바이올렛, 모든 변수가 falsy이면 "익명"이 출력
// 2. 단락 평가
true || alert("not printed"); // || 연산자가 true를 만나자마자 평가를 멈추기 때문에 alert가 실행되지 않았음
false || alert("printed"); // 단락 평가는 연산자 왼쪽 조건이 falsy일 때만 명령어를 실행하고자 할 때 자주 쓰임.

// && (AND) 
result = a && b;

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( '현재 시각은 12시 30분입니다.' );
}

// 첫 번째 falsy를 찾는 AND 연산자 '&&'

// 첫 번째 피연산자가 truthy이면,
// AND는 두 번째 피연산자를 반환합니다.
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
alert( null && 5 ); // null
alert( 0 && "아무거나 와도 상관없습니다." ); // 0

alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 마지막 값, 3

// ! (NOT)
result = !value;

alert( !true ); // false
alert( !0 ); // true

alert( !!"non-empty string" ); // true
alert( !!null ); // false, !!를 사용하면 불린형으로 변환 Boolean(null) = !!(null)

// OR 연산자의 피연산자가 alert인 경우 alert 메서드는 값을 반환하지 않습니다. 즉, undefined를 반환한다.
alert( alert(1) || 2 || alert(3) ); // 1의 창이뜨고 2까지 진행되고 3은 출력되지 않는다.

// AND 연산자의 피연산자가 alert인 경우
alert( alert(1) && alert(2) ); // 1이 얼릿창에 출력되고 평가 결과가 멈춘다. alert의 평가 괄과는 undefined 로 falsy이기 때문이다.


