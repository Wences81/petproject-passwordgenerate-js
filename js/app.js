const mainEl = document.querySelector('.main');

const passwordEl = document.createElement('input');
passwordEl.classList.add('password');
passwordEl.setAttribute('placeholder', 'Created password');
passwordEl.addEventListener('keypress', (e) => {
    e.preventDefault();
});
passwordEl.addEventListener('focus', (e) => {

});

const copyBtn = document.createElement('button');
copyBtn.classList.add('password-button');
copyBtn.innerText = 'Copy';
copyBtn.addEventListener('click', (e) => {

});

const generateBtn = document.createElement('button');
generateBtn.classList.add('password-button');
generateBtn.innerText = 'Generate password';
generateBtn.addEventListener('click', (e) => {
    let password = generatePassword(12);
    passwordEl.value = password;
});

function generatePassword(passwordLength) {
    const numberChars = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const symbolChars = '!@#$%^&*()_+';
    const allChars = numberChars + upperChars + lowerChars + symbolChars;

    let randomString = '';

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomNumber]
    }

    return randomString;
}

mainEl.appendChild(passwordEl);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);