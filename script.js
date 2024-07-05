document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    let currentInput = '';
    let previousInput = '';
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value >= '0' && value <= '9' || value === '.') {
                currentInput += value;
                display.innerText = currentInput;
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        });
    });

    clearButton.addEventListener('click', () => {
        currentInput = '';
        previousInput = '';
        operator = null;
        display.innerText = '0';
    });

    equalsButton.addEventListener('click', () => {
        if (previousInput === '' || currentInput === '' || operator === null) return;

        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case '/':
                if (currentInput === '0') {
                    alert('Division by zero error');
                    return;
                }
                result = parseFloat(previousInput) / parseFloat(currentInput);
                break;
        }

        display.innerText = result;
        currentInput = result;
        previousInput = '';
        operator = null;
    });
});
