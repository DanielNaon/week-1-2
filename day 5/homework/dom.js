// const subHeader = document.createElement("h1") /// created a new elemnt
// subHeader.setAttribute("class", "myheader") // gave him attribute
// subHeader.innerHTML = "love is beauty" //text
// subHeader.style.backgroundColor ="blue" //color to background
// document.body.appendChild(subHeader) // the most important action! got inside the html to the body

// const box = document.getElementById("playing-field")
// const entercolor = function (){
//     box.style.backgroundColor = "#8e44ad";
// }
// const list = document.getElementById("lover")
// const change = function(){
//  const newItem = document.createElement("li")
//  newItem.innerHTML = "THIS IF FUCKING AWSOME"
//     list.appendChild(newItem)
// }

let blocky= document.getElementById("block"); // defined blocky with the refernce of id block
const moveUp  = function(){
    let myUp =parseInt(blocky.style.bottom) || 0;
    console.log(myUp);
    blocky.style.bottom = myUp + 10 +"px";
    
}
const moveLeft  = function(){
    let myLeft =parseInt(blocky.style.right) || 0;
    console.log(myLeft);
    blocky.style.right = myLeft + 10 +"px";
    
}
const moveRight = function(){
    let myRight =parseInt(blocky.style.left) || 0;
    console.log(myRight);
    blocky.style.left = myRight + 10 +"px";
    
}
const moveBottom = function(){
    let myBottom =parseInt(blocky.style.top) || 0;
    console.log(myBottom);
    blocky.style.top = myBottom+ 10 +"px";
    
}