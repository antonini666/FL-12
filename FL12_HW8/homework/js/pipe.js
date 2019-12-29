function addOne(x) {
  return x + 1;
}

function pipe(x, ...func) {
  for (let f in func) {
    x = func[f](x);
  }
  return x;
}

pipe(1, addOne, addOne);
