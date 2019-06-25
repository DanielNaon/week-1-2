let name = document.getElementById("name");

function validate() {
    let nameLength = document.getElementById("name").value.length;
    console.log(nameLength);
    if (nameLength < 2){
        alert("name is missing");
    }
    let salaryValue = document.getElementById("salary").value;
    if(salaryValue < 10000 || salaryValue > 16000){
        alert("there is a mistake with the salary");
    }

    let phoneLength = document.getElementById("phone").value.length;
    if(phoneLength != 10){
        alert("phone number is incorrect");
    }

    let birthday = document.getElementById("birthday").value.length;
    if(birthday < 1){

        alert("birthday is no specified");
    }
}