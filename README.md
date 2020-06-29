# OOP (Object-Oriented Programming)

## OOP interview question
- Ask the candidate to build a click counter using `React`
    - keep track of how many times the user has clicked the button
    - no storage
    - no I/O

- Ask the candidate a list of questions acout general programming concepts
    - `closures` : gives you access to an outer function's scope from an inner function
        - closure are created every time a function is created
        - inner function will have access to the variable in the outer function scope (even after the outer has returned)
        - data privacy
    - `promises` : an object that may produce a single value some time in the future (either resolved or not-resolved-error)

1. OOP (Object-Oriented Programming)
    - `prototypal OO`

2. Function programming has mostly won over class inheritance in JS
    - libraries and frameworks like React, Redux, ... dominate over inheritance-based libraries and framworks
    - `pure function`
    - `side effects`
    - `higher order functions || first class functions`

3. Classical inheritance vs Prototypal inheritance
    - `class inheritance` : instances inherit from classes and create sub-class relationships
        - `new` 
        - `extend` : create a class that is a child of another class
        - `super()` : there is no point having a sub-class if it doesn't inherit properties from the parent class ==> super() allows to access and call functions on the parent
        ```js
        class Rectangle {
            constructor(height, width) {
                this.height = height;
                this.width = width;
            }
            calcArea() {
                return this.height * this.width;
            }
        }
        const square = new Rectangle(10, 10);
        class Square extends Rectangle {
            constructor(height, width) {
                super();
                this.height = height;
                this.width = width;
                this.name = 'Square';
            }
        }
        const sqare2 = new Sqaure(15, 15);
        console.log(sqaure2.name); // 'Square subclass'
        ```
    - `prototypal inheritance` : instances inherit directly from other objects via factory fuctions or `Object.create()`
        - simpler and more flexibles
        ```js
        function Person(first, last, age, gender) {
            this.name = { first, last };
            this.age = age;
            this.gender = gender;
        }
        Person.prototype.greeting = function() {
            console.log('Hi, ' + this.name.first + '!');
        }
        let ari = new Person("Ari", "Gran", 11, "F");
        ari.greeting();
        ```
        ```js
        const person = {
            inHuman: false,
            printIntroduction: function() {
                console.log(this.name, 'am I human?', this.isHuman)
            }
        }
        const me = Object.create(person);
    - when to use inheritance : Web API || methods/properties from built-in broswer object || when your code gets larger and you start to create a number of objects with similiar features

## Two-way data binding
- UI fields are bound to model data
    - when a UI field changes, the model data changes with it and vice-versa
    - might cause side-effects

## One-way data flow
- The model is the single source of truth
    - data always flows in a single direction
    - React!

## Microservice 
- Your app is made up of lots of smaller, independent applications capable of running in their own memory // scaling independently


## Asynchronous programming
- Synchronous programming : barring conditionals, function calls, code is executed `sequentially` from top-to-bottom
    - can block long-running tasks such as network request, disk I/O
- Asynchronous p. : runs in an event loop
    - single program can handle many concurrent opertions
    - when blocking operation is needed (`request` made), the code keeps running without blocking for the result ==> when `response` is ready, an interrupt is fired (event handler to be run)
    - User interfaces
    - Node : waiting in a loop for a network request, and accepting more incoming requests while the first req is being handled