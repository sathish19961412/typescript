var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, 's', true];
var colorRed = 0;
var colorBlue = 1;
var colorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var background = Color.Red;
