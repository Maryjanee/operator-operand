const calculate = (operand1, operand2, operator) => { 
  
    let solution;
    switch(operator){
        case 'Add':
        solution = operand1 + operand2;
        break;
        case 'Subtract':
        solution = operand1 - operand2;
        break;
        case 'Divide':
        solution = operand1 / operand2;
        break;
        case 'Multiply':
        solution = operand1 * operand2;
        break;

        default:
       solution = 0;

    }
  
    console.log(solution);
    

}