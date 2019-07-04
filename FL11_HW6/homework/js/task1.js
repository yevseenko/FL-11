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
    if (isNaN(parseFloat(coordinates[key]['x'])) && !isFinite(coordinates[key]['x'])) {
      isNumber = false;
      alert('Not a number, please press F5 to continue');
      break;
    }
    coordinates[key]['y'] = +prompt(`Enter coordinate Y of point ${key}:`, '');
    if (isNaN(parseFloat(coordinates[key]['y'])) && !isFinite(coordinates[key]['y'])) {
      isNumber = false;
      alert('Not a number, please press F5 to continue');
      break;
    }
  }
}

if (isNumber) {
  let magicNumber = 2;
  let halfOnX = (coordinates['A']['x'] + coordinates['B']['x']) / coordinates['C']['x'] === magicNumber;
  let halfOnY = (coordinates['A']['y'] + coordinates['B']['y']) / coordinates['C']['y'] === magicNumber;

  halfOnX && halfOnY ? console.log(true) : console.log(false);
}
