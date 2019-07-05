let pointNames = ['aX', 'aY', 'bX', 'bY', 'cX', 'cY'];
let points = {};

for (let i = 0; i < pointNames.length; i++) {
  const val = +prompt(`Enter coordinate of ${pointNames[i]}:`, '');
  if (isNaN(val) || !isFinite(val)) {
    points = null;
    alert(`[${val}] - not a number, please press F5 to continue`);
    break;
  } else {
    points[pointNames[i]] = val;
  }
}

if (points) {
  let magicNumber = 2;
  let halfOnX = (points['aX'] + points['bX']) / magicNumber === points['cX'];
  let halfOnY = (points['aY'] + points['bY']) / magicNumber === points['cY'];

  halfOnX && halfOnY ? console.log(true) : console.log(false);
}
