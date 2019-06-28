function recursiveFactorial(n) {
  if (n === 1){
    return 1
  } else {
    return n * recursiveFactorial(n-1)
  }

}

// test case
console.log(recursiveFactorial(5)) // 120 // (5 * 4 * 3 * 2 * 1)
console.log(recursiveFactorial(8)) // 40320

