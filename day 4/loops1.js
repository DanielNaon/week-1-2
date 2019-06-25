/*let companies = ["Tesla", "Amazon", "Google", "Microsoft"];

for(let companyIndex in companies){
    console.log(companies[companyIndex])
  }
  
  for(let companyIndex in companies){
    console.log(companyIndex)
  }
  for(let company of companies){
    console.log(company)
  }
// execise 1
let names = ["ron", "gilad", "shani"]; 
let ages = ["21", "22", "23"];
for(let i in ages){
    console.log(names[i] + " is " + ages[i] + " years old");
  }

  //execise 2 + 3
  let sum = 0;
  let numbers = [1, 2, 3, 4, 5];
  for(let i of numbers) {
      sum+= i;
  }
  console.log(sum);
  let avrege = sum / numbers.length;
  console.log(avrege);*/

 /*//execise 4
 let nums = []
 for(let i = 1; i < 101; i++) {
    nums.push(i);
 }
console.log(nums.toString());
for(let num of nums) {
    if(num % 2 != 0){
        console.log(num);
   }
}*/
// execise 6 /*
let myNum;
let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for(let i in nums){
    if(nums[i] == 709){
        myNum = i;
    }
}
console.log(myNum);
//excise 7+8
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for(let i in ages){ // getting every single loop a new index in ages to i
    people.push({name: names[i], age: ages[i]});
}
console.log(people);
for(let i of people){
    console.log(i.name + " is " + i.age + " years old ");
}

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
for(let i in posts){
    if(posts[i].id===2){
        posts.splice(i, 1)   
    }
}; 

console.log(posts);