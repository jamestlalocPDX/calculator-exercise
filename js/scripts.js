
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(add(number1, number2));
alert(subtract(number1, number2));
alert(multiply(number1, number2));
alert(divide(number1, number2));

// var result = add(number1, number2);


    var add = function(number1, number2) {
        return number1 + number2;
    };