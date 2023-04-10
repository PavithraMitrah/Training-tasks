"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.notification = exports.msg = void 0;
var msg = /** @class */ (function () {
    function msg(name, color) {
        this.name = name;
        this.color = color;
    }
    msg.prototype.successFn = function (a) {
        return "Success msg : " + this.name + " (" + a + ") successfully login";
    };
    msg.prototype.warningFn = function (a) {
        return "Warning : " + this.name + " (" + a + ") login your detail on time";
    };
    msg.prototype.notificationFn = function (a) {
        return "Notification : " + this.name + " (" + a + ") please login your details";
    };
    msg.prototype.errorFn = function (a) {
        return "Error msg : " + this.name + " (" + a + ") login is incorrect";
    };
    return msg;
}());
exports.msg = msg;
var notification = /** @class */ (function (_super) {
    __extends(notification, _super);
    function notification(name, color) {
        return _super.call(this, name, color) || this;
    }
    return notification;
}(msg));
exports.notification = notification;
