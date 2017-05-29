"use strict";
var Something = (function () {
    function Something() {
        Something.instances++;
    }
    return Something;
}());
Something.instances = 0;
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2
