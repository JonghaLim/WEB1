## switch문
- 복수의 if 조건문은 switch문으로 바꿀 수 있다.
- switch 문을 사용한 비교법은 특정 변수를 다양한 상황에서 비교할 수 있게 해준다.
- 코드 자체가 비교 상황을 잘 설명한다는 장점도 있다.
```javascript
switch (x) {
  case 'value1': // if (x === 'value1')
    // ...
    [break]
  case 'value2': // if (x === 'value2')
    // ...
    [break]
    
  default : // default는 필수가 아님
   // ...
    [break]
}
```
- 변수 x의 값과 첫 번째 case문의 값 'value1'를 일치 비교한 후, 두 번째 case문의 값 'value2'와 비교
- 이런 과정이 계속 이어져 case문에서 변수 x의 값과 일치하는 값을 찾으면 해당 case문의 아래의 코드가 실행된다.
- 이때, break문을 만나거나 swich문이 끝나면 코드의 실행은 멈춘다.
- 값과 일치하는 case문이 없다면, default문 아래의 코드가 실행된다. (default 문이 있는 경우)
```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( '비교하려는 값보다 작습니다.' );
    break;
  case 4:
    alert( '비교하려는 값과 일치합니다.' );
    break;
  case 5:
    alert( '비교하려는 값보다 큽니다.' );
    break;
  default:
    alert( "어떤 값인지 파악이 되지 않습니다." );
}
```
- case문 안에 break문이 없으면 조건에 부합하는지 여부를 따지지 않고 이어지는 case문을 실행합니다.
- switch/case 문의 인수엔 어떤 표현식이든 올 수 있습니다.
```javascript
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("표현식 +a는 1, 표현식 b+1는 1이므로 이 코드가 실행됩니다.");
    break;

  default:
    alert("이 코드는 실행되지 않습니다.");
}
```

## 여러 개의 "case"문 묶기
- 코드가 같은 case문은 한데 묶을 수 있습니다.
```javascript
let a = 3;

switch (a) {
  case 4:
    alert('계산이 맞습니다!');
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    alert('계산이 틀립니다!');
    alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
    break;

  default:
    alert('계산 결과가 이상하네요.');
}
```
- case 3과 case 5는 동일한 메시지를 보여줍니다.
- switch/case문에서 break문이 없는 경우엔 조건에 상관없이 다음 case문이 실행되는 부작용이 발생합니다. 
-  위 예시에서 case 3이 참인 경우엔 * 로 표시한 줄 아래의 코드가 실행되는데,
   그 아래 줄엔 case 5가 있고 break문도 없기 때문에 12번째 줄의 break문을 만날 때까지 코드는 계속 실행됩니다.

## 자료형의 중요성
- switch문은 일치 비교로 조건을 확인합니다. 비교하려는 값과 case문의 값이 같아야 해당 case문이 실행됩니다.
```javascript
let arg = prompt("값을 입력해주세요.");
switch (arg) {
  case '0':
  case '1':
    alert( '0이나 1을 입력하셨습니다.' );
    break;
 
  case '2':
    alert( '2를 입력하셨습니다.' );
    break;

  case 3: // prompt은 숫자 3을 입력하더라도 문자열 '3'으로 반환해서 숫자형 3과 문자열 '3'이 달라서 실행이 안됨
    alert( '이 코드는 절대 실행되지 않습니다!' );
    break;
  default:
    alert( '알 수 없는 값을 입력하셨습니다.' );
}
```
 1. 0이나 1을 입력한 경우엔 첫 번째 alert문이 실행됩니다.
 2. 2를 입력한 경우엔 두 번째 alert문이 실행됩니다.
 3. 3을 입력하였더라도 세 번째 alert문은 실행되지 않습니다. 앞서 배운 바와 같이 prompt 함수는 사용자가 입력 필드에 기재한 값을 문자열로 변환해 반환하기 때문에 숫자 3을 입력하더라도 prompt 함수는 문자열 '3'을 반환합니다. 그런데 세 번째 case문에선 사용자가 입력한 값과 숫자형 3을 비교하므로, 형 자체가 다르기 때문에 case 3 아래의 코드는 절대 실행되지 않습니다. 대신 default문이 실행됩니다.
