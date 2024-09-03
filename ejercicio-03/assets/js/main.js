const calculateFactorial = (number) => {
    let start = 1;
    let result = 1;
    while(number>=start){
        result *= start;
        start++;
    }
    return result;
}

const requestNumber = () => {
    let number = prompt("Insert a no negative integer: ");
    if(!isNaN(number)&&(number>=0)&&(number!="")&&(Number.isInteger(number))){
        return number;
    } else {
        return null;
    }
}

const main = () => {
    let number = requestNumber();
    if(number!=null){
        let result = calculateFactorial(number);
        alert(`The result is: ${result}`)
    } else {
        alert("Operation cancelled. Invalid option.");
    }
}

main();
