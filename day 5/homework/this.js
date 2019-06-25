// // const person = {
// //   username: "Felicia",
// //   introduce: function(){
// //     console.log("Hi, I'm " + this.username)
// //   }
// // // }

// // // person.introduce() //throws an error
// // // exercise 1
// // const person = {
// //     hungry: true,
  
// //     feed: function () {
// //       if (this.hungry) {
// //         this.hungry = false;
// //         alert('Im no longer hungry!')
// //       }
// //     }
// //   }
  
// // //   person.feed() //should alert "I'm no longer hungry"
// //   // exercise 3
// //   const pump = function (amount) {
// //     this.liters += amount;
// //     console.log('You put ' + this.amount + ' liters in ' + this.name);
// //   };
  
// //   const garage = { // because car invoked the function, we cannot reach
// //     car1: {
// //       name: 'Audi',
// //       liters: 3,
// //       fillTank: pump
// //     },
// //     car2: {
// //       name: 'Mercedes',
// //       liters: 1,
// //       fillTank: pump
// //     }
// //   };
  
// //   garage.car1.fillTank(2);
// //   console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
// //   garage.car2.fillTank(30);
// //   console.log('Mercedes should have 31 liters: ', garage.car2.liters);

// //   // exercise 3
// //   const pumpFuel = function (plane) {
// //     plane.fuel += 1;
// //   };
  
// //   const airplane = {
// //     fly: function () {
// //       if (this.fuel < 2) {
// //         return 'on the ground!';
// //       }
// //       else {
// //         return 'flying!';
// //       }
// //     }
// //   };
  
// //   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
// //   pumpFuel(airplane);
// //   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
// //   pumpFuel(airplane);
// //   console.log('Take off! ' + airplane.fly());
// //   // exercise 4
// //   const tipJar = {
// //     coinCount: 20,
// //     stealCoins: function (num){
// //        this.coinCount  -= num;
    
        
// //     },
// //     tip: function () {
// //       this.coinCount += 1;
// //     }
// //   };
  
// // //   tipJar.tip();
// // //   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
// // //   tipJar.stealCoins(3);
// // //   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
// // //   tipJar.stealCoins(10);
// // //   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

// // //   // exercise 5
// // //   const revealSecret = function () {
// // //     return this.secret; // inoreder to get to a property in another object, i must use this!
  
// // //   const shoutIt = function (person, func) {
// // //     person.revealItAll = func;
// // //     const result = person.revealItAll();
// // //     alert(person.name + " said: "+ result);
// // //   };
  
// // //   const avi = {
// // //     name: "Avi",
// // //     secret: "Im scared of snakes!"
// // //   };
  
// // //   const narkis = {
// // //     name: "Narkis",
// // //     secret: "I dont have secrets because I'm zen like that."
// // //   };
  
// // //   shoutIt(avi, revealSecret);
// // //   shoutIt(narkis, revealSecret);
// // // exercise 6
// // const coffeeShop = {
// //     beans: 40,
  
// //     drinkRequirements: {
// //       latte: 10,
// //       americano: 5,
// //       doubleShot: 15,
// //       frenchPress: 12
// //     },
   
// //     makeDrink: function (drinkType) {
// //       if(drinkType in this.drinkRequirements){
// //           alert("great") } 
// //           else{
// //               alert("sorry we dont have it in the drinks")
// //           }
// //         }
// //     }
// //     const money= function (moneyValue){
// //         if(moneyValue < 5){
// //             beans-=3;
// //             return beans

// //         }
// //     }
// //   console.log(money)
// //   coffeeShop.makeDrink("latte"); 
// //   coffeeShop.makeDrink("americano");
// //   coffeeShop.makeDrink("filtered");
// //   coffeeShop.makeDrink("doubleShot");
// // //   coffeeShop.makeDrink("frenchPress");
// // //   coffeeShop.moneyvalue(3)

// // const getData = function () {
// //     setTimeout(function () {
// //         users = [{ name: "Rick" }, { name: "Morty" }]
// //         console.log("Got users")
// //     }, 3000)
// // }

// // getData()


// let users = []

// const getData = function (parm) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         parm()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// // getData(displayData)


// //   setInterval(function(){console.log(new Date())},1000)

// // const arrow =number =>{console.log(number * number)}
// // arrow(4);

// const getFormalTitle =(title, name)=>name +" "+title

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// // console.log(formalTitle) //returns "Maddame Lellouche"
// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(()=> { console.log("The name is: " + this.name)
//         }, 3000);

//     }
// }

// // suspenseBuilder.displayName()
// function pushPull(callback){
//     callback()
// }
// const push = function () {
//     console.log("pushing it!")
   
// //   }

// // //   const pull = function () {
// // //     console.log("pulling it!")
// // //   }
  
// // // //   pushPull(push) //should print "pushing it!"
// // // //   pushPull(pull) //should print "pulling it!"
// // // const getTime = function(parameter){
// // // parameter(10)
// // // }
// // // const time = new Date() // date
// // //   const returnTime = function (time) {
// // //   alert('The current time is: ' + time)
// // // }

// // // // getTime(returnTime)

// // // const logData = function(data){
// // //   console.log(data)
// // // }
// // // const displayData = function (alertDataFunc, logDataFunc, data) {
// // // //     alertDataFunc(data);
// // // //     logDataFunc(data);
// // // // //   };
  
// // // // //   displayData(alert, logData, "I like to party")
// // // //   const get =(x, y, z) => x+y+z // there is a return if its only one line
// // // //   const sum = get(1, 2, 3)
// // // //   console.log(sum)

// // //exercise 5
// // // const capitalize = (name) => name.substr(0, 1).toUpperCase() +name.slice(1).toLowerCase()
// // capitalize("feliSHIA") 
// // console.log(capitalize("feliSHIA"))
// // capitalize("feliSHIA") // returns Felishia
// // // console.log(capitalize);

// // ///

// // const determineWeather = temp => {
// //     if(temp > 25){
// //       return "hot"
// //     }
// //     return "cold"
// //   }
// //   const commentOnWeather = (temp)=> "its" + determineWeather(temp)
// //   console.log(commentOnWeather(20)) // i need to do console log to wht the function return

// // //   commentOnWeather(30) //returns "It's hot"
// // //   commentOnWeather(22) //returns "It's cold"
// // const explode = (lightFunc, soundFunc, sound)=>{
// //     lightFunc()
// //     soundFunc(sound)
// // }
// // const shineLight =()=>document.getElementById("box").style.backgroundColor = "yellow"
// // const makeSound = (sound) => alert(sound)
// // explode(shineLight, makeSound, "boom")
// const setCounter = function (num) {
//     let counter = 0
  
// //     const count = function () {
// //       counter += num;
// //       console.log(counter)
// //     }
  
// //     return count
// //   }
  
// //   const increment = setCounter(2)
// //   increment()
// //   increment()

// const family = function(){
//     const members = []
//     const birth = function(name){
//         members.push(name)
//         console.log(members)
//     }
//     return birth
// // } 
// // const giveBirth = family()
// // giveBirth("dani");
// // giveBirth("ruby");
// // giveBirth("boni");

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     } 

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
// }

// const m = mathOperations()
// m.add(13, 29)
// m.mult(1.75, 24)
// m.mult(7, m.div(36, 6))

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()
// usersModule.addUser('Narkis')
// usersModule.addUser('dani')
// usersModule.addUser('ruby')
// usersModule.listUsers()

// const StringFormatter = function(){
//     const capitalizeFirst =function (string){
//         console.log(string[0].toUpperCase()+string.slice(1).toLowerCase())
//     }
//     const skewerCase =function(string){
//         console.log(string.charAt(0))
//     }
    
//     return {
//         capitalizeFirst: capitalizeFirst,
//         skewerCase: skewerCase
//     }
    
// }
//     const formatter = StringFormatter()
//     formatter.capitalizeFirst("dorothy") //should print Dorothy
//     formatter.skewerCase("blue box") //should print blue-box
    
// const Bank = function(){
//     let money = 500;

//     const depositCash = function(cash){
//         money+=cash
//         return money
//     }
//     const checkBalance = function(){
//         console.log(money)
//     }
//     return {
//         deposit: depositCash, 
//         showBalance: checkBalance
//       }
// }
  

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950

// const SongsManager = function(){
//     let addsong = function(name, url){
//         songs.name = url;
      
//     }
//     let getsong = function(name){
//         console.log(songs.name);
//     }
//     const songs = {

//       }
//       return {
//           addSong: addsong,
//           getSong: getsong
//       }
      
// }
// const songsManager = SongsManager()
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

// songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
// songsManager.getSong("how long")

const SongsManager = function(){
    const link = "https://www.youtube.com/watch?v="
    let addsong = function(name, url){
        url = url.slice(link.length)
        songs.push({songName: name, songUrl: url})
      
    } 
    const songs = []
    let getsong = function(name){
        for(let song of songs){
            if(song.songName == name){
                console.log(link + song.songUrl)
            }
        }
    }
      return {
          addSong: addsong,
          getSong: getsong
      }
      
}
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("how long")