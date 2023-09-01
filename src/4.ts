
class Key {
    private signature:number;
    constructor(){
        this.signature = Math.random();
    }
    public getSignature():number{
        return this.signature;
    }
}

class Person {
    constructor(private key:Key){
    }
    public getKey(){
        return this.key
    }
}

abstract class House {
    public door: boolean;
    private tenants:Person[];
    constructor(public key:Key){}

    comeIn(person:Person){
        if(!this.door){
            throw new Error('Door isn`t open');
        }
        this.tenants.push(person)
    }
    public abstract openDoor(key:Key):void;
}

class MyHouse extends House {
    constructor(public key:Key){
        super(key)
    }
    public openDoor(key:Key): void {
        if(key.getSignature() !== this.key.getSignature()) {
            this.door = false;
        }
        this.door = true;
        console.log("Door is open")
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};