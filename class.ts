// class Point {
//     x: number;
//     y: number;
//  }
//   const pt = new Point();
//   pt.x = 100;
//   pt.y = 200;
//   console.log("this is x"+pt.x);
//   console.log("this is y"+pt.y);


class Point {
    x: number;
    y: number;
    // Normal signature with defaults
    constructor(x = 101, y = 10) {
      this.x = x;
      this.y = y;
 } }
const p = new Point();
// p.x=10100;
// p.y=101;

console.log(p.x);
console.log(p.y);
var x=10;
console.log(x)
x=20;
console.log(x);
