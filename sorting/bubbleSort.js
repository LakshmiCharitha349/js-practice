function sort(data,isLessThan) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {

      if (isLessThan(data[i],data[j])) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }

    }
  }

  return data;
}

const isLessThan =  function (element1,element2) {
  return element1 < element2;
}

const isGreaterThan = function (element1,element2) {
  return element1 > element2; 
}

const data = [9,0,2,1];

console.log("descending order",sort(data, isLessThan));
console.log("ascending order",sort(data,isGreaterThan));
