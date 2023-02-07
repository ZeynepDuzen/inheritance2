class Car{
     constructor(range,model){
        this.range = range;
        this.model = model;
     }
   
     getModelRange(){
        return this.range + " " + this.model;                      
     }
}

class ElectricCar extends Car{
    constructor(range,model,battery){
        super(range,model);
        this.battery = battery;
    }

    charge(){
        return this.model + " " + "is charging.";                      
    }
}

class SelfDrivingCar extends ElectricCar{
    constructor(range,model,battery,auto){
       super(range,model,battery);
       this.auto = auto;
    }

    drive(){
       return this.model +" "+ "AI is driving";                        
    }
}

let mercedes = new SelfDrivingCar(0,"mercedes",100,"Autopilot");

console.log(mercedes.getModelRange()); //public

console.log(mercedes.charge());       //public

console.log(mercedes.drive());        //public

//Encapculation --> public-private-protected

class Person{
     #name = "Lucy"; // # ile başlayan değişken class'ın içerisinde  constructor'un dışında olmalı
     
     constructor(name,age){
         this.#name = name; 
         this._age = age;                    
     }

     get name(){
        return this.#name;                      
     }

     set name(newName){
         this.#name = newName;                     
     }

     get age(){
        return this._age;                      
     }

     set age(newAge){
         if(newAge < 0){  // if döngüsü ile protected yapıldı --> protected logic
            newAge = 0; 
         }                     
         this._age = newAge;                    
     }

}

let p = new Person("jhon",20);

//console.log(p.#name);  name değişkenine ulaşamıyoruz, name değişkeni --> private

console.log(p.name);

p.name = "Amy";

console.log(p.name);

//protected 

console.log(p.age);

p.age = -3;
console.log(p.age);

