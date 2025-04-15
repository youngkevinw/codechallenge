"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (message) {
        console.log(message); //successful for valid updates/adds
    };
    ConsoleLogger.prototype.error = function (message) {
        console.error(message); //error logs for invalid updates/adds
    };
    return ConsoleLogger;
}());
exports.ConsoleLogger = ConsoleLogger;
