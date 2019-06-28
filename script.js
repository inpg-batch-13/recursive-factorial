function recursiveFactorial(n) {
    if(n == 0) {
        return 1
    } else {
        return n * recursiveFactorial(n - 1);
    }
  }

// test case
console.log(recursiveFactorial(5)) // 120
console.log(recursiveFactorial(8)) // 40320