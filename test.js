class Calculator {
    constructor() {
        this.result = 0;
    }

    calculate(operator, number) {
        switch (operator) {
            case 'add':
                this.result += number;
                break;
            case 'subtract':
                this.result -= number;
                break;
            case 'multiply':
                this.result *= number;
                break;
            case 'divide':
                if (number === 0) {
                    throw new Error("Cannot divide by zero");
                }
                this.result /= number;
                break;
            default:
                throw new Error("Invalid operator");
        }
        return this;
    }

    getResult() {
        return this.result;
    }

    reset() {
        this.result = 0;
        return this;
    }
}

// Usage
const calculator = new Calculator();
calculator.calculate('add', 5).calculate('subtract', 2).calculate('multiply', 3).calculate('divide', 2);
console.log(calculator.getResult()); // Output: 4.5
calculator.reset();
console.log(calculator.getResult()); // Output: 0