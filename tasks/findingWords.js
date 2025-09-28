function findingWords(string) {
  let isItVowel = isVowel(string[0]);
  let wordSeries = string[0];
  let words = "";

  for (let index = 1; index < string.length; index++) {
    if (isItVowel && !isVowel(string[index])) {
      wordSeries += string[index];
      isItVowel = false;
    } else if (!isItVowel && isVowel(string[index])) {
      wordSeries += string[index];
      isItVowel = true;
    } else if (!isItVowel && !isVowel(string[index])) {
      words += string[index] + " ";
    }
  }
  
  return wordSeries + " " + words;

}

function isVowel(char) {
  return char === 'a' || char === "e" || char === "i" || char === "o" || char === "u";
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
  testFindingWords("apple", "ape p l ");
  testFindingWords("there", "tere h ");
  testFindingWords("hello", "helo l ");
  testFindingWords("this", "tis h ");
  testFindingWords("charitha", "carita h h ");
}

testCases();
