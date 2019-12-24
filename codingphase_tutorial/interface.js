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
var User_1 = require("./models/User");
var welcome = function (user) {
    console.log("Welcome " + user.name + ". You are from " + user.city + ", " + user.state + " and you are " + user.age + " years old.");
};
var folau = {
    name: "Folau",
    state: "Inglewood",
    age: 33,
    city: "Lennox",
    welcome: function () {
    }
};
welcome(folau);
var biker = new User_1.User();
biker.age = 45;
biker.state = "CA";
biker.city = "Hawthorne";
biker.name = "John";
welcome(biker);
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(User_1.User));
var kinga = new Manager();
kinga.name = "Kinga";
kinga.age = 6;
kinga.state = "CA";
kinga.city = "Hawthorne";
