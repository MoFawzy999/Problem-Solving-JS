//Sheet one
//problem 1 :
function reverseString(str) {
  let strToArray = str.split("");
  let revArr = [];
  for (let i = strToArray.length - 1; i >= 0; i--) {
    revArr.push(strToArray[i]);
  }
  return revArr.join("");
}
//console.log(reverseString('Moahmed'));

//problem 2 :
function strIsEqual(str1, str2) {
  if (str1.toLowerCase() == str2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
//console.log(strIsEqual("mohamed","MOHAMED"));

//problem 3 :
function isUpperCase(str) {
  if (str == str.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
/*console.log(isUpperCase('AAA'));
console.log(isUpperCase('aaa'));*/

//problem 4 :
function cutString(str, startIndex, endIndex) {
  let newStr = str.slice(startIndex, endIndex + 1);
  return newStr;
}
// anothrt resolve (native)
/*function cutString(str,startIndex,endIndex){
  let newStr = [];
  for(let i = startIndex ; i <= endIndex ; i++){
      newStr.push(str.split("")[i])
  }
  return newStr.join("") ;
}*/

//problem 5 :
function createFullName(firstName, middleName, lastName) {
  let fullName = `${firstName} ${middleName} ${lastName}`;
  return fullName;
}

//problem 6 :
function checkPalindormeString(str) {
  const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}
//console.log(checkPalindormeString("Madam, I'm Adam"));

//problem 7 :
function removeStartSpaceAndEndSpace(str) {
  return str.trim();
}
//console.log(removeStartSpaceAndEndSpace("  vffvf  "));

//problem 8 :
function removeOfromString(str) {
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "o" && arr[i] != "O") {
      newArr.push(arr[i]);
    }
  }
  return newArr.join("");
}
/*console.log(removeOfromString('Eraoa'));
console.log(removeOfromString('oMOamen'));*/

//problem 9 :
function checkSpecificURL(url) {
  let arr = url.split(".");
  if (arr[0] == "ww" && arr[arr.length - 1] == "eraa") {
    return true;
  } else {
    return false;
  }
}
/*console.log(checkSpecificURL('ww.moamen.eraa'));
console.log(checkSpecificURL('w3w.sherif.err'));*/

//problem 10 :
function checkSubStrings(str, sub1, sub2) {
  if (str.includes(sub1) && str.includes(sub2)) {
    return true;
  } else {
    return false;
  }
}
/*console.log(checkSubStrings('SoWhatYesOhh','What','Ohh'));
console.log(checkSubStrings('SoWhatYesOhh','So','Ah'));*/
//======================================================================================
//Sheet two

//problem 1 :
function add(num1, num2) {
  let sum = num1 + num2;
  if (num1 == 15 || num2 == 15 || sum == 15) {
    return true;
  } else {
    return false;
  }
}

//problem 2 :
function isPerfectSquare(num) {
  if (num === Math.sqrt(num) * Math.sqrt(num)) {
    return true;
  } else {
    return false;
  }
}
/*console.log(isPerfectSquare(16));
console.log(isPerfectSquare(60));*/

//problem 3 :
function checkMutatedVariable(...nums) {
  let mutatedVar = nums.findIndex((num) => {
    return num === 0;
  });
  return mutatedVar + 1;
}
/*console.log(checkMutatedVariable(1,2,0,4,5));
console.log(checkMutatedVariable(0, 2, 3, 4, 5));*/

//problem 4 :
function textTransform(letter) {
  if (letter == letter.toLowerCase()) {
    return letter.toUpperCase();
  } else {
    return letter.toLowerCase();
  }
}
/*console.log(textTransform("mohamed"));
console.log(textTransform("MOHAMED"));*/

//problem 5 :
function addOddNumber(num1, num2) {
  let sum = 0;
  for (let i = num1 + 1; i < num2; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
}
/*console.log(addOddNumber(10,30));
console.log(addOddNumber(0,10));*/

//problem 6 :
function luckOrUnLucky(num) {
  let nums = [];
  for (let i = 0; i < num; i++) {
    let input = +prompt("Please Enter Number :");
    nums.push(input);
  }
  let specificnum = nums.find((num) => {
    return num === 4 || num === 7;
  });
  if (specificnum) {
    console.log("It’s your lucky day");
  } else {
    console.log("It’s not your lucky day");
  }
}
/*luckOrUnLucky(5);
luckOrUnLucky(3);*/

//Problem 7 :
function getAllDivisors(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
}
//getAllDivisors(12);

//Problem 8 :
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function getPrimeNumbers(num) {
  let primeNums = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primeNums.push(i);
    }
  }
  primeNums.forEach((num) => {
    console.log(num);
  });
}
//getPrimeNumbers(5);

//Problem 9 :
function countEvenOddNumbers(n) {
  let numbers = [];
  let oddNumbers = [];
  let evenNumbers = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let inputs = +prompt("Please Enter Number:");
    numbers.push(inputs);
  }
  numbers.forEach((number) => {
    sum += number;
    if (number % 2 != 0) {
      oddNumbers.push(number);
    } else {
      evenNumbers.push(number);
    }
  });
  console.log(`Sum of Numbers : ${sum}`);
  console.log(`Odd Numbers: ${oddNumbers.length}`);
  console.log(`Even Numbers ${evenNumbers.length}`);
}
//countEvenOddNumbers(5);

//Problem 10 :
function pumGame(n) {
  let pum = "";
  let p = 1;
  for (let i = 0; i < n; i++) {
    pum += `${p} ${p + 1} ${p + 2} PUM - `;
    p += 4;
  }
  return pum;
}
//console.log(pumGame(5));

//Problem 11 :
function checkNumberPositiveNegativeZero(num1, num2) {
  let productNum = num1 * num2;
  if (productNum < 0) {
    console.log("Negative");
  } else if (productNum > 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}
/*checkNumberPositiveNegativeZero(-1,3);
checkNumberPositiveNegativeZero(2,5);*/

//Problem 12 :
function finalGrade(examGrade, projectsGrade) {
  if (examGrade > 0 && examGrade <= 100 && projectsGrade > 0) {
    if (examGrade > 90 && projectsGrade > 10) {
      console.log("Grade : 100");
    } else if (examGrade > 75 && projectsGrade >= 5) {
      console.log("Grade : 90");
    } else if (examGrade > 50 && projectsGrade >= 2) {
      console.log("Grade : 75");
    } else {
      console.log("Grade : 0");
    }
  }
}
/*finalGrade(100,12);
finalGrade(95,12);
finalGrade(85,5);
finalGrade(55,5);*/
//===========================================================================
//Sheet 3 :

//Problem 1 :
function getLeftDigit(num) {
  let arrNums = String(num).split("");
  return +arrNums[0];
}
/*console.log(getLeftDigit(432));
console.log(getLeftDigit(12));*/

//Problem 2 :
function getCountNums(arr) {
  let positiveCount  = 0 ;
  let negativeCount  = 0 ;
  let oddCount  = 0 ;
  let evenCount  = 0 ;

  arr.forEach((num) => {
    if(num % 2 == 0){
      evenCount++ ;  
    }else{
      oddCount++ ;
    }
    if(num != 0){
      if(num > 0){
        positiveCount++ ;
      }else{
        negativeCount++ ;
      }
    }
  });
  console.log(`Positive: ${positiveCount} \nNegative: ${negativeCount}\nEven: ${evenCount}\nOdd: ${oddCount}`);
}
/*getCountNums([5,7,-2,0,4,-8,-3,6]);
getCountNums([0, 2, 4, 6]);*/

//Problem 3 : 
function checkIntegers(arr){
  let newArr = [] ;
   arr.forEach( (el)=>{
      if(typeof el == 'number' && !Number.isNaN(el)){
        newArr.push(el);
      }
   });
   return newArr ;
}
/*console.log(checkIntegers([1,NaN,2,'a','aba']));
console.log(checkIntegers(['Ahmed',12,'Mohamed',34,'Mahmoud', 12, 54]));*/

//Problem 4: 
function sliceArr(arr,startIndex,endIndex){
  let newArr = [] ;
  for(let i = startIndex ; i < endIndex ; i++){
    newArr.push(arr[i]);
  }
  return newArr ;
}
//console.log(sliceArr([1,2,3,4,5,6],1,4));

//Problem 5 : 
function getLargestNumbers(arr){
  let largestNumbers = [] ;
  let max = 0 ;
  for(let i = 0 ; i < arr.length ; i++){
    if(Array.isArray(arr[i])){
       for(let j = 0 ; j < arr[i].length ; j++){
         if(arr[i][j] > max){
           max = arr[i][j] ;
         }
       }
    }
    largestNumbers.push(max);
    max = 0 ;
  }
  return largestNumbers ;
}
/*console.log(getLargestNumbers([[1,2,3,4],[45,73,12],[13,13,10]]));
console.log(getLargestNumbers([[1,2,5,4],[45,73,12],[13,18,10]]));*/

//Problem 6 : 
function strLong(str){
  let countChar = 0 ;
   if(str.length <= 10){
     return str ;
   }else{
     let arr = str.split("");
     for(let i = 1 ; i < arr.length-1 ; i++){
       countChar++ ;
     }
     return `${arr[0]}${countChar}${arr[arr.length-1]}`;
   }
}
/*console.log(strLong('word'));
console.log(strLong('internationalization'));
console.log(strLong('pneumonoultramicroscopicsilicovolcanoconiosis'));*/

//Problem 7 :
function checkTypeChars(str){
  if(str.length == 4){
     let arrStr = str.split("");
    for(let i = 0 ; i < arrStr.length ; i++){
      if(arrStr[i] == arrStr[i+1] && arrStr[i+2] == arrStr[arrStr.length - 1]
        || arrStr[i] == arrStr[i+2] && arrStr[i+1] == arrStr[arrStr.length - 1]
        || arrStr[i] == arrStr[arrStr.length - 1] && arrStr[i+1] == arrStr[i+2]
      ){
       return true ;
      }else{
        return false ;
      }
    }
  }
}
/*console.log(checkTypeChars('ASSA'));
console.log(checkTypeChars('STTO'));
console.log(checkTypeChars('FFEE'));
console.log(checkTypeChars('STOS'));
console.log(checkTypeChars('TOTS'));*/


//Problem 8 : 
let turn = 'x' ;
let title = document.querySelector(".title");
let squares = [] ;

function game(id){
  let element = document.getElementById(id);
  if(turn === 'x' && element.innerHTML == "" ){
    element.innerHTML = 'X' ;
    turn = 'o' ;
    title.innerHTML = 'O';
  }else if(turn === 'o' && element.innerHTML == ""){
    element.innerHTML = 'O' ;
    turn = 'x' ;
    title.innerHTML = 'X' ;
  }
  winner();
}
function winner(){
  for(let i = 1 ; i < 10 ; i++){
    squares[i] = document.getElementById(`item${i}`).innerHTML;
  }
  if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ""){
    end(1,2,3);
  }else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ""){
    end(4,5,6);
  }else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != ""){
    end(7,8,9);
  }else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ""){
    end(1,4,7);
  }else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ""){
    end(2,5,8);
  }else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ""){
    end(3,6,9);
  }else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ""){
    end(1,5,9);
  }else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ""){
    end(3,5,7);
  }else{
    if(squares[1] != "" && squares[2] != "" && squares[3] != "" && squares[4] != ""
      && squares[5] != "" && squares[6] != "" && squares[7] != "" && squares[8] != ""
      && squares[9] != "" ){
      draw();
    }
  }
}
function end(num1,num2,num3){
  document.getElementById(`item${num1}`).style.backgroundColor = "#000";
  document.getElementById(`item${num2}`).style.backgroundColor = "#000";
  document.getElementById(`item${num3}`).style.backgroundColor = "#000";
  title.innerHTML = `${squares[num1]} Winner` ;
  setInterval(() => {
     title.innerHTML += '..' ;
  }, 1000);
  setTimeout(()=>{
    location.reload();
  },4000);
}
function draw(){
  title.innerHTML = `Draw` ;
  setInterval(() => {
    title.innerHTML += '..' ;
 }, 1000);
  setTimeout(()=>{
    location.reload();
  },4000);
}

//Problem 9 :
function getFirstAndLastIndexOfChar(arr,char){
  let newArr = [] ;
  arr.forEach( (c,i)=>{
    if(c == char){
      newArr.push(i);
    }
  })
  return [newArr[0],newArr[newArr.length - 1]] ;
}
/*console.log(getFirstAndLastIndexOfChar(['h','e','l','l','o'],'l'));
console.log(getFirstAndLastIndexOfChar(['c','i','r','c','u','m','l','o','c','u','t','i','o','n','n','n']
  ,'c'));*/

//Problem 10 : 
function checkSumOfNumber(arr,target){
  let sum = 0  , left = 0  , right = 0  ;
  while(right < arr.length){
    sum += arr[right];
    while(sum > target){
      sum -= arr[left];
      left++ ;
    }
    if(sum == target){
      return true ;
    }
    right++;
  }
  return false ;
}
console.log(checkSumOfNumber([1,2,3,4,5],7));
console.log(checkSumOfNumber([1,2,3,4,5],10));
console.log(checkSumOfNumber([1,2,3,4,5],20));