
// Homepage content:
const landingPage = document.getElementById('game-content');
const homepageBackground = document.createElement('div');
homepageBackground.classList.add('homepage-background');
homepageBackground.setAttribute("id", "startGame");
landingPage.appendChild(homepageBackground);
const startButton = document.createElement('button');
startButton.textContent = 'Start Game';
startButton.setAttribute("id", "start");
startButton.addEventListener('click', createCharacter)
homepageBackground.appendChild(startButton)


// Character creation page:
function createCharacter() {
    document.getElementById('startGame').remove();
    // The above line does the same thing as: 
    // const removeButton = document.getElementById('startGame');
    // removeButton.remove();

    const introHeader = document.createElement('div');
    introHeader.setAttribute('id', 'introHeader');
    landingPage.appendChild(introHeader);

    const introParagraph = document.createElement('p');
    introParagraph.setAttribute('id', 'introParagraph');
    introParagraph.textContent = 'Welcome adventurer!';
    introHeader.appendChild(introParagraph);

    const characterCreationBackground = document.createElement('div');
    characterCreationBackground.classList.add('character-creation-background');
    characterCreationBackground.setAttribute("id", "create-character");
    landingPage.appendChild(characterCreationBackground);
}

