$(function() {
    
    var submitBtn = document.querySelector(".go");
    var passwordInput = document.querySelector(".input-pass");
    var changeClient = $('.client-change');
    var clientInput = $('.bank-input');
    var bankNumber = $('.bank-number');
    var loginInput = $('.input-login');
    var errorMsg = $('.submit-message');
    var tooltipMsg = $('.tooltip-msg');
    
    submitBtn.addEventListener("click", event => {
       event.preventDefault();
         /*
        console.log(passwordInput.value);
        
        if (passwordInput.value.length === 0) {
        passwordInput.className = "error";
        passwordInput.placeholder = "Pole jest puste"
        } else {*/
            
        $.ajax({
            type: "post",
            data: {
                login: /*loginInput.value*/'efi',
                password: /*passwordInput.value*/ 'camp'
                },
            url: "https://efigence-camp.herokuapp.com/api/login",
            error: function(response) {
                console.log("error", response);
                errorMsg.show('fast');
                tooltipMsg.text(response.responseJSON.message);
              },
            success: function(response) {
               window.location.replace('index.html')
              }
            });
    
    });
    
    changeClient.on('click', function() {
        bankNumber.addClass('hide');
        clientInput.show('fast');
    });
    

    
});