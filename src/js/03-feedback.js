import throttle from 'lodash.throttle';

const STORAGE_KAY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляємо форму');

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KAY);
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KAY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KAY);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
