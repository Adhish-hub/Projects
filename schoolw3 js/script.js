// let x = 9;
// let y = 9;
// console.log(x*y);

// document.getElementById("main").innerHTML = "jcsjbcjswc jsw";

// let a = "John" + " " + "Doe";
// console.log(a);

// let b = "5" + 2 + 3;
// console.log(b);

// let s = "adhish"
// let v = 464;
// let t = (s+v);
// console.log(t);

// let q = 10;
// q += 5;
// console.log(q);


// let w = 3
// e = w ** 4;
// console.log(e);

// let r = 9;
// t = Math.pow(r,2)
// console.log(t);

// i = 664;
// i -= 100;
// console.log(i);


// let x = 4;
// x **= 2;
// console.log(x);

// let z = 10;
// z /= 5;
// console.log(z);

// let c = 10;
// c %= 5;
// console.log(c);

// let text = "hello";
// text += " world";
// console.log(text);

// let a = true;
// let b = a &&= 10;
// console.log(a);

// let w = undefined;
// let e = w &&= 10;
// console.log(e);

/* The ||= Operator
The Logical OR assignment operator is used between two values.

If the first value is false, the second value is assigned.*/

// let q = false;
// let d = q ||= 10;
// console.log(d);

// The ??= Operator
// The Nullish coalescing assignment operator is used between two values.

// If the first value is undefined or null, the second value is assigned.
// let g;
// g ??= 10;
// console.log(g);


// let text1 = "A";
// let text2 = "B";
// let result = text1 > text2;
// console.log(result);


// let age = 16;
// if (age>=18){
//     console.log('you can drive');

// }
// else{
//     console.log('you can not drive');

// }

// let age = 16;
// let country = "India";
// if (country == "India"){
//     if(age >= 18){
//         console.log('you can drive');

//     }else{
//     console.log('you can not drive');

// }
// }

// if (country == "India" && age >=18){
//     console.log('you can drive');

// }else{
//     console.log('you can not drive');

// }

// let time = 65
// if (time < 12){
//     console.log('good morning');

// } else if (time>=12 && time<17){
//     console.log('good afternoon');

// }else if (time>=17 && time < 20){
//     console.log('good evening');

// }else if  (time >= 20 && time <25){
//     console.log('good night');

// }else{
//     console.log('invalid time');

// }


// let age =19;
// let order = age>=18 ? "you can drive" : "you can not drive";
// console.log(order);


// let day; 

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

// console.log(day);


// let cx = 9
// console.log(cx == 8)

// let v = -0;
// console.log(Boolean(v));

//loops

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let len = cars.length;

// let text = "";
// for (let i = 0; i < len; i++) {
//   text += cars[i] + " ";
// }
// console.log(text);

// i = 0;
// text = "";
// // while(i < 10){
// //     text += "The number is " + i + " ";
// //     i++;
// // }
// // console.log(text);
//   loop1: for (let j = 1; j < 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {
//     if (i === 3) { continue loop2; }
//     text += i;
//    }
// }
// console.log(text);


// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z;
// console.log(result);

// let x = "100";
// let y = "10";
// let z = x / y;
// console.log(z);

// let x = 6;
// x.MAX_VALUE
// console.log(x);

function sayHello() {
    return "Hello World";
}

let message = sayHello();
// console.log(message);
document.getElementById("main").innerHTML = sayHello();



// Parameters
// function multiply(a, b){
//     return a * b;
// }

// let result = multiply(10, 45);
// console.log(result);

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(77);
console.log(value);



function multiply(a, b) {
    return "Done";

    return a * b;
}

let result = multiply(4, 3);
console.log(result);
/*value will be "Done" because the function will return "Done" and exit before it reaches the second return statement. The second return statement will never be executed. All the values or operations after the first return statement will be executed. */



// function multiply(a, b) {
//   return a * b;
// }

// let result = multiply(4, 5);
// In the example above:

// a and b are parameters
// 4 and 5 are arguments
// The argument 4 is assigned to the parameter a.

// The argument 5 is assigned to the parameter b.

// Arguments can be variables they do not need to  be number
// let x = 10;
// let y = 20;
// function mul(a, b){
//     return a*b;
// }
// let res = mul(x, y);
// console.log(res);

// const add = (a, b = 2) => a + b;
// let res1 = add(5);
// console.log(res1);
// // You can now set a default value for a parameter.
// // The default value is used if no argument is provided.

// const h1 = () => "Hello World";
// console.log(h1());

// Objects

// let info = {
//     firstName: "Adhish",
//     lastName: "Tiwari",
//     age: 23,
//     city: "Dewas",
//     fullName : function(){
//         return (this.firstName + " " + this.lastName).toLowerCase();
//     }
// }
// console.log(info.fullName());


// const p1 = {
//     name: "Adhish Tiwari" ,
//     hello: function(){
//         return "hello " + this.name;
//         }
// }
// console.log(p1.hello());



// let info = {
//     firstName: "Adhish",
//     lastName: "Tiwari",
//     age: 23,
//     city: "Dewas"
// }

// let x = " ";
// for (let a in info){
//     x += info[a] + " ";
// }
// document.getElementById("main").innerHTML = x;

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value + "<br>";
}
document.getElementById("main").innerHTML = text;

const d = new Date();
d.toDateString();
d.getHours();
console.log(d);


getTime()