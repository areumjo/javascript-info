let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "Ari": 300,
};

function sumSalaries(salaries) {
  let sal = Object.values(salaries); // can use for..of for array
  return sal.reduce((pre, curr) => pre+curr, 0);
}

function sumSalFor(salaries) {
  let sum = 0;
  for (let sal in salaries) {
    sum += salaries[sal];
  }
  return sum;
}


function count(obj) {
  return Object.keys(obj).length;
}

// Destructuring
// let [abb,abc,c] = "abc"
// console.log(abb)
// let [one,two,three] = new Set([1,2,3]);
// console.log(one)
// console.log(three)

// for (let [key, val] of Object.entries(salaries)) {
//   console.log([key, val]);
// }

let user = {
  name: "John Smith",
  years: 30
};

let { name, years: age, isAdmin=false } = user;
// console.log(name)
// console.log(age)
// console.log(isAdmin)


function topSalary(salaries) {
  
  let max = 0;
  let maxName = null;

  for (let [key, values] of Object.entries(salaries)) {
    if (values > max) {
      max = values;
      maxName = key;
    } 
  }
  return maxName;
}
// console.log(topSalary(salaries))


let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup2 = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
})
// console.log(meetup2.date.getDate()) // 30
// console.log(meetup2.date.getDay()) // 4 (sun-sat: 0-6)

// console.log(JSON.stringify(user));
// console.log(JSON.parse(JSON.stringify(user)));

let company = { 
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function sumSalRec(company) {
  // recursive -- base : when dep has only 1 array (subdep)
  if (Array.isArray(company)) {
    return company.reduce((a,b) => a+b.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(company)) {
      sum += sumSalRec(subdep);
    }
    return sum;
  }
}
// console.log(sumSalRec(company)) // 7700


function sumTo(n) {
  // ** 1. loop **
  // let result = 0;
  // for (let i=n; i>0; i--) {
  //   result += i;
  // }
  // return result;
  // ** 2. recursion **
  // return (n===1) ? 1 : sumTo(n-1) + n;
  // ** 3. arithmetic progression ** : the fastest : O(1)
  return n*(n+1) / 2;
}
// console.log(sumTo(10))

function factorial(n) {
  if (n === 1) return 1;
  return factorial(n-1) * n
}
function factIte(n) {
  let result = 1;
  for (let i=n; i >= 1; i--) {
    result *= i;
  }
  return result;
}
// console.log(factorial(5))
// console.log(factIte(5))

function fib(n) { // O(2^n) || space - O(n)
  // base condition fib(0) == 1, fib(1) == 1, fib(2) = 2 (fib(0) + fib(1))
  // 1,|| 1,2,3,5,8,13,21,...
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
}

function fibIte(n) { // O(n) || space - constant
  // starts from 1, 2 >> get fibIte(3) as their sum
  // need to remember 2 previous values;
  // a=1,b=1,c=2 >> a=1,b=2,c=3 >> a=2,b=3,c=5 >> a=3,b=5,c=8
  let a = 1;
  let b = 1;
  for (let i=3; i<=n; i++) {
    let c = a+b;
    a = b;
    b = c;
  }
  return b;
} // >>> DP bottom up

function fibMap(n) { // O(2n) || space - O(n)
  let map = {};
  if (n <= 2) return 1;
  else {
    if (!map[n]) {
      map[n] = fibMap(n-1) + fibMap(n-2);
    }
  }
  return map[n];
}
// console.log(fib(5))
// console.log(fibIte(5))
// console.log(fibMap(5))

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList(list) {
  let result = [];
  let temp = list;
  while (temp !== null) {
    result.push(temp.value);
    temp = temp.next;
  }
  return result;
}
// console.log(printList(list))

function printListRec(list) {
  // console.log(list.value);
  // if (list.next) printListRec(list.next);
  let result = [];
  result.push(list.value);
  if (list.next) printListRec(list.next);
  console.log(result);
}
// console.log(printListRec(list))


function reversePrint(list) {
  let result = [];
  let temp = list;
  while (temp) {
    result.unshift(temp.value);
    temp = temp.next;
  }
  return result;
}
// console.log(reversePrint(list))


function sum(a) {
  return function(b) {
    return a+b;
  }
}
// console.log(sum(1)(2)); // 3
// console.log(sum(-1)(5)); // 4


function inBetween(a, b) {
  return function (x) {
    if (x >=a && x <=b) {
      return x;
    }
  }
}
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(3,6)));
// console.log(arr.filter(inArray([1, 2, 10]))); // [1,2]


let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(key) {
  return (a, b) => a[key] > b[key] ? 1 : -1;
}
// console.log(users.sort(byField('name')))
// console.log(users.sort(byField('age')))


function makeCounter() {

  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = value => count = value;
  counter.decrease = () => count--;
  return counter;
};
let counter = makeCounter();


let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;
// console.log(pockets.pen); //3
// console.log(bed.glasses); //1


let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
}
let speedy = {
  __proto__: hamster,
  stomach: []
}
let lazy = {
  __proto__: hamster,
  stomach: []
}

speedy.eat("apple");
speedy.eat("scone");
// console.log(speedy.stomach, lazy.stomach);

class Clock {
  constructor(template) {
    this.template = template;
  }
  render() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    // let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
    let output = ""
    this.template = output + hours+mins+secs;
    console.log(this.template)
    return this.template;
  }
  start() {
    this.render();
  }
}
let clock = new Clock();
// clock.start();


let KthLargest = function(k, nums) {
  this.k = k;
  this.arr = nums.sort((a,b) => a-b);
  this.sorted = this.arr.slice(this.arr.length-this.k,this.arr.length+1);
}
KthLargest.prototype.add = function(val) {
  if (val < this.sorted[0]) {
    this.sorted = this.sorted;
  } else {
    let temp=0;
    for (let i=this.sorted.length-1; i>-1; i--) {
      // add value where sorted[i] i+1
      if (val >= this.sorted[i]) {
        temp = i;
        break;
      }
    }
    this.sorted.splice(temp+1,0, val);
    this.sorted.splice(0,1)
  }
  console.log(this.sorted[0], this.sorted)
  return this.sorted[0];
}
let k = 3;
let arr3 = [4,5,8,2];
let kthLargest = new KthLargest(3, arr3);
// kthLargest.add(3);   // returns 4
// kthLargest.add(5);   // returns 5
// kthLargest.add(10);  // returns 5
// kthLargest.add(9);   // returns 8
// kthLargest.add(4);   // returns 8


KthLargest.prototype.addition = function(val) {
  const findIndex = () => {
    let l = 0;
    let h = this.arr.length - 1;
    while (l < h) {
      let mid = Math.floor((l+h)/2);
      if (this.arr[mid] === val) return mid;
      else if (this.arr[mid] < val) {
        l = mid+1;
      } else {
        h = mid;
      }
    }
    return l;
  }
  let index = findIndex();
  this.arr.splice(index, 0, val);
  // console.log(this.arr, index, this.arr[this.arr.length - this.k]);
  return this.arr[this.arr.length - this.k];
}
// kthLargest.addition(3);   // returns 4
// kthLargest.addition(5);   // returns 5
// kthLargest.addition(10);  // returns 5
// kthLargest.addition(9);   // returns 8
// kthLargest.addition(4);   // returns 8

let regStr = "Breakfast at 09:00 in the room 21-30.";
// hh:mm
let regexp = /\d\d:\d\d/;
console.log(regStr.match(regexp)[0]);
console.log(regexp.test(regStr));
let reg2 = /\d\d.\d\d/g; // /\d\d[-:]\d\d/
console.log(regStr.match(reg2));

let reg3 = /\.{3,}/g
console.log("Hello!... How goes?.....".match(reg3))

let color = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
let reg4 = /#\w{6}\b/g
console.log(color.match(reg4))
