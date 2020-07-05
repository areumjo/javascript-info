/* function to get random number between 2 numbers
  Step 1) Math.random() * (max-min) : interval : from 0..1 >>> 0..(max-min)
  Step 2) add min : interval : >>> min..max
*/
function random(min, max) {
  return min + Math.random() * (max - min);
}


function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  if (lowerStr.includes('viagra') || (lowerStr.includes('xxxx'))) {
    return false;
  }
}


function truncate(str, maxLength) {
  let long = "...";
  if (str.length > maxLength) {
    return str.slice(0, maxLength-1) + long;
  } else {
    return str;
  }
}


function extractCurrencyValue(str) {
  return +str.slice(1) // "$120" >>> 120
}


// find the contiguous subarray with the maximum sum of items
function getMaxSubSum(arr) { 
  let max=0;
  for (let i=0; i<arr.length; i++) {
    let sumStart = 0;
    for (let j=i; j<arr.length; j++) {
      sumStart += arr[j];
      max = Math.max(sumStart, max);
    }
  } 
  return max;
} // O(n^2)

function getMaxSubSum2(arr) {
  let max= 0 ;
  let partialSum = 0;
  for (item of arr) {
    partialSum += item;
    max = Math.max(max, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return max;
} // O(n)
// getMaxSubSum2([-1, 2, 3, -9, 11]);


function camelize(str) {
  // when you met '-' change to UpperCase
  let tempArr = str.split('-').map((word, index) => {
    // console.log(word, index) -webkit- : webkit index 1
    index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  });
  return tempArr.join('');
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


function filterRange(arr,a,b) {
  let smaller = Math.min(a,b);
  let larger = Math.max(a,b);
  let result = arr.filter(int => int >= smaller && int <= larger);
  return result;
}
let arr = [5, 3, 8, 1]; // arr should not be modified
filterRange(arr, 1, 4);

function filterRangeInPlace(arr,a,b) {
  let smaller = Math.min(a,b);
  let larger = Math.max(a,b);

  for (let i=0; i<arr.length; i++) {
    if (arr[i] > larger || arr[i] < smaller) { // if arr[i] is out of scope
      arr.splice(i, 1); // in place splice
      i--; // need to reset i
    }
  }
}
filterRangeInPlace(arr, 1, 4);


function copySorted(arr) {
  return [...arr].sort((a,b) => a.localeCompare(b));
}
let arr2 =["HTML", "JS", "CSS"];


let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30 };
let mary = { name: "Mary", surname: "Key", id: 3, age: 28 };
let users = [ john, pete, mary ];

let usersMapped = users.map(item => ({ fullName: `${item.name} ${item.surname}`, id: item.id })); // need one () to wrap object, otherwise JS will think it's just fat arrow fn statement


function sortByAge(arr) {
  return arr.sort((a,b) => a.age - b.age); // increment
}


// walk the arr in the reverse order and swap each element with a random one -- will give evenly distributed random num
function shuffle(array) { 
  for (let i=array.length-1; i>0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]]; // destructing to swap 2 elements
  }
  return array;
}


function getAverageAge(arr) {
  let red = arr.map(item => item.age).reduce((a,b) => a + b);
  return Math.round(red / arr.length);
  // return arr.reduce((prev, user) => prev + user.age, 0) / arr.length
}


function unique(arr) {
  return arr.filter((a, b) => arr.indexOf(a) === b)
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function uni(arr) {
  let result = [];
  for (let i=0; i<arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    } 
  }
  return result;
} // O(n*m) n: arr.length, m: result.length;
// console.log(uni(strings));

let users2 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
function groupById(arr) {
  let result = {};
  for (let i=0; i<arr.length; i++) {
    result[arr[i]["id"]] = arr[i];
  }
  return result;
  // return arr.reduce((obj, value) => {
  //   console.log(obj)
  //   obj[value.id] = value;
  //   return obj; 
  // }, {})
}


// anagrams : words that have the same number of same letters, in different order
// when letter-sorted, all anagrams are same!
// nap, pan >>> anp || ear, era, are >>> aer
function aclean(arr) {
  let obj = {};
  for (let i=0; i<arr.length; i++) {
    let sorted = arr[i].toLowerCase().split('').sort().join('');
    obj[sorted] = arr[i];
  }
  console.log(obj); // { anp: 'PAN', aceehrst: 'hectares', aer: 'era' }
  return Object.values(obj);
}

function setClean(arr) { // same algo, using Map
  let map = new Map();
  for (let item of arr) {
    let sorted = item.toLowerCase().split('').sort().join('');
    map.set(sorted, item);
  }
  console.log(map.values()); // Map { 'anp' => 'PAN', 'aceehrst' => 'hectares', 'aer' => 'era' }
  console.log(map.values()); // [Map Iterator] { 'PAN', 'hectares', 'era' }
  return Array.from(map.values());
}

let te = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// 'PAN' >> 'pan' >> ['p','a','n'] >> ['a','n','p'] >> 'anp'