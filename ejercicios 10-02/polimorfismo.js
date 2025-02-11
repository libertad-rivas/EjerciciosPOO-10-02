var ClassCat = /** @class */ (function () {
    function ClassCat() {
    }
    ClassCat.prototype.hacersonido = function () {
        console.log("Miau!!!");
    };
    return ClassCat;
}());
var ClassDog = /** @class */ (function () {
    function ClassDog() {
    }
    ClassDog.prototype.hacersonido = function () {
        console.log("Wuau!!");
    };
    return ClassDog;
}());
var ClassLion = /** @class */ (function () {
    function ClassLion() {
    }
    ClassLion.prototype.hacersonido = function () {
        console.log("Rawr!!");
    };
    return ClassLion;
}());
function hacerSonidosAnimaleS(animales) {
    animales.forEach(function (animal) {
        animal.hacersonido();
    });
}
var gatoObj = new ClassCat();
var perroObj = new ClassDog();
var leonObj = new ClassLion();
var animales = [gatoObj, perroObj, leonObj];
hacerSonidosAnimaleS(animales);
