//Java Script

// function sum(){
//     let num1=parseInt(document.getElementById("input1").value);
//     let num2=parseInt(document.getElementById("input2").value);
//     document.getElementById("output").value=num1+num2;
// }


// Jquerry 
$(document).ready(function() {
    sum();
    $("#btn").on("click", function(){
        sum();
    });
});

function sum(){
        let num1=parseInt(document.getElementById("input1").value);
        let num2=parseInt(document.getElementById("input2").value);
        if (!isNaN(num1 || num2)) {
        document.getElementById("output").value=num1+num2;
        }
    }


    
