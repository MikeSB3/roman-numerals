//business logic
  var numbers = [1, 5, 10, 50, 100, 500, 1000];
  var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
  var userInput = [];
  var userNumber = parseInt($("#enterNumber").val());




//user logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    userInput.push(parseInt($("#enterNumber").val()));
console.log(userInput)
    if (userInput > 3999) {
      console.log("enter a number lesser than 3999");
    } else if (userInput < 1) {
      console.log("enter a number greater than 1");
    } else if (userInput = 1){


      console.log(userInput[0]);
    } else {
      console.log("youre at the end")
    };

    userInput.splice(0,1);
  });


});
