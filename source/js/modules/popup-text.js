const initPopupText = () => {
  const popupButton = document.querySelector('.popup-button');

  if(popupButton) {
    popupButton.addEventListener('click', () => {
      const popupTextsList = document.querySelectorAll('.popup-text');

      popupTextsList.forEach(popupText => {
        if(popupText.classList.contains('is-shown')) {
          popupButton.textContent = 'Подробнее';

          popupText.classList.remove('is-shown');
        } else {
          popupButton.textContent = 'Свернуть';

          popupText.classList.add('is-shown');
        }
      });
    })
  }
}

export {initPopupText};
