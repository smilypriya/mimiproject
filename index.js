
let result = document.getElementById("result");
let btn = document.getElementById("submit");
let form =  document.getElementById("myForm");


function marksCalculation(grade){
    let marks = 0;
    console.log(grade,typeof(grade),"^^^^^^^^^^^");
    if(grade==="A+"){
        marks = 10
    }
    else if(grade==="A"){
        marks = 9
    }
    else if(grade==="B"){
        marks = 8
    }
    else if(grade==="C"){
        marks = 7
    }
    else if(grade==="D"){
        marks = 6
    }
    else if(grade==="E"){
        marks = 5
    }
    else if(grade==="F"){
        marks = 0
    }
    else{
        marks = -1;
    }

    return marks;
}

let error  = false;

form.addEventListener("submit",function(event){
    event.preventDefault();

    let total_product = 0,total_cre = 0;

    for(let i=0;i<8;i++){

        let credits = document.getElementById(`cre${i+1}`);
        let credict_float= parseFloat(credits.value);
        total_cre+=(credict_float);
    }

    for(let i=0;i<8;i++){

        let grade = document.getElementById(`gra${i+1}`).value;
        let credits = document.getElementById(`cre${i+1}`);
        let credict_float= parseFloat(credits.value);
        let gradeValue = marksCalculation(grade);

        if(gradeValue===-1){
            error = true;
            break;
        }
        else{
            total_product+=(gradeValue*credict_float);
        }
    }
    let sgpa = total_product/total_cre;

    if(error===false){
        console.log("PRIYA");
        console.log(result);
        result.textContent = "SCPA is "+sgpa;
    }
    else{
        console.log("sai");
        result.textContent ="please enter valid data";
    }

    





   

}) 