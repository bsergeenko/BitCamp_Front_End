// #1
// console.log("Hello World")

// #2
// let num = 5
// console.log(num)

// #3
// let num1 = 2
// let num2 = 8
// let sum = num1 + num2
// console.log(sum)

// #4
// let num1 = 2
// let num2 = 8
// let sub = num1 - num2
// console.log(sub)

// #5
// let num1 = 2
// let num2 = 8
// let mult = num1 * num2
// console.log(mult)

// #6
// let num1 = 8
// let num2 = 2
// let div = num1 / num2
// console.log(div)

// #7
// let num1 = 9
// let num2 = 2
// let result = num1 % num2
// console.log(result)

// #8
// let something = "Something"
// console.log(something.length)

// #9
// let str1 = "some"
// let str2 = "thing"
// console.log(str1 + str2)

// #10
// let str = "something"
// console.log(str.toUpperCase())

// #11
// let str = "SomethING"
// console.log(str.toLocaleLowerCase())

// #12
// let num = 9
// if(num % 2 === 0){
//     console.log("number is even")
// }else{
//     console.log("number is odd")
// }

// #13
// let num = 16
// if(num > 0){
//     console.log("number is positiv")
// }else if(num < 0){
//     console.log("number is negativ")
// }else{
//     console.log("number is zero")
// }

// #14
// let num1 = 14
// let num2 = 2
// if(num1 > num2){
//     console.log(`max is ${num1}`)
// }else if(num1 < num2){
//     console.log(`max is ${num2}`)
// }else{
//     console.log("numbers are equal")
// }

// #15
// let num1 = 14
// let num2 = 2
// if(num1 > num2){
//     console.log(`min is ${num2}`)
// }else if(num1 < num2){
//     console.log(`min is ${num1}`)
// }else{
//     console.log("numbers are equal")
// }

// #16
// let num1 = 15
// let num2 = 2
// if(num1 % num2 === 0){
//     console.log(`${num1} is divisible by ${num2}`)
// }else{
//     console.log(`${num1} is not divisible by ${num2}`)
// }

// #17
// let str = "something"
// if(str.length == 0){
//     console.log("string is empty")
// }else{
//     console.log("string is NOT empty")
// }

// #18
// let str = "here comes the sun"
// if (str.toLocaleLowerCase().includes("sun")){
//     console.log("includes")
// }else{
//     console.log("dont")
// }

// #19
// for(let i=0; i<=10; i++){
//     console.log(i)
// }


// #20
// let num = 17
// if (num <= 1){
//     console.log(`${num} is not Prime`) 
// }
// for (i=2; i<num; i++){
//     if (num % i === 0){
//         console.log(`${num} is not Prime`)
//         break
//     }else{
//         console.log(`${num}  is Prime`)
//         break
//     }
// }

// #21
// let str = "Something"
// let reverseStr = ""
// for (i=str.length-1; i>=0; i--){
//     reverseStr += str[i]
// }
// console.log(reverseStr)

// #22
// let arr = [10, 44, 100]
// let result = 0
// for (i=0; i<arr.length; i++){
//     result+=arr[i]
// }
// console.log(result)

// #23
// let arr = [10, 44, 100]
// let result = 0
// for (i=0; i<arr.length; i++){
//     result+=arr[i]
// }
// console.log(result/arr.length)

// #24
// let arr = [1, 2, 2, 2, 3, 3, 4]
// let newArr = []
// for (i=0; i<arr.length; i++){
//     if (!newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

// #25
// let arr = [5, 7, 2, 9, 3, 8]
// arr.sort((a, b) => a - b)
// console.log(arr)

// #26
// let arr = [5, 7, 2, 9, 3, 8]
// arr.sort((a, b) => a - b)
// console.log(arr[arr.length - 1])

// #27
// let arr = [5, 7, 2, 9, 3, 8]
// arr.sort((a, b) => a - b)
// console.log(arr[0])

// #28
// let arr = [5, 7, 2, 9, 3, 8]
// let element = 8
// if (arr.includes(element)){
//     console.log(`This array contains ${element}`)
// }else{
//     console.log(`This array do not contains ${element}`)
// }

// #29  ???????????????
// let arr = [5, 7, 2, 9, 3, 8]
// let element = 7
// let index = arr.indexOf(element)
// let newArr = arr.splice(index, 1)
// console.log(newArr)

// #30
// let arr = [5, 7, 2, 9, 3, 3, 8, 7, 7]
// let element = 7
// let counter = 0
// for (i=0; i < arr.length; i++){
//     if (arr[i] === element){
//         counter++
//     }
// }
// console.log(counter)

// #31
// let sentence = "here comes the sun"
// let words = sentence.split(" ")
// let longestWordLength = 0
// for(let i=0; i<words.length; i++){
//     if (words[i].length>longestWordLength){
//         longestWordLength = words[i].length
//     }
// }
// console.log(longestWordLength)

// #32
// function isPalindrome(str) {
//     let reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
//   }
//   let str = "babab"
//   const result = isPalindrome(str);
//   if (result) {
//     console.log(`${str} is a palindrome.`);
//   } else {
//     console.log(`${str} is not a palindrome.`);
//   }

// #33
// let sentence = "here comes the sun."
// let words = sentence.split(" ")
// for(let i = 0; i < words.length; i++){
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
// }
// let CapitalizedSentence = words.join(" ")
// console.log(CapitalizedSentence)

// #34
// let array = [1, 5, 8, 10, 55, 80];
// result = 0;
// for(let i = 0; i < array.length; i++){
//     if (array[i] % 2 === 0){
//         result += array[i];
//     }
// }
// console.log(result);

// #35
// let sentence = "here comes the sun";
// let reverseSentence = sentence.split(" ").reverse().join(" ");
// console.log(reverseSentence);

// #36
// function findSecondLargest(arr) {
//     arr.sort(function(a, b) {
//       return b - a;
//     });
//     return arr[1];
//   }

// let array = [10, 5, 7, 2, 8];
// let secondLargest = findSecondLargest(array);
// console.log(`The second largest number is: ${secondLargest}`);

// #37
// function areArraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//       return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }

// let array1 = [1, 2, 3, 4];
// let array2 = [1, 2, 3, 4];

// if (areArraysEqual(array1, array2)) {
// console.log("The arrays are equal.");
// } else {
// console.log("The arrays are not equal.");
// }

// #38
// function findIndex(element, arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === element){
//             return i;
//         }
//     }
// }
// let element = 5;
// let array = [1, 9, 3, 6, 5, 7];
// console.log(findIndex(element, array))

// #39
// function removeFalsyValues(arr) {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i]) {
//         newArray.push(arr[i]);
//       }
//     }
//     return newArray;
//   }

// let array = [1, false, true, "", "hello", null, undefined, NaN];
// let newArray = removeFalsyValues(array);
// console.log(newArray);

// #40
// function findLargestElement(arr) {
//     let largest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if(arr[i][j] > largest) {
//                 largest = arr[i][j];
//             }
//         }
//     }
//     return largest;
// }
// let multiDimArray = [
//     [3, 8, 1],
//     [10, 5, 7],
//     [2, 9, 15, 4],
// ];
  
// let largestElement = findLargestElement(multiDimArray);
// console.log(`The largest element is: ${largestElement}`);

// #41
// function removeDublicates(arr){
//     let newArr = [];
//     for (let item of arr) {
//         if (!newArr.includes(item)) {
//             newArr.push(item); 
//         }
//     }
//     return newArr;
// }

// let array = [1, 1, 5, 7, 7, 7, 9, 5, 1];
// console.log(removeDublicates(array));

// #42
// function findLastIndexOf(arr, element) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === element) {
//             return i;
//         }
//     }
// }
  
// const array = [1, 2, 3, 4, 2, 5, 2];
// const element = 2;
// const lastIndex = findLastIndexOf(array, element);

// console.log(`The last occurrence of ${element} is at index ${lastIndex}.`);

// #43
// function mergeSortedArrays(arr1, arr2) {
//     const mergedArray = [...arr1, ...arr2];
//     return mergedArray.sort((a, b) => a - b);
// }

// let array1 = [1, 3, 5, 7, 9];
// let array2 = [2, 4, 6, 8, 10];

// console.log(mergeSortedArrays(array1, array2));  

// #44
// const arr = ["baia", "sun", "you", "boy", "girl", "man", "airport"];
// console.log(arr.sort());

// #45
// function findCommonElements(arrays) {
//     let commonElements = arrays[0];
  
//     for (let i = 1; i < arrays.length; i++) {
//       let currentArray = arrays[i];
//       commonElements = commonElements.filter((element) => currentArray.includes(element));
//     }
//     return commonElements;
// }

// let array1 = [1, 2, 3, 4, 5, 7];
// let array2 = [3, 4, 5, 6, 7];
// let array3 = [5, 6, 4, 7, 8, 9, 1];

// console.log(findCommonElements([array1, array2, array3]));

// #46
// function filterWords(sentence) {
//     let commonWords = ["the", "a", "is", "and"];
//     let words = sentence.toLowerCase().match(/\b\w+\b/g);
//     const uniqueWords = [];
//     for (let word of words){
//         if(!uniqueWords.includes(word) && !commonWords.includes(word)){
//             uniqueWords.push(word);
//         }
//     }
//     return uniqueWords.sort();
// }
// let sentence = "here comes the sun, sun is shinning";
// console.log(filterWords(sentence));

// #47
// function isPangram(string) {
//     let lowercaseString = string.toLowerCase();
//     let uniqueLetters = [];

//     for (let char of lowercaseString){
//         if (/^[a-z]$/.test(char) && !uniqueLetters.includes(char)){
//             uniqueLetters.push(char);
//         }
//     }
//     return uniqueLetters.length === 26;
// }

// let string1 = "The quick brown fox jumps over the lazy dog.";
// let string2 = "Here comes the sun";
// console.log(isPangram(string1));
// console.log(isPangram(string2));

// #48
// function getUniquePropertyValues(objects, propertyName) {
//     let uniqueValues = [];
  
//     for (let obj of objects) {
//         let value = obj[propertyName];
//         if (!uniqueValues.includes(value)) {
//           uniqueValues.push(value);
//         }
//     }
//     return uniqueValues;
// }

// let obj = [
//     { id: 1, name: "Baia" },
//     { id: 2, name: "Sandro" },
//     { id: 3, name: "Anano" },
//     { id: 4, name: "Baia" },
// ];
// console.log(getUniquePropertyValues(obj, "name"));
  
// #49
// function countCharacters(str) {
//     let characterCount = {};
  
//     for (let i = 0; i < str.length; i++){
//         let char = str[i];

//         if (char === ' '){
//             continue;
//         }
  
//         if (characterCount[char]) {
//             characterCount[char]++;
//         } else {
//             characterCount[char] = 1;
//         }
//     }
//     return characterCount;
// }
// let str = "here comes the sun";
// console.log(countCharacters(str));
  
// #50
// function longestUniqueSubstring(str) {
//   let longestSubstring = "";
//   let currentSubstring = "";
//   let startIndex = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (!currentSubstring.includes(char)) {
//       currentSubstring += char;
//     } else {
//       startIndex += currentSubstring.indexOf(char) + 1;
//     }

//     if (currentSubstring.length > longestSubstring.length) {
//       longestSubstring = currentSubstring;
//     }
//   }
//   return longestSubstring;
// }
// let str = "abcdabcabcdbb";
// console.log(longestUniqueSubstring(str));
  

// #51
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }
  
// #52
// let dayNumber = 5;

// switch (dayNumber) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day number");
// }

// #53
// let numberOfHellos = prompt("Enter a number: ");
// let count = 0;
// while (count < numberOfHellos) {
//     console.log("Hello!");
//     count++;
// }

// #54
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }

// console.log("The sum of numbers from 1 to 100 is:", sum);

// #55
// let monthNum = Number(prompt("Enter a number: "));

// switch(monthNum){
//     case 1:
//          console.log(31);
//         break;
//     case 2:
//         console.log(28);
//         break;
//     case 3:
//         console.log(31);
//         break;
//     case 4:
//         console.log(30);
//         break;
//     case 5:
//         console.log(31);
//         break;
//     case 6:
//         console.log(30);
//         break;
//     case 7:
//         console.log(31);
//         break;
//     case 8:
//         console.log(31);
//         break;
//     case 9:
//         console.log(30);
//         break;
//     case 10:
//         console.log(31);
//         break;
//     case 11:
//         console.log(30);
//         break;
//     case 12:
//         console.log(31);
//         break;
//     default:
//         console.log("Invalid month number");
// }

// #56
// let number = Number(prompt("Guess a number: "));
// let secretNumber = 7;
// while(secretNumber!==number){
//     number = Number(prompt("not right, try again: "));
// }
// console.log("Congratulation");

// #57
// let grade = prompt("Enter a grade: ").toLocaleUpperCase();
// switch(grade){
//     case "A":
//         console.log("Excellent");
//         break;
//     case "B":
//         console.log("Good");
//         break;
//     case "C":
//         console.log("Average");
//         break;
//     case "D":
//         console.log("Below Average");
//         break;
//     case "F":
//         console.log("Fail");
//         break;
//     default:
//         console.log("Invalid grade");
// }

// #58
// let password = prompt("Enter a password: ");
// let correctPassword = "12345";
// while(password!==correctPassword){
//     password = prompt("Enter a password: ");   
// }
// console.log("correct");

// #59
// function sumDigits(number) {
//     let str = String(number);
//     let sum = 0;
//     for(let i=0; i<str.length; i++){
//         sum += Number(str[i]);
//     }
//     return sum;
// }
// console.log(sumDigits(1234));
  
// #60
// function countBs(str){
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i]==="B"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countBs("BaiaByEBye"))

// #61
// function min(x, y){
//     return Math.min(x,y);
// }
// console.log(min(42, 11));

// #62
// function generateRandomNumber(min, max){
//     let range = max - min;
//     let random = Math.floor(Math.random() * (range + 1)) + min;
//     return random;
// }
// console.log(generateRandomNumber(5, 10));

// #63
// function capitalizeWords(sentence){
//     let words = sentence.split(" ");
//     let capitalizedWords = [];
//     for(let word of words){
//         let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//         capitalizedWords.push(capitalizedWord);
//     }
//     return capitalizedWords.join(" ");
// }
// console.log(capitalizeWords("here comes the sun"));