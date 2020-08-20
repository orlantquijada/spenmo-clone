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

  landingAnimations() {
    gsap
      .timeline({
        defaults: {
          duration: this.defaultDuration,
          ease: this.defaultEase,
          opacity: 0,
        },
        delay: 0.3,
      })
      .from(this.heroBgImg, { x: 100 }, '<')
      .from(this.heroContentHeader, { y: -100 }, '<')
      .from(this.heroContentSubheader, { x: -100 }, '<')
      .from(this.heroContentCTA, { y: 50 }, '<')
      .from(this.heroContentSubtext, { y: 50 }, '<')
      .from(this.partnersTitle, { y: -20 }, '<')
      .from(this.companyList, { y: 50, stagger: 0.1 }, '<');
  }

  load() {
    this.querySelectors();
    this.landingAnimations();
  }
}
