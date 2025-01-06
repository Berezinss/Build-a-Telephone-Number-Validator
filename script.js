document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.getElementById("phone-input");
    const resultDiv = document.getElementById("result");
    const validateBtn = document.getElementById("validate-btn");
    const resetBtn = document.getElementById("reset-btn");

    validateBtn.addEventListener("click", () => {
        const phoneNumber = phoneInput.value.trim();
        const isValid = /^[0-9]{10}$/.test(phoneNumber); // Example validation
        resultDiv.textContent = isValid
            ? "Valid phone number!"
            : "Invalid phone number!";
    });

    resetBtn.addEventListener("click", () => {
        phoneInput.value = "";
        resultDiv.textContent = "";
    });
});
