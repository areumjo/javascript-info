# 1. An Introduction to JavaScript

## What is JS?
- "Make web pages alive"
  - programs in JS are called `scripts`, written right in a web page's HTML and run automatically as the page loads
  - scripts are provided and executed as plain text : no need preparation or compilation to run
- JS can execute in the browser and on the server

### In-broswer JS
- In-broswer JS can do everything related to webpage manipulation, interaction with the user, and the webserver
  - add (change/modify) new HTML to the page
  - react to user actions : clicks, pointer movement, key press
  - send request over the network, download and upload files : `ajax`
  - get and set cookies
  - remember the data on the `client-side` : local storage

- What can't in-browser JS do?
  - prevent an evil webpage from accessing private info or harming the user's data
  - "Same origin policy"

### What makes JS unique?
1. Full integration with HTML/CSS
2. Simple things are done simply
3. Support by all major browsers and enabled by default

### Languages over JS
- CoffeeScript, TypeScript, Flow, Dart
  - can get 'transpiled' to JS and privde certain features

## IDE (Integrated Development Environment)
- Editor with many features that usually operates on a 'whole project'
  - load the project (many files)
  - allows navigation between files
  - provides autocompletion
  - integrates with a version management system (git), testing environment


# 2. JS Fundamentals
## "<script>" tag
- JS programs can be inserted into any part of HTML with `<script>`
- Attributes type
  - `<script type=...>` : HTML4 (old) required it to have a type ==> now used for JS modeuls

### External scripts
- use attribute `src`
- benefit of having separate JS file : the browser will download it and store it in its `cache`
  - other page that reference the same script : can take it from cache instead of downloading it
  - script download only take one time ==> reduces traffic, faster loading!

## "use strict"
- when it is located at the top of a sciprt, the whole script works the 'modern' way
  - when ES5 appeared, it added new features and modified some of the exisiting one : to keep the old code working, most such modifications are off by default ==> need to explicitly enable with `use strict`
- modern JS supports 'classes' and 'modules' that enable `use strict` automatically

## Variables
- named storage for data
- use `let`
- 2 limitations
  1. must contain only letters, digits, or $, _
  2. first char must not be a digit
- camelCase

## Constant
- use `const` and declare a constant (unchanging) variable
  - can not be re-assigned
- widespread practice to use constants as `aliases` for difficult-to-remember values : use capital letters and _
  - `const COLOR_RED = "F##";`

## Data types
### 1. Number
- both integer and floating point numbers
- special numeric values
  1. Infinity : mathmatical infinity // greater than any number // 1 / 0 == Infinity
  2. -Infinity
  3. NaN : a computational error // "not a number" / 2 == NaN
    - script will never stop with a fatal error, at worst get `NaN`

### 2. BigInt
- JS can not represent integer values : > 2^53-1 or < -2^53-1 // technical limitation
- `BigInt` : represent itegers of arbitrary length
  - created by appending `n` to the end of an integer
  - supported in FireFox/Chrome/Edge, but not in Safari/IE

### 3. String
- 3 types : "", '', `` (backticks)
  - `` backticks : extended functionality quotes // embed variables and expressions with ${}

### 4. Boolean (logical type)
- true || false
- store yes/no value && result of comparisons

### 5. null
- does not belong to any of the types, contains only the `null` value   
  - 'nothing', 'empty' or 'value unknown'

### 6. undefined
- value is not assigned
- if a variable is declared, but not assigned : undefined
```js
let age;
console.log(age); // undefined
```

### 7. objects
- store `collections` of data and more complex entities
- other types are 'primitive' becare their values can contain only a single thing

### 8. symbols
- unique identifiers

### typeof
- return tye type of the argument
```js
typeof Math // object : Maths is a built-in object
typeof null // object : officially recognized error
typeof alert // function
```

## Interaction
1. alert("msg") : a modal window with the message
2. prompt("msg", [default]) : a modal window with the msa, an input field (optional) (initial value == default)
3. confirm("msg") : a modal windwon with a question -- click okay == true || cancel(esc) == false
- Limitation : exact location && exact look of the window depends on the browser

## Type conversions
- Opeators and functions automatically convert the values given to them to the right `type`
1. String conversion
    - `String(value)`
2. Numeric conversion
    - `Number(value)`
    - Number("  123  " ); // 123
    - Number("123z"); // `NaN` error reading at 'z'
    - Nmuber(null); // 0
    - Number(undefined); // NaN
3. Boolean conversion
    - in logical operations
    - `Boolean(value)`
    - false : intuitively empty value : 0, '', null, undefined, NaN, false
    - true : anything else, "0", " " (string with space)

## Maths
- Remainder `%` : a % b is the remainder of the integer division of a by b
- Exponentiation `**` : a ** b  multiplies a by b : 2**4 == 16
- Binary `+` : only operator that supports strings, others alwyas convert to numbers
    - `+"str"` : same as `Number()`
- Assignment `=`
    - chaining : ability to chain assignments `a = b = c = 2 + 2; a; //4 b; //4 c; //4`
- Increment/Decrement : can be only applied to variables // can be placed either before or after a variable
    - prefix : when you want to increase a value and immediately use the result of the operator (++count)
    - postfix : you want increse but use its previous value
    ```js
    let count = 0;
    console.log(++count); // 1
    console.log(count++); // 0
    ```

## Bitwise operators
- Treat arguments as 32-bit integer numbers and work on the level of their binay presenstation
    - AND (&), OR (|), XOR (^), NOT (~), LEFT SHIFT (<<), RIGHT SHIT (>>), ZERO-FILL RIGHT SHIFT (>>>)

## Comparison
### String Comparison
- JS uses the 'dictionary' or 'lexicographical' order : strings are compared letter-by-letter
```js
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // ture -- longer > shorter
console.log('a' > 'A'); // true -- lowercase > capital letter
```

### Comparison of different types
- JS converts the values to numbers
```js
console.log('2' > 1); // true
console.log(false === 0); // true
```

## Strict equality ===
- A regual == equality can not differentiate `0` from `false`
    - bc JS converts different types to numbers by ==
- A strick === checks the equality without type conversion
    - if two are different types, then immediately `false`
- Don't use `>= > < <=` with a variable which may be `null/undefined`

## Boolean conversion
- Falsy value : 0, "", null, undefined, NaN

### Ternary operator with ?
- A sequence of operator ? can return a value
```js
let age = promt('How old are you?');
let message = age < 16 ? "You can't drive, you can't drink" : age < 18 ? "You can drive" : age < 21 ? "You can't drink" : "You can both drive and drink";
```

### Logical operator
- || (or) : retrun first truthy value, or if all were false then return the last operand
- && (and) : return first falsy value, or the last value if none were found
- Precedence of && is higher than ||

### Breaking loop
- Normally, a loop exits when its condition become `falsy`
- `break` : force the exit at any time 
- `continue` : a ligther version of break 
    - doesn't stop whole loop
    - use it when you're done with the current iteration and want to move on to the next one
```js
for (let i=0; i<10; i++) {
    if (i % 7) break;
    if (i % 2) continue;
    console.log(i);
} // 1,3,5 -- only print odd number and when it reaches 7 it stops
```

## `switch`
- Replace multiple `if` checks
- switch - case - default - break
    - if no `break` for each case, after the value finds right case it will continues with the next case without any checks
- Strick equality check : `type` matters

## Function
- A function with an empty `return` or without `return` returns `undefined`
- One function -- one action && function is a value
    - easier to understand, test and debug 
```js 
function showPrimes(n) {
    for (let i=2; i<n; i++) {
        if (!isPrime(i)) continue;
        console.log(i); // show all prime numbers
    }
}
function isPrimes(n) {
    for (let i=2; i<n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
```
- Function Declaration : function f() {}
    - no need semicolon at the end
    - can be called earlier than it is defined : JS first looks for global fn declarations and creates the fn : "initialization stage"
- Function Expression : let f = function() {};
    - need `=` assignment expression
    - can use fat arrow fn exp 
        - `(arg) => expression` 
        - `(arg) => { body }`
- to run a function need () parentheses!

### Callback
```js
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
} // yes, no are 'callback functions'
```

### Global variable
- Global variables are visible from any function
- Good practice to minimize the use of global


# 3. Code quality
## Debugging
- `debugger` command : paus code
- Breakpoint
    1. watch : current values
    2. call stack : the nested calls chain
    3. scop : current variables - local && global && `this`

## Automated testing
- Tests are written separately, in addition to the code
    - run our functions in various ways and compare results with the expected

- BDD (Behavior Driven Developemnt) : test && documentation && examples
```js
describe("pow", function() {
    it("raises to n-th power", function() {
        assert.equal(pow(2, 3), 8);
    }) // 2nd argument for 'it' is a function that tests
});
```
- JS libraries for tests
    - Mocha || Chai || Sinon

## Polyfills
- Babel 
    1. a transpiler // rewrite modern JS into the previous standard
    - modern project build systems like `webpack` provide means to run transpiler automoatically on every code change ==> easy to integrate into development process
    2. polyfill : a scritp that updates/adds new fns (fills in the gap and adds missing implementations)


# 4. Objects: the basics
- Declare an empty object : 1) object constructor, 2) object literal
    - object with `const` can be changed : `const` only fixes the value of the object, but not its contents
```js
let user = new Object();
let user = {}; // object literal
function makeUser(name, age) {
    return {
        name, // same as name: name
        age, // same as age: age
    };
}
```

## Property exsitence test `in`
- 'key' `in` object 
    - will return true if the object has the 'key'
- `for...in` loop : special form of the loop to walk over all keys of an object
    ```js
    for (let key in user) {
        console.log(key);
    }
    ```

## Object copying, by references
- A variable stores not the object itselt, but its "address in memory" (a reference to is)
    ```js
    let a = {};
    let b = a;
    console.log(a === b); // true
    let c = {};
    console.log(a === c); // false
    ```

## Cloning and merging object
- `Object.assign(source, target)` : shallow copy
    - copy all enumerable properties from (one or more) source obj to a target obj // return the target obj
    ```js
    let target = { a: 1, b: 2 };
    let source = { b: 4, c: 5 };
    let returned = Object.assign(source, target);
    console.log(target); // { a: 1, b: 4, c: 5 }
    console.log(returned); // { a: 1, b: 4, c: 5 }
    ```
- use `for ... in` : deep copy
    ```js
    let user = { name: "John", age: 30 };
    let clone = {};
    for (let key in user) {
        clone[key] = user[key]
    } 
    clone.name = "Peter"; // clone = { name: "Peter:, age: 30 } // user stays same
    ```

## `this`
- To access an obejct, a method (object property == function) ca use `this`

## `new` - constructore
- Constructor function
    1. named with `captial` letter first
    2. executed only with `new` operator
- Purpose : to implement reusable object creation code
- Usually, constructors do not have `return`

## Optional chaining `?.`
1. `obj?.prop` || `obj?.[prop]`: returns obj.prop, if obj exists || undefined
2. `obj?.method()` : calls obj.method() || undefined

## Symbol
- `Symbol()` : a primitive type for unique identifiers
    - can created with an optional description
    - always different value, even they have the same name
    - `Symbol.for(key)` : return a global symbol with key as the name
- 2 main use cases
    1. `Hidden` object prop : symbol prop doest not appear in `for ... in`
    2. `Symbol.*`


# 5. Data types
## Methods of primitives
- `str.toUpperCase()`
- `float.toFixed(2)`
- null/undefined have no methods

## Numbers
- 2 types of numer
1. Regular numbers in 64-bit format
2. BigInt number : present integers of arbitrary length -2^53 > || 2^53 <
- Rounding
    - `Math.floor()`
    - `Math.ceil()`
    - `Math.round()` : rounds to the nearest integer // 3.1 >>> 3, 3.6 >>> 4, -1.1 >>> -1
    - `Math.trunc()` : removes anything after decimal point
- `Infinity` (-Infinity) : a special numeric value that is greater (less) than anything
- `NaN` : represents an error
    - isNaN("str") : true!!
- `parseInt()` || `parseFloat()` : read a number from a string until they can't // when meets str, gather number and return
    - parseInt('a123') : return NaN when first symbol is letter
    - parseInt('123a') : return 123
- `Math.random()` : return a random number 0-1
- `Math.max(a,b,c,...)` || `Math.min(a,b,c,...)`
- `Math.pow(n, power)`
- `e` : append e with the zeroes count to the number
    - 123e6 : 6 zeroes (10^6) : 123000000

## Strings
- `.length` : is property, not a function (don't use `()`)
- Accessing character : [] || `.charAt()`
    - these 2 work same, but if no character is found, [] >>> `undefined`, charAt() >>> empty string
    - can iterate over characters `for ... of`
- Strings are immutable
- `str.indexOf(substr)` : return the position if substr is found || -1
    ```js
    // use with if statement : need to check -1 or not bc if indexOf returns 0, if statement will think it is false
    let str = "Widget with id";
    if (str.indexOf("Widget") !== -1) console.log("FOUND");
    ```
- `str.includes(substr)` : return boolean
- `str.trim()` : removes spaces from the beginning to end
- `str.repeat(n)` : repeats the string n times

### 3 methods to get a substring
1. `str.slice(start[, end])` : return the part from start to (not including) end
2. `str.substring(start[, end])` : return the part between start to end (include start and end)
3. `str.substr(start[, length])`

### Comparing strings
- A lowercase letter > a upperase letter : 'a' > 'Z' // true
- `str.localeCompare(str2)` : returns an integer
    - str < str2 : -1
    - str > str2 : 1
    - str == str2 : 0

## Arrays
- Methods
    - shift // push : `queue` -- FIFO
    - push // pop : `stack` -- FILO (LIFO)
        - faster than shift/unshift O(n) : time complexity only O(1)
    - arr.length = 0; : the simplest way to clear the array

- `.splice()`
- `.slice([start], [end])` : return new array : empty arguments creates a copy of array
- `.concat(arg1, arg2, ...)` : creates a new array 

### Interate
- `forEach` : run a function for every items
    ```js
    arr.forEach(function(item, index, array) {
    })
    arr.forEach((item, index, array) => )
    ```

### Search 
- `.indexOf()` : return index (or -1)
- `.includes()` : return true/false
- `find(fn)` : syntax same as forEach : if it returns true, the search is stopped and the item is returned
- `filter(fn)` : returns an array of all matching elements

### Transform
- `map(fn)` : calls the fn for each item and returns the array of results
- `sort()` : sorts the array in *in place* (change element order)
    - items are sorted as *string* : "2" > "15"
    - can use for string-base sort
    ```js
    arr.sort((a, b) => a.localeCompare(b)); // a,b,c
    arr.sort((a,b) => a-b); // 1,2,3
    ```
- `reverse()`
- `str.split(delim)` : splits the string into an array by 'delim'
- `str.join(glue)` : reverse to split // creates a string of array items joined by 'glue'
- `reduce()` : calculated a *single value* based on the array
    - accumulator : the result of the previous fn call (sum), will be passed to the next
    - item : current
    ```js
    arr.reduce((sum, current) => sum + current, 0);
    ```
- sort, reverse, splice : modify the array itself!

## Iterables
- `for..of` : great syntax to loop over a collection (list, set) not an array
    - iterables must implement method named `Symbol.iterator`
    - the iterator must have method named `next()` that returns an object {done: Boolean, value: any}
- `Array.from` : universal method that takes an iterable or array-like value and make real `Array` from it
    ```js
    let arrayLike = {
        0: "Hello",
        1: "World",
        length: 2
    }
    let arr = Array.from(arrayLike);
    console.log(arr.pop()); // World
    ```

## Map
- Map is a collection of keyed-data items.
- Main difference is `Map` allows keys of any type
    - keys are not converted to strings >>> any type of key is possible
    - `.set(key, value)`, `.get(key)`, `.has(key)`, `.size`
    ```js
    let map = new Map();
    map.set('1', 'str1');   // a string key
    map.set(1, 'num1');     // a numeric key
    map.set(true, 'bool1'); // a boolean key
    console.log(map.get(1)); // num1
    ```
- Iteration over Map
    - `.keys()`, `.values()`, .`entries()` - [key, value], used by defualt in for..of
    - built-in `forEach`

## Set
- Set is a special type collection - "set of values" (without keys), where each value may occur only once.

## WeakMap, WeakSet
- WeakMap/WeakSet is Map/Set like collection : secondary data structure
    - once the object is removed from the main storage >>> 
    (if WeakMap/WeakSet become `null`) it will be cleaend up automatically 
    - benefit : clean unuused memory || caching
- Limitation : can't iterate over it

## Iterations over object
- `Object.keys(obj)` : returns array of keys [key, key, key]
- `Object.values(obj)` : returns array of values [value, value, value]
- `Object.entries(obj)` : returns array of key-value pairs : 2d array [[key, value], [key, value]]
    - for Map, can use `map.keys()` to iterable but not a 'real' array
- `Object.fromEntries(array)` : turn array back into object
    1. use Object.entries(obj) to get key-value pair
    2. use array methods (map, filter) on that array
    3. use Object.fromEntries(array) to turn back to object
    ```js
    let prices = { apple: 1, meat: 6, fish: 4};
    let doublePrices = Object.fromEntries(
        Object.entries(prices).map(([key,val]) => [key, val*2]))
    ```

## Destructuring assignment
- Allow to 'unpack' arrays or objects into a bunch of `variables`

### Array destructuring
- `let [item1 = default, item2, ...rest] = array;`
- It does not modify original array, just assign array to variable
- Ignore elements using commas : can skip any unwanted elements
- The rest '...' : can get all that follows
    ```js
    let arr = ["Ari", "Jo"];
    let [firstName, lastName] = arr;
    /* same as
    let firstName = arr[0];
    let lastName = arr[1];
    let [firstName, lastName] = "Ari Jo".split(" ");    */
    let [firstName, ,title] = ["Alicia", "Keys", "Singer", "NY"]; // only pick up 1st, 3rd element
    let [name, ...rest] = ["Alicia", "Keys", "Singer", "NY"];
    rest.length; // 3
    ```
- Works with any iterable on the *right* side
- Assign to anything at the *left* side
    ```js
    let [a,b,c] = "abc";
    let [one,two,three] = new Set([1,2,3]);
    let user = {};
    [user.name, user.surname] = "Ari Jo".split(" ");
    ```
- Loop with `Object.entries()` - [key, val] or for Map
- Swap variable
    ```js
    for (let [key, values] of Object.entries(obj)) {
        console.log(`${key}: ${values}`);
    }
    let guest = "Jane";
    let admin = "Pete";
    [guest, admin] = [admin, guest]
    ````
- Default using `=` : can replcae the missing one
    ```js
    let [name = "Guest", surname = "Default"] = ["Julius"];
    name; // Julius
    surnmae; // Default; when nothing is there, return "Default"
    ```
### Object destructuring
- When you want to split object into variable
    - `let {prop: varName = default, ...rest } = object;` : 'prop' go into the variable 'varName', if null, 'default'
    - right side : object
    - left side : variables || pattern for corresponding properties
    ```js
    let options = {
    title: "Menu",
    width: 100,
    height: 200
    };
    let { width:w, height:h } = options;
    // w; 100, h; 200
    let { title } = options;
    // title; "Menu"
    let { title, ...rest } = options;
    // rest; { width: 100, height: 200 }
    ```

## Date and time
- `Date` : built-in object // store the date, time // provides methods for data/time management
- `new Date()` : without arguments >>> current date&time
- `new Date(miliseconds)` : time passed after Jan 1st of 1970 UTC+0 >>> *timestamp*
    ```js
    let Jan01_1970 = new Date(0); // 0 means 01.01.1970 UTC+0
    let Jan02_1970 = new Date(24 * 3600 * 1000); // add 24 hours, get 02.01.1970 UTC+0
    ```
- `new Date(datestring)` : datestring is parsed automatically
- `new Date(year, month, date, hours, minutes, seconds, ms)`
- Get date methods
    - getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getDay(), getTime(), getTimezoneOffset()
- Set date methods : same as get methods except 'set'
- `Date.now()` : returns the current timestamp (not 'date')
    - same as `new Date().getTime()` but it is a faster
- `Date.parse(str)` : can read a date from a string // return the timestamp (number of milliseconds from the Jan 1 1970)
- Benchmarking : performance measurements

## JSON methods, toJSON
- JSON : was made for JS initially // easy to use JSON for data exchange when client uses JS
- `JSON.stringify(obj)` : object >>> JSON // convert to string
    - number, boolean or null, object, array >>> stay still 
    - `JSON.stringfiy(value[, replacer, space])`
- `JSON.parse` : JSON >>> object // decode a JSON string
    - `JSON.parse(str, [reviver])`
- Typical mistakes in JSON : JSON is *strict*
    - property name without quotes, single quotes in key||value, no "new" is allowed (like new Date()), no comment


# 6. Advanced working with functions
## Recursion and stack
### Recursion
- A programming pattern used when a task can be split into several tasks of the same kind (but simpler)
- When a function calls itself!
    ```js
    function pow(x,n) { // more memory-saving
        let i=1;
        let result=1;
        while (i <= n) {
            result *= x;
        }
        return result;
    }
    function powRecur(x,n) {
        // base condition
        if (n === 1) return x;
        else powRecur(x, n-1) * x;
        // shorter version
        return n === 1 ? x : powRecur(x, n-1) * x;
    }
    ```
- `Recursion depth `: the maximal number of nested calls (n)
    - powRecur(2,3) : 3 <<< powR(2,2) * 2 <<< powR(2,1) * 2
    - JS limitation : 10,000
- Execution context : an internal data structure that contains details about the execution of a function
    - when a function makes a *nested* call:
    1. current function is paused
    2. execution context associated with it is rememebered in a special data structure ('execution context stack)
    3. nested call executes
    4. the old execution context is retrieved from the stack, the outer function is resumed
- Any recursion can be rewritten an a loop

- `Recursive traversal`
    - break down to the simplest case which will be a base condition (when the recursion stops)
    - other case will be splited to smaller case with recursion

### Recursive structures
- A structure that replicates itself in part
- HTML document
    - text pieces // HTML-comment // other HTML-tags
- `Linked list`
    - for array, very expensive to add or remove from the beginning (O(n)) -- pop, push is just O(1)
    - so for big queues, array can be quite slow!
    - Linked list can handle fast insertion/deletion
    - `value`
    - `next` : reference the next linked list element || null
    - main drawback : can't access an eleemnt by index O(n), but for array it is just O(1)
    ```js
    let list = { value: 1 };
    list.next = { value: 2 };
    list.next.next = { value: 3 };
    list.next.next.net = { value: null }; // 1>>2>>3>>null
    // add item at the beginning
    list = { value: "new item", next: list}; // new item>>1>>2>>3>>null 
    // remove from the middle
    list.next = list.next.next; // new item >> 2 >> 3 >> null
    ```
    - to solve linked list problem, first copy ll to temporary value and use some kind of loop and change list = list.next, so it does same effect like i++||i--

## Rest, spread
- `...` rest parameter can be called with any number of arguments && must be at the end
    ```js
    function sumAll(...args) {
        let sum=0;
        for (let item of args) sum+=item;
        return sum;
    }
    sumAll(1,2) // 3
    sumAll(1,2,3,4) // 10
    ```
- `arguments` variable : contains all arguments by their index
    - before `...` rest parameters did not exist
    - downside : although both array-like and iterable, it's not array >>> can't use array methods (map) // always contains all arguments // fat arrow fn do not have "arguments" (don't have `this` either)
- spread : `...arr`, expands an iterable object `arr` into the list of arguments
    - can use to merge arrays
    - can turn the string into array of character
    ```js
    Math.max(3,5,1); //5
    let arr = [3,5,1];
    Math.max(arr); // NaN!
    Math.max(...arr); // 5 << spread turns array into a list 
    let arr2 = [9,8,7];
    let merged = [...arr, ...arr2];
    let str = "Hello";
    console.log([...str]); // H,e,l,l,o
    console.log(Array.from(str)); // H,e,l,l,o << more universal
    ```
- Get a new `copy` of array/object
    - this way, the original arr/obj doesn't get modified
    - `Object.assign()` can also copy
    ```js
    let arr = [1,2,3];
    let arrCopy = [...arr];
    let obj = { a: 1, b: 2, c: 3 };
    let objCopy = {...obj};
    ```

## Variable scope
- JS : function-oriented language
    - functions are `object`
    - `name` : function name
    - `length` for function : returns the nubmer of function parameters
- `closure` : a function that remembers its outer variables and can access them
    - in JS all functions are naturally closures : automatically remember where they were created using `[[Environment]]` property >> how Lexical env work
- `var` : have no block scope >> visible minimum at the function level

## IIFE
- Immediately-invoked ufnction expressions
- `(function {...})()` or `(function {...}())`

## "new Function"
- `new Function([arg1, arg2, ...argN], functionBody)`
    - arguments are string

## Scheduling
- `setTimeout`
- `setInterval`
    - allow to run the func once/regularly after delay ms
    ```js
    setTimeout(()) => console.log("Hello from 1s"), 1000);
    ```
- Zero delay with setTimeout(func, 0 ) || setTimeout(func) : not zero >> call ASAP but after the current script is complete

# 7. Prototypes, inheritance
## Prototypal inheritance
- Objects have a special hidden property [[Prototype]], that is either null or references another object ("prototype")
- Prototypal inheritance : when we want to read a property from object, and it's missing >> JS takes if from "prototype"
    - reference can't go in circles
    - value of `__proto__` : can be only either null or an object (historical getter/setter)
    - only one [[Prototype]] exist
    ```js
    let animal = { eats: true };
    let rabbit = { jumps: true }; // set animal => prototype
    rabbit.__proto__ = animal;
    rabbit.eats; // true; => JS go to prototype reference
    rabbit.jumps; // true;
    ```
- If `Obj.method()`, the method is taken from the protytpe >> `this` references `obj`
- `for..in` loop iterates over both object and protytpe
- other key-value methods (`Object.keys()`) only operate onthe object itself (not prototype)


## F.prototype
- `new F()` : create new object with constructor function
    - if `F.prototype` is an object, then `new` uses it to set [[Prototype]] for the new object
    ```js
    let animal = { eats: true };
    function Rabbit(name) {
        this.name= name;
    }
    Rabbit.prototype = animal;
    let rabbit = new Rabbit("Bunny");
    rabbit.eats; //true
- Every function has "prototype" with property `constructor` that points back to the function itself
    - `F.prototpye = { constructor: F }`
    ```js
    function Rabbit() {}
    // Rabbit.prototype = { constructor: Rabbit } << by default
    Rabbit.prototype.constructor == Rabbit; // true
    function User(name) {
        this.name= name;
    }
    let user = new User("John");
    let user2 = new user.constructor("Jain")
    user2.name; // Jain
    ```
- Modern way to create prototype
    - `Object.create(proto)`
    - `Object.getPrototypeOf(obj)`
    - `Object.setPrototypeOf(obj, proto)`

# 8. Classes
## `class`
- In modern JS, more advanced "class" construct >> useful for Object-oriented programming
    ```js
    class User {
        constructor(name) {
            this.name = name;
        } // << automatically called by new
        sayHi() {
            console.log(`Hi, ${this.name}`);
        } // << User.prototype
        get name() {
            return this._name;
        }
        set name(value) {
            if (value.lenght < 4) {
                console.log("Name is too short");
                return
            }
            this._name = value;
        }
    }
    let user1 = new User("Ari");
    user1.sayHi(); // Ari
    ```
    - class : `function`
    - class must be called with `new`

## class inheritance
- `extend`
    - parent methods >> inheritance >> child
    - `class Child extends Parent {}` == `Child.prototype.__proto__ = Parent.prototype
- Overrding a method
    - build method on top of parent methods
    - `super.method(...)` : call a parent method inside of child method
    - `super(...)` : call a parent constructor
    ```js
    class Rabbit extends Animal {
        hide() {
            console.log(`${this.name} hides!`)
        }
        stop() {
            super.stope(); // call parent stop
            this.hide();
        }
    }
    ```
- Overriding constructor
    - when child class doesn't have constructor : empty constructor passing all parent arguments
    - derived constructor (child) must call `super` in order to execute its parent constructure, otherwise `this` won't be created (error!)
    ```js
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Rabbit extends Animal {
        constructor(name, earLength) {
            super(name);
            this.earLength = earLength;
        }
    }
    ```

## Static properties and methods
- `static` : assign a method to the class function itself "as a whole", not its *prototype*
    - static methods are used to implement functions that belong to the class, not to any particular object of it
    - "factory" method : create an empty class
    - used in database-related classes to search/save/remove entries from the db

## Private, protected properties and methods
- Private object field (prop, methods) : accessible only from inside the class // internal inteface
    - Protected properties : prefixed with underscore `_`
    - read-only "power" : must be set at creation time only, nver modified
    ```js
    class CoffeMachine {
        _waterAmount = 0; // protected
        set waterAmount(value) {
            if (value < 0) throw new Error("Negative water");
            this._waterAmount = value;
        }
        get waterAmount() {
            return this._waterAmount;
        }
        constructor(power) {
            this._power = power; // machine power never change
        }
        get power() {
            return this._power; // no setter, only getter
        }
    }
    ```
    - getter / setter : get.../set... functions are preferred : more flexible : accept multiple arguments

## instanceof : class checking
- `instanceof` : allows to check whether an object belongs to a certain class
    - `obj instanceof Class`
    - return true||false

## Mixin
- A class that contains methods for other classes


# 9. Error handling
## "try..catch"
- `try..catch` : it catches error so the program can do more stuffs instead of 'dying' 
    1. try {...} : if there is no errors, catch(err) is ignored
    2. catch(err) : if error, then try is stopped and catch(err) // `err` variable contain an error object (err properties : name/message/stack)
    - only works for runtime errors : valid JS // if error is syntactically wrong, it doesn't work (unmatched braces)
    ```js
    let json = '{"name":"John", "age": 30}'; 
    let user = JSON.parse(json);
    let badjson = "{ bad json }";
    try {
        let user = JSON.parse(json);
        console.log(user.name);
        if (!user.name) {
            throw new SyntaxError("Imcomplete data: no name");
        }
    } catch(err) {
        console.log(err);
    }
    ```
- `throw <error object>` : generates an error
- `try..catch..finally` : finally will be executed after try/catch


# 10. Promises, async/await
## Callbacks
- *asynchronous* action : actions that initiates now! but finish later 
    - `setTimeout()` // loading scripts/modules
    ```js
    function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => callback(script);
        document.head.append(script);
    }
    // if this function doesn't have callback, this (loadScript) will run but can't call other new functions using the script
    loadScript('/my/index.js', function(any)) {
        newFunction(any);
    };
    ```
- Handling error
    -eoor-first callback style
    ```js
    loadScript('/index.js', function(error, script) {
        if (error) { /* handle error */}
        else { /* script load */ }
    })
    ```

## Promise
- `new Promise` : take 2 callbacks // internal prop - state, result
    1. resolve (value) : state-fulfilled, result-value
    2. reject (error) : state-rejected, result-error
    ```js
    function loadScript(src) {
        return new Promise((res, rej) => {
            let script = document.createElement('script');
            script.src = src;
            script.onload = () => res(script);
            script.onerror = () => rej(new Error('error!'));
        })
    }
    ```
- `fetch(url)` : load the information about the user from the remote server
    - network `request` to the url and return promise
    - promise resolves with a `response` object
    - response object from fetch has `response.json()` methods >> read the remote data (from server) and parses it as JSON
    ```js
    fetch('/user.json')
        .then(response => response.json())
        .then(user => fetch(`githubAPI/${user})`)
        .then(response => response.json())
        .then(githubUser => {
            let img = document.createElement('img');
            img.src = githubUser.avatar_url;
            img.className = "promise-avatar-example";
            document.body.append(img);

            setTimeout(() => img.remove(), 3000);
        })
        .catch(error => alret(error.message))
    ```

## Promise APi
- `Promise.all` : many promises to execute in parallel and wait until all of them are ready
    - if any of the promises is rejected, Promise.all immediately rejects with error
    ```js
    let names = ['ari', 'bey', 'gray'];
    let requests = names.map(name => fetch(`github/${name}`))
    Promise.all(requests)
        .then(responses => for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    })
    ```
- `Promise.resolve(value)`
- `Promise.reject(error)`

## Async/await
- `async` before a function : the function always returns a promise
- `await` : works only insde async function
    - make JS wait until that promise settles and returns its result


# 11. Module
## Build tools
- Buile JS modules together with webpack and deploy to the production server
    - benefit : more control over how modules are resolved >> allow to use HTML/CSS moduels
- Modules always `use strict`
- Module code is executed only once : exports are created once and shared between importer


# Regular Expression
## Patterns and flags
- Regexp : patterns that provide a powerful way to search and replace in text
    1. pattern
    2. (optional) flags
- 2 syntax
    1. `regexp = new RegExp("pattern", "flags")`
    2. `regexp = /pattern/gmi` : pattern with 3 (g,m,i) flags
    - /.../ : tell JS that we are creating regexp
- 6 flgas : 2 are important (i, g)
    1. i : case-insensitive (A==a)
    2. g : search all matches (without it, only return 1st match)
    3. m : multiline mode
- `str.match(regexp)` : finds all matches of regexp // if no matches, return `null`
- `str.replcae(regexp, replacement)` : replace regexp with replacement
- `regexp.test(str)` : return true/false (at least one match) 

## Character classes
- A special notation that matches any symbol from a certain set
- `\d` : any single digit class // 0-9
- `\s` : spaces, tabs, newlines // ' '
- `\w` : either an alphabet or digit or underscore // a-z 0-9
- Inverse classes
    - `\D` : non-digit (any character except \d)
    - `\S` : non-space (excep \d)
    - `\W` : non-alphanumenic (excep \w)
```js
let str = "+7(903)-123-45-67";
str.match(/\d/g).join(''); // 79031234567
str.replace(/\D/g, ""); // 79031234567
```
- `.` : any character (including space and special character)
- `^` : (caret) matches at the beginning of the text
- `$` : matches at the end of the test
- `^...$` : test whether or not a string fully matches the pattern
    - have zero width : they do not match a character, but force the regexp to check the condition

## Sets and ranges [...]
- Sets : anything inside of [] >> /[abc]/ find 'a' or 'b' or 'c'
- Ranges : character ranges
    - [a-z] : range from a to z
    - [0-9A-Z] : 2 ranges : either a digit from 0 to 9 or a letter from A to Z
    - \d === [0-9], \w === [a-zA-Z0-9_], \s === [\t\n\v\f\r ]
- Excluding range : `[^...]`
    - \D === [^0-9], \S === [^\s]
    - [.] (dot) inside squar bracker : just a dot

## Quantity {n}
- Quantitifier is appended to a character (class or []) and specifies how many you need
    - `\d{5}` === \d\d\d\d\d : denotes 5 digits
    - can use excluding class \b\d{5}\b : 12345 not 123456
- Range : `\d{3, 5}` : match 3-5 times
    - cna omit the upper limit `\d{3,}` : digits (length >= digit)
- Shorthands 
    - `+` : one or more same as `{1,}`
        - `\d+` : loos for numbers (with any degit)
    - `?` : zero or one same as `{0,1}` >> symbol optional
    - `*` : zero or more same as `{0,}` >> may repeat any times or abset