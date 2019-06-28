function recursiveFactorial(n) {
  // your code here
  if (n === 1 ) {
    return n
  } else {
    return n * recursiveFactorial ( n-1)
  }
}

// test case
console.log(recursiveFactorial(5)) // 120
console.log(recursiveFactorial(8)) // 40320