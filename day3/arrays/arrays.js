// execise 0

/*const myStuff = ['my noteboook', 'my computer', 'my tv'];
console.log(myStuff);

const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
plants.splice(1,2);
console.log(plants);

console.log("the first on is: " +plants[0] + " and the less on is:" + plants[plants.length - 1]);

let companies = ['Tesla', 'Amazon', 'Google', 'Microsoft'];

companies.splice(0, 1);
console.log(companies);*/

// execise 0.2
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"] // my privous array
const newgenes = [] // making a new array
var removed = genes.splice(0,2);
newgenes.push(...removed); // 2 indexes
newgenes.push(genes.pop()); // taking the cryzs AS THE FIRST INDEX IN GENES AND PUTTING HIM AS THE LAST
var anzi = genes.splice(1, 1); // taking the azni2 from where it is
newgenes.push('RLF'); // THE RLF AS THE 4 INDEX
newgenes.push(...anzi) // putting the anzi in the end
newgenes.push(...anzi) // putting the anzi in the end
newgenes.unshift('FXT'); // PUTTING THE FXT IN THE BEGINNING
console.log(newgenes); 
console.log(genes);


