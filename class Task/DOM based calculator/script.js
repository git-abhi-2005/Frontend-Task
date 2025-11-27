const display = document.getElementById("display");
let expression = "";

function updateDisplay() {
    display.textContent = expression || "0";
}

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        handleInput(btn.dataset.val);
    });
});

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (/[0-9+\-*/.%]/.test(key)) {
        handleInput(key);
    }
    else if (key === "Enter") {
        handleInput("=");
    }
    else if (key === "Backspace") {
        handleInput("←");
    }
});

function handleInput(val) {
    if (val === "C") {
        expression = "";
    }
    else if (val === "←") {
        expression = expression.slice(0, -1);
    }
    else if (val === "=") {
        try {
            let result = eval(expression);
            expression = expression + " = " + result;
        } catch {
            expression = "Error";
        }
    }
    else {
        expression += val;
    }

    updateDisplay();
}

updateDisplay();
