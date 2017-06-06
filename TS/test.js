"use strict";
var Shape = (function () {
    function Shape(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    Shape.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return Shape;
}());
