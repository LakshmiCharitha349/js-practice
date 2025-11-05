const add = function (value1, value2) {
  return value1 + value2;
}

const sub = function (value1, value2) {
  return value1 - value2;
}

const product = function (value1, value2) {
  return value1 * value2;
}

const modulus = function (value1, value2) {
  return value1 % value2;
}

function calculator(operation, value1, value2) {
  return operation(value1, value2);
}

console.log(calculator(product, 2, 3));
console.log(calculator(add, 5, 1));
console.log(calculator(sub, 10, 1));
console.log(calculator(modulus, 10, 1));
