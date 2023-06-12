import { Navigator } from './navigator';
import Swiper, { Navigation, Pagination } from 'swiper'; // core version + navigation, pagination modules:

require('../stylesheets/app.scss');
require('../stylesheets/swiper.min.css');

if (document.querySelector('.swiper-container')) {
  const swiper = new Swiper('.swiper-container', {
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

const nav = new Navigator();
nav.init();

console.log('hello world 2');
