const e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};e.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("Отправляємо форму"),e.currentTarget.reset()})),e.textarea.addEventListener("input",(function(e){const t=e.currentTarget.value;localStorage.setItem("feedback-form-state",t)})),function(){const t=localStorage.getItem("feedback-form-state");t&&(e.textarea.value=t)}();
//# sourceMappingURL=03-feedback.3ded735b.js.map
