const buttons = document.querySelectorAll('.accordion__button');

const initAccordion = () => {
  for(let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', onAccordionButtonClicked)
  }
}

const onAccordionButtonClicked = (evt) => {
  const button = evt.target;
  const parentAccordion = button.closest('.accordion');
  const content = parentAccordion.querySelector('.accordion__content');
  if(button.classList.contains('is-active')) {
    hideContent(content);
    button.classList.remove('is-active');
  } else {
    showContent(content);
    button.classList.add('is-active');
    closeOtherButtons(button);
  }
}

const showContent = (content) => {
  content.style.maxHeight = content.scrollHeight + "px";
}

const hideContent = (content) => {
  content.style.maxHeight = null;
}

const closeOtherButtons = (exception) => {
  for(let i = 0; i < buttons.length; ++i) {
    if(buttons[i] === exception || !buttons[i].classList.contains('is-active')) {
      continue;
    }

    buttons[i].classList.remove('is-active');
    hideContent(buttons[i]
      .closest('.accordion')
      .querySelector('.accordion__content'));
  }
}

export { initAccordion };
