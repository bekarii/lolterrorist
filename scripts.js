document.addEventListener('DOMContentLoaded', function () {
  const backgroundMusic = document.getElementById('backgroundMusic');
  const toggleSoundButton = document.getElementById('toggleSound');
  const soundIcon = document.getElementById('soundIcon');

  let isSoundOn = true;

  toggleSoundButton.addEventListener('click', function () {
    isSoundOn = !isSoundOn;
    if (isSoundOn) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
    soundIcon.src = isSoundOn ? 'sound_on.png' : 'sound_off.png';
  });

  // Set default volume
  backgroundMusic.volume = 0.4;

  const toggleBackgroundButton = document.getElementById('toggleBackground');
  const container = document.querySelector('.container');

  let isVideoBackground = false;

  toggleBackgroundButton.addEventListener('click', function () {
    isVideoBackground = !isVideoBackground;
    if (isVideoBackground) {
      container.style.backgroundImage = "url('theme.mp4')";
    } else {
      container.style.backgroundImage = "url('background.jpg')";
    }
  });
});
