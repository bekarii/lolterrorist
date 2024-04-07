// Pliki dźwiękowe
const songs = [
  { name: "Song 1", source: "song1.mp3" },
  { name: "Song 2", source: "song2.mp3" }
  // Dodaj więcej piosenek według potrzeb
];

const audioPlayer = document.getElementById("audioPlayer");
let currentSongIndex = 0;

// Funkcja do ustawienia źródła i nazwy aktualnej piosenki
function setSong(index) {
  audioPlayer.src = songs[index].source;
  audioPlayer.setAttribute("autoplay", "true");
  audioPlayer.play();
  currentSongIndex = index;
}

// Wybierz pierwszą piosenkę po załadowaniu strony
setSong(currentSongIndex);

// Przełączanie na następną piosenkę po zakończeniu obecnej
audioPlayer.addEventListener('ended', function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  setSong(currentSongIndex);
});

// Przełączanie na poprzednią piosenkę
function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  setSong(currentSongIndex);
}

// Przycisk do przełączania na poprzednią piosenkę
const previousButton = document.getElementById('previousButton');
previousButton.addEventListener('click', playPreviousSong);

// Funkcja do losowania bohatera
function startHeroAnimation(type) {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');
  const heroIcon = document.getElementById('heroIcon');

  // Pokaż modal
  modal.style.display = 'block';

  // Rozpocznij animację losowania
  let frames = 0;
  const animationInterval = setInterval(() => {
    // Losuj ikonę bohatera
    const randomHeroIndex = Math.floor(Math.random() * 167) + 1; // Losuj od 1 do 167
    heroIcon.src = `${randomHeroIndex}.png`; // Ścieżka do pliku z ikoną bohatera
    frames++;
    if (frames === 20) { // Wykonaj 20 klatek animacji
      clearInterval(animationInterval);
    }
  }, 100); // Co 100ms (czyli 10 klatek na sekundę)

  // Po zakończeniu animacji użytkownik może kliknąć wybraną ikonę bohatera
  modalContent.addEventListener('click', function selectHero() {
    // Zakończ animację
    clearInterval(animationInterval);
    // Zmień ikonę bohatera na wybraną
    modalContent.removeEventListener('click', selectHero);
    modal.style.display = 'none'; // Ukryj modal
  });
}
