"use strict";
exports.__esModule = true;
exports.engineer = void 0;
var engineer = /** @class */ (function () {
    function engineer() {
    }
    engineer.prototype.welcome = function () {
        console.log('welcome');
    };
    return engineer;
}());
exports.engineer = engineer;
var eng = new engineer();
eng.welcome();
