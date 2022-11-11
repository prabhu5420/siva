
// task1 swap the number
// let num1 = Number(prompt('enter a number'));
// let num2 = Number(prompt('enter a number'));
// [num1,num2] = [num2,num1]; //destructuring assignment method
// console.log(`num1= ${num1}`);
// console.log(`num2= ${num2}`);
//arithematic operator
// let a = parseInt(prompt('enter a num'));
// let b = parseInt(prompt('enter a num'));
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`a= ${a}`); 
// console.log(`b= ${b}`);

// task2
// let a = 3; b = 5; c = 7;
// if(a>b && a>c){
//     console.log(`a ${a} is greater among 3number`);
// }
// else if(b>a && b>c){
//     console.log(`b ${b} is greater among 3number`);
// }
// else if(c>a && c>b){
//     console.log(`c ${c} is greater among 3number`);
// }

//task3 print even number between 1 to 100
//  for (let i=1; i<=100; i++){
//     if(i%2===0){
//         ;
//         console.log("even numbers between 1 to 100=",i);
//     }
//  }
//task4 print palindrome
// function checkPalindrome(string) {
//     let len = string.length;
//     for (i = 0; i < len / 2; i++){
//         if (string[i]!== string[len - 1 - i]){
//             return 'it is not a palindrome';
//         }
//     }
//     return 'it is palindrome'
// }
// const string = prompt('enter a string');
// const check = checkPalindrome(string);
// console.log(check);

//task5 print array in reverse 
// const arr = ['bala', 'arun', 'selva', 'ranjan']
// console.log(arr);
// const arr1 = arr.reverse();
// console.log(arr1);

//task 6 to print elements present in even position of the array
// let arr = ["bala","arun","selva","ranjan"];
// function even(array) {
//   let arr1 = [];
//   for(let i=0;i<arr.length;i++){
//     if(i%2===0){
//       arr1.push(arr[i]);
//     }
    
//   }
//   return arr1;
  
// } 
// console.log(even(arr));
//fetch
// let empDetails = [];
// const getData=async()=>{
//   const empData=await fetch('https://jsonplaceholder.typicode.com/users');
//   return empData.json();
  

// }

// empDetails.push(getData());
// console.log(empDetails);
// let table='<table border="1px"><tr><th>Id</th><th>Name</th></tr>';
// empDetails.map(e=>table+=`<tr><td>${e.id}</td><td>${e.name}</td></tr>`);
// table+='</table>';

// document.getElementById('bbb').innerHTML=table;




// fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{return res.json()}).then((res)=>{empDetails.push(res);
// console.log(empDetails);}).catch((error) => {console.log(error)});
// let table = "<table border = '1px'><tr><th>ID</th><th>User Name</th></tr>"
// empDetails.map((employee)=>{
//   table+= `<tr><td>${employee.id}</td><td>${employee.name}</td></tr>`;
// });
// table += '</table>';
// document.getElementById('bbb').innerHTML=table;

// icecream
// let stocks = {
//                fruits:['strawberry','banana','apple','grapes'],
//                liquid:['water','ice'],
//                holder:['cone','cup','stick'],
//                toppings:['chocolate','peanuts']
//              };
// let order = (fruitsName,callProduction) => {
//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruitsName]} was selected`);
//     callProduction();
//   },2000);
  
// };

// let production = () => {
//   setTimeout(() => {
//     console.log('production has started');
  
//     setTimeout(() => {
//     console.log('fruits has been chopped');
    
//      setTimeout(() => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
    
//        setTimeout(() => {
//       console.log('machines has started');
    
//         setTimeout(() => {
//       console.log(`icecream has been placed on the ${stocks.holder[1]}`);

//          setTimeout(() => {
//       console.log(`${stocks.toppings[0]} is selected as toppings`); 
          
//            setTimeout(() => {
//         console.log('icecream is ready to serve');
      
//       },2000) ;

//       },3000);
     
//       },2000);  
    
//      },1000);  
    
//     },1000);
  
//   },2000);
 
// },0000);   

// };
// order(1,production);

//promise
// let stocks = {
//   fruits:['strawberry','banana','apple','grapes'],
//   liquid:['water','ice'],
//   holder:['cone','cup','stick'],
//   toppings:['chocolate','peanuts']
// };

// let is_shop_open = true;

// let order = (work,time) =>{
//   return new Promise((resolve, reject) => {
//     if (is_shop_open){
//       setTimeout( () => {
//         resolve(work())
//       },time);
//      }
     
//     else{
//       reject(console.log('our shop is closed'));
//     }
//   });
// };
// order(()=>console.log(`${stocks.fruits[1]} is selected`),2000)

// .then(() => {
//   return order(()=>console.log('production has started'),0000)
// })

// .then(()=>{
//   return order(()=>console.log('fruits has been chopped'),2000)
// })

// .then(()=>{
//   return order(()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is selected`),1000)
// })

// .then(()=>{
//   return order(()=>console.log('start the machine'),1000)
// })

// .then(()=>{
//   return order(()=>console.log(`icecream has been placed on the ${stocks.holder[0]}`),2000)
// })

// .then(()=>{
//   return order(()=>console.log(`${stocks.toppings[1]} is selected as topping`),3000)
// })

// .then(()=>{
//   return order(()=>console.log('serve the icecream'),2000)
// })

// .catch(()=>{
//   console.log('customer left');
// })

// .finally(()=>{
//   console.log('time up shop is close');
// })

// async, await
// let stocks = {
//     fruits:['strawberry','banana','apple','grapes'],
//     liquid:['water','ice'],
//     holder:['cone','cup','stick'],
//     toppings:['chocolate','peanuts']
//   };
  
//   let is_shop_open = true;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout (()=> {resolve()},ms);
//       }
//     else {
//       reject(console.log('shop is closed'));
//     }  
//   });
  
// }

// async function kitchen(){
//   try{
//     await time (2000)
//     console.log(`${stocks.fruits[2]} is selected`)

//     await time(0000)
//     console.log('start the production')

//     await time(1000)
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

//     await time(1000)
//     console.log('start the machine')

//     await time(2000)
//     console.log(`${stocks.holder[2]} is selected`)

//     await time(3000)
//     console.log(`${stocks.toppings[0]} is selected`)

//     await time(2000)
//     console.log('serve the icecream');


//   }
//   catch(error){
//     console.log('customer left',error);
//   }
//   finally{
//     console.log('day ended,bye');
//   }
// }
// kitchen();

// find all primenumber between 1 to 100 and their sum

// for (let num = 1; num<=100; num++){
//   let flag = 0;
//   for(let j=2; j < num; j++){
//     if(num % j == 0){
//       flag = 1;
//       break;
//     }
//   }
//   if (num > 1 && flag == 0){
//     console.log(num);
//   }
// }

// sort the Element in ascending order 

// const array = ['bala', 'arun', 'ranjan', 'selva'];
// console.log(array);
// const arr1 =array.sort();
// console.log(arr1);

// const num = [1,7,9,4,3];
// const num1 = num.sort( function(a,b){return a - b});
// console.log(num1);

//print odd and even number in array

// let num = [1,4,7,2,88,76];
// let even = 0;
// let odd = 0;

// for(let i = 0; i < num.length; i++){
//   if (num[i]%2===0){
//     console.log('even numbers',num[i]);
//     even += num[i];
//     console.log('sum of even',even);
//   }
//   else{
//     console.log('odd numbers',num[i]);
//     odd+= num[i];
//     console.log('sum of odd',odd);
//   }
// }

// call back is a function passed as an argument to another function

//1 const calculation = (a,b,sum) =>{
//   console.log(a+b);
//   sum();
// }
// const display = () =>{
//   console.log('result');
// }
// calculation(8,8,display);

//2 remove duplicates from an array

// let arr = [1,2,1,3,4,3];
// console.log(arr);
// let newArr = [...new Set(arr)];
// console.log(newArr);

// 3 to display current date and 

// const day = new Date();
// console.log(day);

// 4 to multiply and divide two number
// a = parseInt(prompt('enter number'));
// b = parseInt(prompt('enter number'));
// function multiplyBy() {
//   // a = document.getElementById("mul").value;
//   // b = document.getElementById("div").value;
 
//   document.getElementById('bbb').innerHTML= a*b; 
// }
// function divideBy() {
 
//   document.getElementById('bbb').innerHTML= a/b; 
  
// }

//to get website URL loading page

// console.log(document.URL);

//5 to get a difference between the given number and 13

// function difference(n) {
//   if (n <=13) {

//     return 13 - n;
    
//   } 
//   else {
//     return (n-13)*2;
//   }
// }
// console.log(difference(12));
// console.log(difference (20));

//6 to compute the sum of the two given integer

// let a = parseInt(prompt('enter a num'));
// let b = parseInt(prompt('enter a num'));

//   if (a===b){
//     console.log((a+b) *3); 
//   }
//   else {
//     console.log(a+b); 
//   }

//task 7

// const arr1 = [1,5,7,6,8,2];
// const arr2 = [33,5,4,6,3,7,1];
// function compare(arr1,arr2) {
//   const arr3 = [];
//   arr1.forEach((e1)=>arr2.forEach((e2)=>{
//     if (e1===e2){
//       arr3.push(e1)
//     }
//   }) 
//   );
//   return arr3;
//  };
// console.log(compare(arr1,arr2));

//task 8

// function add () {
//   const arr = [];
// for (let i = 1; i <= 150; i++){
//   if(i%6===0 && i%9!==0){
//     arr.push(i);
//   }
// }
//  return arr;
// }
// console.log(add());

//task 9
// function removeCharacter(str,charPos) {
//   part1 = str.substring(0,charPos);
//   part2 = str.substring(charPos + 1,str.length);
//   return (part1 + part2);  
// }
// console.log(removeCharacter('balaak',0));
// console.log(removeCharacter('balaak',2));
// console.log(removeCharacter('balaak',3));

// alternate method
// function removeCharacter() {
//   currentString = 'balaak';
//   newString = currentString.replace('b','') ;
//   return newString
// };
// console.log(removeCharacter());

// task 10
// function firstLast(str) {
//   if (str.length <= 1){
//      return str;
//   }
//   midChar = str.substring(1,str.length - 1);
//   return (str.charAt(str.length - 1)) + midChar + str.charAt(0)
// }
// console.log(firstLast('prabhu'));

// set 3 task 1
// function checkAnagram(a,b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if(len1!==len2){
//         console.log('invalid input');
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     if(str1===str2){
//         console.log('true');
//     }
//     else{
//         console.log('false');
//     }
// }
// checkAnagram('listen','silent')
 
// task 2
// const arr = [1,2,3,2,3];
// function getUnique(arr) {
//     const newArr = [];
//     for (let i of arr){
//         if(newArr.indexOf(i)=== -1){
//             newArr.push(i);
//         }
//     }
//     console.log(newArr);
    
// };
// getUnique(arr);

// task 3
// function factorial(x) {
//     if (x == 0){
//         return 1
//     }
//     else {
//         return x * factorial(x-1);
//     }
    
// }
// const num = parseInt(prompt('enter a number'));
// if (num>0){
//     const result = factorial(num);
//     console.log(`the factorial of ${num} is ${result}`);
// }
// else{
//     console.log('enter a positive number');
// }

// task 5
// const number = parseInt(prompt('enter a number'));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('fibonacci series:');

// for (let i=1; i<=number; i++){
//     console.log(n1);
//     nextTerm = n1 + n2 ;
//     n1 = n2 ;
//     n2 = nextTerm;
// }

//task 8
// for (let i = 0; i<=10; i++){
//     if(i%2===0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
// } 

//task9

// let marks = parseInt(prompt('enter your mark'));
// if(marks>90){
//     console.log('Your grade is A');
// }
// else if (marks>80){
//     console.log('Your grade is B');
// }
// else if (marks>70){
//     console.log('Your grade is C');
// }
// else if (marks>60){
//     console.log('your grade is D');
// }
// else if(marks<50){

//     console.log('You are Fail');
// }

//task 10 

// let age = 18;

//     if (age>=18){
//         console.log('you are eligible to vote');
//     }
    
//     else if(age<18) {
//         console.log('you are not eligible to vote');    
    
// }

//task 4
// function getGcd(x,y){
// if ((typeof x !== 'number') || (typeof y !== 'number')){
// return false;
// }
// x = Math.abs(x);
// y = Math.abs(y);
// while (y) {
//     var t = y;
//     y = x % y;
//     x = t;    
// }
// return x;
// }
// console.log(getGcd(22,32));

// set 4 task1
// let users=[];

// async function getUser()
// {
// let userData=await fetch('https://jsonplaceholder.typicode.com/users');
// let usersData=await userData.json();
// // console.log(usersData);
// return usersData;
// }

// getUser().then(data=>{
//     localStorage.setItem('users',JSON.stringify(data))
// });

// users=JSON.parse(localStorage.getItem('users'));

// const user = users.filter(e => e.id==3)
// let table = "<table border='1px'><tr><th>e.id</th><th>e.name</th><th>e.username</th></tr>";
// user.map(e => {
//  table+=`<tr><td>${e.id}</td><td>${e.name}</td><td>${e.username}</td></tr>`
// })
// table+='</table>';
// document.getElementById('bbb').innerHTML=table;

//  console.log(users);

//task 2
// const d = new Date();
// console.log(d);

//task 3
// for (let i=1; i<=100; i++){
//     if(i%3===0){
//         console.log('Fizz');
//     }
//     else if(i%5===0){
//         console.log('Buzz');
//     }
//     else if(i%15===0){
//         console.log('FizzBuzz');
//     }
//     else{
//         console.log(i);
//     }
// };

// task 6
// const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20];
// const even = array.filter(e => e%2===0);
// console.log(even);

//task 7
// const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20];
// const odd = array.filter(e => e%2==1)
// console.log(odd);

//task 8
// const name = ['arun','bala','selva','ranjan'];
// const arr = name.includes('bala');
// console.log(arr);
//  or
// const name = ['dhoni','kholi','rohit','kl'];
// if (name.indexOf('kl')!== -1){
//     alert('true');
// }
// else{
//     alert ('false')
// }

//task 4
// async function getData()
// {
//     let userData = await fetch('https://jsonplaceholder.typicode.com/users');
//     let usersData = await userData.json();
//     return usersData;
// }
// getData().then(data => {
//     localStorage.setItem('user',JSON.stringify(data))
// });
// user = JSON.parse(localStorage.getItem('user'));
// let table = '<table border="1px"><tr><th>id</th><th>name</th><th>userName</th></tr>'
// user.map(e => {
//     table += `<tr><td>${e.id}</td><td>${e.name}</td><td>${e.username}</td></tr>`
// })
// table += '</table>'
// document.getElementById('bbb').innerHTML=table;
// console.log(user);

// task 5
//let arr = ['bala','ak','arun'];
// let cloneArr = [...arr];
// console.log(cloneArr); // spread operator

// let cloneArr = JSON.parse(JSON.stringify(arr)); //json.parse() & json.stringify()
// console.log(cloneArr);

//let cloneArr = Object.assign([],arr); //object.assign
//console.log(cloneArr);

// task 10
//settimeout
// function myFunction() {
//     console.log('hello');
// }
// setTimeout(myFunction,2000);

//setinterval
// function myFunction(){
//     console.log('welcome');
//     console.log('thankyou');
// }
// setInterval(myFunction,2000);

// set5 task 1
// async function myFunction (){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('done'),2000)
//     });
//     let result = await promise;
//     console.log(result);
// }
// myFunction();
    
//task 2

// const count = true;
// let countValue = new Promise((resolve,reject)=>{
//     if(count){
//         resolve('there is count value')
//     }
//     else{
//         reject('there is no count value');
//     }
// });
// console.log(countValue);

//task 3
// let employee = 
//     {id:1,name:'bala'}


// localStorage.setItem('emp',JSON.stringify(employee))

//  let emp1= JSON.parse(localStorage.getItem('emp'));
//  console.log(emp1);

//task 4
// sessionStorage.setItem('animal','lion')
// let store = sessionStorage.getItem('animal')
// console.log(store);

//task 6
// let arr1=[1,2,3,4,5,6];
// let arr2 = arr1;
// arr2=[6,5,7,8,9];
// console.log(arr2);
// console.log(arr1);

//task 7 
//shalowcopy
// let obj1 = {
//     name:'kwid',
//     color:'Red',
//     price:500000
// };
// let obj2 = obj1;
// console.log(obj1);
// console.log(obj2);
// obj2.color = 'brown'
// console.log('obj1',obj1);
// console.log('obj2',obj2);

// deep copy
//  let car1 = {
//         name:'kwid',
//         color:'Red',
//         price:500000
//     };
// let newCar = JSON.parse(JSON.stringify(car1));
// console.log('car1',car1);
// console.log('newcar',newCar);
// newCar.color = 'Brown';
// console.log('car1',car1);
// console.log('newCar',newCar);

//task 8
// const array = ['bala','prabhu','arun']
//for loop
// for (let i = 0; i<array.length; i++){
//     console.log(array[i]);
// }

//for of
// for(let arr of array){
//     console.log(arr);
// }

//for in
// for(let arr in array){
//     console.log(array[arr]);
// }

//forEach
// array.forEach(arr=>{
//     console.log(arr);
// })

//task 9
// let age = parseInt(prompt('enter your age'));
// switch (true){
//     case age > 18:
//         console.log('you are eligible to vote');
//         break;
//     case age < 18:
//         console.log('you are not eligible to vote');
//         break;
//     default:
//         console.log('enter a valid number');        
// }

//task 10 defaultParameter
// function areaofTriangle(a,b=3) {
//    return (a*b)/2;
    
// }
// console.log(areaofTriangle(4));

// Day 1
// let num = 123456;
// let reverse = 0
// while (num>0) {

//     reverse = reverse * 10 + (num % 10);
//     num = parseInt(num / 10);
    
// }
// console.log(reverse);

//or

// let num = 34578;
// let rev = parseInt(num.toString().split('').reverse().join(''))
// console.log(rev);

//days between two dates

// let date1 = new Date("11-01-2022");
// let date2 = new Date("11-08-2022");
// const days = (date1,date2)=>{
//     let timeDifference = date1.getTime() - date2.getTime();
//     let totalDays = Math.ceil(timeDifference / (1000*60*60*24));
//     return totalDays;
// }
// console.log('days',days(date1,date2));

// day 1----
// 2..
// let date1 = new Date('11/11/2022');
// let date2 = new Date();
// let differnce = date1.getTime()- date2.getTime();
// console.log(differnce); 

// day 2---
// filter vowels and consonants in single Array

// function vowelsAndConsonants(s) 
// {
//     const letter = s.toString().split('');
//     console.log(letter);
//     let vowels = letter.filter(letter=>{
//         return letter.includes('a','e','i','o','u');
//     })
//        console.log(vowels);   
// }
// vowelsAndConsonants('prabhu')


  