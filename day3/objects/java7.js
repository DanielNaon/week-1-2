p1 = {   
    name: "gilad",
    age: 21,
    city: "tel aviv",

}
p2 = {   
    name: "yuval",
    age: 21,
    city: "tel aviv",

}

if(p1.age === p2.age && p1.city ===p2.city) {
console.log("yoval wants to marry gilad")
}
else {
    console.log("gilad wants to marry yoval")
}
// Exercise 2
 let mylist1 =[ { name: "yuval", age: 21, city:"tel aviv" } 
                ,{ name: "gilad", age: 21, city:"tel aviv"} ]

               mylist1[0].name="dani";
               mylist1.splice(1,1);

// Exercise 3
let mylist =[ { name: "dana", age: 21, city:"tel aviv" } 
            ,{ name: "yuli", age: 21, city:"tel aviv"} ]
            
        mylist1.push(...mylist)
        console.log(mylist1)      

// Exercise 4

const libary= {
    books: [
        {title: "gameofthorns", author: "geroge martin" },
        {title: "harrypotter", author: "jk" },
        {title: "priderandprejedice", author: "jane austin" }

    ]  
}
// Exercise 5
mylist.push(...libary.books)
console.log(mylist)

const reservations = {
    Bob: { claimed: false },
    ted: { claimed: true }

  }

  const name = prompt('Please enter the name for your reservation' ).toLowerCase()

  if(reservations[name]) {
      if(reservations[name].claimed)
      {
        console.log("Hmm, someone already claimed this reservation")
        console.log(reservations)
      }
      
        else {
            console.log("welcome " + name)
        } }
    else {
        console.log(name + "there is nothing under their name")
        reservations[name]= {claimed: true}
        console.log(reservations)
    
    }

    let enoughMoneyInBank = false
    let hasJob = true
