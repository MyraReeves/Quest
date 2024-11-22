
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

    const introParagraph1 = document.createElement('p');
    introParagraph1.setAttribute('class', 'introParagraph');
    introParagraph1.textContent = 'Welcome adventurer!';
    const introParagraph2 = document.createElement('p');
    // introParagraph2.setAttribute('class', 'introParagraph');
    setTimeout(() => {introParagraph2.setAttribute('class', 'introParagraph')}, 6)
    // introParagraph2.textContent = 'Use the form below to create your character.';
    setTimeout(() => {introParagraph2.textContent = 'Use the form below to create your character.'}, 650)
    introHeader.appendChild(introParagraph1);
    introHeader.appendChild(introParagraph2);

    const characterCreationBackground = document.createElement('div');
    characterCreationBackground.classList.add('character-creation-background');
    characterCreationBackground.setAttribute("id", "create-character");
    landingPage.appendChild(characterCreationBackground);
}

