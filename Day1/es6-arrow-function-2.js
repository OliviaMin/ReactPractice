//arguments object - no longer bound with arrow function

// const add = function(a,b){
//     console.log(arguments) -->o/p: 5,2,65
//     return a+b; -->o/p: 7
// }

//arrow function way
const add = (a,b) =>{
    //console.log(arguments) -->error: no access to argumemts
    return a+b
}
console.log(add(5,2,65));

//this keyword- no longer bound

// const user = {
//     name: 'Olivia',
//     cities: ['Mumbai','Kolkata','Seoul'],
//     printPlacesLived: function () {
//         // console.log(this.name);
//         // console.log(this.cities);
//         const that=this;
//         //y use that? bcoz functions don't longer  bind, they 
//         //just refer to context created in, so below code gvs error

//         this.cities.forEach(function (city) {
//             console.log(that.name + ' has lived in' + city);

            
//         })

//     }
// };

const user = {
    name: 'Olivia',
    cities: ['Mumbai','Kolkata','Seoul'],
    printPlacesLived() {
           const cityMessages= this.cities.map((city)=>{
                return this.name + ' has lived in' + city;
                //returns array
            });
                return cityMessages;

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in' + city);
        //returns 3 items separate
            
       // })

    }
};

console.log(user.printPlacesLived());

//challenge

const multiplier ={
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num*this.multiplyBy);

    }
}

console.log(multiplier.multiply());