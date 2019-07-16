const data = {
  people: [{
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ],
  ft: {
    typeOne: null,
    typeTwo: 5,
    typeThree: 'hello'
  },
  efe: {
    argOne: 1,
    argTwo: 2,
    argThree: 3
  },
  ma: {
    argOne: 2,
    argTwo: 5,
    argThree: 8
  }
}

function getNumbers(str) {
  let resultArr = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      resultArr.push(parseFloat(str[i]));
    }
  }
  return resultArr;
}

console.log(getNumbers('string'));
console.log(getNumbers('n1um3ber95'));

function findTypes(...args) {
  const obj = {};
  for (let i = 0; i < args.length; i++) {
    const type = typeof args[i];
    if (!obj[type]) {
      obj[type] = 1;
    } else {
      obj[type]++;
    }
  }
  return obj;
}

console.log(findTypes('number'));
console.log(findTypes(data.ft.typeOne, data.ft.typeTwo, data.ft.typeThree));

function executeForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

console.log(executeForEach([
  data.efe.argOne,
  data.efe.argTwo,
  data.efe.argThree
], function (el) {
  console.log(el);
}));

function mapArray(arr, callback) {
  let result = [];
  executeForEach(arr, (item) => {
    result.push(callback(item));
  });
  return result;
}

console.log(mapArray([data.ma.argOne, data.ma.argTwo, data.ma.argThree], function (el) {
  const mn = 3;
  return el + mn;
}));

function filterArray(arr, callback) {
  let result = [];
  executeForEach(arr, (item) => {
    if (callback(item)) {
      result.push(item);
    }
  });
  return result;
}

console.log(filterArray([data.ma.argOne, data.ma.argTwo, data.ma.argThree], function (el) {
  const mn = 3;
  return el > mn;
}));

function showFormattedDate(date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  return `Date: ${date.toLocaleDateString('en-US', options).replace(',','')}`;
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

function canConvertToDate(date) {
  return !isNaN(new Date(date));
}

console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));

function daysBetween(start, end) {
  const msInDay = 86400000;
  return Math.round((end - start) / msInDay);
}

console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

function getAmountOfAdultPeople(data) {
  const dateNow = Date.now();
  const daysInYear = 365;
  const minAge = 18;
  return filterArray(data, function (item) {
    return daysBetween(new Date(item['birthday']), dateNow) / daysInYear > minAge;
  }).length;
}

console.log(getAmountOfAdultPeople(data.people));

function keys(obj) {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  return result;
}

console.log(keys({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
}));

function values(obj) {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}

console.log(values({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
}));
