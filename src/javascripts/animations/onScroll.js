export default class OnScrollAnimation {
  constructor() {
    this.topBar = null;
    this.logoImg = null;

    this.handleOnScroll = () => {
      if (window.scrollY > 0) {
        this.topBar.classList.add('top-bar--on-scroll');
        this.logoImg.classList.add('logo__img--on-scroll');
      } else {
        this.topBar.classList.remove('top-bar--on-scroll');
        this.logoImg.classList.remove('logo__img--on-scroll');
      }
    };
  }

  querySelectors() {
    this.topBar = document.querySelector('.top-bar');
    this.logoImg = document.querySelector('.logo__img');
  }

  addListeners() {
    window.addEventListener('scroll', this.handleOnScroll);
  }

  removeListeners() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  load() {
    this.querySelectors();
    this.addListeners();
  }

  leave() {
    this.removeListeners();
  }
}
