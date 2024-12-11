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
    nameInput.setAttribute('id', 'nameElement');
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
    maleInput.setAttribute('value', 'Male');
    const maleLabel = document.createElement('label');
    maleLabel.setAttribute('for', 'male');
    maleLabel.style.color = 'black';
    maleLabel.textContent = 'Male';
    const femaleInput = document.createElement('input');
    femaleInput.setAttribute('name', 'characterGender');
    femaleInput.setAttribute('type', 'radio');
    femaleInput.setAttribute('id', 'female');
    femaleInput.setAttribute('value', 'Female');
    const femaleLabel = document.createElement('label');
    femaleLabel.setAttribute('for', 'female');
    femaleLabel.style.color = 'black';
    femaleLabel.textContent = 'Female';
    const nonBinaryInput = document.createElement('input');
    nonBinaryInput.setAttribute('name', 'characterGender');
    nonBinaryInput.setAttribute('type', 'radio');
    nonBinaryInput.setAttribute('id', 'non-binary');
    nonBinaryInput.setAttribute('value', 'Non-binary');
    const nonBinaryLabel = document.createElement('label');
    nonBinaryLabel.setAttribute('for', 'non-binary');
    nonBinaryLabel.style.color = 'black';
    nonBinaryLabel.textContent = 'Non-binary';
    fieldset.append(maleInput, maleLabel, femaleInput, femaleLabel, nonBinaryInput, nonBinaryLabel, document.createElement('br'));


    const raceLabel = document.createElement('label');
    raceLabel.setAttribute('for', 'characterRace');
    raceLabel.textContent = 'Race:';
    fieldset.appendChild(raceLabel);
    const selectRace = document.createElement('select');
    selectRace.setAttribute('name', 'characterRace');
    selectRace.setAttribute('id', 'characterRace');
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

    const theForm = document.getElementById('character-creation-form');
    const nameElement = document.getElementById('nameElement');

    theForm.addEventListener('submit', function(event) {
        event.preventDefault();      
        const chosenName = nameElement.value;
        const chosenGender = document.querySelector('input[name=characterGender]:checked').value;
        const chosenRace = document.querySelector('select[name=characterRace]').value;

        enterBazaar(chosenName, chosenGender, chosenRace);
    })
};




// //////////////////////////////////////////////////////////////////////////////////////////////////////
// Assignment Requirement:  Use one or more Classes (must use static methods and/or prototype methods) //
// /////////////////////////////////////////////////////////////////////////////////////////////////////

class Character {
    constructor(name='Jane Doe', race='human', gender='') {
        this.name = name;
        this.race = race;
        this.gender = gender
    }
};

class Dwarf extends Character {
    constructor(significance, name, race, gender){
        super(name, race, gender);
        this.size = 'small';
        this.significance = significance;
    }
    logInstanceToConsole(){
        console.log(`\nCharacter = ${this.significance} \n-------------------------------\nName: ${this.name} \nGender: ${this.gender} \nRace: ${this.race} \nStature: ${this.size}\n\n`)
    }
};
class Elf extends Character {
    constructor(significance, name, race, gender){
        super(name, race, gender);
        this.size = 'tall';
        this.significance = significance;    
    }
    logInstanceToConsole(){
        console.log(`\nCharacter = ${this.significance} \n-------------------------------\nName: ${this.name} \nGender: ${this.gender} \nRace: ${this.race} \nStature: ${this.size}\n\n`)
    }
};
class Gnome extends Character {
    constructor(significance, name, race, gender){
        super(name, race, gender);
        this.size = 'small';
        this.significance = significance;    
    }
    logInstanceToConsole(){
        console.log(`\nCharacter = ${this.significance} \n-------------------------------\nName: ${this.name} \nGender: ${this.gender} \nRace: ${this.race} \nStature: ${this.size}\n\n`)
    }
};
class Halfling extends Character {
    constructor(significance, name, race, gender){
        super(name, race, gender);
        this.size = 'small';
        this.significance = significance;
    }
    logInstanceToConsole(){
        console.log(`\nCharacter = ${this.significance} \n-------------------------------\nName: ${this.name} \nGender: ${this.gender} \nRace: ${this.race} \nStature: ${this.size}\n\n`)
    }
};
class Human extends Character {
    constructor(significance, name, race, gender){
        super(name, race, gender);
        this.size = 'tall';
        this.significance = significance;
    }
    logInstanceToConsole(){
        console.log(`\nCharacter = ${this.significance} \n-------------------------------\nName: ${this.name} \nGender: ${this.gender} \nRace: ${this.race} \nStature: ${this.size}\n\n`)
    }
};






// //////////////////////////////////
// Chapter 1:  The evening bazaar //
// ////////////////////////////////
const enterBazaar = (name, gender, race) => {
    const chosenName = name;
    const chosenGender = gender;
    const chosenRace = race;

    const baseCharacter = new Character(chosenName, chosenRace, chosenGender);
    console.log("\nPrototype base of character created by user:", baseCharacter, "\n\n");

    let playerCharacter = '';
    if (chosenRace === 'Dwarf'){
        playerCharacter = new Dwarf('PLAYER CHARACTER', name, race, gender);
    }
    else if (chosenRace === 'Elf'){
        playerCharacter = new Elf('PLAYER CHARACTER', name, race, gender);
    }
    else if (chosenRace === 'Gnome'){
        playerCharacter = new Gnome('PLAYER CHARACTER', name, race, gender);
    }
    else if (chosenRace === 'Halfling'){
        playerCharacter = new Halfling('PLAYER CHARACTER', name, race, gender);
    }
    else {
        playerCharacter = new Human('PLAYER CHARACTER', name, race, gender);
    };

    playerCharacter.logInstanceToConsole();
    // console.log(playerCharacter.name);

    document.getElementById('introHeader').remove();
    document.getElementById('create-character').remove();
    const bazaarBackground = document.createElement('div');
    bazaarBackground.classList.add('bazaar-background');
    bazaarBackground.setAttribute("id", "bazaar");
    const weatherWidget = '<div id="ww_cf581cbb2c2a8" v=\'1.3\' loc=\'id\' a=\'{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl4025"],"font":"Arial","sl_ics":"one_a","sl_sot":"fahrenheit","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_nme":3,"el_phw":3,"el_whr":3}\'><a href="https://weatherwidget.org/" id="ww_cf581cbb2c2a8_u" target="_blank">HTML Weather Widget for website</a></div><script async src="https://app3.weatherwidget.org/js/?id=ww_cf581cbb2c2a8"></script>';
    bazaarBackground.innerHTML = weatherWidget;
    landingPage.appendChild(bazaarBackground);

    const textArea = document.createElement('div');
    textArea.classList.add('textArea');
    textArea.setAttribute('id', 'bazaarInteractions');
    textArea.innerHTML = '<p>Brave ' + chosenName +', you have journeyed long, hard, and far from home on your quest. Shortly after sunset, you finally reach where the forested path gives way to a large open expanse outside the stone walls of Antigone.</p>    <img src="./Images/moonlit_forest_path_tiny.jpg" alt="Small image of a moonlit forest path just before an opening"><p>As you set up camp for the night, you begin hearing the sounds of many lively conversations coming from nearby. When you investigate, you find a bustling outdoor bazaar. A perfect opportunity to gather more information!</p>    <img src="./Images/pxfuelDOTcom_market-bazaar-people-crowd-night-evening_TINY.jpg" alt="Small image of a crowded, fire-lit, outdoor market in the early evening">    <div id="bazaarButtons">Choose whether to go to:<button type="button" id="bazaarFood" class="choiceButton" onclick="">Food Vendors</button><button type="button" id="bazaarMerchants" class="choiceButton" onclick="">Merchant Tents</button><button type="button" id="bazaarEntertainment" class="choiceButton" onclick="">Entertainment Zone</button></div>';
    bazaarBackground.appendChild(textArea);



    const foodVendors = () => {
        document.getElementById('bazaarInteractions').remove();
        const foodZone = document.createElement('div');
        foodZone.classList.add('textArea');
        foodZone.setAttribute("id", "food-zone");
        foodZone.innerHTML = '<p>You feel famished after a long day of travel.  Following your nose, you stroll towards the delicious scents of food being cooked.  The further you enter the area, the thicker the crowds become as impatiently waiting lines of customers flow chaotically outward from food stalls and tangle together into a dense mass of hungry bodies. <br><br></p>      <img src="./Images/food-stall1.jpg" alt="Piles of what appear to be potatoes and bread in an outdoor stall"><img src="./Images/food-stall2.jpg" alt="Large baskets full of produce in an outdoor market"><img src="./Images/food-stall3.jpg" alt="Sausages, meat kabobs, and jars of sauces">   <p>Quickly becoming tired of needing to squeeze your way thru, you are relieved to spot a </p>';
        bazaarBackground.appendChild(foodZone);

        const potatoSausageVendorName = 'Tobold Bilberry';
        const potatoSausageVendorRace = 'Halfling';
        const potatoSausageVendorGender = 'Male';
        const potatoSausageVendor = new Halfling('FOOD VENDOR', potatoSausageVendorName, potatoSausageVendorRace, potatoSausageVendorGender);
        potatoSausageVendor.logInstanceToConsole();
    };
    const bazaarFood = document.getElementById('bazaarFood');
    bazaarFood.addEventListener('click', foodVendors);


    merchantVendors = () => {
        // document.getElementById('bazaarInteractions').remove();
        const merchantZone = document.createElement('div');
        merchantZone.classList.add('textArea');
        merchantZone.setAttribute("id", "merchant-zone");
        merchantZone.innerHTML = '<p>Merchants fill the bulk of the outdoor market and encircle most of its perimeter, with some of the most successful vendors using semi-permanent structures directly against the outside of the city\'s walls to facilitate their trade. The area is alive with people shuffling hither and yon, and the sound of craftspeople hawking their wares rings through the brisk night air. Stalls offering every manner of goods litter the ends of the street, everything from beautiful jewelry to carpentry tools. From weaponry to painted vases. There is a sense that anything in the known world could be found in this market. That is, if you have the coin to pay for it.<br><br></p>      <img src="./Images/merchants_tiny-from-pxfuelDOTcom.jpg" alt="Small image of various metal and fabric goods piled up against stone walls in an outdoor marketplace, with a path leading thru the middle">';
        bazaarBackground.appendChild(merchantZone);

        const fortuneTellerName = 'Agnes Nutter';
        const fortuneTellerRace = 'Human';
        const fortuneTellerGender = 'Female';
        const fortuneTeller = new Human('FORTUNE TELLER', fortuneTellerName, fortuneTellerRace, fortuneTellerGender);
        fortuneTeller.logInstanceToConsole();
    };
    const bazaarMerchants = document.getElementById('bazaarMerchants');
    bazaarMerchants.addEventListener('click', merchantVendors);




    const entertainmentTent = () => {
        // document.getElementById('bazaarInteractions').remove();
        const entertainmenttZone = document.createElement('div');
        entertainmenttZone.classList.add('textArea');
        entertainmenttZone.setAttribute("id", "food-zone");
        entertainmenttZone.innerHTML = '<p>Multi-colored tents gently sway in the night breeze, carrying a colorful cacophony of cheerful sounds. Musical notes drift into the night air, mixing above the hard-packed earth to form its own unique song.  Scattered between the small tents, open-air wooden stage platforms offer entertainment for all walks of life. Bards and poets tell tales of beauty and love lost, circus performers dazzle onlookers with their acrobatic feats, and vagrants and drunkards wander through the crowd proclaiming their laments.<br><br></p>       <img src="./Images/bazaar_entertainers1.jpg" alt="Two musicians in turbans and robes sit in front of the sunset playing stringed instruments"><img src="./Images/bazaar_entertainers2.jpg" alt="A green skinned juggler performs on a nautical-themed stage"><img src="./Images/bazaar_entertainers3-1.jpg" alt="A bare-chested man covered in tribal markings holds a column of fire"><img src="./Images/bazaar_entertainers4.jpg" alt="The silhouette of an aerial acrobat posed high in the air in front of the sunset"><img src="./Images/bazaar_entertainers3-2.jpg" alt="A figure dances in front of a line of fire"><img src="./Images/bazaar_entertainers6.jpg" alt="An old male musician with interesting hair and robes plays a large, wooden, stringed instrument">    <p>In the center of the dusty area there sits an eye-catching, tent, larger than the rest and lavishly decorated in a shimmering combination of gold and velvet fabric. Against the starry sky, it is a small mountain of painted canvas and torch light, standing in stark contrast to the darkness above.</p>';
        bazaarBackground.appendChild(entertainmenttZone);

        let magician = '';
        let magicianName = 'Bordan the Magnificent';
        let magicianRace = chosenRace;
        let magicianGender = 'Male';

        if (chosenRace === 'Dwarf'){
            magician = new Dwarf('MAGICIAN', magicianName, magicianRace, magicianGender);
        }
        else if (chosenRace === 'Elf'){
            magician = new Elf('MAGICIAN', magicianName, magicianRace, magicianGender);
        }
        else if (chosenRace === 'Gnome'){
            magician = new Gnome('MAGICIAN', magicianName, magicianRace, magicianGender);
        }
        else if (chosenRace === 'Halfling'){
            magician = new Halfling('MAGICIAN', magicianName, magicianRace, magicianGender);
        }
        else {
            magician = new Human('MAGICIAN', magicianName, magicianRace, magicianGender);
        };

        magician.logInstanceToConsole();
    };
    const bazaarEntertainment = document.getElementById('bazaarEntertainment');
    bazaarEntertainment.addEventListener('click', entertainmentTent);







    // <div id="bazaarButtons">Choose whether to go to:<button type="button" id="bazaarMerchants" class="choiceButton" onclick="merchantVendors();">Merchant Tents</button><button type="button" id="bazaarEntertainment" class="choiceButton" onclick="entertainmentTent();">Entertainment Zone</button></div>

    // <div id="bazaarButtons">Choose whether to go to:<button type="button" id="bazaarFood" class="choiceButton" onclick="foodVendors();">Food Vendors</button><button type="button" id="bazaarMerchants" class="choiceButton" onclick="merchantVendors();">Merchant Tents</button></div>

    // <div id="bazaarButtons">Choose whether to go to:<button type="button" id="bazaarFood" class="choiceButton" onclick="foodVendors();">Food Vendors</button><button type="button" id="bazaarEntertainment" class="choiceButton" onclick="entertainmentTent();">Entertainment Zone</button></div>
};
