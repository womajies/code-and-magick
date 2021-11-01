import {isEscEvent} from './utils.js';
import {isEnterEvent} from './utils.js';
import {renderSimilarList, clearSimilarList} from './similar-list.js';

const userModalElement = document.querySelector('.setup');
const userModalOpenElement = document.querySelector('.setup-open');
const userModalCloseElement = userModalElement.querySelector('.setup-close');

function openUserModal () {
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  userModalCloseElement.addEventListener('click', closeUserModal);
  userModalCloseElement.addEventListener('keydown', enterKeydown);
  renderSimilarList();
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  userModalCloseElement.removeEventListener('click', closeUserModal);
  userModalCloseElement.removeEventListener('keydown', enterKeydown);
  clearSimilarList();
}

function onPopupEscKeydown (evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

function enterKeydown (evt) {
  if (isEnterEvent(evt)) {
    closeUserModal();
  }
}

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    openUserModal();
  }
});

userModalOpenElement.addEventListener('click', openUserModal);
openUserModal();
