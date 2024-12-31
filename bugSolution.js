function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); //Throw error for null
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
//console.log(foo(null, 2)); // Throws Error
//console.log(foo(1, null)); // Throws Error
//console.log(foo(null, null));//Throws Error