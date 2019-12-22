let a = parseInt(prompt('Input value a'));
let b = parseInt(prompt('Input value b'));
let c = parseInt(prompt('Input value c'));
let d;
let x;
let x1;
let x2;

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
  console.log('Invalid input data');
} else {
  d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) {
    x = -b / (2 * a);
    console.log(`x = ${x}`);
  } else if (d > 0) {
    x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
    x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
    console.log(`x1 = ${x1}`, `x2 = ${x2}`);
  } else if (d < 0) {
    console.log('no solution');
  }
}
