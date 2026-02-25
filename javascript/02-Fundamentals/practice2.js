//Q1.Remove duplicates from an array.
let arr = [1, 2, 3, 4, 5, 1, 2, 3];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

//Q2. Sum all elements of a numeric array using reduce().
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//Q3.Flatten a nested array (flat() with depth).
let nestedArray = [1, 2, [3, 4], [5, 6, [7, 8]]];
let flattenedArray = nestedArray.flat(2);
console.log(flattenedArray);

//Q4. Find the intersection of two arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
let intersection = array1.filter(value => array2.includes(value));
console.log(intersection);

//Q5. Swap first two elements of an array (use destructuring).
let swapArray = [1, 2, 3, 4, 5];
[swapArray[0], swapArray[1]] = [swapArray[1], swapArray[0]];
console.log(swapArray);

//Q6. Return a new array with only even numbers.
let evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray = evenNumbers.filter(num => num % 2 === 0);
console.log(evenArray);

// Q7. Implement your own map() function (not using built-ins).
function myMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}
let mappedArray = myMap([1, 2, 3], x => x * 2);
console.log(mappedArray);

// Q8. Sort an array of objects by a property (e.g., age).
let people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];
people.sort((a, b) => a.age - b.age);
console.log(people);

// Q9. Check if array includes a value (don’t use includes()).
let checkArray = [1, 2, 3, 4, 5];
let valueToCheck = 3;
let includesValue = false;
for (let i = 0; i < checkArray.length; i++) {
  if (checkArray[i] === valueToCheck) {
    includesValue = true;
    break;
  }
}
console.log(includesValue);

// Q10. Implement your own filter() function.
function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}
let filteredArray = myFilter([1, 2, 3, 4, 5], x => x > 2);
console.log(filteredArray);

// Q11. Reverse a string without using reverse().
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}
console.log(reverseString('Karthik'));

// Q12. Count vowels in a string.
function countVowels(str) {
  let count = 0;
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('Karthik'));

// Q13. Check if a string is a palindrome.
function isPalindrome(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return str.toLowerCase() === reversed.toLowerCase();
}

console.log(isPalindrome('racecar'));

// Q14.Replace all occurrences of a word in a string.
function replaceWord(str, oldWord, newWord) {
  return str.split(oldWord).join(newWord);
}
console.log(replaceWord('Hello world', 'world', 'karthik'));

// Q15.Convert string to title case.
function toTitleCase(str) {
  let words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
console.log(toTitleCase('hello world'));

// Q16. Find the most frequent word in a sentence

function findMostFrequentWord(sentence) {
  let words = sentence.toLowerCase().split(' ');
  let count = {};
  let maxWord = '';
  let max = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (count[word]) {
      count[word]++;
    } else {
      count[word] = 1;
    }
    if (count[word] > max) {
      max = count[word];
      maxWord = word;
    }
  }
  return maxWord;
}
console.log(
  findMostFrequentWord('the quick brown fox jumps over the lazy dog the'),
);

// Q17. Remove all whitespace from a string.
function removeWhiteSpaces(str) {
  return str.replace(/\s/g, '');
}
console.log(removeWhiteSpaces('Hello World'));

// Q18. Return unique characters from a string.
function getUniqueCharacters(str) {
  let uniqueChars = [];
  for (let i = 0; i < str.length; i++) {
    if (!uniqueChars.includes(str[i])) {
      uniqueChars.push(str[i]);
    }
  }
  return uniqueChars;
}
console.log(getUniqueCharacters('Hello World'));

// Q19.Check if two strings are anagrams.
function isAnagram(a, b) {
  return a.split('').sort().join('') === b.split('').sort().join('');
}

console.log(isAnagram('listen', 'silent'));

// Q20.Count the frequency of all characters.
function countCharacterFrequency(str) {
  let frequency = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}
console.log(countCharacterFrequency('karthik rebel'));

// Q21.Deep copy an object (handle nested properties).
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof Array) {
    return obj.map(deepCopy);
  }
  if (typeof obj === 'object') {
    let copiedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copiedObj[key] = deepCopy(obj[key]);
      }
    }
    return copiedObj;
  }
}
let originalObject = {
  name: 'Karthik',
  age: 22,
  address: { city: 'Hyderabad', country: 'India' },
};
let copiedObject = deepCopy(originalObject);
console.log(copiedObject);

// Q22.Write a function to merge two objects.
function mergeObjects(obj1, obj2) {
  let merged = { ...obj1, ...obj2 };
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        merged[key] = mergeObjects(obj1[key], obj2[key]);
      }
    }
  }
  return merged;
}
let object1 = { name: 'Karthik', age: 22, address: { city: 'Hyderabad' } };
let object2 = {
  age: 23,
  address: { country: 'India' },
  profession: 'Developer',
};
let mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);

// Q23.Remove a key from an object without mutating the original.
function removeKey(obj, keyToRemove) {
  let newObj = { ...obj };
  delete newObj[keyToRemove];
  return newObj;
}
let objectWithoutAge = removeKey(object1, 'age');
console.log(objectWithoutAge);
console.log(object1);

// Q24. Return keys of an object sorted alphabetically.
function getSortedKeys(obj) {
  return Object.keys(obj).sort();
}
console.log(getSortedKeys(object1));

// Q25.Count number of properties in an object.
function countProperties(obj) {
  return Object.keys(obj).length;
}
console.log(countProperties(object1));

// Q26.Group array of objects by a key (e.g., group by category).
function groupBy(array, key) {
  return array.reduce((result, obj) => {
    const group = obj[key];
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(obj);
    return result;
  }, {});
}
let products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Book', category: 'Education' },
  { name: 'Phone', category: 'Electronics' },
];
console.log(groupBy(products, 'category'));
