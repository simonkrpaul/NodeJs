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
var quz;
(function (quz) {
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
})(quz || (quz = {}));
