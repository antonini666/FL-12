function makeNumber(str) {
  str = str
    .split("")
    .filter(e => !isNaN(+e))
    .join("");
  return str;
}

function counterNumbers(str) {
  let result = {};
  makeNumber(str)
    .split("")
    .sort((a, b) => a - b)
    .forEach(function(a) {
      if (result[a] !== undefined) {
        ++result[a];
      } else {
        result[a] = 1;
      }
    });
  return result;
}

counterNumbers("jdjjka000466588kkkfs662555");
