let triangle = ['A', 'B', 'C'];
let sides = {};

for (let i = 0; i < triangle.length; i++) {
  const val = +prompt(`Enter triangle side [${triangle[i]}] length:`, '');
  if (isNaN(val) || !isFinite(val) || val <= 0) {
    sides = null;
    alert(`Error! Not valid length ${val}. Please press F5 and enter new data`);
    break;
  } else {
    sides[triangle[i]] = val;
  }
}

if (sides) {
  let magicNumber = 2;
  if (Math.max(sides['A'], sides['B'], sides['C']) < (sides['A'] + sides['B'] + sides['C']) / magicNumber) {
    if (sides['A'] === sides['B'] && sides['B'] === sides['C']) {
      console.log(`Eequivalent triangle`);
    } else if (sides['A'] === sides['B'] || sides['A'] === sides['C'] || sides['B'] === sides['C']) {
      console.log(`Isosceles triangle`);
    } else {
      console.log(`Normal triangle`);
    }
  } else {
    console.log(`Triangle doesn't exits`);
  }
}