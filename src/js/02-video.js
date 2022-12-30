import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
});

player.on('timeupdate', throttle(getCurrentPlayTime, 1000));

const getSecFromStorage = () => {
  return JSON.parse(localStorage.getItem('videoplayer-current-time'));
};
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(getSecFromStorage()).then(function (seconds) {
    console.log(`Last time you stopped video on ${second} seconds`);
  });
}
