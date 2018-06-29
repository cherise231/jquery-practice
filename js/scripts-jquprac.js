/* global $ */
//OKAY TO DELETE
// Current Problems to Solve:
// 1. Add a subraction function
// 2. Add a multiplication function
// 3. Add a dividing function

//$(document).ready(function () {
 
   $("#background").click ( function () { //change background
    
   $("body").css("background-color", "pink");
   
   } );
   
   $("#move").click ( function () { //move function
   
   //Get the current value of the margin on the left side of this button. This will be stored inside the variable marginLeft
   var marginLeft = $("#move").css ("margin-left");
   
   //Convert the data in marginLeft to an actual JavaScript Number
   marginLeft = parseInt(marginLeft, 10);
   
   //Change the value of the left margin of the button to be 100 pixels wider.
   $("#move").css("margin-left", (marginLeft + 100) + "px");
   
   } );
   
 //$("#disappear").hide(); //hide white box when clicked
   
  $(document).ready(function(){
    $("#dissappear").click(function(){
        $("#dissappear").hide();
    });
  });

  


// Function to add 2 Numbers
/*
$(document).ready(  function() {
   $("#add").click ( function () {
     //console.log("found the add button");
     
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
   
    
    var sum = parseInt($("sum").val());
    
    sum = firstNumber + secondNumber;
    
    $("#totalsum").val(sum);
    
   
   
    //$("#output").text(sum);
    
     
     console.log(sum);
   
   } );

// Function Subtract 2 numbers

   $("#subtract").click ( function () {
     //console.log("found the add button");
     
    var thirdNumber = parseInt($("#thirdNumber").val());
    var fourthNumber = parseInt($("#fourthNumber").val());
   
    
    // var sum = parseInt($("sum").val());
    
    var quotient = thirdNumber - fourthNumber;
    
    $("#totalquotient").val(quotient);
    
   
    //$("#output").text(sum);
    
     
     console.log(quotient);
   
   } );
   
   // Function Multiply 2 numbers

   $("#multiply").click ( function () {
     //console.log("found the add button");
     
    var fifthNumber = parseInt($("#fifthNumber").val());
    var sixthNumber = parseInt($("#sixthNumber").val());
   
    
    // var sum = parseInt($("sum").val());
    
    var product = fifthNumber * sixthNumber;
    
    $("#totalproduct").val(product);
    
   
    //$("#output").text(sum);
    
     console.log(product);
  
   } );
   
    // Function Divide 2 numbers

   $("#divide").click ( function () {
     //console.log("found the add button");
     
    var seventhNumber = parseInt($("#seventhNumber").val());
    var eighthNumber = parseInt($("#eighthNumber").val());
   
    
    // var sum = parseInt($("sum").val());
    
    var dividend = seventhNumber / eighthNumber;
    
    $("#totaldividend").val(dividend);
    
   
    //$("#output").text(sum);
    
     console.log(dividend);
  
   } );
   
   
} );

*/

