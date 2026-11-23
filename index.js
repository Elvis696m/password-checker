const myBtn = document.querySelector('#myBtn');
const password = document.querySelector('#password');
const message = document.querySelector('#message');

myBtn.addEventListener('click', () => {
    checkPassword();
    
})
function checkPassword() {
    if(password.value===''){
        message.textContent='Enter a password!'
    }
    else if (password.value.length <= 4) {
        message.textContent = 'Weak password! Include letters @,#,& to strengthen it.'
    }
    else if(password.value.length>=9){
        message.textContent='Strong password'
    }
        else{
        message.textContent='Moderate Pasword'
    }
}
