/* eslint no-new: "off" */
import { Navigator } from './navigator';
import { MigrationOfArt } from './migration-of-art';
import Swiper, { Navigation, Pagination } from 'swiper'; // core version + navigation, pagination modules:

require('../stylesheets/app.scss');

if (document.querySelector('.swiper-container')) {
  require('../stylesheets/swiper.min.css');
  new Swiper('.swiper-container', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
}

if (document.querySelector('.marvel-device')) {
  require('../stylesheets/devices.min.css');
}

new MigrationOfArt();

const nav = new Navigator();
nav.init();

console.log('hello world 2');
