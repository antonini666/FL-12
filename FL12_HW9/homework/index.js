const convert = (...args) => {
  let arr = [];
  for (let value of args) {
    !(typeof value === 'string') || arr.push(+value);
    !(typeof value === 'number') || arr.push(`${value}`);
  }
  return arr;
};

const executeforEach = (arr, func) => {
  for (let item of arr) {
    func(item);
  }
};

const mapArray = (arr, func) => {
  let result = [];
  executeforEach(arr, item => result.push(func(+item)));
  return result;
};

const filterArray = (arr, func) => {
  let result = [];
  executeforEach(arr, item => !func(item) || result.push(item));
  return result;
};

const flipOver = str => {
  let result = '';
  for (let item of str) {
    result = item + result;
  }
  return result;
};

const makeListFromRange = arr => {
  let result = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    result.push(i);
  }
  return result;
};

const getArrayOfKeys = (obj, key) => {
  let result = [];
  executeforEach(obj, item => result.push(item[key]));
  return result;
};

const substitute = arr => {
  const num = 30;
  return mapArray(arr, item => item < num ? '*' : item);
};

const getPastDay = (date, num) => {
  const ms = 86400000;
  let resultDate = new Date(date.getTime() - num * ms).getDate();
  return resultDate;
};

const formatDate = date => {
  const minTime = 10;
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours =
    date.getHours() < minTime ? '0' + date.getHours() : date.getHours();
  let minutes =
    date.getMinutes() < minTime ? '0' + date.getMinutes() : date.getMinutes();
  return `${year}/${month}/${day} ${hours}:${minutes}`;
};
