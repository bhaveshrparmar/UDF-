function calculate(operation) {
    let value1 = parseFloat(document.getElementById("value1").value);
    let value2 = parseFloat(document.getElementById("value2").value);
    let result = document.getElementById("para");

   

    let output;

    switch (operation) {
        case 1:
            output = value1 + value2;
            result.innerText = `Addition of ${value1} and ${value2} = ${output}`;
            break;
        case 2:
            output = value1 - value2;
            result.innerText = `Subtraction of ${value1} and ${value2} = ${output}`;
            break;
        case 3:
            output = value1 * value2;
            result.innerText = `Multiplication of ${value1} and ${value2} = ${output}`;
            break;
        case 4:
          
            output = value1 / value2;
            result.innerText = `Division of ${value1} by ${value2} = ${output}`;
            break;
        case 5:
           
            output = value1 % value2;
            result.innerText = `Modulus of ${value1} % ${value2} = ${output}`;
            break;
        default:
            result.innerText = "Invalid operation.";
    }
}
function Calculation() {
    const option =parseInt (document.querySelector('input[name ="operation"]:checked').value)
    calculate(option)
}
