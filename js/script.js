    function calculatePower() {
    const inputElement = document.getElementById('userInput');
    const outputElement = document.getElementById('output');
    
    const input = parseInt(inputElement.value);

    if (isNaN(input) || input < 0) {
        outputElement.innerHTML = 'Please enter a non-negative number.';
        return;
    }

    let result = 1;
    for (let i = 1; i <= input; i++) {
        result = result * i;
    }
    outputElement.innerHTML = `${input}! = ${result}`;
    }