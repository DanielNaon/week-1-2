// $(".remove").on("click", function(){
//     alert($(this).closest(".post").data().id)
//   })

// $("button").on("click", function(){
//     console.log($(this).closest("div").find("span").text())
// })

// $("button").on("click", function(){
//     console.log($(this).closest("body").find(".container").find("p").text())
// })
const computersId= []
$(".generator").on("click", function(){
    let processId = $(this).closest(".processor").attr("id")
    let data = $(this).closest(".computer").data().id
    computersId.push({cmp_id: data})
    let busNumber = $(this).closest(".computer").find(".BUS").text()
    console.log(processId)
    console.log(data)
    console.log(busNumber)
})

$(".validator").on("click", function(){
    let 
})