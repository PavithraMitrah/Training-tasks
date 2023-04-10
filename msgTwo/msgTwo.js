"use strict";
exports.__esModule = true;
var msgOne_1 = require("./msgOne");
var message = new msgOne_1.notification("pavi", "pink");
console.log(message.successFn("Green"));
console.log(message.warningFn("yellow"));
console.log(message.notificationFn("blue"));
console.log(message.errorFn("Red"));
