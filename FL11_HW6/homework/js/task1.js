const coordinates = {
  'A': {
    'x': 0,
    'y': 0
  },
  'B': {
    'x': 0,
    'y': 0
  },
  'C': {
    'x': 0,
    'y': 0
  }
}

let isNumber = true;

for (let key in coordinates) {
  if (coordinates[key].hasOwnProperty('x') && coordinates[key].hasOwnProperty('y')) {
    coordinates[key]['x'] = +prompt(`Enter coordinate X of point ${key}:`, '');
    if (isNaN(coordinates[key]['x']) || !isFinite(coordinates[key]['x'])) {
      isNumber = false;
      alert(`[${coordinates[key]['x']}] - not a number, please press F5 to continue`);
      break;
    }
    coordinates[key]['y'] = +prompt(`Enter coordinate Y of point ${key}:`, '');
    if (isNaN(coordinates[key]['y']) || !isFinite(coordinates[key]['y'])) {
      isNumber = false;
      alert(`[${coordinates[key]['y']}] - not a number, please press F5 to continue`);
      break;
    }
  }
}

if (isNumber) {
  let magicNumber = 2;
  let halfOnX = (coordinates['A']['x'] + coordinates['B']['x']) / magicNumber === coordinates['C']['x'];
  let halfOnY = (coordinates['A']['y'] + coordinates['B']['y']) / magicNumber === coordinates['C']['y'];

  halfOnX && halfOnY ? console.log(true) : console.log(false);
}
