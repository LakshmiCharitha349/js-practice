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

function average(data, index1, index2) {
  return (data[index1] + data[index2]) / 2;
}

function isEven(value) {
  return value % 2 === 0;
}

function midValueOf(data) {
  const size = data.length;

  if (isEven(size)) {
    const midIndex = size / 2;
    return average(data, midIndex - 1, midIndex);
  }

  return (size + 1) / 2 - 1;

}

function median(data) {
  const sortedData = sort(data);
  return midValueOf(sortedData);
}

function displayMedian() {
  const data = [25, 0, 50, 25];
  const medianOfData = median(data);
  console.log("Median", medianOfData);
}

function main() {
  displayMedian();
}

main();
