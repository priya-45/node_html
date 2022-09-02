// const myCalculator = require("./Calculator");
// myCalculator.add(10, 30);
// console.log(myCalculator)
// myCalculator.substract(30, 10);
// console.log(myCalculator)



async function add(operator1, operator2) {
    return 'Result: ', operator1 + operator2;
  }
  async function substract(operator1, operator2) {
    return 'Result: ', operator1 - operator2;
  }
  async function asyncCall() {
    console.log('calling');
    const result = await add(2, 3);
    console.log(result);
  }
  asyncCall();