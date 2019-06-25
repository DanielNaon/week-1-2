
// // let users = []

// // // const getData = function (fn) {
// // //   setTimeout ( function () {
// // //     users = [{name: "Rick"}, {name: "Morty"}]
// // //     console.log("Got users")
// // //     fn()
// // //   }, 3000)
// // // }

// // // const displayData = function () {
// // //   console.log("Going to display: " + users)
// // //   for (user of users) {
// // //     console.log(user.name)
// // //   }
// // // }

// // // // getData(displayData)

// // // const doSomething = function(){
// // //   console.log("something")
// // // }

// // // setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds
// // // // 
// // //
// // const timer = function(){
// //     console.log(new Date())
// //   }
  
// //   setInterval(timer, 1000)
  
// //   setInterval(function(){
// //     console.log(new Date())
// //   }, 1000)
  

// // //   const squre =(num) =>{
// //       console.log(num* num)
// //   } 
// //   squre(5)
// // // 

// const getFormalTitle =(title, name)=> {
//    return title +" "+ name 
// }


// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => {console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// // suspenseBuilder.displayName()


// // const push = function () {
// //     console.log("pushing it!")
// //   }
  
// //   const pull = function () {
// //     console.log("pulling it!")
// //   }
// //  const pushPull= function (fn){
// //   fn()
// //   }
 
// //   pushPull(push) //should print "pushing it!"
// //   pushPull(pull) //should print "pulling it!"
// //   /// 

// //   const returnTime = function (time) {
// //     time = new Date()
// //     alert('The current time is: ' + time)
// //   }
// //   const getTime = function(fn){
// //     // fn()
// //   }
// // //   getTime(returnTime)
// // let logData = function(){console.log("i love my self")}
// // const displayData = function (alertDataFunc, logDataFunc, data) {
//     // alertDataFunc(data);
//     // logDataFunc(data);
  

// // //   displayData(alert, logData, "I like to party")
// // const capitalize = (parameter) =>{
// // const vladi = parameter.toLowerCase()
// // const vladi1= parameter.charAt(0).toUpperCase() + vladi.slice(1) 
// // console.log(vladi1)
// // }

// // capitalize("bob") // returns Bob
// // capitalize("taylor") // returns Taylor
// // capitalize("felisiah") // returns Felishia
// // // 
// // // const determineWeather = temp => {
// // //     if(temp > 25){
// // //       return "hot"
// // //     }
// // //     return "cold"
// // //   }

// // //   const commentOnWeather =temp =>{
// // //       const call= determineWeather( temp)
// // //       console.log("its" + call)
// // //   }
// // //   commentOnWeather(77)*/
// // //

// // function family () {
// //   const members = []
// //    const birth= function (name) {
// //     members.push(name)
// //     console.log(members)
// //     }
// //     return birth
// // }
// // let giveBirth = family()
// // giveBirth("you")
// // giveBirth("you")
// // // giveBirth("you")*.

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
//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
    
// }
// const m = mathOperations()
// m.add(13, 29)
// m.mult(1.75, 24)
// m.mult(7, m.div(36, 6))
/*
const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('your')
usersModule.addUser('friend')
usersModule.addUser('lover')
usersModule.listUsers()
*/

let StringFormatter = function() {
    const
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box

