const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.querySelector('body');


const showError = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  body.appendChild(errorMessage);
  setTimeout(() => {
    errorMessage.remove();
  },5000);
};

export {showError};


// 1 Сделать фунцию которая показывает сообщение об успешной отправке
// 2 Сделать функцию об ошибке отправке форме
