// while (condition) {
// 코드
// '반복문 본문(body)'이라 불림
// }, condition(조건)이 truthy 이면 반복문의 코드가 실행.

let i = 0;
while (i < 3) { // 0, 1, 2가 출력됩니다.
  alert( i );
  i++;
}

// do..while 반복문
// do {
//     반복문 본문
// } while (condition); condition을 반복문 본문 아래로 옮길 수 있다.

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

// do..while 문법은 조건이 truthy 인지 아닌지에 상관없이, 본문을 최소한 한번이라도 실행하고 싶을 때만 사용

// for 반복문은 while 반복문보다는 복잡하지만 가장 많이 쓰이는 반복문
// for (begin; condition; step) {
//          ... 반복문 본문 ...
// }

for (let i = 0; i < 3; i++) { // 0, 1, 2가 출력됩니다.
  alert(i);
}

// begin i = 0 -> 반복문에 진입할 때 단 한번 실행된다.
// condition i < 3 ->  반복마다 해당 조건이 확인된다. false이면 반복문을 멈춘다.
// body alert(i) -> condition이 trurhy일 동안 계속해서 실행된다.
// step i++ -> 각 반복의 body가 실행된 이후에 실행된다.
// 인라인 변수 선언: 반복문 안에서 변수 i를 선언하는 방식, 이렇게 선언한 변수는 반복문 안에서만 접근할 수 있다.

let i = 0; // i를 선언하고 값도 할당하였습니다.

for (; i < 3; i++) { // 'begin'이 필요하지 않기 때문에 생략 가능하다.
  alert( i ); // 0, 1, 2
}

let i = 0;

for (; i < 3;) { // 'step'도 생략 가능하다.
  alert( i++ );
}

// for (;;) {
//   끊임 없이 본문이 실행됩니다.
// }
// 반복문 빠져나오기
// 대개는 반복문의 조건이 falsy가 되면 반복문이 종료되지만 특별한 지시자인 break를 사용하면 언제든 원하는 때에 반복문을 빠져나올 수 있다.

let sum = 0;

while (true) {

  let value = +prompt("숫자를 입력하세요.", '');

  if (!value) break; // (*)

  sum += value;

}
alert( '합계: ' + sum );

// 다음 반복으로 넘어가기
// continue 지시자는 break의 '가벼운 버전'이다. 
// continue는 전체 반복문을 멈추지 않는다. 대신 현재 실행 중인 이터레이션을 멈추고 반복문이 다음 이터레이션을 강제로 실행시키도록 한다.(조건을 통과할 때)
// continue는 현재 반복을 종료시키고 다음 반복으로 넘어가고 싶을 때 사용할 수 있다.

for (let i = 0; i < 10; i++) {

  // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.
  if (i % 2 == 0) continue;

  alert(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
}

// break/continue와 레이블
// 레이블(label) 은 반복문 앞에 콜론과 함께 쓰이는 식별자입니다.
// labelName: for (...) {
//  ...
// }

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`(${i},${j})의 값`, '');

    // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
    if (!input) break outer; // (*)

    // 입력받은 값을 가지고 무언가를 함
  }
}
alert('완료!');





