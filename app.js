

/////// constructor function :: 

// const Person = function (Name,birth){

    /// instances properties
//   this.firstName = Name ; 
//   this.birthYear = birth ;

      ////// dont do that :::: 
//   this.calcAge = function(){
//    console.log(2024-this.birthYear) 
//   }

// }



// ======> inheritance (new)
// const jonas = new Person("jonas" , 1991) 
// const jessica = new Person  ("jessica" , 1880)



//// prototypes (with constructor functions): 

// Person.prototype.calcAge = function (){
//  console.log(  2024 -  this.birthYear  )
// }


// Person.prototype.welcome = function(){
//     console.log(`good morning ${this.firstName}`)
// }


// console.log(jonas)
// console.log(jessica.welcome())


///// class declaration :: 




// class Personcl {
//   constructor(name,birthYear){
//    this.name = name ; 
//    this.birthYear = birthYear ;
//   }

//   calcAge (){
//     console.log(2024 - this.birthYear)
//   }
// }


// const steven = new Personcl("steven" , 1990) 
// const mark = new Personcl("mark" , 1990)
// console.log(steven.calcAge() )
// console.log(mark)




///// correction with class method ::: 

//1
class Car {
constructor(make,speed){
    this.make = make
    this.speed = speed
}

accelerate (){
    this.speed += 10
    console.log(`The ${this.make} accelerates to ${this.speed} km/h`)
} 

brake(){
    this.speed -= 5
    console.log(`The ${this.make} slows down to ${this.speed}km/h`)
}



}

const car1 = new Car ("BMW",120)
const car2 = new Car ("Mercedes",95)


console.log(car1)
console.log(car2)




/// 2 /// 3///

console.log(car2.accelerate())
console.log(car2.accelerate())
console.log(car2.accelerate())
console.log(car2.accelerate())
console.log(car2.brake())
 
