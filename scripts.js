document.addEventListener('DOMContentLoaded', function () {
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
