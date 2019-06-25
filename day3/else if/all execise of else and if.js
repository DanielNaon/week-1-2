
*let enoughMoneyInBank = false
let hasJob = true

if(enoughMoneyInBank) {
   
}
 else {
 if(hasJob) {
        console.log('go to work')
    } 
    else {
        console.log('go find a job!!!')
    }
}*/

*// execise 1
let numChildren = prompt("what is your number of children?");
const isCareful = false;
if(!isCareful) {
  console.log("you are the man");
} else {
numChildren++ 
}
console.log(numChildren);*/

*// execise 2
let silverwareCount = prompt("write a number in here!");
if(silverwareCount % 2 != 0){
    console.log("yuston i think of a problem");
}*/
// execise 3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
if(performance == "good"){
    salary +=goodBonus;
}  else if(performance == "stellar") {
    salary+=stellarBonus
}
console.log(salary) 

/*//execise 4
const isVIP = false;
let cash = 500
if(!isVIP || cash > 300){
    console.log("hello dude")
}
  else{
    console.log("Hmph.")
  }*/

  // execise 6
const gender = null
let profession = "business"

if(gender == "male"){
    profession += "man"
    } else if(gender == "female"){
    profession += "woman"
    } else {
        profession+= "person"
    } 

console.log(profession);

//execise 7

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018


if(boughtTesla && isUSCitizen ){
    if(yearOfTeslaPurchase < 2014) {
        console.log("would you like an upgrade?")
    } else if( currentYear == 2018) {
        console.log("are you stesfied with your car?")
    } else if(boughtTeslar== "telsa" &&citizen==!"us"){
     console.log("would you like to move to us?")
 }
 else{
     console.log("would you like to buy one?") }
 }

 //
 