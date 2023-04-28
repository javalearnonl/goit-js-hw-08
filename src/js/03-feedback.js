
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea')

};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextAreaInput);


function onFormSubmit(evt) {
    
}
function onTextAreaInput(evt) {
    const value = evt.currentTarget.value;
     console.log(value);

}