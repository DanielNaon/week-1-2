
// //

// // const header =$("h1")
// // $("h1").css("color", "blue")

// // const header2 =$(".red-div")
// // header2.css("color","red")

// // const header3= $(".line")
// // header3.css("color", "green")

// // const header4= $("ul > li:nth-child(2)")
// // header4.css("color", "pink")

// // const header5 = $("#brown-div")
// // header5.css("color", "brown")

// // // $("h1").addClass("header")

// // const rect1 =$("#b1")
// // const rect2= $("#b2")

// // rect1.addClass("box")
// // rect2.addClass("box")


// // $('#my-input').val("loveme")
// // //
// // const container = $("div").data()

// // // console.log("the item with barcood " + container.barcode + "will expire in" +container.expirationdate) // the data only accept small capital latters

// // $("#container").hover(function(){
// //     $("#container").css("background-color", "blue")
// // })
// // $("button").on('click', function(){
// //     alert($("#my-input").val()) // remmber to make a reference to the my-input
// // })

// // $("#b1").hover(function () {
// // //     console.log($(this))
// // // })

// // $(".box").hover(function(){
// //     $(".box").css("background-color", "yellow")
// // })

// // $(".feedme").on("click", function(){
// //     let divCopy = "<div>"+$(".feedme").text()+"</div>"
// //     $("body").append(divCopy)
// //   })
  
// // const names = [
// //     { first: "Alex", last: "Johnson" },
// //     { first: "Byron", last: "Loveall" },
// //     { first: "Cassandra", last: "Wuthers" },
// //     { first: "Deandre", last: "Rahm" },
// //     { first: "Ellena", last: "Freeman" }
// //   ]

// //   for(let name of names){
// //       $("body").append(`<div class='human'>${name.first} - ${name.last}</div>`); 
// //   }


// //===================================================================================
// //Section 1
// //===================================================================================
// const run = true

// if (run) {
//     let distance = 8
//     ﻿for (var i = 0; i < distance; i++) {// global scope
//             console.log("running")
//         }
//     console.log("Finished running " + distance + " miles")
//     }
    
//     console.log("Damn, you see this gal? She ran " + distance + " miles") // error
    
//     //===================================================================================//Section 2//===================================================================================
// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound) // error
// // }

// //===================================================================================
// //Section 3
// //===================================================================================
// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder) // global scope
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)

// //===================================================================================
// //Section 4
// //===================================================================================
// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot) // pot global variable seed local
// }

// plant()

// //===================================================================================
// //Section 5
// //===================================================================================
// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) { /// error
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }

// //===================================================================================
// //Section 6
// //===================================================================================
// let isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// // else {
// //     console.log("Here we go again...")
// // }
// $("h1").css("color", "blue");
// $(".red-div").css("color", "red");
// $("#one").css("color", "green");
// $("#two").css("color", "pink");
// // $("#brown-div").css("color", "brown")

// $("#b1").addClass("box");
// $("#b2").addClass("box");

// // const data=$('div').data()
// // // console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate)
// // $("#butten").hover(function(){
// //     $(this).css("background-color","red")
// // })
// // $("#button").click(function(){
// //     alert($("#my-input").val())
// // })
// //
// $('.box').hover(function(){
//     $(this).css("background-color", "red")
// })
// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// $("body").append(elem)

// $(".feedme").on("click", function(){
//     let divCopy = $(this).html()
    
//     $("body").append(divCopy)
//   })
  
// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]
// for(let name of names){
//     $("body").append(`<div>${name.first} ${name.last}</div>`)
// }  

// $("p").hover(function(){
//     $("p").remove()
// })

// const addDiv = function() {
//     $("#container").append("<div class=box></div>");
//   };
  
//   $("button").on("click", function() {
//     addDiv();
//   });
  
//   $("#container").on("click", ".box", function() {
//     alert("hi");
//   });

// $("button").on("click",function(){
//     $("#blogs").append("<div class=blog>asdasdasd</div>");
// })

// $("#blogs").on("click", ".blog", function(){
//     $(this).text("let have some fun")
// })

// $("#pressme").on("click", function(){
//     $("#mylist").append(`<li>${$("#input").val()}</li>`)
//     $("#input").val("")
// })
// $("#mylist").on("click", "li", function(){
//     $(this).remove()
// })
// let myBox = `<div class="box"></div>`
// $("body").append(myBox)
// $("body").append(myBox)
// const myColor = $(".box").data().color
// $(".box").hover(function(){
//     if($(this).data().color == myColor){
//         $(this).css("background-color", "blue")
//     }
// })

// $(".item").on("click", function(){ // i made the item to the lisnter and i gave hime a addEventLisnterr
//     if($(this).attr("data-instock") == "true"){ // i made boolean with this becasue i wanted only the specipic item that i press
//         $("#cart").append(`<div class=cart-item>${$(this).text()}</div>`) // i took the div and i append it to the div cart with a specipic text
//     }
// })
// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
//   ]
// for(let fruit of fruits){
//     $("#basket").append(`<div class=${fruit.color}>${fruit.name}</div>`)
// }
// const colors = $("#colors").children("span")
// for(let color of colors){
//     $(color).attr("class", "picker")
//     $(color).css("background-color", $(color).attr("data-color"))
// }
// $(".picker").on("click", function(){
//     $(".box").css("background-color", $(this).attr("data-color"))
// })

// $('#btn').click(function(){
//     alert("1");
// })


const posts = [
    {name: "dani", text:"dont give up"},
    {name: "ruby", text:"dont give up"}
]
const render = function(){
    for(let post of posts){
      const myPost =`<div>${post.name} ${post.text}<div>`
      $("#timeline").append(myPost)
    }
}
render()

$("#button").on("click", function(){
    const newObj = {
        name: $("#name").val(),
        text: $("#text").val()
    }
    posts.push(newObj)
    $("#timeline").children().remove()
    render()
}) 
