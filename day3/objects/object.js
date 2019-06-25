/*const car ={
    color: 'red',
    'numWheels': '12',
    isFancy: true
}

console.log('the ' + car.color +' has' + car.numWheels +' wheels' ); // dot notation!!! to reach a key


if(car.isFancy)
{
    console.log("it is fancy");
}
else {
    console.log("it is not fancy at all");
}*/

/*const wayoflife = {
    item: "ball",
    toBeginning: true,
    items: ["eat well", "sleep well", "sing well"]
}

if(wayoflife.toBeginning){
    wayoflife.items.unshift(wayoflife.item)
}
else{
    wayoflife.items.push(wayoflife.item)
}

console.log(wayoflife.items) //prints ["Of Mice and Men", "The Little Prince", "The Alchemist", "Harry Potter"]
*/

/*const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"

/*human[babyNameKey] = babyNameValue
console.log(human);
human.name = "Goojibear";
human.name = "dani";*/

// execise 1 

/*const p1 = {
    name: 'gilad',
    city: 'tel aviv',
    age: '22'

}
const p2 = {
    name: 'yoval',
    city: 'tel aviv',
    age: '23'
}
if(p1.city === p2.city) {
    console.log("gilad wants to date yuval");
} 
else {
    console.log("yuval wants to date gilad");
}*/

/*// execise 2 +3
let myList = [
    {item: "ball", count: 2},
    {item: "table", count: 1},
]
myList[0].item = "jerikan";
console.log(myList);
delete myList[1];

let mynewlist = [
    {item: "love", count: 2},
    {item: "happines", count: 1},
] 
myList = [...mynewlist];
/*console.log(myList); // this creates a whole new list!!! with the syntax spread*/

/*// execise 4
let libary = {
    books: [
        {title: "harry potter", authour: "jk rolling"},
        {title: "games of thornes", authour: "geroge martin"},
    ]
}
myList.push(libary.books); // MYLIST.PUSH ==> THE PUSH BRINGS TO MY LIST THE VALUE INSIDE () LIBARY=OBJECT BOOK==PROPER
console.log(myList);*/

//EXECISE 5 
/*const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation').toLowerCase();

if(reservations[name]) {
    if(!reservations[name].claimed){
        console.log("welcome! " +name);
    } else {
        console.log("hello " + name + "reservation is already claimed");
        console.log(reservations);
    }
}
else {
    console.log(name + "sorry there is nothing under this name!");
    reservations[name]= {claimed: true}
    console.log(reservations);
}*/

// exciese 4