document.addEventListener('DOMContentLoaded', function () {
  const toggleSoundButton = document.getElementById('toggleSound');
  const soundIcon = document.getElementById('soundIcon');
  const toggleBackgroundButton = document.getElementById('toggleBackground');
  const container = document.querySelector('.container');
  let isVideoBackground = false;

  toggleSoundButton.addEventListener('click', function () {
    isSoundOn = !isSoundOn;
    if (isSoundOn) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
    soundIcon.src = isSoundOn ? 'sound_on.png' : 'sound_off.png';
  });

  toggleBackgroundButton.addEventListener('click', function () {
    isVideoBackground = !isVideoBackground;
    if (isVideoBackground) {
      container.style.backgroundImage = "url('theme.mp4')";
    } else {
      container.style.backgroundImage = "url('background.jpg')";
    }
  });
});
