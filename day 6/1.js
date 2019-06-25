const moveRight = function ()
 {
    const right = document.getElementById("block")
    let move = parseInt((right.style.left) || 0)
    move += 25
    right.style.left = move + "px"
}
const moveLeft = function () 
{
    const left = document.getElementById("block")
    let move = parseInt((left.style.left) || 0)
    move -= 25
    left.style.left = move + "px"
}
const moveUp = function () 
{
    const up = document.getElementById("block")
    let move = parseInt((up.style.top) || 0)
    move -= 25
    up.style.top = move + "px"
}
const moveDown = function ()
 {
    const down = document.getElementById("block")
    let move = parseInt((down.style.top) || 0)
    move += 25
    down.style.top = move + "px"
}
