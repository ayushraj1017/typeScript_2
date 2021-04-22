"use strict";
exports.__esModule = true;
//Area using Enums
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2.73] = "e";
    myConstants[myConstants["log2"] = 0.3] = "log2";
})(myConstants || (myConstants = {}));
var radius = 20;
console.log("circumference");
var c = 2 * myConstants.pi * radius;
console.log(c);
//class and constructor
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.y = y;
        this.x = x;
    }
    Point.prototype.draw = function () {
        console.log(" X: " + this.x + " Y: " + this.y + " ");
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('error');
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var p = new Point(4, 5); //p is a Object.....which is an instance of a class
// p.x=6;               to prevent this access modifier is used
console.log(p.X); //getter
p.X = 10; //setter
p.draw();
var drawPoint = function (d) {
    console.log(d.x + " " + d.y);
};
var args = {
    x: 10,
    y: 20
};
drawPoint(args);
