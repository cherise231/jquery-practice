/* global $ */


$( document ).ready( function () { /* wait till document is full loaded */
    
    var colors = ["lightgreen","lightblue","pink","lightcyan","black","aquamarine"];//create array to hold colors;
    
    var myButton = $("button"); //make buttion for html
    
    myButton.click( function () { //
        
        var choice = Math.random() * 6; //gives random numbers
        
        choice = Math.floor(choice) //rounds number down between 0 & 6;
        
        var htmlBody = $("body"); //html body into jquery body
    
        htmlBody.css("background-color", colors[choice] ); //setting background-color with the colors array and var choice
        
        if ( "rgb(0, 0, 0)" == htmlBody.css("background-color") ) {
          console.log("Black was chosen!"); //if current background color is black, then say black was chosen.
        }
    
    });   

});



//this function will have press here to click here and background changes color with the different arrays that was made with 6 colors
//$( document ).ready( function () { /* wait till document is full loaded */
/*
    
    var colors = ["lightgreen","lightblue","pink","lightcyan","lightyellow","aquamarine"];//create array to hold colors;
    
    var myButton = $("button");
    
    myButton.click( function () {
        
        var choice = Math.random() * 6; //gives random numbers
        
        choice = Math.floor(choice) //rounds number down between 0 & 6;
        
        var htmlBody = $("body");
    
        htmlBody.css("background-color", colors[choice]);
        
        console.log(htmlBody.css("background-color"));
    
    });   

});

/*

"rgb(" + firstNumber + ", " + secondNumber + ", " + thisNumber")"

rgb(31, 32, 98)"

*/


/*
function apiBtn() {
  $('.btn-api').click(function() {
    var $this = $(this),
      $clickCounts = 1;
    if ($clickCounts === 1) {
      $this.addClass('bg-act-red');
      $clickCounts += 1;
    } else if ($clickCounts == 2) {
      $this.addClass('bg-act-yellow');
      $clickCounts += 1;
    } else if ($clickCounts == 3) {
      $this.addClass('bg-act-green');
      $clickCounts += 1;
    }
  });
}
*/

/*var myButton = $("button"); //jquery selector is $ can use body, p, //need variable to store button; button is html element function example var myButton = $("button");

myButton.click( function () {
    
    console.log("My button was pressed!");
} );                        //if click on button then run something

//value and click & changing the css of stuff; need to have jquery file running

/*$( "p" ).click(function() {
  $( this ).slideUp();
});
*/
//$("body").css("background-color"); to change background color

