import {iosVhFix} from './utils/ios-vh-fix';
import { resetNoJs } from './utils/reset-no-js';
import {initModals} from './modules/modals/init-modals';
import {StickyHeader} from './modules/sticky-header';
import {initAccordion} from './modules/accordion';
import {initPopupText} from './modules/popup-text';
import {initFeedbackForm} from './modules/feedback-form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  resetNoJs();

  // Modules
  // ---------------------------------

  const stickyHeader = new StickyHeader();
  initAccordion();
  initPopupText();
  initFeedbackForm();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });


});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
