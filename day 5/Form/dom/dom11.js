let containter = document.getElementById("container"); // giving the cotainer the element who has the id of the container
let box;
for(let i = 0; i < 5; i++)
{
    box = document.createElement("div");
    box.setAttribute("class", "mybox");
    box.setAttribute("onmouseover", "changeColor(this)");
    box.style.backgroundColor = 'rgb(' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255) + ')';
    containter.appendChild(box);
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };



function changeColor(mybox) {
    mybox.style.backgroundColor = 'rgb(' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255) + ')';
};

