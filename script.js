// --- Loader Hiding Logic ---
window.onload = () => {
  const loaderOverlay = document.getElementById("loader-overlay");
  if (loaderOverlay) {
    loaderOverlay.style.opacity = "0";
    setTimeout(() => {
      loaderOverlay.style.display = "none";
    }, 500); // Match CSS transition duration
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Fallback for loader hide if window.onload is slow
  const loaderOverlayCheck = document.getElementById("loader-overlay");
  if (loaderOverlayCheck && loaderOverlayCheck.style.display !== "none") {
    setTimeout(() => {
        loaderOverlayCheck.style.opacity = "0";
        setTimeout(() => {
            loaderOverlayCheck.style.display = "none";
        }, 500);
    }, 300);
  }

  // --- Initialize AOS (Animate On Scroll) ---
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  } else {
    console.warn("AOS library not loaded.");
  }

  // --- Mobile Menu Toggle ---
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const isExpanded = mobileMenu.classList.toggle("active");
      menuButton.setAttribute("aria-expanded", isExpanded.toString());
      if (isExpanded) {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
      } else {
        mobileMenu.style.maxHeight = "0";
      }
    });
  }

  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        if (menuButton) menuButton.setAttribute("aria-expanded", "false");
        mobileMenu.style.maxHeight = "0";
      }
    });
  });

  // --- Custom Modal Logic ---
  const modalOverlay = document.getElementById("custom-modal-overlay");
  const modalContent = document.getElementById("custom-modal-content");
  const modalTitle = document.getElementById("modal-title");
  const modalMessage = document.getElementById("modal-message");
  const modalCloseButton = document.getElementById("modal-close-button");
  const modalOkButton = document.getElementById("modal-ok-button");

  function openModal(title, message) {
    if (!modalOverlay || !modalTitle || !modalMessage || !modalContent) return;
    modalTitle.textContent = title;
    modalMessage.innerHTML = message;
    modalOverlay.classList.remove("hidden");
    modalOverlay.classList.add("flex");
    setTimeout(() => {
      modalOverlay.classList.add("opacity-100");
      modalContent.classList.add("scale-100");
      modalContent.classList.remove("scale-95");
    }, 10);
    if (modalOkButton) modalOkButton.focus();
  }

  function closeModal() {
    if (!modalOverlay || !modalContent) return;
    modalOverlay.classList.remove("opacity-100");
    modalContent.classList.remove("scale-100");
    modalContent.classList.add("scale-95");
    setTimeout(() => {
      modalOverlay.classList.add("hidden");
      modalOverlay.classList.remove("flex");
    }, 300);
  }

  if (modalCloseButton) modalCloseButton.addEventListener("click", closeModal);
  if (modalOkButton) modalOkButton.addEventListener("click", closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (event) => {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalOverlay && !modalOverlay.classList.contains("hidden")) {
      closeModal();
    }
  });

  // --- Hero Meow Button ---
  const heroMeowButton = document.querySelector(".hero-meow-button");
  if (heroMeowButton) {
    heroMeowButton.addEventListener("click", () => {
      const message = heroMeowButton.dataset.message || "Meow! You clicked the hero! 🐾";
      openModal("A Message from the Dictator", message);
    });
  }

  // --- Cat Card Meow Buttons ---
  const catMeowButtons = document.querySelectorAll(".cat-meow-button");
  catMeowButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const catName = button.dataset.catName || "A mysterious cat";
      const message = button.dataset.message || `Meow! ${catName} says Meow! 🐾`;
      openModal(`${catName} Has Spoken!`, message);

      const audioSrc = button.dataset.audio;
      if (audioSrc) {
        try {
          const audio = new Audio(audioSrc);
          audio.play().catch(e => console.warn("Audio play failed.", e));
        } catch (e) {
          console.warn("Error creating or playing audio:", e);
        }
      }
    });
  });

  // --- Joke Generator ---
  const jokes = [
    { q: "Why are cats such bad poker players?", a: "Because they always have a fur ace up their sleeve!" },
    { q: "What do you call a pile of cats?", a: "A meowtain!" },
    // ... (add your other jokes here)
  ];
  let currentJokeIndex = Math.floor(Math.random() * jokes.length);

  const jokeContainer = document.getElementById("cat-joke-container");
  const newJokeButton = document.getElementById("new-joke-button");

  function displayJoke(index) {
    if (jokeContainer && jokes && jokes.length > 0) {
      const joke = jokes[index];
      jokeContainer.innerHTML = `
        <p class="italic text-sm sm:text-base">"${joke.q}"</p>
        <p class="font-semibold mt-1 text-sm sm:text-base">"${joke.a}"</p>`;
    }
  }

  if (newJokeButton && jokeContainer && jokes.length > 0) {
    displayJoke(currentJokeIndex);
    newJokeButton.addEventListener("click", () => {
      let nextJokeIndex = Math.floor(Math.random() * jokes.length);
      if (jokes.length > 1) {
        while (nextJokeIndex === currentJokeIndex) {
          nextJokeIndex = Math.floor(Math.random() * jokes.length);
        }
      }
      currentJokeIndex = nextJokeIndex;
      displayJoke(currentJokeIndex);
    });
  } else if (jokeContainer) {
    jokeContainer.innerHTML = `<p class="italic">Joke machine is napping... try later!</p>`;
  }

  // --- Update Copyright Year ---
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- Ambient Sound Toggle ---
  const ambientSoundToggle = document.getElementById("ambient-sound-toggle");
  const ambientAudio = document.getElementById("ambient-purr");

  if (ambientSoundToggle && ambientAudio) {
    ambientAudio.volume = 0.08; // Very soft
    const savedSoundPreference = localStorage.getItem("ambientSoundEnabled");

    if (savedSoundPreference === "true") {
      ambientAudio.play().catch(e => console.warn("Ambient audio autoplay failed:", e));
      ambientSoundToggle.innerHTML = '<i class="fa-solid fa-volume-high text-xl"></i>';
    } else {
      ambientAudio.pause();
      ambientSoundToggle.innerHTML = '<i class="fa-solid fa-volume-mute text-xl"></i>';
    }

    ambientSoundToggle.addEventListener("click", () => {
      if (ambientAudio.paused) {
        ambientAudio.play().catch(e => console.warn("Ambient audio play failed on click:", e));
        ambientSoundToggle.innerHTML = '<i class="fa-solid fa-volume-high text-xl"></i>';
        localStorage.setItem("ambientSoundEnabled", "true");
      } else {
        ambientAudio.pause();
        ambientSoundToggle.innerHTML = '<i class="fa-solid fa-volume-mute text-xl"></i>';
        localStorage.setItem("ambientSoundEnabled", "false");
      }
    });
  }

  // --- Cursor Trail ---
  const createTrailElement = (x, y) => {
    const trailEl = document.createElement("div");
    trailEl.className = "cursor-trail-element";
    // Optional: if you want an image for the trail and have the CSS for .image-trail
    // trailEl.classList.add("image-trail");

    trailEl.style.left = `${x}px`;
    trailEl.style.top = `${y}px`;
    document.body.appendChild(trailEl);

    setTimeout(() => {
      trailEl.style.opacity = "0";
      trailEl.style.transform = "translate(-50%, -50%) scale(0.3)";
    }, 10);

    setTimeout(() => {
      trailEl.remove();
    }, 500); // Match CSS transition duration
  };

  let lastTrailTime = 0;
  const trailInterval = 60; // ms

  document.addEventListener("mousemove", (e) => {
    const currentTime = Date.now();
    if (currentTime - lastTrailTime > trailInterval) {
      createTrailElement(e.clientX, e.clientY);
      lastTrailTime = currentTime;
    }
  });

  // --- Feed the Cat ---
  const feedCatButton = document.getElementById("feed-cat-button");
  const interactiveCatImage = document.getElementById("interactive-cat-image");
  const catEatSound = document.getElementById("cat-eat-sound");
  const feedCatMessage = document.getElementById("feed-cat-message");
  const normalCatSrc = "./img/normal_cat.png";
  const eatingCatSrc = "./img/eating_cat.png";

  if (feedCatButton && interactiveCatImage && catEatSound && feedCatMessage) {
    catEatSound.volume = 0.5;
    feedCatButton.addEventListener("click", () => {
      interactiveCatImage.src = eatingCatSrc;
      interactiveCatImage.classList.add("cat-happy");
      feedCatMessage.textContent = "Purrrr... so tasty!";

      catEatSound.currentTime = 0;
      catEatSound.play().catch(e => console.warn("Cat eat sound failed:", e));

      feedCatButton.disabled = true;
      setTimeout(() => {
        interactiveCatImage.src = normalCatSrc;
        interactiveCatImage.classList.remove("cat-happy");
        feedCatMessage.textContent = "More treats, please?";
        feedCatButton.disabled = false;
      }, 2500);
    });
  }

  // --- Clickable Background Elements ---
  const clickableBgElements = document.querySelectorAll(".clickable-bg-element");
  const bgSoundPlayer = document.getElementById("clickable-bg-sound-player");

  if (bgSoundPlayer && clickableBgElements.length > 0) {
    bgSoundPlayer.volume = 0.3;
    clickableBgElements.forEach(element => {
      element.addEventListener("click", () => {
        const soundSrc = element.dataset.sound;
        if (soundSrc) {
          bgSoundPlayer.src = soundSrc;
          bgSoundPlayer.currentTime = 0;
          bgSoundPlayer.play().catch(e => console.warn("BG element sound failed:", e));
        }
        element.classList.add("clicked-effect");
        setTimeout(() => {
          element.classList.remove("clicked-effect");
        }, 500);
      });
    });
  }

  // --- Game Corner: Catch the Paw ---
  const gameArea = document.getElementById("game-area");
  const startGameButton = document.getElementById("start-game-button");
  const gameScoreDisplay = document.getElementById("game-score");
  const gameTimeDisplay = document.getElementById("game-time");
  const gameMessageDisplay = document.getElementById("game-message");

  let score = 0;
  const initialTime = 15;
  let timeLeft = initialTime;
  let gameTimer;
  let pawIconElement; // Renamed to avoid conflict if 'pawElement' is used elsewhere
  let gameActive = false;

  function createPawAndPlace() {
    if (!gameArea) return;
    if (pawIconElement) pawIconElement.remove();

    pawIconElement = document.createElement("i");
    pawIconElement.id = "game-paw-icon";
    pawIconElement.classList.add("fa-solid", "fa-paw");
    pawIconElement.style.pointerEvents = gameActive ? "auto" : "none";

    pawIconElement.addEventListener("click", handlePawClick);
    gameArea.appendChild(pawIconElement);
    movePawRandomly();
  }

  function handlePawClick() {
    if (!gameActive || !pawIconElement) return;
    score++;
    if(gameScoreDisplay) gameScoreDisplay.textContent = score;
    
    pawIconElement.style.transform = "scale(0.8)";
    setTimeout(() => {
      if (pawIconElement) pawIconElement.style.transform = "scale(1)";
      if (gameActive) movePawRandomly();
    }, 100);
  }

  function movePawRandomly() {
    if (!pawIconElement || !gameArea) return;
    const gameAreaRect = gameArea.getBoundingClientRect();
    const pawSize = pawIconElement.offsetWidth || 36;

    const maxX = gameAreaRect.width - pawSize;
    const maxY = gameAreaRect.height - pawSize;

    pawIconElement.style.left = `${Math.max(0, Math.random() * maxX)}px`;
    pawIconElement.style.top = `${Math.max(0, Math.random() * maxY)}px`;
  }

  function startGame() {
    if (!gameArea || !startGameButton || !gameScoreDisplay || !gameTimeDisplay || !gameMessageDisplay) return;

    score = 0;
    timeLeft = initialTime;
    gameActive = true;

    if(gameScoreDisplay) gameScoreDisplay.textContent = score;
    if(gameTimeDisplay) gameTimeDisplay.textContent = timeLeft;
    if(startGameButton) {
        startGameButton.disabled = true;
        startGameButton.innerHTML = '<i class="fa-solid fa-hourglass-half mr-2"></i>Playing...';
    }
    if(gameMessageDisplay) gameMessageDisplay.textContent = "Go! Catch those paws!";

    createPawAndPlace();

    gameTimer = setInterval(() => {
      timeLeft--;
      if(gameTimeDisplay) gameTimeDisplay.textContent = timeLeft;

      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);
  }

  function endGame() {
    gameActive = false;
    clearInterval(gameTimer);
    if (pawIconElement) {
        pawIconElement.style.pointerEvents = "none";
    }
    if(startGameButton) {
        startGameButton.disabled = false;
        startGameButton.innerHTML = '<i class="fa-solid fa-play mr-2"></i>Start Again';
    }
    
    let endMsg = `Game Over! You caught ${score} paws! 🐾`;
    if (score > 12) endMsg += " Purr-fect score!";
    else if (score > 7) endMsg += " Great job, meowtastic!";
    else if (score > 3) endMsg += " Keep trying, cool cat!";
    else endMsg += " Needs more practice, paw-dner!";
    
    if(gameMessageDisplay) gameMessageDisplay.textContent = endMsg;
    openModal("Game Over!", endMsg);
  }

  if (startGameButton) {
    startGameButton.addEventListener("click", startGame);
  }

  // Set default volumes for audio elements
  document.getElementById("ambient-purr").volume = 1.0;
  document.getElementById("clickable-bg-sound-player").volume = 1.0;
});
