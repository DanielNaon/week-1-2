/*const person = {
    username: "Felicia",
    introduce: function(){
      console.log("Hi, I'm " + this.username) // this = person, username specaliized it
    }
  }
  
  person.introduce()*/

  //execise 2

  /*const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) { // this =feed, hungry speclized it
        hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed() //should alert "I'm no longer hungry"*/
  
  /*//execise 3
  const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);*/

  /*// execise 4
  const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());*/
  
  /*//execise 5
  const tipJar = {
    coinCount: 20,

    tip: function () {
      this.coinCount += 1;
    },

    stealCoins: function(number) {
        this.coinCount-= number 
  }};
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);*/

  /*//execise 5
  const revealSecret = function () {
    return this.secret;
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said:" + result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret)
  
  //execise6*/
  /*const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
     if(coffeShop.dridrinkRequirements)
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  
function sum(num1, num2, num3){
    let add = num1 +num2 +num3;
    return add; // bring back the value
}
let mynum = sum(1, 2, 3);
console.log(mynum);

function lolo(name){
let text = " welcome " + name;
return text;
}
let dani1 = lolo(dani);
console.log(dani1);

function lolo(name){ 
    return " welcome " + name;
    }
    console.log(lolo("dani"));
    console.log("welcome dani");


/*function calcAge(num1, num2){
    let sum = num1 -num2;
    return sum;
}
const age = calcAge(2017, 1989)
console.log("you are either " + age + " or" + (age + 1)); */

/*function isEven(number){
    if(number % 2 ==0){
        return true;
    } else {
        return false;
    }
}

let mycontiner = isEven(25);
console.log(mycontiner);

let container = [12, 21, 17, 80, 65, 70, 60, 34343];
for(let add of container){
    let call = isEven(add);  
    if(call== false){
        console.log(add);
    }
    }

function checkExists (myarray, mynumber){
    for(let checki of myarray){
        if(checki == mynumber){
            return true;
        }
    }
    return false;
}
let myarray =[21, 13, 16, 18, 19]
let why = checkExists(myarray, 24);
console.log(why);*/

//

let calculator = {
    add(number1, number2) {
    let result1= number1 +number2;
    return result1;
    },
    subtract(number1, number2) {
    let result2 = number1-number2;
    return result2;
    }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)); //should print 42


//
function increaseByNameLength (money, name){
     let ruby= name.length * money;
     return ruby;
};
function makeRegal(name){
    let ruby1 = "his Royal Highness , " + name; 
    return ruby1;
};
const turnToKing = function(name, money){
    name = name.toUpperCase();
    money = increaseByNameLength(money, name);
    name = makeRegal(name);

    console.log(name + " has " + money + " gold coins");
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


p1 = {
    name: "dani",
    age: "21",
    city: "tel aviv"
}
p2 = {
    name: "ruby",
    age: "22",
    city: "tel aviv"
}
console.log(p1.name + " wants to date " + p2.name);
console.log(p1["name"]+ "wants to date" +p2["name"] );

//

let myList = [
    {author: "gk rolling", book: "harry potter"},
    {author: "stephani meyer", book: "inkspell"}
]
myList.author = "dani naon";
myList.pop()
console.log(myList);
//
let myLover = [
    {author: "gk rolling", book: "harry potter"},
    {author: "stephani meyer", book: "inkspell"}
]

myList.push(...myLover);   
console.log(myList);

const libary = {
    books:[
        {name: "rolling", book:"Stones"},
        {name: "rolling", book:"Stones"},
        {name: "rolling", book:"Stones"}

    ]
}
myList.push(libary);

//

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');
if(reservations[name]){
    if(!reservations[name].claimed){
        console.log("wellcome " + name + "your reservation is unclaimes");
    } else{
        console.log("the reservatin exsist");
    }
}else{
    console.log("who de fuck are u?")
}