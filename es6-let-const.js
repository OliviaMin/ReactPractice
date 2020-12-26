var nameVar='Olivia';
var nameVar='Suga'
console.log('nameVar',nameVar);
    {/* Reassign, and redefine in Var->NOT GOOD, so-- */}

let nameLet='Neha';
nameLet='Julie'
{/* let nameLet='Julie will give error' : Cannot redefine, but reassign */}
console.log('nameLet',nameLet);

const nameConst='Timotee'
//nameConst='Frank'
//const nameConst='Frank' ->Both give errors
console.log('nameConst',nameConst);

function getPetName() {
    let petName='Tim';
    return petName;    
}

//getPetName();
//console.log(petName);
//here you'll get error bcoz scope of var,const,let is till
//function only, can't access outside directly, so assign it to another variable

const petName=getPetName();
console.log(petName);

//Block Scoping
//-------VAR is function level---------------
var fullname="Olivia Biswas";

if(fullname){
    var firstname=fullname.split(' ')[0];
    console.log(firstname);
}

console.log(firstname);
//u see Olivia twice
//------let & const is block level, even if-else, 2nd console.log gvs error---------

if(fullname){
    let lastname=fullname.split(' ')[1];
    console.log(lastname);
}

//console.log(lastname); -->gvs error

//---Solution: let & const outside:

let lastname1;
if(fullname){
    lastname1=fullname.split(' ')[1];
    console.log(lastname1);
}
console.log(lastname1);

//const>let>var(never!!!!!)