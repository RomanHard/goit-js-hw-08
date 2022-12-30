const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляємо форму');

  evt.currentTarget.reset();
}

function onTextareaInput(evt) {
  const message = evt.currentTarget.value;
  localStorage.setItem('feedback-form-state', message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
