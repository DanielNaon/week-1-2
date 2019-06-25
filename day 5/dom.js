/*const playingField = document.getElementById("playing-field")
console.log(playingField)
//spot check1
const downElement = document.getElementById("down")
console.log(downElement);

//spot check2
const newcolor = document.getElementById("block")
block.style.backgroundColor = "yellow";

//sp3

 const moveRight = function(){ // defined a function
     const block = document.getElementById("block") // in this function i defined  a new elemnt with an id of block
     let left = parseInt(block.style.left) || 0 // the parseInt tries to find the left in the css, sinc
     left +=15
     block.style.left = left + "px"
 }
const rightButton = document.getElementById("right")
rightButton.addEventListener('click', moveRight)
//execise 4

const header =document.createElement("header")
console.log(header)
header.innerHTML = "love is not a lie"
header.style.backgroundColor = "yellow"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)*/

/*//execise 5
const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}
const clickColor = function(){ // defying a function
    box.style.backgroundColor = "#8e44ad"  // the function act: changing the color to purple
}

const addline = document.getElementById("line") // Defyning a new const and giving him the value of the id line
const addItem= function(){ // defying a function
    const newItem = document.createElement("li") // creating a new element named li
    newItem.innerHTML = "a new item!" // using the event for what is going to be inside the newitem
    addline.appendChild(newItem); // appendChild
}
const button = document.getElementById("button") // defying a new const and giving him the value of the id "button"
let newItem = function(){
const reservation = document.getElementById("input").value
console.log(reservation)
}
button.onclick= newItem // calling the function while i click my button*/

// execise 6
// const header =document.createElement("header")
// console.log(header)
// header.innerHTML = "hello bob"
// header.style.backgroundColor = "white"
// header.style.fontFamily = "Helvetica"
// document.body.appendChild(header)

/*const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const button = document.getElementById("button")
button.onclick = function(){
const name = document.getElementById("input").value
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
}
}

// execise 3

const box1 = document.createElement("rect")
box1.style.backgroundColor ="yellow"
box1.style.width = "50px"
box1.style.length = "50px"



const down = document.getElementById("down")
console.log(down)*/