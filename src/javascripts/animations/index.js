import OnScrollAnimation from './onScroll';
import LandingPageAnimations from './landing';

const onScroll = new OnScrollAnimation();
onScroll.load();

const landing = new LandingPageAnimations();
landing.load();

export { landing, onScroll };
