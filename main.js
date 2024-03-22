const input = document.querySelector('.pwd input');
const eye = document.querySelector('.pwd img'); 

eye.addEventListener('click', () => {
    if (input.type === 'password') {
        input.type = 'text';
        eye.src = 'assets/images/eye.svg';
        input.style.paddingLeft = '16px';
        input.style.fontSize = '16px';
        input.style.marginBottom = '32px';
        input.style.border = '1.2px solid #8F9BB3';
        input.style.borderRadius = '4px';
        input.style.fontFamily = 'Inter, sans-serif';
        input.style.letterSpacing = '1px';
        input.style.outline = '1px solid #8F9BB3'    
    } else {
        input.type = 'password';
        eye.src = 'assets/images/eye-off.svg';
        input.computedStyleMap.paddingLeft = '10';
        input.computedStyleMap.fontSize = '0';
        input.computedStyleMap.marginBottom = '0';
        input.computedStyleMap.border = '0';
    }
});