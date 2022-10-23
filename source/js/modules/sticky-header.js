const initStickyHeader = () => {
  const mainHeader = document.querySelector('.main-header');
  const stickyOffset = mainHeader.offsetHeight;

  window.addEventListener('scroll', () => {
    if(window.pageYOffset >= stickyOffset) {
      mainHeader.classList.add('sticky');
    } else if(window.pageYOffset === 0) {
      mainHeader.classList.remove('sticky');
    }
  })
}

export { initStickyHeader };
