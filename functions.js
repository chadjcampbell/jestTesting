function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

class Calculator {
  constructor() {}

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  divide(x, y) {
    return x / y;
  }

  multiply(x, y) {
    return x * y;
  }
}

const calc = new Calculator();

function caesarCipher(string, shift) {}

function analyzeArray(array) {}

export { capitalize, reverseString, calc, caesarCipher, analyzeArray };
