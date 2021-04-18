// instead of arguments...

// let drawPoint = (x, y, a, b, c, d, e, ) => {
// ...
// };

// interface

// let drawPoint = (point) => {};

// drawPoint({
//   x: 1,
//   y: 2,
// });

// inline annotation
// great for small scenarios
// let drawPoint = (point: {x: number, y:number}) => {};

// drawPoint({
//   x: 1,
//   y: 2,
// });

// interface
// interface Point {
//   x: number;
//   y: number;
// }

// let drawPoint = (point: Point) => {};

// ^^ above and below vv are closely related

// drawPoint({
//   x: 1,
//   y: 2,
// });

// cohesion, brings closely related items together by converting interface
//  into class to include draw function
// class Point {
//   x: number; // <-- fields
//   y: number;

//   draw() {
//     //...
//   }
//   getDistance(another: Point) {
//     // ...
//   }
// }

// let drawPoint = (point: Point) => {};

// still separated from Point
// introduces concept of object oriented programmmings Class structure to apply

// let getDistance = (pointA: Point, pointB: Point) => {};

// drawPoint({
//   x: 1,
//   y: 2,
// });

class Point {
  x: number; // <-- fields
  y: number;

  draw() {
    //...
    console.log('x: ' + this.x, 'y: ' + this.x);
  }
  getDistance(another: Point) {
    // ...
  }
}
// allocating memory for new object
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
