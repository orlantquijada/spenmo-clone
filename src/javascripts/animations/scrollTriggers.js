import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class ScrollTriggerAnimations {
  constructor() {
    this.manageTitle = document.querySelector('.manage .title__text');
    this.manageVisuals = document.querySelector('.manage .content__visual');

    this.virtualContentTitle = document.querySelector(
      '.virtual-feature .content__title',
    );
    this.virtualContentDescription = document.querySelector(
      '.virtual-feature .content__description',
    );
    this.virtualContentLink = document.querySelector(
      '.virtual-feature .content__link',
    );
    this.virtualVisual = document.querySelector('.virtual-feature .visual');

    this.paymentContentTitle = document.querySelector(
      '.payments-feature .content__title',
    );
    this.paymentContentDescription = document.querySelector(
      '.payments-feature .content__description',
    );
    this.paymentContentLink = document.querySelector(
      '.payments-feature .content__link',
    );
    this.paymentVisual = document.querySelector('.payments-feature .visual');

    this.integrationTitle = document.querySelector('.integrations .title');
    this.integrationCompanies = document.querySelector(
      '.integrations .companies',
    );

    this.defaultDuration = 1.5;
    this.defaultEase = 'power2.inOut';
  }

  scrollAnimations() {
    gsap.defaults({
      duration: this.defaultDuration,
      ease: this.defaultEase,
      opacity: 0,
    });

    gsap.from(this.manageTitle, { y: 50, scrollTrigger: this.manageTitle });
    gsap.from(
      this.manageVisuals,
      { x: -100, scrollTrigger: this.manageVisuals },
      '<',
    );
    gsap.from(
      this.virtualContentTitle,
      {
        y: -50,
        scrollTrigger: this.virtualContentTitle,
      },
      '<',
    );
    gsap.from(
      this.virtualContentDescription,
      {
        x: -50,
        scrollTrigger: this.virtualContentDescription,
      },
      '<',
    );
    gsap.from(this.virtualContentLink, {
      y: 50,
      scrollTrigger: this.virtualContentLink,
    });
    gsap.from(this.virtualVisual, {
      x: 100,
      scrollTrigger: this.virtualVisual,
    });
    gsap.from(this.paymentVisual, {
      x: -100,
      scrollTrigger: this.paymentVisual,
    });
    gsap.from(this.paymentContentTitle, {
      y: -50,
      scrollTrigger: this.paymentContentTitle,
    });
    gsap.from(this.paymentContentDescription, {
      x: 50,
      scrollTrigger: this.paymentContentDescription,
    });
    gsap.from(this.paymentContentLink, {
      y: 50,
      scrollTrigger: this.paymentContentLink,
    });
  }

  load() {
    this.scrollAnimations();
  }
}
