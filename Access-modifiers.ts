// keyword that can be applied to a class member to control access from the outside
// i.e public, private, protected
// default is public

// class Point {
//   private x: number;
//   private y: number;
//   constructor(x?: number, y?: number) {
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//     console.log('x: ' + this.x, 'y: ' + this.x);
//   }
// }

// let point = new Point(1, 2);
// point.draw();

// // if you prefix a parameter using an access modifier, TS will compile field with same name and value of argument
// class Point {
//   constructor(private x?: number, private y?: number) {}

//   draw() {
//     console.log('x: ' + this.x, 'y: ' + this.x);
//   }
// }

// let point = new Point(1, 2);
// point.draw();
