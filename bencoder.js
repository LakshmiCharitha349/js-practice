function encodeNumbers(data) {
  return "i" + data + "e"; 
}

function encodeString(data) {
  const stringSize = data.length;

  return stringSize + ":" + data;
}

function encode(data) {
  const typeOfData = typeof data;

  switch(typeOfData) {
    case "number" :
      return encodeNumbers(data);
    case "string" :
      return encodeString(data);
    default :
    return "invalid type";
  }

}

function displayMessage(data, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${data}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testEncode(data, expected, gist) {
  const result = encode(data);
  displayMessage(data, result, expected, gist);
}

function testCasesOnNumbers() {
  console.log("\n--- ENCODING NUMBERS ---");
  testEncode(123,"i123e","encode a number");
  testEncode(0,"i0e","encode  number 0");
  testEncode(-435,"i-435e","encode negitive number");
  testEncode(45637,"i45637e","encode negitive number");
}

function testCasesOnString() {
  console.log("\n--- ENCODING STRINGS ---");
  testEncode("string","6:string","encode a string");
  testEncode("","0:","encode a empty string");
  testEncode("hello","5:hello","encode a string hello");
  testEncode("hello","5:hello","encode a string hello");
  testEncode("hello world","11:hello world","encode a word"); 
}

function testAllCases() {
  
  testCasesOnNumbers();
  testCasesOnString();
}

function main() {
  testAllCases();
}

main();
