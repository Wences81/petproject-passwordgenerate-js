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

});



mainEl.appendChild(passwordEl);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);