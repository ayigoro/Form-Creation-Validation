document.addEventListener("DOMContentLoaded",()=>{
 const form = document.getElementById("registration-form")
 const feedbackDiv = document.getElementById("feedback-form")
 form.addEventListener("submit",(event)=>{
  event.preventDefault()
 })
 const usernameInput = document.getElementById("username").value.trim()
 const emailInput = document.getElementById("email").value.trim()
 const passwordInput = document.getElementById("password").value.trim()

 const isValid = true
 const messages = []

 if (!email.include("@") || !email.include(".")){
   isValid = false
   messages.push("Email must contain both '@' and '.' characters.")
 }
  if (passwordInput.length < 8){
    isValid = false
    messages.push("Password must be at least 8 characters long.")
  }

  feedbackDiv.style.display = "block"
  if (isValid == true){
    feedbackDiv.textContent = "Registration successful!"
    feedbackDiv.style.color = "#28a745"
  }else{
    feedbackDiv.innerHTML = messages.join("<br>")
    feedbackDiv.style.color = "#dc3545"
  }
})
 