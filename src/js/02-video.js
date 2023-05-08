// import Player from '@vimeo/player';
// const throttle = require('lodash.throttle');

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// function saveTime(data) {
//   localStorage.setItem('videoplayer-current-time', data.seconds);
// }

// player.on('timeupdate', throttle(saveTime, 1000));

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
// const throttle = require('lodash.throttle');

// function saveTime(data) {
//   localStorage.setItem('videoplayer-current-time', data.seconds);
// }

// player.on('timeupdate', throttle(saveTime, 1000));

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function saveTime() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}

player.on('timeupdate', throttle(saveTime, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
