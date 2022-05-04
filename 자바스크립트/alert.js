// 변수(variable)는 데이터를 저장할 때 쓰이는 ‘이름이 붙은 저장소
let Hello = 'Hello world!';

let message;
// Hello의 'Hello world' 값을 message에 복사합니다.
message = Hello;

alert(Hello);
alert(message);

// 변수 명명 규칙
// 자바스크립트에선 변수 명명 시 두 가지 제약 사항이 있습니다.

// 변수명에는 오직 문자와 숫자, 그리고 기호 $와 _만 들어갈 수 있습니다.
// 첫 글자는 숫자가 될 수 없습니다. 또한 대 소문자를 구별해야 합니다.

// 자바스크립트 내에 사용하고 있는 예약어는 변수 명으로 사용 불가능합니다.
// 예약어 예시: let, class, return, function

// 상수 - 변화하지 않는 변수를 선언할 땐, let 대신 const를 사용
const myBirthday = '18.04.1982';
// const로 선언한 변수를 '상수(constant)'라고 부릅니다. 상수는 재할당할 수 없으므로 상수를 변경하려고 하면 에러가 발생합니다.

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
let color = COLOR_ORANGE;
alert(color); // #FF7F00
// 대문자로 상수를 만들어 사용하면 다음과 같은 장점이 있습니다.

// COLOR_ORANGE는 "#FF7F00"보다 기억하기가 훨씬 쉽습니다.
// COLOR_ORANGE를 사용하면 "#FF7F00"를 사용하는 것보다 오타를 낼 확률이 낮습니다.
// COLOR_ORANGE가 #FF7F00보다 훨씬 유의미하므로, 코드 가독성이 증가합니다

//'상수’는 변수의 값이 절대 변하지 않음을 의미합니다. 그중에는 (빨간색을 나타내는 16진수 값처럼) 코드가 실행되기 전에 이미 그 값을 알고 있는 상수도 있고, 
// 런타임 과정에서 계산되지만 최초 할당 이후 값이 변하지 않는 상수도 있습니다.
// 예시 const pageLoadTime = 웹페이지를 로드하는데 걸린 시간 
// 대문자 상수는 ‘하드 코딩한’ 값의 별칭을 만들 때 사용하면 됩니다.
