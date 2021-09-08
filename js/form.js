const stringEmpety = "";

let inputClassErro = "input-error"
let sendButton = $("#send");
let form = $("#contact");
let requiredInput = $(".required-input");
let htmlErrorField = `<span class="required-field-message">Campo obrigatório!</span>`;
let sendData = {};


sendButton.click(() => {
    getDataForm(sendData);
    validateField();
});

function getDataForm(object) {
    $.each(form.serializeArray(), (i, field) => {
        object[field.name] = field.value;
    });

    return object = sendData;
}

function validateField() {
    $.each(requiredInput, (i, element) => {
        element.value == stringEmpety ? controlError(true, element) : controlError(false, element);
    });
}

function controlError(status, element) {
    $(element).parent().find(".required-field-message").remove();
    
    if(status) {
        $(element).addClass(inputClassErro);
        $(element).parent().append(htmlErrorField);
        return status;
    }else {
        $(element).removeClass(inputClassErro);
        $(element).parent().find(".required-field-message").remove();
        return status;
    }
    

    
}