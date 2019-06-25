

  let calcAge = function(age1, age2){ //age 1=parmter, age 2=parmter. 
      let newage= age1 - age2
      return newage; // return the value of2 to the function itself, calcage =2, which make the const call to be 2
     
  }
  const call = calcAge(2018, 2016); // calling the function and bringing arguments value
  const call2 = call +1; // 2+1 =3
  console.log(call); //
  console.log(" you are either" + call + "or" + call2);