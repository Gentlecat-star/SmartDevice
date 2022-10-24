const resetNoJs = () => {
  const mainFooter = document.querySelector('.main-footer');
  const aboutNode = document.querySelector('.about');

  if(mainFooter) {
    mainFooter.classList.remove('no-js');
  }

  if(aboutNode) {
    aboutNode.classList.remove('no-js');
  }
}

export { resetNoJs };
