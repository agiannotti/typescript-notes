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
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// setting var nums explicitly.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
