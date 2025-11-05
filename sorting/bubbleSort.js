function sort(data, isLessThan) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {

      if (isLessThan(data[i], data[j])) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }

    }
  }

  return data;
}

const isStringLength = function (element1, element2) {
  isLessThan(element1.length, element2.length);
}

const isLessThan = function (element1, element2) {
  return element1 < element2;
}

const isGreaterThan = function (element1, element2) {
  return element1 > element2;
}

const dataOfNums = [9, 0, 2, 1];
const dataOfStrings = ["a", "ab", "abc", "abcd"];

console.log("descending order", sort(dataOfNums, isLessThan));
console.log("ascending order", sort(dataOfNums, isGreaterThan));
console.log("order of strings", sort(dataOfStrings, isStringLength));
