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

function caesarCipher(string, shift) {
  if (shift < 0) {
    return caesarCipher(string, shift + 26);
  }
  let output = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char.match(/[a-z]/i)) {
      let code = string.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    output += char;
  }
  return output;
}

function analyzeArray(array) {
  let obj = {};
  obj.average = array.reduce((a, b) => a + b) / array.length;
  obj.min = array.reduce((a, b) => Math.min(a, b));
  obj.max = array.reduce((a, b) => Math.max(a, b));
  obj.length = array.length;
  return obj;
}

export { capitalize, reverseString, calc, caesarCipher, analyzeArray };
