class Parent{
    constructor(){
        this.fatherName= 'Selim';
    }
}
class Child extends Parent{
    constructor(name){
        super(); 
        this.name= name;
    }
    getFullName(){
        return this.name+ " " + this.fatherName;
    }
}
const baby = new Child('Subah');
const baby2 = new Child('Ratul');
console.log(baby);
console.log(baby2.getFullName());