import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  inputform: document.querySelector('.feedback-form input')
};

let formData = {
  email: "",
  message: ""
};

returnSavedFormState();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));
refs.inputform.addEventListener('input', throttle(onEmailInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
    if (!formData.email) {
    alert("Поле електронної пошти обов'язкове для заповнення!");
    return;
  }
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {
    email: "",
    message: ""
  };
  console.log(formData); 
}

function onTextAreaInput(evt) {
  formData.message = evt.target.value;
  saveFormStateToLocalStorage();
}

function onEmailInput(evt) {
  formData.email = evt.target.value;
  saveFormStateToLocalStorage();
}

function saveFormStateToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function returnSavedFormState() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
    formData = JSON.parse(savedFormData);
    refs.textarea.value = formData.message;
    refs.inputform.value = formData.email;
  }
}