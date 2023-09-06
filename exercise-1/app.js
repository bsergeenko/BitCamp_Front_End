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