
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

    const introHeader = document.createElement('div');
    introHeader.setAttribute('id', 'introHeader');
    landingPage.appendChild(introHeader);

    const introParagraph1 = document.createElement('p');
    introParagraph1.setAttribute('class', 'introParagraph');
    introParagraph1.textContent = 'Welcome adventurer!';

    const introParagraph2 = document.createElement('p');
    setTimeout(() => {
        introParagraph2.setAttribute('class', 'introParagraph')
        introParagraph2.textContent = 'Your beloved sister has been unjustly imprisoned in the kingdom of Antigone,'
    }, 500);
    
    const introParagraph3 = document.createElement('p');
    setTimeout(() => {
        introParagraph3.setAttribute('class', 'introParagraph')
        introParagraph3.textContent = 'and will be executed in 5 days time!  You must clear her name and rescue her!'
    }, 2600);
    
    const introParagraph4 = document.createElement('p');
    setTimeout(() => {
        introParagraph4.setAttribute('class', 'introParagraph')
        introParagraph4.textContent = 'Use the form below to create your character.'
    }, 4900);

    introHeader.appendChild(introParagraph1);
    introHeader.appendChild(introParagraph2);
    introHeader.appendChild(introParagraph3);
    introHeader.appendChild(introParagraph4);

    const characterCreationBackground = document.createElement('div');
    characterCreationBackground.classList.add('character-creation-background');
    characterCreationBackground.setAttribute("id", "create-character");
    landingPage.appendChild(characterCreationBackground);

    const characterForm = document.createElement('form');
    characterForm.setAttribute('id', 'character-creation-form');
    characterCreationBackground.appendChild(characterForm);
    const fieldset = document.createElement('fieldset');
    fieldset.setAttribute('id', 'basicInfo');
    characterForm.appendChild(fieldset);
    const legend = document.createElement('legend');
    legend.textContent = 'Character';
    fieldset.appendChild(legend);

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'characterName');
    nameLabel.textContent = 'Name:';
    nameInput = document.createElement('input');
    nameInput.setAttribute('name', 'characterName');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('required', 'true');
    fieldset.append(nameLabel, nameInput, document.createElement('br'));

    const genderLabel = document.createElement('label');
    genderLabel.setAttribute('for', 'characterGender');
    genderLabel.textContent = 'Gender:';
    fieldset.appendChild(genderLabel);
    const maleInput = document.createElement('input');
    maleInput.setAttribute('name', 'characterGender');
    maleInput.setAttribute('type', 'radio');
    maleInput.setAttribute('id', 'male');
    maleInput.setAttribute('value', 'male');
    const maleLabel = document.createElement('label');
    maleLabel.setAttribute('for', 'male');
    maleLabel.style.color = 'black';
    maleLabel.textContent = 'Male';
    const femaleInput = document.createElement('input');
    femaleInput.setAttribute('name', 'characterGender');
    femaleInput.setAttribute('type', 'radio');
    femaleInput.setAttribute('id', 'female');
    femaleInput.setAttribute('value', 'female');
    const femaleLabel = document.createElement('label');
    femaleLabel.setAttribute('for', 'female');
    femaleLabel.style.color = 'black';
    femaleLabel.textContent = 'Female';
    const nonBinaryInput = document.createElement('input');
    nonBinaryInput.setAttribute('name', 'characterGender');
    nonBinaryInput.setAttribute('type', 'radio');
    nonBinaryInput.setAttribute('id', 'non-binary');
    nonBinaryInput.setAttribute('value', 'non-binary');
    const nonBinaryLabel = document.createElement('label');
    nonBinaryLabel.setAttribute('for', 'female');
    nonBinaryLabel.style.color = 'black';
    nonBinaryLabel.textContent = 'Non-binary';
    fieldset.append(maleInput, maleLabel, femaleInput, femaleLabel, nonBinaryInput, nonBinaryLabel, document.createElement('br'));


    const raceLabel = document.createElement('label');
    raceLabel.setAttribute('for', 'characterRace');
    raceLabel.textContent = 'Race:';
    fieldset.appendChild(raceLabel);
    const selectRace = document.createElement('select');
    selectRace.setAttribute('name', 'characterRace');
    selectRace.setAttribute('required', 'true');
    const chooseRace = document.createElement('option');
    chooseRace.setAttribute('value', '');
    chooseRace.setAttribute('selected', 'selected');
    chooseRace.setAttribute('disabled', 'true');
    chooseRace.textContent = 'Choose one';
    const createDwarf = document.createElement('option');
    createDwarf.textContent = 'Dwarf';
    const createElf = document.createElement('option');
    createElf.textContent = 'Elf';
    const createGnome = document.createElement('option');
    createGnome.textContent = 'Gnome';
    const createHalfling = document.createElement('option');
    createHalfling.textContent = 'Halfling';
    const createHuman = document.createElement('option');
    createHuman.textContent = 'Human';
    fieldset.append(selectRace, document.createElement('br'));
    selectRace.append(chooseRace, createDwarf, createElf, createGnome, createHalfling, createHuman);

    const createCharacterButton = document.createElement('button');
    createCharacterButton.setAttribute('type', 'submit');
    createCharacterButton.setAttribute('id', 'character-creation-button');
    createCharacterButton.textContent = 'Create Character!';
    fieldset.append(document.createElement('br'), createCharacterButton);

}

class Character {
    constructor(name='Jane Doe', race='human') {
        this.name = name;
        this.race = race;
    }
};