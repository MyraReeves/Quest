
// Homepage content:
const landingPage = document.getElementById('game-content');
homepageBackground = document.createElement('div');
homepageBackground.classList.add('homepage-background');
landingPage.appendChild(homepageBackground);
startButton = document.createElement('button');
startButton.textContent = 'Start Game';
startButton.setAttribute("id", "start");
startButton.addEventListener('click', createCharacter)
homepageBackground.appendChild(startButton)

// Character creation page:


