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
  testEncodeNumbers(123,"i123e","encodeNumbers data");
  testEncodeNumbers(0,"i0e","encodeNumbers number 0");
}

testCases();
