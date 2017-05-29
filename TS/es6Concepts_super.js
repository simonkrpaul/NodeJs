"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//super is applied on prototype properties
var Base = (function () {
    function Base() {
    }
    Base.prototype.log = function () { console.log('hello world'); };
    return Base;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.log = function () { _super.prototype.log.call(this); };
    ;
    return Child;
}(Base));
//It cannot be used on member properties. Throws an error
var quz;
(function (quz) {
    var Base = (function () {
        function Base() {
            this.log = function () { console.log('hello world'); };
        }
        return Base;
    }());
    var Child = (function (_super) {
        __extends(Child, _super);
        function Child() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Child.prototype.logWorld = function () { _super.prototype.log.call(this); };
        ;
        return Child;
    }(Base));
})(quz || (quz = {}));
//in case of member function, use this
var Base01 = (function () {
    function Base01() {
        this.log = function () { console.log('hello world'); };
    }
    return Base01;
}());
var Child01 = (function (_super) {
    __extends(Child01, _super);
    function Child01() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child01.prototype.logWorld = function () { this.log(); };
    ;
    return Child01;
}(Base01));
