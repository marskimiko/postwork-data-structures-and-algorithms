function fibonacci(num) {
  // type your code here
  if (num === 0) return 0;
  let spot1 = 0;
  let spot2 = 1;
  let current;

  for (i = 2; i <= num; i++) {
    current = spot1 + spot2;
    spot1 = spot2;
    spot2 = current;
  }

  return spot2;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
