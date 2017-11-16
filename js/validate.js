$(function() {
  
    var allForms = $('form');
    var allInputs = $('input');
    
    allForms.each(function() {
       
        if (this.hasAttribute('data-validate')) {
            formValidation();
        }
    });
        

/*    allInputs.each(function() {
       
        if (this.hasAttribute('data-validate-rules')) {
            console.log(this);
            console.log(this.getAttribute('data-validate-rules').split(','));
        }
    });*/

    function formValidation(){
        allInputs.each(function(){
            if (this.hasAttribute('data-validate-rules')) {
                var dataAttributes = this.getAttribute('data-validate-rules').split(',');
                var validationRule = dataAttributes[1];

                if (validationRule === 'recipient') {
                    /*walidacja dla elementu*/
                } else if (validationRule === 'account') {
                    /*walidacja dla elementu*/
                } else if (validationRule === 'number') {
                    /*walidacja dla elementu*/
                } else if (validationRule === 'sum') {
                    /*walidacja dla elementu*/
                } else if (validationRule === 'when') {
                    /*walidacja dla elementu*/
                } else if (validationRule === 'title') {
                    /*walidacja dla elementu*/
                }
            }
        });
    }
    
});