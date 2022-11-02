function StickyHeader() {
  const mainHeader = document.querySelector('.main-header');
  const stickyOffset = mainHeader.offsetHeight;
  const mainInner = document.querySelector('main');
  let stickyActive = false;

  const initStickyHeader = () => {
    mainInner.classList.remove('no-js');
    const breakpoint = window.matchMedia(`(min-width:1024px)`);

    const breakpointChecker = () => {
      if (breakpoint.matches) {
        window.addEventListener('scroll', onWindowScrolled);
      } else {
        window.removeEventListener('scroll', onWindowScrolled);
        desactivateStickyHeader();
      }
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }

  const onWindowScrolled = () => {
    if(!stickyActive && window.pageYOffset >= stickyOffset) {
      activateStickyHeader();
    }
    else if(window.pageYOffset === 0) {
      desactivateStickyHeader();
    }
  }

  const activateStickyHeader = () => {
    mainHeader.classList.add('sticky');
    mainInner.style.top = '0';
    stickyActive = true;
  }

  const desactivateStickyHeader = () => {
    mainHeader.classList.remove('sticky');
    mainInner.style.top = '';
    stickyActive = false;
  }

  initStickyHeader();
}

export { StickyHeader };
