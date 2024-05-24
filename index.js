// Funkcja do przewijania do góry po kliknięciu przycisku
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("scrollTopButton").style.display = "block";
  } else {
    document.getElementById("scrollTopButton").style.display = "none";
  }
};

document
  .getElementById("scrollTopButton")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

document
  .getElementById("shareButton")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Zatrzymanie propagacji zdarzenia kliknięcia
    var menu = document.getElementById("shareMenu");
    var ig = document.getElementById("ig");

    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
      ig.style.display = "none";
    } else {
      menu.style.display = "none";
      ig.style.display = "block";
    }
  });

// Zamykanie menu po kliknięciu poza nim
document.addEventListener("click", function (event) {
  var menu = document.getElementById("shareMenu");
  var shareButton = document.getElementById("shareButton");
  var ig = document.getElementById("ig");

  // Sprawdź, czy kliknięto poza menu i przyciskiem share
  if (
    menu.style.display === "block" &&
    !shareButton.contains(event.target) &&
    !menu.contains(event.target)
  ) {
    menu.style.display = "none";
    ig.style.display = "block";
  }
});

function copyToClipboard() {
  var emailText = document.getElementById("email").textContent;
  navigator.clipboard.writeText(emailText);
  alert("Adres e-mail został skopiowany do schowka!");
}

window.addEventListener("load", () => {
  setTimeout(() => {
    const socialButtons = document.querySelectorAll(
      ".rounded-social-buttons .social-button"
    );
    socialButtons.forEach((button) => {
      button.style.opacity = "1";
    });
  }, 3000); // 3 sekundy
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const box = document.getElementById("box-2");

  toggleButton.addEventListener("click", function () {
    if (box.classList.contains("hidden")) {
      box.classList.remove("hidden");
      box.classList.add("visible");
      toggleButton.textContent = "Zamknij Box";
    } else {
      box.classList.remove("visible");
      box.classList.add("hidden");
      toggleButton.textContent = "Otwórz Box";
    }
  });
});

function zmienKolorTlaNaCzerwony() {
  document.body.style.backgroundColor = "red";
}

zmienKolorTlaNaCzerwony();
