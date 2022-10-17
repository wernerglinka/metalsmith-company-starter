/* global window */

import barba from '@barba/core';
import barbaCSS from '@barba/css';
import loadResponsiveImage from './modules/load-responsive-image';
import navigation from './modules/navigation';

function initPage() {
  // Note that when using BarbaCSS the leave() and enter() hook are not executed.
  // Only the before- and after- hooks are executed.
  barba.use(barbaCSS);

  barba.init({
    transitions: [
      {
        // "home" is used in the transition class attribute.
        name: 'home',
        once() {}
      },
      {
        // "fade" is used in the transition class attribute.
        name: 'fade',
        to: {
          namespace: ['barbaPage']
        },
        beforeLeave() {},
        leave() {},
        afterLeave() {
          navigation.init();
        },
        enter() {}
      }
    ]
  });
  navigation.init();
  loadResponsiveImage.init();
}

window.addEventListener('load', () => {
  initPage();
});
