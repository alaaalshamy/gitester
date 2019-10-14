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
var s = "ff";
console.log(s);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
var newcolor = Color.Blue;
console.log(newcolor);
var newData = 11;
console.log(typeof (newData));
var knowValue = "dd"; // like "any" type but to reassign  values to string .. must make some effort 
// act like string have to redeclear as string 
//factory function
function fucAdd(first, second) {
    return { first: first, second: second }; // shortcut for   return { first: first, second: second };
}
console.log(fucAdd(2, 3));
//{ first: 2, second: 3}
console.log(fucAdd(2));
function addName(person) {
    console.log(person.name + " " + person.age);
}
var personObj = {
    name: "Alaa",
    age: 200
};
addName(personObj);
////////////////////
var Human = /** @class */ (function () {
    function Human(name) {
        this.humanName = name;
    }
    Human.prototype.echoName = function () {
        console.log("hello " + this.humanName);
    };
    return Human;
}());
var Develoer = /** @class */ (function (_super) {
    __extends(Develoer, _super);
    function Develoer(name) {
        return _super.call(this, name) || this;
    }
    Develoer.prototype.dev = function () {
        //console.log(this.humanName)// can't be availble if humanName private
        console.log("developer name :" + this.humanName);
    };
    return Develoer;
}(Human));
var developer = new Develoer("hussein");
developer.dev();
developer.echoName();
//developer.humanName //not working if protected or private
