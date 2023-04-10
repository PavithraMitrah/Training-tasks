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
exports.name = void 0;
var name = /** @class */ (function () {
    function name() {
        // this.name = name;
        // this.age = age;
        // this.email = email;
        // this.password = password;
    }
    name.prototype.nameValidate = function (a) {
        return a.name;
    };
    name.prototype.emailValidate = function (a) {
        var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        return (emailRegex.test(a.email));
    };
    name.prototype.passwordValidate = function (a) {
        var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{8,30}$/;
        return (passwordRegex.test(a.password));
    };
    name.prototype.checkValidation = function (a, b, c) {
        var arr = [
            {
                name: "bbb",
                email: "yyy@gmail.com",
                password: "123@Mp321"
            },
            {
                name: "pa",
                email: "pav@gmail.com",
                password: "123@Mp321"
            }
        ];
        var index;
        var value = (arr.filter(function (ele, i) {
            if (ele.name === a.name && ele.email === b.email && ele.password) {
                return (index = i);
            }
        }));
        if (value.length > 0) {
            var x = value.map(function (ele) {
                ele["Id"] = index;
                return ele;
            });
            return x;
        }
        else {
            return "The user is not exist";
        }
    };
    name.prototype.add = function (a, b) {
        return a + b;
    };
    return name;
}());
exports.name = name;
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    employee.prototype.test = function () {
        this.data.add(1, 2);
    };
    return employee;
}(name));
