'use strict';

// 오늘 날짜를 전역변수로 생성...
const today = new Date();
const year = today.getFullYear(); // 연도 4자리 - getFullYear
const month = today.getMonth() + 1;   // 월(기존 월보다(0월부터 만듦) 1자리 작기 때문에 +1)
const date = today.getDate(); // 일
const hour = today.getHours(); // 시
const minute = today.getMinutes(); // 분 (함수에는괄호붙인다)
const second = today.getSeconds(); // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 시스템날짜 가져와서 폼에 출력하기
function dateBring() {
  document.getElementById("startDate").value = yymmdd;
}

// 날짜 비교함수
function compareDate() {
  let start = document.getElementById("startDate").value; //처음 시작날짜가져오기
  let end = document.getElementById("endDate").value; // 마지막  날짜가져오기
  // document.getElementById("endDate").value =
  
  const startDate = new Date(start);
  const endDate = new Date(end); // 문자로 들어가 있던 날짜를 날짜타입으로 변경함.

  let result;

  if(isSameDay(startDate, endDate)) {
    result = "입력된 날짜는 같습니다."
  }
  else {
    result = "입력된 날짜는 다릅니다."
  }
  document.getElementById("demo").innerHTML = result;
}

// === (완전일치(타입)) 값이 
function isSameDay(startDate, endDate) {
  return  startDate.getFullYear() === endDate.getFullYear() &&
          startDate.getMonth() === endDate.getMonth() &&
          startDate.getDate() === endDate.getDate(); // 0=false , 0이 아닌 값=true
}

function compareDate2() {
  let start = document.getElementById("startDate").value;
  let end = document.getElementById("endDate").value; 

  const startDate = new Date(start); // '2022-2-5' 년,월,일
  const endDate = new Date(end); 

  // 날짜형식 데이터를 시간(1/1000초)로 바꿔서 연산처리한다.
  let elapsedTime = endDate.getTime() - startDate.getTime();
  let strDate = elapsedTime / (60*60*24*1000); //날(day)수로 변경, 24를 지우면 시간계산, 분으로할때는 60까지 지운다. 다 포함한 상태면 날짜수비교
  strDate = strDate.toFixed(0);

  document.getElementById("demo").innerHTML = strDate;
}