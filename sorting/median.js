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
  const midIndex = size % 2 === 0 ? size / 2 : (size + 1) / 2;
  return data[midIndex];
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
