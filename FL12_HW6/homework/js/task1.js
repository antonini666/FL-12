let a = prompt('Enter value a');
let b = prompt('Enter value b');
let c = prompt('Enter value c');
let d, x, x1, x2;
let two = 2;
let four = 4;

if (
  a === null ||
  b === null ||
  c === null ||
  isNaN(+a) ||
  isNaN(+b) ||
  isNaN(+c) ||
  isNaN(parseFloat(a)) ||
  isNaN(parseFloat(b)) ||
  isNaN(parseFloat(c)) ||
  +a === 0
) {
  console.log('Invalid input data');
} else {
  a = parseFloat(a);
  a = parseFloat(b);
  a = parseFloat(c);
  d = Math.pow(b, two) - four * a * c;
  if (d === 0) {
    x = -b / (two * a);
    console.log(`x = ${x}`);
  } else if (d > 0) {
    x1 = Math.round((-b + Math.sqrt(d)) / (two * a));
    x2 = Math.round((-b - Math.sqrt(d)) / (two * a));
    console.log(`x1 = ${x1}`, `x2 = ${x2}`);
  } else if (d < 0) {
    console.log('no solution');
  }
}
