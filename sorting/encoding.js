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

function findMedian() {
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

function sqr(value) {
  return value * value;
}

function deviation(data) {
  let sum = 0;
  const meanOfData = mean(data);

  for (let index = 0; index < data.length; index++) {
    const sqrOfAbsoluteValues = sqr(data[index] - meanOfData);
    sum = sum + sqrOfAbsoluteValues;
  }

  return Math.sqrt(sum / data.length);
}

function calculateDeviation() {
  const data = [0, 25, 25, 50];
  console.log("Deviation", deviation(data));

}

function main() {
  findMedian();
  calculateDeviation();
}

main();
