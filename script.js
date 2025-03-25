//your JS code here. If required.
// Select all OTP input fields
const otpInputs = document.querySelectorAll('.code');

// Add event listeners to handle input and backspace behavior
otpInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        // When the user types, move to the next field
        if (input.value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        // Handle backspace behavior
        if (e.key === 'Backspace' && !input.value && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});

// Auto focus on the first input field when the page loads
document.getElementById('code-1').focus();