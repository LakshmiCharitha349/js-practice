function findingWords(string) {
  return "ape p l";  
}

function displayMessage(string, actualResult, expectedResult) {

  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  
  const inputFragment = ' "' + string + '"';
  const actualFragment = " Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  
  const message = resultSymbol + inputFragment + actualFragment + expectedFragment;

  console.log(message); 
}

function testFindingWords(string, expectedResult) {
  const actualResult = findingWords(string);

  displayMessage(string, actualResult, expectedResult);
}

function testCases() {
  testFindingWords("apple", "ape p l"); 
}

testCases();
