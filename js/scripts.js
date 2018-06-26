/* global $ */

// Current Problems to Solve:
// 1. Add a subraction function
// 2. Add a multiplication function
// 3. Add a dividing function


$(document).ready(  function() {
  
   $("button").click ( function () {
     
     
     
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
   
    
    var sum = parseInt($("sum").val());
    
    sum = firstNumber + secondNumber;
    
    $("#total").val(sum);
    
   
   
    //$("#output").text(sum);
    
     
     console.log(sum);
   
   } );
   
   
   
} );

