const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateDate(){
    const birthdayvalue = birthday.value;
    if(birthdayvalue == ''){
        
        alert("Enter Your age")
    }else{
        const age = getAge(birthdayvalue);
        result.innerHTML = `your age is ${age} ${age>1?"years":"year"} old`;
    }
}

function getAge(birthdayvalue){
    const currentDate =new Date()
    const birthdayDate =new Date(birthdayvalue);
    let age= currentDate.getFullYear()-birthdayDate.getFullYear();
    const month= currentDate.getMonth()-birthdayDate.getMonth();

    if(month<0 || (month===0 && currentDate.getDate()<birthdayDate.getDate())
    ){
    age--;
}   
return age;
}
btn.addEventListener("click",calculateDate);