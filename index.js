var num1= window.prompt("enter a number");
var num2=window.prompt(" enter another number");
var operator=window.prompt("choose an operator")

num1=parseInt(num1);
num2=parseInt(num2);

if (operator =="+" ){
    alert(num1 + num2);
}
else if(operator =="-"){
    alert(num1-num2)
}
else if(operator== "*"){
    alert(num1*num2)
}
else if(operator== "/"){
    alert(num1/num2)
}