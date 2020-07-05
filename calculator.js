function Calculator() {

  this.method = {
    "+": (a,b) => a+b,
    "-": (a,b) => a-b,
  }

  this.calculate = function(str) {
    let splitted = str.split(' '); // '3 + 7' >>> ['3','+','7']
    let oper = splitted[1];
    let a = +splitted[0];
    let b = +splitted[2];

    if (!this.method[oper]) return "Operator not found";
    if (isNaN(a) || isNaN(b)) return "Not a number!";

    return this.method[oper](a, b);
  }

  this.addMethod = function(name, func) {
    this.method[name] = func;
  }
}

let calc = new Calculator;
// console.log(calc)
// console.log(calc.calculate("3 + 7"));
// console.log(calc.calculate("33 * 13"));
// console.log(calc.calculate("ab - 13"));
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
// console.log(powerCalc.calculate("2 * 3"));
// console.log(powerCalc.calculate("2 ** 3"));

let range = {
  from: 1,
  to: 5
}
