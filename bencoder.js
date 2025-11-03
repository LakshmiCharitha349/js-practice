function encodeNumbers(data) {
  return "i" + data + "e"; 
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

function testEncodeNumbers(data, expected, gist) {
  const result = encodeNumbers(data);
  displayMessage(data, result, expected, gist);
}

function testCases() {
  testEncodeNumbers(123,"i123e","encode a number");
  testEncodeNumbers(0,"i0e","encode  number 0");
  testEncodeNumbers(-435,"i-435e","encode negitive number");
  testEncodeNumbers(45637,"i45637e","encode negitive number");
}

testCases();
