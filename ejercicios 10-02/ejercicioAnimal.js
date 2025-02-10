var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// crear clase base e instancia de cada objeto
var Animal = /** @class */ (function () {
    function Animal(name, sex, age, weight, color) {
        this._name = name;
        this._sex = sex;
        this._age = age;
        this._weight = weight;
        this._color = color;
    }
    Animal.prototype.breathe = function () {
        console.log("".concat(this._name, " est\u00E1 respirando"));
    };
    Animal.prototype.eat = function (food) {
        console.log("".concat(this._name, " come "));
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, sex, age, weight, color, isNasty, texture) {
        var _this = _super.call(this, name, sex, age, weight, color) || this;
        _this._isNasty = isNasty;
        _this._texture = texture;
        return _this;
    }
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, sex, age, weight, color, bestFriend) {
        var _this = _super.call(this, name, sex, age, weight, color) || this;
        _this._bestFriend = bestFriend;
        return _this;
    }
    return Dog;
}(Animal));
var Luna = new Cat("Luna", "hembra", 2, 5, "gris", true, "lisa");
var Oscar = new Cat("Óscar", "macho", 3, 7, "marrón", false, "rayado");
var Boni = new Dog("Bonita", "hembra", 7, 5, "blanco", "Human");
