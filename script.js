// Selecting form object using DOM
const form = document.getElementById('registration-form')
form.addEventListener('submit',function (event){
  event.preventDefault()
 const usernameInput = document.getElementById('username')
const usernameError = document.getElementById('usernameError')
if (usernameInput.value.length < 3){
  usernameError.textContent = 'Username must be at least 3 characters long.'
}else{
  usernameError.textContent = ''
}

const emailInput = document.getElementById('email')
const emailError = document.getElementById(emailError)
 if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';}
 else{
  emailError.textContent = ''
 }

 const passwordInput = document.getElementById('password')
 const passwordError = document.getElementById('passwordError')
 if (passwordInput.value.length < 6){
  passwordError.textContent = 'Please enter a valid email address.'
 }else{
  passwordError.textContent = ''
 }


form.submit()
})

