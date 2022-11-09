'use strict';

function regexCheck() {
  // 정규표현식을 만든다.
  const regEx1 = /atom/gm;// 'atom'이라는 문자열이 포함되어 있다면 true, 없으면 false
  const regEx2 = /mbc|kbs|sbs/g; //mbc또는kbs또는sbs문자열을 포함하고 있다면?//jsp정규식의 or=|이 한개, 자바는 2개
  const regEx3 = /홍길(동|순)/g;  // 홍길동, 홍길순이 있는지 검사
  const regEx4 = /[a-z]/g; //영문 소문자를 포함하고 있는지 검사
  const regEx5 = /[^a-z]/g; //영문 소문자외에 다른 문자를 포함하고 있는지 검사
  const regEx6 = /[A-Z]/g; //영문 대문자를 포함하고 있는지 검사
  const regEx7 = /[^A-Z]/g; //영문 대문자외에 다른 문자를 포함하고 있는지 검사
  const regEx8 = /[0-9]/g; //숫자를 포함하고 있는지 검사
  const regEx9 = /[^0-9]/g; //숫자외 다른 문자를 포함하고 있는지 검사
  const regEx10 = /[가-힣ㄱ-ㅎ]/g; //한글을 포함하고 있는지 검사 
  const regEx11 = /[a-zA-Z0-9]/g; //영문 대/소문자나 숫자가 포함되어 있는지 검사
  const regEx12 = /[^a-zA-Z0-9]/g; //영문 대/소문자, 숫자 외에 다른 문자가 포함되어 있는지 검사
  const regEx13 = /[a-z]+[A-Z]+[0-9]+/g; //영문 대/소문자, 숫자만 포함되어 있는지 검사
  const regEx14 = /\./g; // 문자열중에서 '.'이 있는지 검사
  const regEx15 = /\d/g; // 숫자가 포함되어 있는지 검사
  const regEx16 = /\D/g; // 숫자가 포함되어 있지 않은지 검사
  const regEx17 = /\w/g; // 영문자/숫자/_ 을 포함하고 있는지 검사
  const regEx18 = /\W/g; // 영문자/숫자/_ 을 포함되어 있지않은지 검사
  const regEx19 = /\s/g; // 문장안에 공백 또는 탭을 포함하고 있는지 검사
  const regEx23 = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*[가-힣])(?!.*[~₩!@#$%^&*()\[\]{}'"\-+=])/g;
  //와일드카드 : 1개글자에 대한 포함유무(?) , 복수개문자의 포함유무(+,*)
  const regEx20 = /홍길동?안녕/g; // '홍길동'의 '동' 1개 글자의 포함여부(있어도 되고, 없어도 되고)
  const regEx21 = /홍길동+안녕/g; // '홍길동'의 '동' 최소1개 이상 글자의 포함여부(있어도 되고, 없어도 되고)
  const regEx22 = /홍길동*안녕/g; // '홍길동'의 '동' 0개 이상 글자의 포함여부(있어도 되고, 없어도 되고)
  // d{2,3}, [a-z]{2,20}(소문자는 2글자부터20글자까찌)


  let content = document.getElementById("content").value;

  if(content.trim() == "") {
    alert("문자열을 입력하세요.");
    return false;
  }
  // else if(!content.match(regEx1)) {
  //   alert("1.atom문자열을 포함하고 있지 않습니다.")
  //   return false; //false는 기본값
  // }
  // else if(!content.match(regEx2)) {
  //   alert("2.mbc/kbs/sbs 문자열을 포함하고 있지 않습니다.");
  //   return false;
  // }
  // else if(!content.match(regEx3)) {
  //   alert("3.홍길동 또는 홍길순 문자열을 포함하고 있지 않습니다.");
  //   return false;
  // }

  // else if(!regEx4.test(content)) {//이렇게해도되고~
  // else if(!content.match(regEx4)) {
  //   alert("4.영문 소문자를 포함하고 있지 않습니다.");
  //   return false;
  // }
  // else if(regEx5.test(content)) {
  // else if(content.match(regEx5)) {
  //   alert("5.영문 소문자외 다른 문자를 포함하고 있습니다.");
  //   return false;
  // }
  // else if(!regEx6.test(content)) {
  // else if(!content.match(regEx6)) {
  //   alert("6.영문 대문자를 포함하고 있지 않습니다.");
  //   return false;
  // }
  // else if(regEx7.test(content)) {
  // else if(content.match(regEx7)) {
  //   alert("7.영문 대문자외 다른 문자를 포함하고 있습니다.");
  //   return false;
  // }
  // else if(!regEx8.test(content)) {
  // else if(!content.match(regEx8)) {
  //   alert("8.숫자를 포함하고 있지 않습니다.");
  //   return false;
  // }  
  // else if(regEx9.test(content)) {
  // else if(content.match(regEx9)) {
  //   alert("9.숫자외 다른 문자를 포함하고 있습니다.");
  //   return false;
  // }
  // else if(!regEx10.test(content)) {
  // else if(!content.match(regEx10)) {
  //   alert("10.한글을 포함하고 있지 않습니다.");
  //   return false;
  // }
  // else if(!regEx11.test(content)) {
  // else if(!content.match(regEx11)) {
  //   alert("11.영문 대/소문자나 숫자를 포함하고 있지 않습니다.");
  //   return false;
  // }
  // else if(regEx12.test(content)) {
  // else if(content.match(regEx12)) {
  //   alert("12.영문 대/소문자와 숫자외에 다른 문자를 포함하고 있습니다.");
  //   return false;
  // }
  // else if(!regEx13.test(content)) {
  // else if(!content.match(regEx13)) {
  //   alert("13.영문 대문자,소문자,숫자는 반드시 포함되어야 합니다.");
  //   return false;
  // }
  // else if(!regEx14.test(content)) {
  // else if(!content.match(regEx14)) {
  //   alert("14.'.'이 포함되어 있지 않습니다.");
  //   return false;
  // }
  alert("작업끝");
  document.getElementById("content").focus();
}