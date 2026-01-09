const result = document.getElementById("result");
const history = document.getElementById("history");
const buttons = document.querySelectorAll("button");

let input = "";

function updateDisplay() {
    result.value = input;
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => handleInput(btn.textContent));
});

document.addEventListener("keydown", e => {
    if ("0123456789.+-*/".includes(e.key)) {
        input += e.key;
        updateDisplay();
    }
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") {
        input = input.slice(0, -1);
        updateDisplay();
    }
});

function handleInput(value) {
    if (value === "C") {
        input = "";
        history.textContent = "";
    }
    else if (value === "=") {
        calculate();
    }
    else if (value === "√") {
        input = Math.sqrt(eval(input)).toString();
    }
    else if (value === "x²") {
        input = Math.pow(eval(input), 2).toString();
    }
    else if (value === "%") {
        input = (eval(input) / 100).toString();
    }
    else {
        input += value
            .replace("×", "*")
            .replace("÷", "/")
            .replace("−", "-");
    }
    updateDisplay();
}

function calculate() {
    try {
        history.textContent = input;
        input = eval(input).toString();
        updateDisplay();
    } catch {
        result.value = "Error";
        input = "";
    }
}
