function sort(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if(data[i] > data[j]) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
      
    }  
  }

  return data;
}

const data = [4,3,2,1];
const sortedData = sort(data);
console.log("Sorted data is", sortedData);
