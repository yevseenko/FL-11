let obj = {
  a: 0,
  b: 0,
  c: 0
}

let magicNumber = 2;

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = +prompt(`Enter triangle side [${key.toUpperCase()}] length:`, '');
    if (isNaN(parseFloat(obj[key]) && !isFinite(obj[key])) || obj[key] <= 0) {
      alert(`Not valid length. Please press F5 and enter new data`);
      break;
    }
  }
}

if (Math.max(obj.a, obj.b, obj.c) < (obj.a + obj.b + obj.c) / magicNumber) {
  if (obj.a === obj.b && obj.b === obj.c) {
    console.log(`Eequivalent triangle`);
  } else if (obj.a === obj.b || obj.a === obj.c || obj.b === obj.c) {
    console.log(`Isosceles triangle`);
  } else {
    console.log(`Normal triangle`);
  }
} else {
  console.log(`Triangle doesn't exits`);
}