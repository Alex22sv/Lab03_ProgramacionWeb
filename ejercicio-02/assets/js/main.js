
const plus = (number1, number2) => {
    return parseInt(number1)+parseInt(number2);
};
const subtract = (number1, number2) =>{
    return parseInt(number1)-parseInt(number2);
} ;
const multiply = (number1, number2) =>{
    return parseInt(number1)*parseInt(number2);
} ;
const split = (number1, number2) => {
    if(number2==0){
        return null;
    }
    return parseInt(number1)/parseInt(number2);
};
const requestNumber = (orderNumber) => {
    let number = prompt(`Insert your #${orderNumber} number:`);
    if(isNaN(number)||number==""){
        return null;
    } else {
        return number;
    }
};

const selectOperation = () => {
    let operation = prompt("What operation do you want to do?\n1. Sum\n2. Substract\n3. Multiply\n4. Divide");
    if((!operation.isNaN)&&(operation>=1)&&(operation<=4)){
        return operation;
    }
    return null;
};

const main = () => {
    var firstNumber = requestNumber(1);
    console.log(firstNumber);
    if(firstNumber!=null){
        var secondNumber = requestNumber(2);
        console.log(secondNumber);
        if(secondNumber!=null){
            let operation = selectOperation();
            console.log(operation);
            switch(parseInt(operation)){
                case 1: 
                    alert("The result is: " + plus(firstNumber, secondNumber));
                    break;
                case 2:
                    alert("The result is: " + subtract(firstNumber, secondNumber));
                    break;
                case 3:
                    alert("The result is: " + multiply(firstNumber, secondNumber));
                    break;
                case 4:
                    if(split(firstNumber, secondNumber)!=null){
                        alert("The result is: " + split(firstNumber, secondNumber));
                    } else {
                        alert("Operation cancelled. You cannot divide by 0.")
                    }
                    break;
                default:
                    alert("Invalid option");
            }
        } else {
            alert("Operation cancelled. Not a number.")
        }
    } else {
        alert("Operation cancelled. Not a number.")
    }
}

main();
