import Inputmask from '../vendor/inputmask';
import smoothscroll from '../vendor/smoothscroll';

const feedbackSection = document.querySelector('#feedback');

smoothscroll.polyfill();

const initFeedbackForm = () => {
  const feedbackFormList = document.querySelectorAll('.form-feedback');

  feedbackFormList.forEach(feedbackForm => {
    feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
  });

  let inputMask = new Inputmask('+9 (9{3}) 9{3} 9{2} 9{2}');
  inputMask.mask('.form-feedback__form input[type="tel"]');

  if(feedbackSection) {
    const feedbackScroll = document.querySelector('#feedback-scroll');
    feedbackScroll.addEventListener('click', onFeedbackScrollClicked);

    const feedbackCheckbox = feedbackSection.querySelector('[name="agreement"]');
    feedbackCheckbox.required = false;
  }
}

const onFeedbackFormSubmit = (evt) => {
  const agreementCheckbox = evt.target.querySelector('.form-feedback__checkbox-agreement > input[type="checkbox"]');

  if(!agreementCheckbox.checked) {
    evt.preventDefault();
    agreementCheckbox.classList.add('error')
  }
  else {
    agreementCheckbox.classList.remove('error')
  }

  const phonePattern = /[+][1-9]\s*\([0-9]{3}\)\s*[0-9]{3}\s*[0-9]{2}\s*[0-9]{2}/gm;
  const phoneNumberInput = evt.target.querySelector('.form-feedback__form input[type="tel"]');
  if(!phonePattern.test(phoneNumberInput.value)) {
    evt.preventDefault();
    phoneNumberInput.classList.add('error')
  } else {
    phoneNumberInput.classList.remove('error')
  }
}

const onFeedbackScrollClicked = (evt) => {
  const offsetTop = feedbackSection.offsetTop;
  const mainHeader = document.querySelector('.main-header');
  const headerHeight = mainHeader.clientHeight;

  evt.preventDefault();
  window.scrollTo({top: offsetTop - headerHeight * 2, left: 0, behavior: 'smooth'});
}

export { initFeedbackForm };
