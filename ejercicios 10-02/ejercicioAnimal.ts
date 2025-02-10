
// crear clase base e instancia de cada objeto
class Animal{
    public _name: string;
    public _sex: string;
    public _age: number;
    public _weight: number;
    public _color: string;

    constructor(name: string, sex: string, age: number, weight: number, color:string){
        this._name = name;
        this._sex = sex;
        this._age = age;
        this._weight = weight;
        this._color=color;
    }

    public breathe():void{
        console.log(`${this._name} está respirando`);
    }

    public eat(food:string): void{
        console.log(`${this._name} come `);
        
    }
}

class Cat extends Animal{
    public _isNasty: boolean;
    public _texture: string;

    constructor (name: string, sex: string, age: number, weight: number, color:string, isNasty:boolean, texture:string){
        super (name, sex, age, weight, color);
        this._isNasty = isNasty;
        this._texture = texture;
    }
}

class Dog extends Animal{
    public _bestFriend: string;

    constructor(name: string, sex: string, age: number, weight: number, color:string, bestFriend:string){
        super (name, sex, age, weight, color);
        this._bestFriend = bestFriend;
    }
}

const Luna = new Cat ("Luna", "hembra", 2, 5, "gris", true, "lisa");
const Oscar = new Cat("Óscar", "macho", 3, 7, "marrón", false, "rayado");

const Boni = new Dog ("Bonita", "hembra", 7, 5, "blanco", "Human");

