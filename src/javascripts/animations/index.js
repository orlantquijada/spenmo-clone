import OnScrollAnimation from './onScroll';
import LandingPageAnimations from './landing';
import ScrollTriggerAnimations from './scrollTriggers';

const onScroll = new OnScrollAnimation();
onScroll.load();

const landing = new LandingPageAnimations();
landing.load();

const scrollTriggers = new ScrollTriggerAnimations();
scrollTriggers.load();
