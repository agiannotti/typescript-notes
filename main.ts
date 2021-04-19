// type annotations

// let a: number;

// a=1;
// a = true;
// a = '1'

// variable types

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, 'a', false];

//enum validation

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// setting var nums explicitly.
// enum Color {
//   Red = 0,
//   Green = 1,
//   Blue = 2,
// }

// let backgroundColor = Color.Red;

// type assertions

// you can prefix with type

// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// alternatively
// let alternativeWay = (message as string).endsWith('c')

// Arrow Functions

// let log = function (message) {
//   console.log(message);
// };

// arrow func ex.
// let doLog = (message) => {
//   console.log(message);
// };

// ( you can remove curly braces if one liner)
// let doLog = (message) => console.log(message);

import { Point } from './modules';

let point = new Point(1, 2);
point.draw();
