import { gsap } from 'gsap';

export default class LandingPageAnimations {
  constructor() {
    this.heroBgImg = null;
    this.heroContentHeader = null;
    this.heroContentSubheader = null;
    this.heroContentCTA = null;
    this.heroContentSubtext = null;

    this.partnersTitle = null;
    this.companyList = null;

    this.defaultEase = 'power2.inOut';
    this.defaultDuration = 1.5;
  }

  querySelectors() {
    this.heroBgImg = document.querySelector('.hero__background__image');
    this.heroContentHeader = document.querySelector('.hero__content__header');
    this.heroContentCTA = document.querySelector('.hero__content__cta');
    this.heroContentSubtext = document.querySelector('.hero__content__subtext');
    this.heroContentSubheader = document.querySelector(
      '.hero__content__subheader',
    );

    this.partnersTitle = document.querySelector('.partners .title');
    this.companyList = document.querySelectorAll('.company');
  }

  setStyles() {
    gsap
      .timeline({
        defaults: {
          opacity: 0,
        },
      })
      .set(this.heroBgImg, { x: 100 })
      .set(this.heroContentHeader, { y: -100 })
      .set(this.heroContentSubheader, { x: -100 })
      .set(this.heroContentCTA, { y: 50 })
      .set(this.heroContentSubtext, { y: 50 })
      .set(this.partnersTitle, { y: -20 })
      .set(this.companyList, { y: 50 });
  }

  landingAnimations() {
    gsap
      .timeline({
        defaults: {
          duration: this.defaultDuration,
          ease: this.defaultEase,
          x: 0,
          y: 0,
          opacity: 1,
        },
        delay: 0.3,
      })
      .to(this.heroBgImg, {})
      .to(this.heroContentHeader, {}, '<')
      .to(this.heroContentSubheader, {}, '<')
      .to(this.heroContentCTA, {}, '<')
      .to(this.heroContentSubtext, {}, '<')
      .to(this.partnersTitle, {}, '<')
      .to(
        this.companyList,
        {
          ease: 'power2.out',
          stagger: 0.1,
        },
        '<',
      );
  }

  load() {
    this.querySelectors();
    this.setStyles();
    this.landingAnimations();
  }
}
