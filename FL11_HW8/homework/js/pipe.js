function pipe(num, ...fns) {
  for (let i = 0; i < fns.length; i++) {
    num = fns[i](num);
  }
  return num;
}

function addOne(num) {
  return num + 1;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));
