function getMin(...val) {
  let min = val[0];
  for (let i = 1; i < val.length; ++i) {
    if (val[i] < min) {
      min = val[i];
    }
  }
  return min;
}

getMin(3, 0, -3);
