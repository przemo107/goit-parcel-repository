// // import Vimeo from '@vimeo/player';
// import throttle from 'lodash.throttle';
// // Inicjalizacja odtwarzacza Vimeo
// const player = new Vimeo('vimeo-player');

// // Funkcja do zapisywania czasu odtwarzania w localStorage
// const saveCurrentTime = throttle(currentTime => {
//   localStorage.setItem('videoplayer-current-time', currentTime);
// }, 1000);

// // Obsługa zdarzenia timeupdate
// player.on('timeupdate', ({ seconds }) => {
//   saveCurrentTime(seconds);
// });

// const player = new Vimeo('vimeo-player');

// const saveCurrentTime = throttle(currentTime => {
//   localStorage.setItem('videoplayer-current-time', currentTime);
// }, 1000);

// player.on('timeupdate', timeRecord);

// const updateDelay = throttle(seconds => {
//   localStorage.setItem('videoplayer-current-time', seconds);
// }, 1000);

// const updateTime = () => video.getCurrentTime().then(updateDelay);

// // Przywracanie czasu odtwarzania po przeładowaniu strony
// const currentTime = localStorage.getItem('videoplayer-current-time');
// if (currentTime) {
//   player.setCurrentTime(currentTime);
// }
// const currentTime = localStorage.getItem('videoplayer-current-time');
// if (currentTime) {
//   player.setCurrentTime(currentTime);
// }

// import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.getElementById('vimeo-player');
const video = new Player(videoEl);

const saveTime = data =>
  localStorage.setItem('videoplayer-current-time', data.seconds);
const saveTimeDelay = throttle(saveTime, 1000);
const getCurrentTime = localStorage.getItem('videoplayer-current-time');

video.setCurrentTime(getCurrentTime).then();
video.on('timeupdate', saveTimeDelay);
