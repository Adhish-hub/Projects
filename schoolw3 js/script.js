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

// function sayHello() {
//     return "Hello World";
// }

// let message = sayHello();
// // console.log(message);
// document.getElementById("main").innerHTML = sayHello();



// Parameters
// function multiply(a, b){
//     return a * b;
// }

// let result = multiply(10, 45);
// console.log(result);

// function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
// }

// let value = toCelsius(77);
// console.log(value);



// function multiply(a, b) {
//     return "Done";

//     return a * b;
// }

// let result = multiply(4, 3);
// console.log(result);
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

// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//     text += fruit + ": " + value + "<br>";
// }
// document.getElementById("main").innerHTML = text;

// const d = new Date();
// d.toDateString();
// d.getHours();
// console.log(d);


// getTime()

// const fruits = ["banana", "apple", "orange", "grape"];
// const vegetables = ["cauliflower", "spinach", "broccoli", "carrot"];
// const flour = ["wheat", "rice", "maize", "barley"];
// document.getElementById("main").innerHTML = fruits.toString();
// document.getElementById("main").innerHTML = fruits;
// let length = fruits.length;
// let length = fruits[fruits.length - 1];
// console.log(length);
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++){
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "<ul>";
// document.getElementById("main").innerHTML = text;

// fruits.push("hola");
// fruits.shift("jackfruit");
// fruits.pop("apple");
// vegetables.toSpliced(2, 1, "cabbage", "lettuce");
// let position = fruits.indexOf("orange") + 1;

// document.getElementById("main").innerHTML = fruits.join(" - ");

// const food = fruits.concat(vegetables, flour);
// document.getElementById("main").innerHTML = food.join(" | ");
// const newArr = food.flatMap(x => [x, x * 10]);


// const numbers = [1, 2, 3, 4, 5];
// function value(value, index, array){
//     return value < 5;

// let first = numbers.find(value);
// console.log(first);
// This will return the first element in the array that is less than 5, which is 1.

// let last = numbers.findLast(value => value < 5);
// console.log(last);
// This will return the last element in the array that is less than 5, which is 4.
// fruits.sort();
// console.log(fruits);
// vegetables.toReversed();
// console.log(vegetables);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// console.log(sorted);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b - a});
// console.log(points);

// function minArray(arr){
//     return Math.min.apply(null, arr);
// }
// function maxArray(arr){
//     return Math.max.apply(null, arr);
// }

// const number = [5, 6, 2, 3, 7];

// let result1 = minArray(number);
// console.log(result1);

// let result2 = maxArray(number);
// console.log(result2);

// const num1 = [1,3,6,3,6,8];
// const num2 = num1.map(myFunction);

// function myFunction(value, index, array){
//     return  value * 2;
// }
// console.log(num2);

// const myAr = [1, 2, 3, 4, 5, 6];
// const newAr = myAr.flatMap((x) => x * 2);
// console.log(newAr);

// const num1 = [1,1654,61,5151,515,51,51,5]
// const over18 = num1.filter(myFunction);

// function myFunction(value){
//     return value > 18;
// }
// console.log(over18);
// this will return a new array containing only the values from num1 that are greater than 18, which are [1654, 61, 5151, 515, 51, 51, 5].

// const n1 = [1, 2, 3, 4, 5];
// const o18 = n1.filter(myFunction);

// function myFunction(value, index, array){
//     return value > 1;
// }

// console.log(o18);
// and this will return a new array containing only the values from n1 that are greater than 1, which are [2, 3, 4, 5].

// let n2 = [33,265,9962,91,62,26,6];
// let sum = n2.reduce(myFunction);

// function myFunction(total, value){    //this function can also be written as (total, value, index, array) but since we are only using total and value, we can omit the other parameters.
//     return total + value;
// }   
// console.log(sum);

// The 2 function above can also be done with reduceright method which works from right to left instead of left to right. The result will be the same in this case since we are only adding the values, but it can be different when we add other operations like multiplication or subtraction.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// const f = fruits.entries();

// let text = "";

// for (let x of keys) {
//   text += x + "<br>";
// }
// document.getElementById("main").innerHTML = text;

// for (let x of f){
//     document.getElementById("main").innerHTML += x + "<br>";
// }


// const days = ["Sunday", "Monday", "Tuesday", "Friday"];
// const myDays = days.with(2, "Thursday");
// console.log(myDays);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const q1 = ["january", "february", "march"];
// const q2 = ["april", "may", "june"];
// const q3 = ["july", "august", "september"];
// const q4 = ["october", "november", "december"];
// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);

// let a, rest;
// const arr1 = [1,2,3,4,5,6,7,8];

// [a, ...rest] = arr1;
// console.log(a);
// console.log(rest);



// const letter = new Set();

// const a = "a";
// const b = "b";
// const c = "c";

// letter.add(a);
// letter.add(b);
// letter.add(c);  
// console.log(letter);    
// letter.size;
// answer = letter.has("a");
// console.log(answer);

// const letters = new Set(["a","b","c"]);
// let text = "";
// letters.forEach (function(value) {
//   text += value;
// });
// console.log(text);

// const myIterator = letters.values();
// const myIterator2 = letters.keys();
// const myIterator3 = letters.entries();
// let text1 = "";
// for (const entry of myIterator) {
//   text1 += entry;
// }
// console.log(text1);

// let text2 = "";
// for (const entry of letters.values()) {
//   text2 += entry;
// }
// console.log(text2);

// let text3 = "";
// for (const x of myIterator2) {
//   text3 += x;
// }
// console.log(text3);

// const A = new Set(['a','b','c']);
// const B = new Set(['b','c','d']);

// const C = A.union(B);
// console.log(C);// This will return a new set containing all the unique values from both sets A and B, which are 'a', 'b', 'c', and 'd'.

// const c = new Set(['a','b','c']);
// const d = new Set(['b','c','d']);

// const e = c.intersection(d);
// console.log(e);
// This will return a new set containing only the values that are present in both sets c and d, which are 'b' and 'c'.

// const A1 = new Set(['a','b','c']);
// const B1 = new Set(['b','c','d']);

// const C1 = A1.difference(B1);
// console.log(C1);

// const A2 = new Set(['a','b','c']);
// const B2 = new Set(['b','c','d']);

// const C2 = A2.symmetricDifference(B2);
// console.log(C2);

// const A3 = new Set(['a','b','c']);
// const B3 = new Set(['b','c','d']);

// let answer = A3.isSubsetOf(B3);
// console.log(answer);

// const A4 = new Set(['a','b','c']);
// const B4 = new Set(['b','c','d']);

// let answer4 = A4.isSupersetOf(B4);
// console.log(answer4);

// const A5 = new Set(['a','b','c']);
// const B5 = new Set(['b','c','d']);

// let answer5 = A5.isDisjointFrom(B5);
// console.log(answer5);


// let mySet = new WeakSet();
// let myObj = {fname:"John", lname:"Doe"};
// mySet.add(myObj);
// let answer = mySet.has(myObj);
// console.log(answer);    

// const fruits = new Map();
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// console.log(fruits);

const fruits = new Map([["apples", 500], ["bananas", 300], ["orange", 600]]);
fruits.set("apples", 200);
fruits.get("apples"); 
typeof fruits;  
fruits.size;
fruits.delete("banana");
fruits.has("apples");
// fruits.clear();
console.log(fruits);
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value + " " ;
});
console.log(text);
let text2 = "";
for (const x of fruits.keys()){
    text2 += x +" ";
}
console.log(text2);

let text1 = "";
for (const x of fruits.values()){
    text1 += x + " ";
}
console.log(text1);