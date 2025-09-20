const testCase1 = "LZ";
let isHunt = -1;
for(let start = 0;start < testCase1.length; start++) {
  let hunt = -1;
  if(testCase1[start] === "L") {
    for(let search = 0;search < testCase1.length;search++) {

      if(testCase1[search] === "Z") {
        hunt = search - start;
        isHunt = hunt === 1 ? 0 : hunt;
      }
    }
  }
}

console.log("input :",testCase1);
console.log("output :",isHunt );
