'use strict';

//Q1: Print "Hello World" to the console. 
console.log("Hello World");

//Q2: Print your name using console.log(). 
console.log("Karthik");

//Q3: Print the sum of two numbers. 
console.log(6+10);

//Q4:Print the difference of two numbers. 
console.log(10-3);

//Q5: Print multiplication of two numbers. 
console.log(7*1);

//Q6: Print division of two numbers. 
console.log(49/7);

//Q7:Print remainder using %. 
console.log(41%7);

//Q8: Print concatenation of two strings. 
console.log("Karthik"+" "+"3111");

//Q9: Print a message with escape characters. 
console.log("I am learning \"JavaScript\"");

//Q10: Print "JavaScript" in uppercase. 
console.log("techwave".toUpperCase());

//Q11: Declare a var, let, and const and display them
var name = "Karthik";
let age = 22;
const city = "Shamshabad";
console.log("My Name is "+ name + ", i am " + age + " years old, and I live in " + city);

//Q12: Change value of a let variable. 
age = 23;
console.log("Now my age is " + age);

//Q13: Try changing value of const and observe error. 
/*city = "Goa"; 
here we get an error because we cannot change the const values. */

//Q14: Print the typeof a number. 
console.log(typeof 7);

//Q15: Print the typeof a string. 
console.log(typeof "Hi ra Pandu");

//Q16: Print the typeof a boolean. 
console.log(typeof false);

//Q17: Assign null and log it. 
let a = null;
console.log(a);

//Q18: Assign undefined and log it. 
let b;
console.log(b);

//Q19: Print truthy and falsy values. 
console.log(Boolean(1),Boolean(0)); 

//Q20: Convert string to number and vice versa. 
let a1 = "Karthik11";
let no = 7;
console.log(Number(a1)); // Convert string to number
console.log(String(no)); // Convert number to string

//Q21: Add 10 numbers together. 
let aa= 0;
for(let i=1; i<=10; i++)
{
    aa= aa + i;
}
console.log(aa);

//Q22: Square a number. 
let num = 7;
console.log(num * num);

//Q23: Cube a number. 
console.log(num * num * num);

//Q24: Find factorial of a number. 
let fact = 1;
for(let i=1; i<=5; i++)
{
    fact = fact * i;
}
console.log(fact);

//Q25: Find the sum of digits. 
let num1 = 3111;
let s = 0;
while(num1 > 0)
{
    
    let d = num1 % 10;
    s = s + d;
    num1 = Math.floor(num1/10);
}
console.log(s);

//Q26: Check if a number is even or odd. 

let n1 = 7;
if(n1 % 2 == 0)
{
    console.log("even");
}
else
{
    console.log("odd");
}

//Q27: Check positive, negative, or zero. 
let n2 = 7;
if(n2 > 0)
{
    console.log("positive");
}
else if(n2 < 0)
{
    console.log("negative");
}
else
{
    console.log("zero");
}

//Q28:Swap two variables without using a third variable. 
let x = 7;
let y = 14;

x= x+y;
y= x-y;
x=x-y;
console.log(x);
console.log(y);

//Q29: Print multiplication table of any number. 
let n3 = 9;
for(let i=1; i<=10; i++)
{
    console.log(n3 + " x " + i + " = " + n3*i);
}

//Q30: Check if a number is a prime. 
let n4 = 7;
let isPrime = true;
if(n4 <= 1)
{
    isPrime = false;
}
else
{
    for(let i=2; i<=Math.sqrt(n4); i++)
    {
        if(n4 % i == 0)
        {
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime);

//Q31: Print numbers from 1 to 10. 
for(let i=1; i<=10; i++)
{
    console.log(i);
}

//Q32: Print 10 to 1 (reverse). 
for(let i=10; i>=1; i--)
{
    console.log(i);
}

//Q33: Print all even numbers 1 to 20. 
for(let i=1; i<=20; i++)
{
    if(i%2==0)
    {
        console.log(i + " even");
    }
}

//Q34: Print all odd numbers 1 to 20. 
for(let i=1; i<=20; i++)
{
    if(i % 2 !=0)
    {
        console.log(i + " odd");
    }
}

//Q35: Print passengers numbers in steps of 5. 
for (let i = 5; i <= 70; i += 5) {
    console.log(i);
}

//Q36: Print star pattern: 

// * 

// ** 

// *** 

// **** 
for (let i = 1; i <= 4; i++) 
{
    console.log('*'.repeat(i));
}

//Q37: Print 10 stars in a single line. 
console.log('*'.repeat(10));

//Q38: Print a square of stars (5x5). 
for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(5));
}

//Q39: Print a triangle pattern of numbers. 
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row);
}

//Q40: Print a pattern of alternating x and O. 
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
        if ((i + j) % 2 === 0) {
            row += 'X ';
        } else {
            row += 'O ';
        }
    }
    console.log(row);
}

//Q41: Given age, check eligibility for voting. 
let age1 = 23;
if(age1 >= 18)
{
    console.log("Eligible for voting");
}
else
{
    console.log("Not eligible for voting");
}

//Q42: Check grade (A/B/C) based on marks. 
let marks = 79;
if(marks >= 90)
{
    console.log("A grade");
}
else if (marks>= 80)
{
    console.log("B grade");
}
else if (marks >= 70)
{
    console.log("C grade");
}
else
{
    console.log("Fail");
}

//Q43: Use switch to show day of the week. 
let day = 3;
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

//Q44: Check if a year is a leap year. 
let year = 2026;
if((year % 400 == 0))
{
    console.log(year + " is a leap year");
}
else
{
    console.log(year + " is not a leap year");
}

//Q45: Find largest of three numbers. 
let a2 = 22;
let b2 = 14;
let c2 = 7;
if(a2 >= b2 && a2 >= c2)
{
    console.log(a2 + " is the largest");
}
else if(b2 >= a2 && b2 >= c2)
{
    console.log(b2 + " is the largest");
}
else
{
    console.log(c2 + " is the largest");
}

//Q46: Check if input is between 10 and 50 (inclusive). 
let input = 17;
if(input >= 10 && input <= 50)
{
    console.log(input + " is between 10 and 50 (inclusive)");
}
else
{
    console.log(input + " is not between 10 and 50 (inclusive)");
}

//Q47: FizzBuzz 1 to 50 (Fizz if divisible by 3, Buzz if 5, FizzBuzz if both).  
for(let i=1; i<=50; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log(i + " FizzBuzz");
    }
    else if(i % 3 == 0)
    {
        console.log(i + " Fizz");
    }
    else if(i % 5 == 0)
    {
        console.log(i + " Buzz");
    }
    else
    {
        console.log(i);
    }
}

//Q48: Print “Good Morning” if time <12, else pm message. 
let time =  new Date().getHours();
if(time < 12)
{
    console.log("Good Morning");
}
else
{
    console.log("Good Afternoon");
}

//Q49: Find nearest to 100 between two numbers. 
let num2 = 78;
let num3 = 120;
if(Math.abs(100 - num2) < Math.abs(100 - num3))
{
    console.log(num2 + " is closer to 100");
}
else if(Math.abs(100 - num2) > Math.abs(100 - num3))
{
    console.log(num3 + " is closer to 100");
}
else
{
    console.log("Both numbers are equally close to 100");
}

//Q50: Check if character is vowel or consonant. 
let char = 'a';
if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
{
    console.log(char + " is a vowel");
}
else
{
    console.log(char + " is a consonant");
}

//Q51: Print length of a string. 
let str = "Kummari Karthik";
console.log("Length of the string is " + str.length);

//Q52: Reverse a string. 
let str1 = "Kummari Karthik";
let reversed = str1.split('').reverse().join('');
console.log("Reversed string is " + reversed);

//Q53: Capitalize first letter of a string. 
let str2 = "karthik";
let capitalized = str2.charAt(0).toUpperCase() + str2.slice(1) ;
console.log("Capitalized string is " + capitalized);

//Q54: Count vowels in a string.  
let str3 = "Kummari Karthik";
let count = 0;
for(let i = 0; i < str3.length; i++)
{
    if(str3[i] === 'a' || str3[i] === 'e' || str3[i] === 'i' || str3[i] === 'o' || str3[i] === 'u')
    {
        count++;
    }
}
console.log("Number of vowels in the string is " + count);

//Q55: Remove duplicate characters in a string. 
let str4 = "Kummari Karthik";
let uniqueChars = '';
for(let i = 0; i < str4.length; i++)
{
    if(!uniqueChars.includes(str4[i]))
    {
        uniqueChars += str4[i];
    }
}
console.log("String with duplicate characters removed: " + uniqueChars);

//Q56: Count occurrences of a character. 
let str5 = "Kummari Karthik";
let charToCount = 'k';
let charCount = 0;
for(let i = 0; i < str5.length; i++)
{
    if(str5[i].toLowerCase() === charToCount.toLowerCase())
    {
        charCount++;
    }
}
console.log("Number of occurrences of '" + charToCount + "' is " + charCount);

//Q57: Check if a string is a palindrome.  
let str6 = "madam";
let reversedStr = str6.split('').reverse().join('');
if(str6 === reversedStr)
{
    console.log(str6 + " is a palindrome");
}
else
{
    console.log(str6 + " is not a palindrome");
}

//Q58: Split a string into words. 
let str7 = "Kummari Karthik";
let words = str7.split(' ');
console.log("Words in the string are: " + words.join('\n'));

//Q59: Join an array of words into one string. 
let wordArray = ['Kummari', 'Karthik'];
let joinedString = wordArray.join(' ');
console.log("Joined string is: " + joinedString);

//Q60: Replace a substring with another. 
let str8 = "Karthik Kummari";
let replacedStr = str8.replace("Kummari", "Rebel");
console.log("Replaced string is: " + replacedStr);

//Q61: Create an array and print all elements. 
let myArray = [1, 2, 3, 4, 5];
for(let i = 0; i < myArray.length; i++)
{
    console.log(myArray[i]);
}

//Q62: Sum elements of an array. 
let sum = 0;
for(let i = 0; i < myArray.length; i++)
{
    sum = sum + myArray[i];
}
console.log("Sum of elements in the array is " + sum);

//Q63: Find the largest number in an array.  
let max = myArray[0];
for(let i = 1; i < myArray.length; i++)
{
    if(myArray[i] > max)
    {
        max = myArray[i];
    }
}
console.log("Largest number in the array is " + max);

//Q64: Find the smallest number in an array.  
let min = myArray[0];
for(let i = 1; i < myArray.length; i++)
{
    if(myArray[i] < min)
    {
        min = myArray[i];
    }
}
console.log("Smallest number in the array is " + min);

//Q65: Sort an array of numbers. 
myArray.sort((a, b) => b - a); // Sort in descending order
console.log("Sorted array is: " + myArray);

//Q66: Remove duplicates from an array.  
let arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5];
let uniqueArray = [];
for(let i = 0; i < arrayWithDuplicates.length; i++)
{
     let currentNumber = arrayWithDuplicates[i]; 

  if (uniqueArray.indexOf(currentNumber) === -1) {
    uniqueArray.push(currentNumber); 
  }
}
console.log("Array with duplicates removed: " + uniqueArray);

//Q67: Reverse an array. 
let reversedArray = [];
for(let i = myArray.length - 1; i >= 0; i--)
{
    reversedArray.push(myArray[i]);
}
console.log("Reversed array is: " + reversedArray);

//Q68: Print the first N elements.  
let n = 5; 
console.log("First " + n + " elements are:");
for(let i = 0; i < Math.min(n, myArray.length); i++)
{
    console.log(myArray[i]);
}

//Q69: Print the last N elements. 
console.log("Last " + n + " elements are:");
for(let i = Math.max(0, myArray.length - n); i < myArray.length; i++)
{
    console.log(myArray[i]);
}

//Q70: Check if input is an array. 
let input1 = [1, 2, 3];
if(Array.isArray(input1))
{
    console.log("Input is an array");
}
else
{
    console.log("Input is not an array");
}

//Q71: Create a student object with properties. 
let student = {
    name: "Karthik",
    age: 20,
    grade: "A"
};
console.log(student);

//Q72: Print all keys of an object. 
console.log("Keys of the student object are: " + Object.keys(student));

//Q73: Print all values of an object. 
console.log("Values of the student object are: " + Object.values(student));

//Q74: Add a new property to the object. 
student.city = "Shamshabad";
console.log("Updated student object:");
console.log(student);

//Q75: Delete a property from an object. 
delete student.grade;
console.log("Student object after deleting grade:");
console.log(student);

//Q76: Loop through object using for…in. 
for (let key in student) 
{
  let value = student[key]; 
  console.log(key + " : " + value);
}

//Q77: Nest an array inside an object. 
student.hobbies = ["reading", "swimming", "coding"];
console.log("Student object with nested array:");
console.log(student);

//Q78: Compare two objects to see if they are equal.  
let student2 = {
  name: "Karthik",
  age: 20,
  city: "Shamshabad",
  hobbies: ["reading", "swimming", "coding"]
};

function checkObjectsEqual(obj1, obj2) {

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {

    let key = keys1[i];

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let result = checkObjectsEqual(student, student2);

console.log(result);

//Q79: Convert object to JSON string. 
let jsonString = JSON.stringify(student);
console.log("JSON string of student object: " + jsonString);

//Q80: Convert JSON string back to object. 
let parsedObject = JSON.parse(jsonString);
console.log("Parsed object: " + parsedObject);

//Q81: Write a function to add two numbers. 
function add(a, b) {
    return a + b;
}
console.log("Sum of 5 and 7 is " + add(5, 7));

//Q82: Write a function to find square. 
function square(num) {
    return num * num;
}
console.log("Square of 7 is " + square(7));

//Q83: Function to check even/odd. 
function checkEvenOdd(num) {
    if(num % 2 == 0)
    {
        return "even";
    }
    else
    {
        return "odd";
    }
}
console.log("7 is " + checkEvenOdd(7));

//Q84: Function to find factorial. 
function factorial(n) {
    let fact = 1;
    for(let i=1; i<=n; i++)
    {
        fact = fact * i;
    }
    return fact;
}
console.log("Factorial of 5 is " + factorial(5));

//Q85: Function to count vowels in string. 
function countVowels(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
        {
            count++;
        }
    }
    return count;
}
console.log("Number of vowels in 'Kummari Karthik' is " + countVowels("Kummari Karthik"));

//Q86: Arrow function to double a number. 
const double = num => num * 2;
console.log("Double of 7 is " + double(7));

// Q87: Function to find largest of three. 
function largestOfThree(a, b, c) {
    if(a >= b && a >= c)
    {
        return a;
    }
    else if(b >= a && b >= c)
    {
        return b
    }
    else
    {
        return c;
    }
}
console.log("Largest of 22, 14, and 7 is " + largestOfThree(22, 14, 7));

// Q88: Function to reverse a string. 
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reversed string of 'Karthik' is " + reverseString("Karthik"));

// Q89: Function to merge two arrays. 
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log("Merged array is: " + mergeArrays([1, 2, 3], [4, 5, 6]));

// Q90: Function to compute average of numbers. 
function average(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log("Average of [1, 2, 3, 4, 5] is " + average([1, 2, 3, 4, 5]));

// Q91: Write FizzBuzz with functions. 
function fizzBuzz(n) {
    for(let i=1; i<=n; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            console.log(i + " FizzBuzz");
        }
        else if(i % 3 == 0)
        {
            console.log(i + " Fizz");
        }
        else if(i % 5 == 0)
        {
            console.log(i + " Buzz");
        }
        else
        {
            console.log(i);
        }
    }
}
console.log("FizzBuzz from 1 to 50:");
fizzBuzz(50);

// Q92: Use loops + arrays: filter even numbers. 
function filterEvenNumbers(arr) {
    let evenNumbers = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 == 0)
        {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}
console.log("Even numbers in [1, 2, 3, 4, 5, 6] are: " + filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Q93: Create a simple calculator (add/sub/mul/div). 
function calculator(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 'Error: invalid operator';
    }
}
console.log("5 + 3 =", calculator(5, 3, '+'));
console.log("10 - 4 =", calculator(10, 4, '-'));
console.log("6 * 7 =", calculator(6, 7, '*'));
console.log("10 / 2 =", calculator(10, 2, '/'));
console.log("10 / 2 =", calculator(10, 2, '/')); 


// Q94: Find sum of odd numbers in array.
function sumOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

let sampleArray = [1, 2, 3, 4, 5, 6, 7];
console.log("Sum of odd numbers is " + sumOddNumbers(sampleArray));

// Q95: Count how many positive numbers in array.
function countPositiveNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] > 0) count++;
    }
    return count;
}

let mixedArray = [-2, 0, 1, 5, -3, 7];
console.log("Count of positive numbers is " + countPositiveNumbers(mixedArray));

// Q96: Check if two arrays share a common element.  
function arraysHaveCommonElement(arr1, arr2) {
    const set1 = new Set(arr1);
    for (const el of arr2) {
        if (set1.has(el)) return true;
    }
    return false;
}

console.log(arraysHaveCommonElement([1, 2, 3], [4, 5, 3])); 
console.log(arraysHaveCommonElement(['a', 'b'], ['c', 'd'])); 

//Q97: Find frequency of each element in array. 
function elementFrequencies(arr) {
    const freq = {};
    for (const el of arr) {
        freq[el] = (freq[el] || 0) + 1;
    }
    return freq;
}

const sampleArray1 = [1, 2, 2, 3, 'a', 'a', 1];
console.log("Frequencies:", elementFrequencies(sampleArray1));

// Q98: Generate Fibonacci series up to N. 
function fibonacci(n) {
  let a = 0;
  let b = 1;

  console.log(a);
  console.log(b);

  for (let i = 2; i <= n; i++) {
    let next = a + b;
    console.log(next);

    a = b;
    b = next;
  }
}

fibonacci(10);

// Q99: Check if array is sorted. 
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false

// Q100: Print multiples of 3 from 1 to 100. 
function printMultiplesOf3() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
printMultiplesOf3();