function reverseNumber(num) {
  let str = Math.abs(num).toString();
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return parseFloat(result) * Math.sign(num);
}

console.log(reverseNumber(123)); 
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));
