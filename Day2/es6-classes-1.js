class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name=name;
        this.age=age;
    }

    getGreetings(){
        return `Hi, I am ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

//if u want a student clss who's a person but takes all code of Person
class Student extends Person{
    //do u need to set default of name, age again? NO. It will understand, but 
    //first needs to call parent constructor to do its work.
    //so we use Super keyrd so name,age all settings is done her
    //then goes to major
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
         return !!this.major;
     }

     //overriding get Description method
     getDescription(){
         let description = super.getDescription(); //calling initial name and age stmt
         if(this.hasMajor()){
             description+=` .Their major is ${this.major}`;
         }
         return description;
     }
}

class Traveler extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location=location;
    }

    hasLocation(){
        return !!this.location;
        //or u can directly put in this.location in if stmt
    }

    getGreetings(){
        let greet =super.getGreetings();
        if(this.hasLocation()){
            greet += `. Their Home location is ${this.location}`;
        }
        return greet;
    }
}

const me=new Traveler('Olivia', 23, 'Seoul');
console.log(me.getGreetings());
//console.log(me);


const other = new Traveler();
console.log(other.getGreetings());
