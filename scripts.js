const background = document.querySelector('.background');
const toggleBackgroundButton = document.getElementById('toggleBackground');
const toggleSoundButton = document.getElementById('toggleSound');
const soundIcon = document.getElementById('soundIcon');
let isBackgroundVideo = true;
let isSoundOn = true;

// Toggle background video
toggleBackgroundButton.addEventListener('click', () => {
  isBackgroundVideo = !isBackgroundVideo;
  background.style.backgroundImage = isBackgroundVideo ? "url('theme.mp4')" : "url('background.jpg')";
});

// Toggle sound
toggleSoundButton.addEventListener('click', () => {
  isSoundOn = !isSoundOn;
  soundIcon.src = isSoundOn ? 'sound_on.png' : 'sound_off.png';
  // Adjust volume accordingly
  // Assuming you have an audio element with id 'backgroundMusic'
  const backgroundMusic = document.getElementById('backgroundMusic');
  backgroundMusic.volume = isSoundOn ? 0.4 : 0;
});
