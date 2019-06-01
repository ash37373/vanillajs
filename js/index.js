/*
// alert('Im Working. Im JS. Im Beautiful. Im worth it');
console.log('Im Working. Im JS. Im Beautiful. Im worth it');
// let, const, var
//const 는 상수
const a = 221;
let b = a-5;
//a=4;
console.log(b, a);
*/


//const what = ???????
// string - 스트링은 보통 텍스트 스트링을 말한다 - "sunghwan"
//const what = "sunghwan";
// console.log(what);


//Booliean - true or false;
// const wat = true;
// console.log(wat);

//Number - 숫자
// const wat = 666;
// console.log(wat);

//Float - 숫자인데 소수점을 가지고있음
// const wat = 55.1;
// console.log(wat);


//정렬방법(array)
// array = 데이터를 저장하는곳인데 리스트같이 저장
//const daysOfWeek = ["Mon","Thu", "Wed", "Thu", "Fri", "Sat", "Sun", true, 3.14];
//console.log(daysOfWeek);
//console.log(daysOfWeek[2]);//어레이법칙 []사용하여 해당하는 위치 데이터 고를수있따.
// 위에 방법이 array에 데이터 넣는 첫번째 방법.


//두번째 정렬방법(object)
/*
const hwanInfo = {
  name:"Hwan",
  age:34,
  gender:"Male",
  isHandsome:true,
  favMovies:["Oldboy","Titanic"],
  favFood:[
    {
      name:"Kimchi",fatty:false
    },
    {
      name:"Cheese",fatty:true
    }
  ]

};
*/

//console.log(hwanInfo);
//hwanInfo.name = "ChuChu";
//console.log(hwanInfo.name);
//console.log(hwanInfo.favFood);

//만약 DB에서 가져온 리스트라면 array 선택하고, 만약 데이터 합쳐서 만들어야 한다면 Object를 array안에 넣을 수 있다.




//함수 만들기
// function sayHello(pizza, chicken){
//   console.log('Hello!', pizza, "너의 나이는",chicken, "이다");
// }
//
// sayHello("Hwani", 34);
// console.log("Hi");



// function npay(name, id) {
//   console.log("당신의 네이버페이 가맹점명은 ", name, " 이며, ID는 ", id, " 이다");
// }
//
// npay("화니월드","np_test");


// `` 의 사용법..
// function sayHello(name, age){
//   console.log(`Hello ${name} you are ${age} years old`);
//   console.log(`wow it's fantastic ! ${name}`);
// }
//
// sayHello("Hwan", 33);


// function sayHello(name, age) {
//   return `Hello ${name}. you are ${age} years old`;
// }
//
// const greenHwan = sayHello("hwan",33);
//
// console.log(greenHwan);



// const calculator = {
//   plus: function(a, b){
//     return a+b;
//   }
// }
//
// //                        console.log(greetHwan);
// const plus = calculator.plus(5, 5);
// console.log(plus);




// const calculator = {
//   plus: function(a, b){
//     return a+b;
//   },
//   minus: function(a, b){
//     return a-b;
//   },
//   gob: function(a, b){
//     return a*b;
//   },
//   nanum: function(a, b){
//     return a/b;
//   }
// }
//
// const plus = calculator.plus(5,5);
// const minus = calculator.minus(5,4);
// console.log(`더하기:${plus}, 빼기:${minus}`);


const calculator= {
    plus:function(a,b){
      return a+b;
    },
    minus:function(a,b){
      return a-b;
    },
    gob:function(a,b){
      return a*b;
    },
    nanum:function(a,b){
      return a%b;
    }
}

const plus = calculator.plus(4,5);
console.log(plus);
