function calculate(operation) {
    let value1 = parseFloat(document.getElementById("value1").value);
    let value2 = parseFloat(document.getElementById("value2").value);
    const result = document.getElementById("para");

   

    let output;

    switch (operation) {
        case '+':
            output = value1 + value2;
            result.innerText = `Addition of ${value1} and ${value2} = ${output}`;
            break;
        case '-':
            output = value1 - value2;
            result.innerText = `Subtraction of ${value1} and ${value2} = ${output}`;
            break;
        case '*':
            output = value1 * value2;
            result.innerText = `Multiplication of ${value1} and ${value2} = ${output}`;
            break;
        case '/':
          
            output = value1 / value2;
            result.innerText = `Division of ${value1} by ${value2} = ${output}`;
            break;
        case '%':
           
            output = value1 % value2;
            result.innerText = `Modulus of ${value1} % ${value2} = ${output}`;
            break;
        default:
            result.innerText = "Invalid operation.";
    }
}
function calc() {
    const option = document.getElementById("operation").value
    calculate(option)
}