function sort(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {

      if (data[i] > data[j]) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }

    }
  }

  return data;
}

function midValueOf(data) {
  const size = data.length;
  const lowerIndex = Math.ceil((size - 1) / 2);
  const upperIndex = Math.floor((size - 1) / 2);
  return (data[lowerIndex] + data[upperIndex]) / 2;
}

function median(data) {
  const sortedData = sort(data);
  return midValueOf(sortedData);
}

function displayMedian() {
  const data = [0, 28, 0, 50, 25];
  const medianOfData = median(data);
  console.log("Median", medianOfData);
}

function sum(data) {
  let sum = 0;

  for (let index = 0; index < data.length; index++) {
    sum += data[index];
  }
  return sum;
}

function mean(data) {
  return sum(data) / data.length;
}

function absoluteValue(array, data) {
  for (let index = 0; index < data.length; index++) {
    array.push(data[index] - mean(data));
  }

  return array;
}

function sqr(data) {
  const sqrOfElements = [];
  for (let index = 0; index < data.length; index++) {
    sqrOfElements.push(data[index] * data[index]);

  }

  return sqrOfElements;
}

function deviation(data) {
  const absoluteValues = absoluteValue([], data);
  const sqrOfAbsoluteValues = sqr(absoluteValues);
  return Math.sqrt(sum(sqrOfAbsoluteValues) / data.length);
}


function displayDeviation() {
  console.log(deviation([0, 0, 0, 100]));

}

function main() {
  displayMedian();
  displayDeviation();
}

main();
