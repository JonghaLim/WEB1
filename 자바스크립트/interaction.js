alert("Hello"); // Hello 메세지 창

// prompt(title, [default]) title: 사용자에게 보여줄 문자열, default 입력 필드의 초깃값(선택 값) 

let age = prompt('나이를 입력해주세요', 100);

alert(`당신의 나이는 ${age}살 입니다.`); // 당신의 나이는 100살 입니다.

// confirm(question); 확인버튼를 누르면 true, 그 외의 경우는 false를 반환

let isBoss = confirm("당신이 주인인가요?");

alert(isBoss); //확인 버튼을 눌렀다면 true가 출력됩니다
