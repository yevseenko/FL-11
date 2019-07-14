function isInteger(num) {
  return typeof num === 'number' && !(num%1) && isFinite(num);
}

console.log(isInteger(5));
console.log(isInteger(5.1));
