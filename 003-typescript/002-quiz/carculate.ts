{
    // Union Type 활용
    type Operator = "add" | "subtract" | "multiply" | "divide" | "remainder" ;
    // if
    const calculate = (operator: Operator, num1: number, num2: number): number => {
        if (operator === "add") {
            return num1 + num2;
        } else if (operator === "subtract") {
            return num1 - num2;
        } else if (operator === "multiply") {
            return num1 * num2;
        } else if (operator === "divide") {
            return num1 / num2;
        } else if (operator === "remainder") {
            return num1 % num2;
        }
    }
    console.log(calculate("subtract", 7, 3));

    // switch
    const calculate2 = (operator: Operator, num1: number, num2: number): number => {
        switch (operator) {
            case "add":
                return num1 + num2;
            case "subtract":
                return num1 - num2;
            case "multiply":
                return num1 * num2;
            case "divide":
                return num1 / num2;
            case "remainder":
                return num1 % num2;
            default:
                throw new Error("Unknown command. Plz check the parameter type");
        }
    }
    console.log(calculate2("multiply", 7, 3));
}