document.addEventListener("DOMContentLoaded", function() {
    const toggleBackgroundButton = document.getElementById("toggleBackground");
    const backgroundElement = document.querySelector(".background");

    // Ustawienie tła strony na obrazek domyślnie
    backgroundElement.style.backgroundImage = "url('background.jpg')";
    backgroundElement.classList.add("image");

    toggleBackgroundButton.addEventListener("click", function() {
        // Sprawdzamy, czy tło to film czy obrazek
        if (backgroundElement.classList.contains("image")) {
            // Jeśli tło to obrazek, zmieniamy na film
            backgroundElement.style.backgroundImage = "url('theme.mp4')";
            backgroundElement.classList.remove("image");
        } else {
            // Jeśli tło to film, zmieniamy na obrazek
            backgroundElement.style.backgroundImage = "url('background.jpg')";
            backgroundElement.classList.add("image");
        }
    });
});
