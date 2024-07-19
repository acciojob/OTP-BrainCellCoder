// script.js
const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
    code.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value) {
            if (index < codes.length - 1) {
                codes[index + 1].focus();
            }
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            codes[index - 1].focus();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    codes[0].focus();
});
