import style from '../styles/index.scss';
import { fadeCssAnimation } from './fade_animations.js';
import { sideNavScript } from './sidenavigation.js';
import { initSplash } from './splashScreen.js';
import { initNavBarMovement } from './navbar_movement.js';
import { initPageTransition } from './body_fade_transition';
import { initCarosel } from './carousel.js';
import '../fonts/FavoritPro-Regular.otf';


initCarosel();
fadeCssAnimation();
sideNavScript();
initSplash();
initNavBarMovement();
initPageTransition();
