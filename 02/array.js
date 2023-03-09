// 배열 타입 변수 생성
var months = new Array("1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월");

for(var i=0; i<months.length; i++){
    console.log(months[i]);
}

console.log(months.reverse());

for(var i=0; i<months.reverse().length; i++){
    console.log(months.reverse()[i]);
}

months.push('n월');

console.log(months);
console.log(months.pop());

months.forEach((month) => {
    console.log(month);
});

var newmonths = months.map((elemtnt)=>{
    return '요소 : ' + elemtnt;
});
console.log(newmonths);