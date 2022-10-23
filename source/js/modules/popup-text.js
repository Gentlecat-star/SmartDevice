const initPopupText = () => {
  const popupButton = document.querySelector('.popup-button');
  const popupText = document.querySelector('.popup-text');

  popupButton.addEventListener('click', () => {
    if(popupText.classList.contains('is-shown')) {
      popupButton.textContent = 'Подробнее';

      popupText.classList.remove('is-shown');
    } else {
      popupButton.textContent = 'Свернуть';

      popupText.classList.add('is-shown');
    }
  })
}

export {initPopupText};
