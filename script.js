// This script handles the functionality for OTP input behavior

const inputs = document.querySelectorAll('.code');

// Add event listeners to all input fields
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        const val = e.target.value;
        
        // Move to next input if current input is filled
        if (val.length === 1) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }

        // Handle backspace to move focus to previous input
        if (e.inputType === 'deleteContentBackward') {
            if (index > 0) {
                inputs[index - 1].focus();
            }
        }
    });

    // Automatically focus the next input on maxlength reached
    input.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9') {
            if (index < inputs.length - 1) {
                setTimeout(() => {
                    inputs[index + 1].focus();
                }, 10); // Timeout to ensure focus after input value changes
            }
        }
    });

    // Handle backspace key to move focus to previous input
    input.addEventListener('keyup', (e) => {
        if (e.key === 'Backspace') {
            if (index > 0) {
                inputs[index - 1].focus();
            }
        }
    });
});
