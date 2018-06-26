/* global $ */

// Current Problems to Solve:
// 1. Add a subraction function
// 2. Add a multiplication function
// 3. Add a dividing function




// Function to add 2 Numbers
$(document).ready(  function() {
   $("#add").click ( function () {
     console.log("found the add button");
     
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
   
    
    var sum = parseInt($("sum").val());
    
    sum = firstNumber + secondNumber;
    
    $("#total").val(sum);
    
   
   
    //$("#output").text(sum);
    
     
     console.log(sum);
   
   } );

   $("#subtract").click ( function () {
     console.log("found the add button");
     
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
   
    
    var sum = parseInt($("sum").val());
    
    diff = firstNumber - secondNumber;
    
    $("#total").val(sum);
    
   
   
    //$("#output").text(sum);
    
     
     console.log(sum);
   
   } );
   
   
} );

