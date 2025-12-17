const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

// Add click event to all buttons except "=" and "C"
buttons.forEach((btn) => {
    if (!btn.classList.contains("equal") && !btn.classList.contains("clear")) {
        btn.addEventListener('click', () => {
            input.value += btn.innerText;
        });
    }
});

// Evaluate the input when "=" button is clicked
equal.addEventListener("click", function () {
        let result = eval(input.value);
        input.value = result;
});

// Clear input when "C" button is clicked
clear.addEventListener("click", () => {
    input.value = "";
});
