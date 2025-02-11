interface IAnimal {
    hacersonido():void;
}


class ClassCat implements IAnimal{
    hacersonido(): void {
        console.log("Miau!!!");        
    }
}

class ClassDog implements IAnimal{
    hacersonido(): void {
        console.log("Wuau!!");
    }
}

class ClassLion implements IAnimal{
    hacersonido(): void {
        console.log("Rawr!!");
    }
}

function hacerSonidosAnimaleS(animales:IAnimal[]){
    animales.forEach(animal => {
        animal.hacersonido();
    });
}

let gatoObj =new ClassCat();
let perroObj =new ClassDog();
let leonObj  =new ClassLion();

let animales = [gatoObj, perroObj, leonObj];

hacerSonidosAnimaleS(animales);