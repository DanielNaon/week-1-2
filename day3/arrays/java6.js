const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

// the new array

genes[2]="CRYZ"
genes[4]="RLF"
genes.push("AZIN2","AZIN2"); 
genes.splice(3,1);
genes.unshift("FXT");
console.log(genes);