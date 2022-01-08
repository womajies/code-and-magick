import {showAlert} from './utils.js';
import {sendData} from './api.js';

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const wizardForm = document.querySelector('.setup-wizard-form');
const userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', () => {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ${  MIN_NAME_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
  } else {
    userNameInput.setCustomValidity('');
  }
});

const setUserFormSubmit = (onSuccess) => {
  wizardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
  });
};

export {setUserFormSubmit};
