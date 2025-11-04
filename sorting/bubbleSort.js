let numberOfIterations = 0;

function sort(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      numberOfIterations++;

      if (data[i] > data[j]) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }

    }
  }

  return data;
}

function randomBtwn(lower, upper) {
  const randomNumber = Math.floor(Math.random() * (upper - lower));

  return lower + randomNumber;
}

function benchMark(size) {
  const data = [];
  for (let index = 0; index < size; index++) {
    const element = randomBtwn(1, 100);
    data.push(element);
  }

  const sortedData = sort(data);
  console.log(`${size} -- ${numberOfIterations}`);
}

function displayData() {
  console.log("Sorted data is", sortedData);
  console.log("Numnber Of times :", numberOfIterations);

}

benchMark(10000);
