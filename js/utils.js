// 'use strict';

// function getRandomPositiveInteger(min, max) {
//   // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
//   // реализуем поддержку передачи минимального и максимального значения в любом порядке,
//   // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

//   // После нам нужно убедиться, что пользователь не передал дробные значения,
//   // для этого на всякий пожарный случай нижнюю границу диапазона
//   // мы округляем к ближайшему большему целому с помощью Math.ceil,
//   // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
//   const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
//   const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
//   // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
//   // мы не ругаем пользователя за переданное отрицательное число,
//   // а просто берём его по модулю с помощью Math.abs

//   // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
//   // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
//   // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
//   const result = Math.random() * (upper - lower + 1) + lower;
//   // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

//   // И в конце с помощью метода Math.floor мы округляем полученный результат,
//   // потому что Math.random() генерирует только дробные числа и ноль.
//   return Math.floor(result);
// }

// function checkStringLength(string, maxLength) {
//   return string.length <= maxLength;
// }

// checkStringLength('ahaha', 3);

// const SIMILAR_PHOTO_COUNT = 25;
// const COMMENTS_MAX_COUNT = 5;

// const DESCRIPTION = ['Ленивое описание помещения №1', 'Ленивое описание помещения №2', 'Ленивое описание помещения №3', 'Ленивое описание помещения №4', 'Ленивое описание помещения №5', 'Ленивое описание помещения №6', 'Ленивое описание помещения №7', 'Ленивое описание помещения №8', 'Ленивое описание помещения №9', 'Ленивое описание помещения №10', 'Ленивое описание помещения №11', 'Ленивое описание помещения №12', 'Ленивое описание помещения №13', 'Ленивое описание помещения №14', 'Ленивое описание помещения №15', 'Ленивое описание помещения №16', 'Ленивое описание помещения №17', 'Ленивое описание помещения №18', 'Ленивое описание помещения №19', 'Ленивое описание помещения №20', 'Ленивое описание помещения №21', 'Ленивое описание помещения №22', 'Ленивое описание помещения №23', 'Ленивое описание помещения №24', 'Ленивое описание помещения №25'];

// const MESSAGES = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
// ];

// const NAMES = [
//   'Артем',
//   'Кирилл',
//   'Александр',
//   'Константин',
//   'Дмитрий',
//   'Алексей',
// ];

// function getRandomArrayElement(array) {
//   array[getRandomPositiveInteger(0, array.length - 1)];
// };

// function createComment () {
//   ({
//     id: getRandomPositiveInteger(0, 2000),
//     avatar: `img/avatar-${getRandomPositiveInteger(0, 6)}.svg`,
//     message: getRandomArrayElement(MESSAGES),
//     name: getRandomArrayElement(NAMES),
//   });
// };

// function createPhoto () {
//   ({
//     id: getRandomPositiveInteger(1, SIMILAR_PHOTO_COUNT),
//     url: `photos/${getRandomPositiveInteger(1, SIMILAR_PHOTO_COUNT)}.jpg`,
//     description: getRandomArrayElement(DESCRIPTION),
//     likes: getRandomPositiveInteger(15, 200),
//     comments: new Array(getRandomPositiveInteger(0, COMMENTS_MAX_COUNT)).fill(null).map(() => createComment()),
//   });
// };

// const generatePhotos = new Array(SIMILAR_PHOTO_COUNT).fill(null).map(() => createPhoto());

// generatePhotos();

const ALERT_SHOW_TIME = 5000;

function getRandomPositiveInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function isEscEvent(evt) {
  return evt.key === 'Escape' || evt.key === 'Esc';
}

function isEnterEvent(evt) {
  return evt.key === 'Enter';
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomPositiveInteger, getRandomArrayElement, isEscEvent, isEnterEvent, showAlert};
