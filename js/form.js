const stringEmpety = "";

$("#phone").mask("(00) 00000-0000");

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

    return object = object;
}

function validateField() {
    $.each(requiredInput, (i, element) => {
        element.value == stringEmpety ? controlError(true, element) : controlError(false, element);
    });
}

function controlError(status, element) {
    let inputTarget =   $(element);
    let fieldsetTarget = $(element).parent().find(".required-field-message");

    fieldsetTarget.remove();
    
    if(status) {
        inputTarget.addClass(inputClassErro);
        inputTarget.parent().append(htmlErrorField);
        return status;
    }else {
        inputTarget.removeClass(inputClassErro);
        fieldsetTarget.remove();
        return status;
    }
}