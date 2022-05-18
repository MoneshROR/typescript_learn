// class Point {
//     x: number;
//     y: number;
//  }
//   const pt = new Point();
//   pt.x = 100;
//   pt.y = 200;
//   console.log("this is x"+pt.x);
//   console.log("this is y"+pt.y);
var Point = /** @class */ (function () {
    // Normal signature with defaults
    function Point(x, y) {
        if (x === void 0) { x = 101; }
        if (y === void 0) { y = 10; }
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var p = new Point();
// p.x=10100;
// p.y=101;
console.log(p.x);
console.log(p.y);
var x = 10;
console.log(x);
x = 20;
console.log(x);
