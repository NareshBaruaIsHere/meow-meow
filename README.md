# Meow Meow - Tales from the Furry Dictator 🐾

Welcome to "Meow Meow - Tales from the Furry Dictator," an interactive and playful cat-themed website designed as a fun front-end project. Dive into a world ruled by adorable feline overlords, filled with humorous decrees, charming cat profiles, and engaging user interactions.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <!-- Optional: Choose a license -->

**Live Demo:** [Link to your GitHub Pages site here] <!-- Replace with your actual deployed link after setting up GitHub Pages -->

![Screenshot of Meow Meow Website](https://placehold.co/800x450/F24C8C/white?text=Meow+Meow+Homepage+Screenshot&font=roboto)
<!-- 
  IMPORTANT: Replace the placeholder above with an actual screenshot of your website!
  You can upload a screenshot to an "assets" or "img" folder in your repo and link it like: ./img/screenshot.png 
-->

## ✨ Features

This website is packed with fun and interactive features, including:

* **Responsive Design:** Adapts to different screen sizes for a great experience on desktop and mobile.
* **Interactive Cat Profiles:** Meet the "Council of Meows" with unique descriptions and "Click Meow" buttons that trigger modal messages and cat sounds.
* **Hero Section Wisdom:** Click a button for a wise (and humorous) message from the Furry Dictator.
* **Joke Corner:** Get a new cat-themed joke with the click of a button.
* **Loading Animation:** A cute cat-themed animation (using a `.webm` video or CSS) entertains users while the page loads.
* **Ambient Sounds:** Soft, looping purring sounds to enhance the feline atmosphere, with a toggle to mute/unmute (preference saved in `localStorage`).
* **Cursor Trail:** Playful paw prints (or dots) follow the mouse cursor around the page.
* **Feed the Cat Game:** An interactive section where users can "feed" a digital cat, triggering image changes, sound effects, and messages.
* **Clickable Background Elements:** Subtle, hidden interactive elements in the background that play sounds or show small animations when clicked.
* **Animations on Scroll:** Smooth animations (powered by AOS library) make elements appear gracefully as you scroll.
* **Enhanced Button Hovers:** Buttons provide more visual feedback on hover with scaling and shadow effects.
* **Game Corner - "Catch the Paw!":** A simple and fun mini-game where users try to click a moving paw print to score points against the clock.
* **Custom Modal System:** For displaying messages and notifications in a stylish way.
* **Dynamic Content:** Copyright year updates automatically.

## 🚀 Technologies Used

* **HTML5:** For the basic structure of the website.
* **CSS3:** For custom styling and animations.
    * **Tailwind CSS:** A utility-first CSS framework for rapid UI development (via CDN).
* **Vanilla JavaScript:** For all interactivity, DOM manipulation, game logic, and dynamic features.
* **Font Awesome:** For icons.
* **Google Fonts:** For custom typography (`Bebas Neue`, `Roboto`).
* **AOS (Animate On Scroll):** A library for scroll animations.

## 📂 File Structure

├── img/                        # Contains all static images & video loader
│   ├── logo.png
│   ├── hero.png
│   ├── cat_1.png
│   ├── ... (other cat images)
│   ├── Funny/C1.jpeg
│   ├── loader_cat.webm         # (or loader_cat.png if you use that)
│   ├── normal_cat.png
│   └── eating_cat.png
├── sounds/                     # Contains all audio files
│   ├── meow1.mp3
│   ├── ... (other meow sounds)
│   ├── purr_loop.mp3
│   ├── cat_eat.mp3
│   ├── sparkle.mp3
│   └── tiny_meow.mp3
├── index.html                  # Main HTML file
├── style.css                   # Custom CSS styles
├── script.js                   # JavaScript for interactivity
└── README.md                   # This file
└── .gitignore                  # Git ignore file


## 🛠️ Setup & Usage

This is a static front-end website. To run it locally:

1.  **Clone the repository (once it's on GitHub):**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
    ```
    (Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name)
2.  **Navigate to the project directory:**
    ```bash
    cd YOUR_REPOSITORY_NAME
    ```
3.  **Open `index.html` in your web browser.**

No special build steps or dependencies are required beyond a modern web browser.

## 🔧 Customization

* **Content:** Most text can be edited directly in `index.html`.
* **Cat Profiles & Jokes:** Update cat details and jokes within the `script.js` file (in their respective JavaScript arrays/objects).
* **Images & Sounds:** Replace files in the `img/` and `sounds/` folders. Ensure new file names match those referenced in `index.html` and `script.js`, or update the paths accordingly.
* **Styling:** Modify Tailwind CSS classes in `index.html` or add/edit custom styles in `style.css`.

## 📜 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).


## 💡 Future Enhancements (Ideas)

* More mini-games in the Game Corner.
* User accounts or leaderboards (would require backend).
* More complex animations or a parallax scrolling effect.
* A "Create Your Own Cat" feature.

## 🙏 Acknowledgements

* **Tailwind CSS:** For the utility-first CSS framework.
* **Font Awesome:** For the icons.
* **Google Fonts:** For the typography.
* **AOS Library:** For the scroll animations.
* **You!** For checking out this project.

---

Coded with ❤️ by https://github.com/NareshBaruaIsHere