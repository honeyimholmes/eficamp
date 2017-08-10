document.addEventListener("DOMContentLoaded", function () {
    
    var submitBtn = document.querySelector(".go");
    var passwordInput = document.querySelector(".input-pass")
    
    submitBtn.addEventListener("click", event => {
        event.preventDefault();
        /*console.log(passwordInput.value);*/
        
        if (passwordInput.value.length === 0) {
        passwordInput.className = "error";
        passwordInput.placeholder = "Pole jest puste"
        } else {
            location.replace("login.html")
        }
    });
    
    
    
});