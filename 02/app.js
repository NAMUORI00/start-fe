/**
 * 자바스크립트 변수 선언 
 */
//number
var count = 5;

//string
var tmp_name = "abc"

// bool 타입 변수 생성
var check = true;


// 배열 타입 변수 생성
var month = new Array("1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월");

// 객체 타입 변수 생성
var class_obj = {
    name: 'Computer Engineering',
    school: 'Jeju NU',
    classroom: ['D414', 'D416']
};

// 함수타입 변수 생성
var log = function(str){
    console.log(str);
}

// 함수타입 변수 호출
log(class_obj.name);
log(class_obj.school);
log(class_obj.classroom[0]);
log(class_obj.classroom[1]);


console.log("Hello world!");
console.log(tmp_name);
console.log(month);