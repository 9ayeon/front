'use strict';

function regexCheck() {
  
  const regMid = /\W/g; //아이디는 영문 소문자,대문자,숫자,밑줄만 사용가능
  const regName = /^[가-힣a-zA-Z]{2,20}/g; //성명은 한글/영문만 가능하도록 길이는 2~20자까지
  const regTel = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/g; //전화번호 형식에 맞도록 체크(지역번호-국번-전화번호)
  const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]/g; //이메일형식에 맞도록 체크(a@b.c)

  let name = document.getElementById("name").value;
  let mid = document.getElementById("mid").value;
  let number1 = document.getElementById("number").value;
  let mail = document.getElementById("mail").value;

  if(mid.trim() == "") {
    alert("공백은 입력할 수 없습니다.");
    return
  }
  // else if (!mid.match(regMid)) {}
  else if (!regName.test(name)) {
    alert("성은 한글과 영문 대/소문자로 2~20자 이내로 입력해주세요.");
    return
  }
  else if (!regMid.test(mid)) {
    alert("아이디는 영문 대/소문자와 특수문자(_)만 사용 가능합니다.");
    return
  }
  else if (!regTel.test(number1)) {
    alert("전화번호는 숫자만 입력해주세요.");
    return
  }
  else if (!regEmail.test(mail)) {
    alert("이메일 형식에 맞게 입력해주세요.");
    return
  }

  alert("회원가입 완료");
  document.getElementById("mid").focus();

}

