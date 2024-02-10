// Function to handle key events
function handleKeyPress(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.keyCode === 13) {
    calculate();
  }
  // Check if the pressed key is Delete (key code 46)
  else if (event.keyCode === 46) {
    clearCalculator();
  }
}

// Add event listener for key press events on the whole document
document.addEventListener("keydown", handleKeyPress);

// Function to perform calculation
function calculate() {
  const num1 = document.getElementById("num1").value.trim();
  const num2 = document.getElementById("num2").value.trim();
  const operator = document.getElementById("operatorSelect").value;

  let result;
  let expression = "";

  try {
    // Check if input is empty
    if (num1 === "" || num2 === "") {
      throw new Error("Please enter valid numbers.");
    }

    // Parse input values to float
    const parsedNum1 = parseFloat(num1) || 0;
    const parsedNum2 = parseFloat(num2) || 0;

    // Perform calculation based on the selected operator
    switch (operator) {
      case "+":
        result = add(parsedNum1, parsedNum2);
        expression = `${parsedNum1} ${operator} ${parsedNum2}  `;
        break;
      case "-":
        result = subtract(parsedNum1, parsedNum2);
        expression = `${parsedNum1} ${operator} ${parsedNum2}  `;
        break;
      case "*":
        result = multiply(parsedNum1, parsedNum2);
        expression = `${parsedNum1} ${operator} ${parsedNum2}  `;
        break;
      case "/":
        // Check for division by zero
        if (parsedNum2 === 0) {
          throw new Error("Cannot divide by zero");
        }
        result = divide(parsedNum1, parsedNum2);
        expression = `${parsedNum1} ${operator} ${parsedNum2}  `;
        break;
      case "%":
        // Calculate percentage expression
        result = percentage(parsedNum1, parsedNum2);
        expression = `${parsedNum2} %   of ${parsedNum1}  `;
        break;
      default:
        throw new Error("Invalid operator");
    }

    // Display result and expression
    displayResult(result);
    displayExpression(expression);
  } catch (error) {
    // Display error message
    displayResult(`Error: ${error.message}`);
    displayExpression("");
  }
}

// Basic arithmetic operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// Handle division and check for division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Calculate percentage
function percentage(a, b) {
  return (a * b) / 100;
}

// Display result in the result box
function displayResult(result) {
  document.getElementById("resultBox").value = result;
}

// Display expression in the expression box
function displayExpression(expression) {
  document.getElementById("expressionBox").value = expression;
}

// Reset the calculator form
function clearCalculator() {
  document.getElementById("calculatorForm").reset();
  document.getElementById("expressionBox").value = "";
  document.getElementById("resultBox").value = "";
}
