// Homepage content:
const landingPage = document.getElementById('game-content');
const homepageBackground = document.createElement('div');
homepageBackground.classList.add('homepage-background');
homepageBackground.setAttribute("id", "startGame");
landingPage.appendChild(homepageBackground);

const startingSong = document.createElement('audio');
startingSong.setAttribute('autoplay', '');
const songSource = document.createElement('source');
songSource.setAttribute('src', './Sound/epic-adventure-by-Dmitrii-Spis_from_pixabayDOTcom.mp3')
songSource.setAttribute('type', 'audio/mpeg')
homepageBackground.appendChild(startingSong);
startingSong.appendChild(songSource);

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



/////////////////////////
// Play Sound Effects //
///////////////////////
const soundEffect = (audioURL) => {
    let audio = new Audio(audioURL);
    audio.play();
}



// //////////////////////////////////////////////////////////////////////////////////////////////////////
// Assignment Requirement:  Use one or more Classes (must use static methods and/or prototype methods) //
// /////////////////////////////////////////////////////////////////////////////////////////////////////

class Character {
    constructor(name='Jane Doe', race='human', gender='') {
        this.name = name;
        this.race = race;
        this.gender = gender
        this.damage = 0;
    }

    useWeapon(){
        this.damage++;
    }
};

class Dwarf extends Character {
    constructor(significance, name, race, gender){
        super(name, race, gender);
        this.size = 'small';
        this.significance = significance;
    }
    useWeapon(){                // Dwarves using handheld weapons = 3 damage per hit
        super.useWeapon();
        super.useWeapon();
        super.useWeapon();
    }
    logInstanceToConsole(){
        console.log(`\nCharacter = ${this.significance} \n-------------------------------\nName: ${this.name} \nGender: ${this.gender} \nRace: ${this.race} \nStature: ${this.size} \nAmount of damage inflicted when using weapons: ${this.damage}\n\n`)
    }
};
class Elf extends Character {
    constructor(significance, name, race, gender){
        super(name, race, gender);
        this.size = 'tall';
        this.significance = significance;    
    }
    useWeapon(){                // Elves using handheld weapons = 3 damage per hit
        super.useWeapon();
        super.useWeapon();
        super.useWeapon();
    }
    logInstanceToConsole(){
        console.log(`\nCharacter = ${this.significance} \n-------------------------------\nName: ${this.name} \nGender: ${this.gender} \nRace: ${this.race} \nStature: ${this.size} \nAmount of damage inflicted when using weapons: ${this.damage}\n\n`)
    }
};
class Gnome extends Character {
    constructor(significance, name, race, gender){
        super(name, race, gender);
        this.size = 'small';
        this.significance = significance;    
    }
    useWeapon(){                // Gnomes using handheld weapons = 2 damage per hit
        super.useWeapon();
        super.useWeapon();
    }
    logInstanceToConsole(){
        console.log(`\nCharacter = ${this.significance} \n-------------------------------\nName: ${this.name} \nGender: ${this.gender} \nRace: ${this.race} \nStature: ${this.size} \nAmount of damage inflicted when using weapons: ${this.damage}\n\n`)
    }
};
class Halfling extends Character {
    constructor(significance, name, race, gender){
        super(name, race, gender);
        this.size = 'small';
        this.significance = significance;
    }
    //Halflings only inflict 1 damage when using handheld weapons and therefore this extension class doesn't need to redefine/modify the useWeapon method.
    logInstanceToConsole(){
        console.log(`\nCharacter = ${this.significance} \n-------------------------------\nName: ${this.name} \nGender: ${this.gender} \nRace: ${this.race} \nStature: ${this.size} \nAmount of damage inflicted when using weapons: ${this.damage}\n\n`)
    }
};
class Human extends Character {
    constructor(significance, name, race, gender){
        super(name, race, gender);
        this.size = 'tall';
        this.significance = significance;
    }
    useWeapon(){                // Humans using handheld weapons = 2 damage per hit
        super.useWeapon();
        super.useWeapon();
    }
    logInstanceToConsole(){
        console.log(`\nCharacter = ${this.significance} \n-------------------------------\nName: ${this.name} \nGender: ${this.gender} \nRace: ${this.race} \nStature: ${this.size} \nAmount of damage inflicted when using weapons: ${this.damage}\n\n`)
    }
};




///////////////////////
// INVENTORY BUTTON //
/////////////////////
const inventoryDropdown = document.createElement('div');
inventoryDropdown.classList.add('dropdown');
inventoryDropdown.setAttribute('id', 'dropdowns');
landingPage.appendChild(inventoryDropdown);
const inventoryButton = document.createElement('button');
inventoryButton.classList.add('inventory');
inventoryButton.setAttribute("style", "float:left;");
inventoryButton.innerHTML = 'Inventory';
inventoryDropdown.appendChild(inventoryButton);
inventoryContents = document.createElement('div');
inventoryContents.classList.add('inventory-contents');
inventoryList = document.createElement('ul');
inventoryContents.appendChild(inventoryList);
inventoryDropdown.appendChild(inventoryContents);





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

    playerCharacter.useWeapon();
    playerCharacter.logInstanceToConsole();


    document.getElementById('introHeader').remove();
    document.getElementById('create-character').remove();
    const bazaarBackground = document.createElement('div');
    bazaarBackground.classList.add('bazaar-background');
    bazaarBackground.setAttribute("id", "bazaar");
    const weatherButton = '<div id = "weatherButton"></div>'
    // const weatherWidget = '<div id="ww_cf581cbb2c2a8" v=\'1.3\' loc=\'id\' a=\'{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl4025"],"font":"Arial","sl_ics":"one_a","sl_sot":"fahrenheit","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_nme":3,"el_phw":3,"el_whr":3}\'><a href="https://weatherwidget.org/" id="ww_cf581cbb2c2a8_u" target="_blank">HTML Weather Widget for website</a></div><script async src="https://app3.weatherwidget.org/js/?id=ww_cf581cbb2c2a8"></script>';
    // bazaarBackground.innerHTML = weatherWidget;
    bazaarBackground.innerHTML = weatherButton;
    landingPage.appendChild(bazaarBackground);

    // ***********************  See note in README concerning the weatherWidget.  ********************************************
    //  I removed the widget and button from showing on the screen since I couldn't get it working by the assignment deadline and don't want it counted as part of the homework assignment, BUT I didn't want to remove it from the code since I intend on solving it in the future and also since its id is referenced so many times by later functions when removing elements via the DOM!
    // ***********************************************************************************************************************





    /////////////////////////////////////////////////
    //  Placeholders for possible inventory items //
    ///////////////////////////////////////////////
    let candyPlaceholder = document.createElement('li');
    candyPlaceholder.setAttribute('id', 'inventoryCandy');
    candyPlaceholder.setAttribute('style', 'hidden');
    inventoryList.appendChild(candyPlaceholder);




    //////////////////////////////////////
    //      INTRODUCTION TO BAZAAR     //
    ////////////////////////////////////
    const textArea = document.createElement('div');
    textArea.classList.add('textArea');
    textArea.setAttribute('id', 'bazaarInteractions');
    textArea.innerHTML = '<p class="short-paragraph">Brave ' + chosenName +', you have journeyed long, hard, and far from home on your quest. Shortly after sunset, you finally reach where the forested path gives way to a large open expanse outside the stone walls of Antigone.</p>    <img src="./Images/moonlit_forest_path_tiny.jpg" alt="Small image of a moonlit forest path just before an opening"><p class="short-paragraph">As you set up camp for the night, you begin hearing the sounds of many lively conversations coming from nearby. When you investigate, you find a bustling outdoor bazaar. A perfect opportunity to gather more information!</p>    <img src="./Images/pxfuelDOTcom_market-bazaar-people-crowd-night-evening_TINY.jpg" alt="Small image of a crowded, fire-lit, outdoor market in the early evening">    <div id="bazaarButtons">Choose whether to go to:<button type="button" id="bazaarFood" class="choiceButton" onclick="">Food Vendors</button><button type="button" id="bazaarMerchants" class="choiceButton" onclick="">Merchant Tents</button><button type="button" id="bazaarEntertainment" class="choiceButton" onclick="">Entertainment Zone</button></div>';
    bazaarBackground.appendChild(textArea);

    const elementToErase = document.getElementById("weatherButton").nextSibling


    ///////////////////////////
    //      CENTRAL HUB     //
    /////////////////////////
    function returnToEntrance() {
        let bazaarBackground = document.getElementById('bazaar');
        let indexOfElementToErase = (bazaarBackground.childNodes.length) - 1;
        bazaarBackground.childNodes[indexOfElementToErase].remove()
        const entranceToBazaar = document.createElement('div');
        entranceToBazaar.classList.add('textArea');
        entranceToBazaar.setAttribute('id', 'entranceToBazaar');
        entranceToBazaar.innerHTML = '<p><br>You have returned back to the central hub of the evening market.<br></p>    <img src="./Images/from_pickpikDOTcom_souk-discount-bazaar-alley-thumb.jpg" alt="A pathway thru piles of goods underneath a canvas roof">  <br><br><br>     <div id="bazaarButtons"><p>Go to:</p><button type="button" id="bazaarFood" class="choiceButton">Food Vendors</button> &emsp; <button type="button" id="bazaarMerchants" class="choiceButton">Merchant Tents</button> &emsp; <button type="button" id="bazaarEntertainment" class="choiceButton">Entertainment Zone</button></div>';
        bazaarBackground.appendChild(entranceToBazaar);
        document.getElementById('bazaarFood').addEventListener('click', foodVendors);
        document.getElementById('bazaarMerchants').addEventListener('click', merchantVendors);
        document.getElementById('bazaarEntertainment').addEventListener('click', entertainmentTents);
    };



    /* ======================================================================================
    |                               BAZAAR - FOOD VENDORS                                    |
    |========================================================================================
    */
    const foodVendors = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        const foodZone = document.createElement('div');
        foodZone.classList.add('textArea');
        foodZone.setAttribute("id", "food-zone");
        foodZone.innerHTML = '<p>You feel famished after a long day of travel.  Following your nose, you stroll towards the delicious scents of foods being cooked.  The further you enter the area, the thicker the crowds become as impatiently waiting lines of customers flow chaotically outward from food stalls and tangle together into a dense mass of hungry bodies. <br><br></p>      <img src="./Images/food-stall1.jpg" alt="Piles of what appear to be potatoes and bread in an outdoor stall"><img src="./Images/food-stall2.jpg" alt="Large baskets full of produce in an outdoor market"><img src="./Images/food-stall3.jpg" alt="Sausages, meat kabobs, and jars of sauces">   <p>Quickly becoming tired of needing to squeeze your way thru the crowds, you are relieved to spot a small empty table hidden behind a savory smelling vendor off to your right.  The banner on the front of the stall reads "Bilberry\'s Best Potato Sausages" alongside an image of a smiling halfling giving a thumbs up of approval.<br><br></p>   <div id="bazaarButtons"><button type="button" id="eatPotatoSausage" class="choiceButton">Continue</button></div>';
        bazaarBackground.appendChild(foodZone);
        document.getElementById('eatPotatoSausage').addEventListener('click', droppedCardsPart1);
    };
    const bazaarFood = document.getElementById('bazaarFood');
    bazaarFood.addEventListener('click', foodVendors);


    const droppedCardsPart1 = () => {
        const potatoSausageVendorName = 'Tobold Bilberry';
        const potatoSausageVendorRace = 'Halfling';
        const potatoSausageVendorGender = 'Male';
        const potatoSausageVendor = new Halfling('FOOD VENDOR', potatoSausageVendorName, potatoSausageVendorRace, potatoSausageVendorGender);
        potatoSausageVendor.logInstanceToConsole();

        document.getElementById("weatherButton").nextSibling.remove();
        const eatingAtBilberrys = document.createElement('div');
        eatingAtBilberrys.classList.add('textArea-WIDER-VERSION');
        eatingAtBilberrys.setAttribute("id", "bilberryAndBordan");
        eatingAtBilberrys.innerHTML = `<img src="./Images/grill-sausage-potato_from_pixabayDOTcom.jpg" alt="A grill covered in sausages, cut potatoes, and a thick rectangle of cheese being cooked"><p>The main dish being sold by Bilberry's staff is a heaping pile of cut potatoes grilled with sausages. The entire mound of food is covered in a thick layer of melted cheese.  It is a worthy feast for recovering after such an exhausting day! You order a serving along with a cup of ale and settle down to eat.</p>  <p>Observing the crowd around you, you soon notice a halfling who must be Bilberry, judging from his likeness on the banner.  He is chatting with a ${playerCharacter.race.toLowerCase()} dressed in a bright blue suit with a red cape and matching red vest.  The brightly dressed visitor is speaking in a highly animated fashion, gesturing his arms about excitedly in front of the cheerful proprietor.  The two of them begin laughing and it is clear they are old friends.</p><p>However, as you watch them, a nervous looking young gnome comes running out of the crowd towards them and anxiously cries out, <i>"Bordan! Bordan! You've lost track of the time and are going to be late for your next performance!"</i>  The brightly dressed ${playerCharacter.race.toLowerCase()}, who must be Bordan, bids his friend good-bye and hurriedly follows the young gnome back towards the Entertainment Zone of the bazaar.</p><div id="bazaarButtons"><br><button type="button" id="discoverCards" class="choiceButton">Continue</button></div>`
        bazaarBackground.appendChild(eatingAtBilberrys);

        let magician = '';
        const magicianName = 'Bordan the Magnificent';
        const magicianRace = chosenRace;
        const magicianGender = 'Male';
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

        document.getElementById('discoverCards').addEventListener('click', droppedCardsPart2);
    };


    const droppedCardsPart2 = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        const discoverDroppedCards = document.createElement('div');
        discoverDroppedCards.setAttribute("id", "bordanDroppedCards");
        discoverDroppedCards.classList.add('result-of-choice');
        fetch(`https://www.deckofcardsapi.com/static/img/back.png`)
        .then(imageResult => {
            cardBack = imageResult.url;
            discoverDroppedCards.innerHTML = '<p>As Bordan hurries away, you notice two playing cards laying haphazardly on the ground where he had been standing.</p>  <p>It seems that they accidentally fell out of his suit while he was talking, and no one noticed! <br></p> <div style = "margin: 0 25%;"> <img src = "' + cardBack + '" style="border: none;"> &emsp; <img src = "' + cardBack + '"alt = "Two playing card backs decorated with intricate, complex black and white geometric patterns" style="border: none;"></div>   <div id="bazaarButtons"><br><br><button type="button" id="pickUpCards" class="choiceButton">Pick up the cards to return them to Bordan yourself</button><button type="button" id="tellBilberry" class="choiceButton">Turn in the cards to Bilberry so that he can return them</button>'
            bazaarBackground.appendChild(discoverDroppedCards);

            document.getElementById('pickUpCards').addEventListener('click', turnOverCards);
            document.getElementById('tellBilberry').addEventListener('click', talkToBilberry);
        })
        .catch(error => console.log(error));
    }

    const turnOverCards = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        const returnCardstoBordan = document.createElement('div');
        returnCardstoBordan.setAttribute("id", "returnCards");
        returnCardstoBordan.classList.add('result-of-choice');
        fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=2`)
        .then(response => response.json())
        .then(results => {
            const twoCards = results.cards;
            let cards = ""
            for (let i = 0; i < 2; i++) {
            cards += '<img src="' + twoCards[i].image + '" alt="Image of a ' + twoCards[i].value + " of " + twoCards[i].suit + '"> &emsp;';
            }
            returnCardstoBordan.innerHTML = '<p>You flip the cards over to look at them, and this is what you see... <br></p><div style = "margin: 0 25%;">' + cards + '</div> <p>You hurry after Bordan to try to catch up with him in time to return his cards...</p>   <div id="bazaarButtons"><button type="button" id="hurryAfterBordan" class="choiceButton">Continue</button></div>';
            bazaarBackground.appendChild(returnCardstoBordan);
            document.getElementById('hurryAfterBordan').addEventListener('click', bordanPerformance);
    })
    .catch(error => console.log(error));
    };

    const bordanPerformance = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        const magicShow = document.createElement('div');
        magicShow.classList.add('textArea');
        magicShow.setAttribute("id", "bordan-the-magnificent");
        magicShow.innerHTML = '<p class="non-gameplay-notes">This was the better of the two options for you to choose, since it is the only way to get into Bordan\'s tent and talk to him!  He will reward you greatly with help towards rescuing your sister!  However, that part of the story is not part of this homework assignment and this particular side quest about Bordan and his cards has taken up enough pages within the homework already!  So I am refraining from continuing this part of the story until AFTER turning this homework in.</p>    <div id="bazaarButtons"><button type="button" id="backToEntrance" class="choiceButton">Leave Bordan\'s Tent</button></div>'
        bazaarBackground.appendChild(magicShow);
        document.getElementById('backToEntrance').addEventListener('click', returnToEntrance);
    };


    const talkToBilberry = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        const freeMeal = document.createElement('div');
        freeMeal.classList.add('result-of-choice');
        freeMeal.setAttribute("id", "merchant-zone");
        freeMeal.innerHTML = '<p>Bilberry thanks you greatly for letting him know. <i>"My friend is so clumsy sometimes!  I\'m sure he would have been inconvenienced to not have a full deck of cards! I will keep these safe for him and return them to him the next time I see him."</i></p><p>He puts them safely in his pocket and then continues, <i>"Did you enjoy your meal?  Let me give it to you for free in return for your kindness!"</i>  He repays you the cost of your meal in thanks for helping his friend.  Then the two of you are interrupted by one of his staff having a minor catastrophe at the grill, and he is forced to get back to work.<br><br><br></p>    <div id="bazaarButtons"><p>Continue onward to:</p><button type="button" id="bazaarMerchants" class="choiceButton">Merchant Tents</button> &emsp; <button type="button" id="bazaarEntertainment" class="choiceButton">Entertainment Zone</button></div>'
        bazaarBackground.appendChild(freeMeal);
        document.getElementById('bazaarMerchants').addEventListener('click', merchantVendors);
        document.getElementById('bazaarEntertainment').addEventListener('click', entertainmentTents);
    };


    /* ========================================================================================
    |                               BAZAAR - MERCHANT TENTS                                    |
    |==========================================================================================
    */
    const merchantVendors = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        const merchantZone = document.createElement('div');
        merchantZone.classList.add('textArea');
        merchantZone.setAttribute("id", "merchant-zone");
        merchantZone.innerHTML = '<p>Merchants fill the bulk of the outdoor market and encircle most of its perimeter, with some of the wealthiest vendors using semi-permanent structures directly against the outside of the city\'s walls to facilitate their trade. The area is alive with people shuffling hither and yon, and the sound of craftspeople hawking their wares rings through the brisk night air. Stalls offering every manner of goods litter the borders of the pathways, everything from beautiful jewelry to carpentry tools. From weaponry to painted vases, there is a sense that anything in the known world could be found in this market, if you have the coin to pay for it.<br><br></p>      <img src="./Images/merchants_tiny-from-pxfuelDOTcom.jpg" alt="Small image of various metal and fabric goods piled up against stone walls in an outdoor marketplace, with a path leading thru the middle">    <p>A psychic fortune teller with long flowing hair and a glittering black cloak calls out to you as you pass by her stall.  She bids you come have your fortune read.<br><br></p>    <div id="bazaarButtons"><button type="button" id="agnesNutter" class="choiceButton">Visit the Fortune Teller</button><button type="button" id="supplies" class="choiceButton">Buy Supplies</button><button type="button" id="otherStalls" class="choiceButton">Browse Small Merchandise Stalls</button></div>';
        bazaarBackground.appendChild(merchantZone);
        document.getElementById('agnesNutter').addEventListener('click', fortuneTeller);
        document.getElementById('supplies').addEventListener('click', buySupplies);
        document.getElementById('otherStalls').addEventListener('click', smallStalls);
    };
    const bazaarMerchants = document.getElementById('bazaarMerchants');
    bazaarMerchants.addEventListener('click', merchantVendors);


    //////////////////////////////
    //      FORTUNE TELLER     //
    ////////////////////////////
    const fortuneTeller = () => {
        document.getElementById("weatherButton").nextSibling.remove();

        const fortuneTellerName = 'Agnes Nutter';
        const fortuneTellerRace = 'Gnome';
        const fortuneTellerGender = 'Female';
        const fortuneTeller = new Gnome('FORTUNE TELLER', fortuneTellerName, fortuneTellerRace, fortuneTellerGender);
        fortuneTeller.logInstanceToConsole();

        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        // Note:  Due to uploading this to GitHub, I am refraining from using the personal/private API key that was assigned to me by NASA. NASA allows up to 30 requests per IP address per hour with the DEMO_KEY (up to 50 per day), which should be more than enough for this student class project.
        .then(response => response.json())
        .then(results => {
            const dailyImage = results.url;
            const altText = results.title;
            const listenToAgnes = document.createElement('div');
            listenToAgnes.setAttribute("id", "AstronomyPictureOfTheDay");
            listenToAgnes.classList.add('result-of-choice-WIDER-VERSION');
            listenToAgnes.innerHTML = '<p>You pay the fortune teller and sit down at her counter.</p><p>She smiles warmly at you and says, <i>"Hello, ' + playerCharacter.name + '.  I\'ve been waiting for you."</i> &nbsp; From beneath the velvet tablecloth draped over her counter, she removes a crystal ball and invites you to stare deep into the swirling, dark green clouds within it. &nbsp; <i>"Clear your mind and focus only on what is within,"</i> she instructs. . . </p><p>As you focus, the sounds of the bazaar fade from behind you and everything else around you drops away. . . &nbsp; . . . To your amazement the clouds within the ball suddenly flash a blinding, neon shade of purple and then slowly part! The following mysterious vision is revealed to you : <br></p><img src = "' + dailyImage + '" style = "border-radius: 50%; overflow: hidden; width: 400px; height: 400px; border: 2px solid black; display: block; margin: 0 auto;" alt="Image of ' + altText + '"><div id="bazaarButtons"><br><button type="button" id="ponder" class="choiceButton">Ponder the meaning of this vision</button><button type="button" id="supplies" class="choiceButton">Thank her and then <br>leave to go buy supplies</button><button type="button" id="otherStalls" class="choiceButton">What a waste of time!<br>Hurry onward to a different tent</button><button type="button" id="backToEntrance" class="choiceButton2">Leave merchant zone</button></div>'
            bazaarBackground.appendChild(listenToAgnes);

            document.getElementById('ponder').addEventListener('click', ponderTheCosmos);
            document.getElementById('supplies').addEventListener('click', buySupplies);
            document.getElementById('otherStalls').addEventListener('click', smallStalls);
            document.getElementById('backToEntrance').addEventListener('click', returnToEntrance);
        })
        .catch(error => console.log(error));
    };

    const ponderTheCosmos = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        const dragon = document.createElement('div');
        dragon.setAttribute("id", "meetTadCooper");
        dragon.classList.add('result-of-choice-WIDER-VERSION');
        dragon.innerHTML = `<p> You silently ponder to yourself the possible meanings of the strange vision for a moment before giving up and asking the fortune teller whether she has any helpful insights.  She holds out her palm for further payment from you.</p> <p>Once sufficiently paid for additional time, she stares deep into the ball before informing you in a dramatically mysterious voice, <i>"Strange and winding are the games the gods play, my dear ${playerCharacter.name}. Let the wheel of Fate turn, and ye shall find help in the most unlikely of places.  Under an arc of pale moonlight, the crow will knock nine times to reveal salvation."</i></p> <p>She then closes her eyes and is silent for a moment as if concentrating on some unheard voice.  When she opens her eyes she very solemly looks you up and down in judgement, and then mutters quietly to herself with an unhappy sigh, <i>"Only a ${playerCharacter.race.toLowerCase()}, after all..."</i>, before addressing you directly again at a normal volume with, <i>"It is dangerous to go alone. Take this,"</i> as she hands you a small lizard whose cage had been on a shelf at the back of her stall.</p>     <img src="./Images/bearded-dragon_from_publicdomainpicturesDOTnet.jpg" alt="An out-stretched hand with palm facing upward and a very young bearded dragon resting on the palm" style="border: dashed 1px whitesmoke;">   <p><i>"His name is Tad Cooper, and he is a <span class="tinyText">bearded</span> dragon. Take good care of him,"</i> she explains as you gently and carefully pick the creature up.</p>    <div id="bazaarButtons"><button type="button" id="supplies" class="choiceButton">Thank Her Politely For Helping, <br>Then Go Buy Supplies</button><button type="button" id="otherStalls" class="choiceButton">What a Nutter!<br>Mumble Your Thanks, Then Hurry Away</button><button type="button" id="backToEntrance" class="choiceButton2">Leave Merchant Area</button></div>`
        bazaarBackground.appendChild(dragon);
        document.getElementById('supplies').addEventListener('click', buySupplies);
        document.getElementById('otherStalls').addEventListener('click', smallStalls);
        document.getElementById('backToEntrance').addEventListener('click', returnToEntrance);
};


    ////////////////////////////
    //      BUY SUPPLIES     //
    //////////////////////////
    const buySupplies = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        const stockUp = document.createElement('div');
        stockUp.setAttribute("id", "buyNeededSupplies");
        stockUp.classList.add('textArea');
        stockUp.innerHTML = '<p class="non-gameplay-notes">Any supplies that might be needed for rescuing the user\'s sister later on in the game (after this night market chapter of the game is done) are NOT related to this homework assignment! The homework assignment is only concerned with the details of exploring the market. Since this page is NOT a part of the homework assignment, this page\'s contents will be filled in AFTER this homework assignment has been completed.  Go ahead and use the buttons below to explore a different area.<br><br><br></p><div id="bazaarButtons"><button type="button" id="agnesNutter" class="choiceButton">Visit the Fortune Teller</button><button type="button" id="otherStalls" class="choiceButton">Browse Small Merchandise Stalls</button><button type="button" id="backToEntrance" class="choiceButton2">Leave the Merchant Area</button></div>'
        bazaarBackground.appendChild(stockUp);
        document.getElementById('agnesNutter').addEventListener('click', fortuneTeller);
        document.getElementById('otherStalls').addEventListener('click', smallStalls);
        document.getElementById('backToEntrance').addEventListener('click', returnToEntrance);
    };


    ////////////////////////////
    //      SMALL STALLS     //
    //////////////////////////
    const smallStalls = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        const gossip = document.createElement('div');
        gossip.setAttribute("id", "smallStallGossip");
        gossip.classList.add('textArea');
        gossip.innerHTML = '<p class="non-gameplay-notes">This page will be purely related to the larger storyline plot of rescuing your sister and is NOT relevant to the homework assignment.  Therefore, this page\'s narrative text about chatting with the small merchandise vendors and listening in on the conversations of others will be filled in AFTER this homework assignment has been completed.<br><br><br></p><div id="bazaarButtons"><button type="button" id="agnesNutter" class="choiceButton">Visit the Fortune Teller</button><button type="button" id="supplies" class="choiceButton">Buy Supplies</button><button type="button" id="backToEntrance" class="choiceButton2">Leave the Merchant Area</button></div>'
        bazaarBackground.appendChild(gossip);
        document.getElementById('agnesNutter').addEventListener('click', fortuneTeller);
        document.getElementById('supplies').addEventListener('click', buySupplies);
        document.getElementById('backToEntrance').addEventListener('click', returnToEntrance);
    };



    /* =============================================================================================
    |                               BAZAAR - ENTERTAINERS' ZONE                                    |
    |===============================================================================================
    */
    const entertainmentTents = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        const entertainmenttZone = document.createElement('div');
        entertainmenttZone.classList.add('textArea');
        entertainmenttZone.setAttribute("id", "entertainment-zone");
        entertainmenttZone.innerHTML = '<p>Multi-colored canvas tents gently sway in the night breeze, carrying a colorful cacophony of cheerful sounds. Musical notes drift into the night air, mixing above the hard-packed earth to form its own unique song.  Scattered between the small tents, open-air wooden stages offer entertainment for all walks of life. Bards and poets tell tales of beauty and love lost, circus performers dazzle onlookers with their acrobatic feats, and vagrants and drunkards wander through the crowd proclaiming their laments.</p>       <img src="./Images/bazaar_entertainers1.jpg" alt="Two musicians in turbans and robes sit in front of the sunset playing stringed instruments"><img src="./Images/bazaar_entertainers2.jpg" alt="A green skinned juggler performs on a nautical-themed stage"><img src="./Images/bazaar_entertainers3-1.jpg" alt="A bare-chested man covered in tribal markings holds a column of fire"><img src="./Images/bazaar_entertainers4.jpg" alt="The silhouette of an aerial acrobat posed high in the air in front of the sunset"><img src="./Images/bazaar_entertainers3-2.jpg" alt="A figure dances in front of a line of fire"><img src="./Images/bazaar_entertainers6.jpg" alt="An old male musician with interesting hair and robes plays a bandura (large, wooden, stringed instrument)">    <p>In the center of the dusty area there sits an eye-catching tent, larger than the rest and lavishly decorated in a bold combination of shimmering gold and dark velvet. Against the starry sky, this tent is a mountain of exotic fabrics and torch light, standing in stark contrast to the darkness above.</p><br><br>      <div id="bazaarButtons"><button type="button" id="bordanTent" class="choiceButton">Enter the tent</button><button type="button" id="shellGame" class="choiceButton">Visit gaming area</button><button type="button" id="watchShow" class="choiceButton">Attend a show</button></div>';
        bazaarBackground.appendChild(entertainmenttZone);


        ///////////////////////////////
        //      MAGICIAN'S TENT     //
        /////////////////////////////
        let enterBordanTent = () => {
            document.getElementById("weatherButton").nextSibling.remove();
            fetch(`https://http.dog/999.jpg`)
            .then(imageResult => {
                deniedImage = imageResult.url;
                const openTent = document.createElement('div');
                openTent.setAttribute("id", "magicianTent");
                openTent.classList.add('result-of-choice');
                openTent.innerHTML = '<img src = "' + deniedImage + '" style = "margin: 0 30%; width: 40%;"><p>As you reach out your hand to pull back the entrance flap, an angry voice barks, <i>"Can\'t you see the sign!?!"</i></p><p>A muscular dwarf dressed in armor labeled \'Security\' on the chest grabs your wrist and steps in front of the entrance.  Stabbing a stubby finger towards a small hanging sign on the side of the tent, she continues, <i>"Bordan the Magnificent is currently on his break in between performances!  Check back again later if you want to see his show!"</i></p><p>Judging by her angry glare, it is probably best to follow her advice instead of making a scene.</p><br><br>  <div id="bazaarButtons"><button type="button" id="fight" class="choiceButton">Try to force your way past her anyways.<br>No one tells YOU what to do!</button><button type="button" id="shellGame" class="choiceButton">Visit gaming area</button><button type="button" id="watchShow" class="choiceButton">Attend a show</button><button type="button" id="backToEntrance" class="choiceButton2">Leave entertainment area</button></div>'
                bazaarBackground.appendChild(openTent);

                document.getElementById('fight').addEventListener('click', fightDwarf);
                document.getElementById('watchShow').addEventListener('click', attendAShow);
                document.getElementById('shellGame').addEventListener('click', introToShellGame);
                document.getElementById('backToEntrance').addEventListener('click', returnToEntrance);
            })
        };
        const bordanTentClosed = document.getElementById('bordanTent');
        bordanTentClosed.addEventListener('click', enterBordanTent);


        const fightDwarf = () => {
            document.getElementById("bazaar").remove();
            let buttonsToErase = document.getElementById('dropdowns').remove();
            const mistakesWereMade = document.createElement('div');
            mistakesWereMade.setAttribute("id", "youChosePoorly");
            mistakesWereMade.classList.add('gameOver');
            mistakesWereMade.innerHTML = '<p>Well, that was a mistake.</p>  <p>The dwarf quickly lunges at your waist, flipping you into the air before you can react. <br> You hit the ground with a heavy thud and feel a dizzying, sharp pain in your head.</p><p>As your world fades to black, the last thing you hear is her shouting loudly for the city guards to come help her "take out the trash."</p><p>I\'m afraid your time in the bazaar has come to a premature end.<br><br><br></p> <p>Thank you for playing. Better luck next time.</p>'
            landingPage.appendChild(mistakesWereMade);
        };


        ///////////////////////////
        //      SHOW TENT       //
        /////////////////////////
        const attendAShow = () => {
            document.getElementById("weatherButton").nextSibling.remove();
            const acrobats = document.createElement('div');
            acrobats.setAttribute("id", "acrobatShow");
            acrobats.classList.add('textArea');
            acrobats.innerHTML = '<p class="non-gameplay-notes">Move along! Move along! Nothing to see here! <br> [This is purely a text area for storyline content that is unrelated to this first homework assignment. Since the plot of rescuing your sister is NOT relevant to this homework assignment this page\'s narrative text will be filled in AFTER this homework assignment has been completed.]<br><br><br></p>      <div id="bazaarButtons"><button type="button" id="bordanTent" class="choiceButton">Visit that eye-catching<br>gold and velvet draped tent</button><button type="button" id="shellGame" class="choiceButton">Visit gaming area</button><button type="button" id="backToEntrance" class="choiceButton2">Leave the entertainment zone</button><br></div>      <img src="./Images/entertainers_from_pxhereDOTcom.jpg" alt="Two fire dancers facing away from the viewer" style="margin: 15px 0 0 0; border: none;"><div id="continueToShow"><button type="button" id="watchFireDance" class="choiceButton" style="background-color: darkred; color: orange">Watch Show</button></div>'
            bazaarBackground.appendChild(acrobats);

            document.getElementById('bordanTent').addEventListener('click', enterBordanTent);
            document.getElementById('shellGame').addEventListener('click', introToShellGame);
            document.getElementById('backToEntrance').addEventListener('click', returnToEntrance);
        };
        document.getElementById('watchShow').addEventListener('click', attendAShow);



        ///////////////////////////
        //      SHELL GAME      //
        /////////////////////////
        let candyPieces = 0;
        const introToShellGame = () => {
            document.getElementById("weatherButton").nextSibling.remove();
            const introduceShellGame = document.createElement('div');
            introduceShellGame.setAttribute("id", "shellGamePage1");
            introduceShellGame.classList.add('textArea');
            introduceShellGame.innerHTML = '<p>A small crowd has formed around a nearby game.</p><p class="non-gameplay-notes"> [More text goes here, during which you learn some helpful information towards rescuing your sister.  Since the plot of rescuing her is NOT relevant to this homework assignment, the storyline text needs to be filled in here AFTER this homework assignment has been completed]</p><p>The performer is playing the cup and ball "shell game" with his audience and invites you to play a round. <br><br></p><div id="bazaarButtons"><button type="button" id="continue" class="choiceButton">Continue</button></div>';
            bazaarBackground.appendChild(introduceShellGame);

            document.getElementById('continue').addEventListener('click', playShellGame)
        };
        document.getElementById('shellGame').addEventListener('click', introToShellGame)
        

        const leaveShellGame = () => {
            document.getElementById("weatherButton").nextSibling.remove();
            const leaving = document.createElement('div');
            leaving.setAttribute("id", "endingShellGame");
            leaving.classList.add('result-of-choice');
            leaving.innerHTML = '<p>That is a smart choice! Your time is better spent elsewhere.  You came here to rescue your sister, NOT to play games!</p><p>Where to next?</p><div id="bazaarButtons"><button type="button" id="bordanTent" class="choiceButton">Visit that eye-catching<br>gold and velvet draped tent</button><br><br><button type="button" id="watchShow" class="choiceButton">Attend a show</button><br><br><br><button type="button" id="backToEntrance" class="choiceButton2">Leave the entertainment zone</button><br></div>';
            bazaarBackground.appendChild(leaving);

            if (candyPieces > 0){
                document.getElementById('inventoryCandy').remove();
                let addCandy = document.createElement('li');
                addCandy.setAttribute('id', 'inventoryCandy');
                addCandy.innerHTML = `🍬 Candy: &emsp; ${candyPieces}`;
                inventoryList.appendChild(addCandy);
            };

            document.getElementById('bordanTent').addEventListener('click', enterBordanTent);
            document.getElementById('watchShow').addEventListener('click', attendAShow);
            document.getElementById('backToEntrance').addEventListener('click', returnToEntrance);
        };
        

        const repeatShellGame = () => {
            playShellGame();
        };


        const playShellGame = () => {
            document.getElementById("weatherButton").nextSibling.remove();
            randomNumberChosen = Math.floor(Math.random() * 12)        // returns a number between 0 and 11, inclusive of either

            // Since there are 12 different possible numbers it could be, the choices divide evenly by 3
            // Left cup = 0, 1, 2, 3
            // Middle cup = 4, 5, 6, 7 
            // Right cup = 8, 9, 10, 11

            const leftCupChosen = () => {
                if (randomNumberChosen <= 3){
                    // Player won this round!
                    fetch(`https://httpgoats.com/302.jpg`)
                    .then(imageResult => {
                        foundItImage = imageResult.url;
                        document.getElementById("chooseCup").innerHTML = '<img src = "' + foundItImage + '" style = "margin: 0 30%; width: 40%;"> <p><b>Congratulations!</b><br>You found the ball!</p><p>You won a piece of candy for guessing correctly!</p><p>🍬<br></p><div id="bazaarButtons"><br><button type="button" id="playAgain" class="choiceButton">Play Again?</button><button type="button" id="leave" class="choiceButton">Leave</button></div>'

                        // Play winning sound
                        soundEffect('./Sound/applause-by-Yannick_Lemieux_from_soundbibleDOTcom.mp3');

                        // Add a candy piece
                        candyPieces ++;
                                        
                        // Add event listener for the "Play Again" button
                        document.getElementById('playAgain').addEventListener('click', repeatShellGame);

                        // Event listener for the "Leave" button
                        document.getElementById('leave').addEventListener('click', leaveShellGame);
                    });
                }
                else {
                    // Show empty container because player lost:
                    fetch(`https://httpcats.com/204.jpg`)
                    .then(imageResult => {
                        emptyImage = imageResult.url;
                        document.getElementById("chooseCup").innerHTML = '<img src = "' + emptyImage + '" style = "margin: 0 30%; width: 40%;"> <p>Sorry, but that cup is empty. <br> You chose incorrectly<br></p><div id="bazaarButtons"><br><button type="button" id="playAgain" class="choiceButton">Play Again?</button><button type="button" id="leave" class="choiceButton">Leave</button></div>'

                        soundEffect('./Sound/no-dear-wrong-by-Mike-Koenig_from_SoundBibleDOTcom.mp3');
                                        
                        document.getElementById('playAgain').addEventListener('click', repeatShellGame);
                        document.getElementById('leave').addEventListener('click', leaveShellGame);
                    });
                }
            };

            const middleCupChosen = () => {
                if (randomNumberChosen <= 3 || randomNumberChosen >= 8){
                    // Show empty container because player lost:
                    fetch(`https://http.garden/204.jpg`)
                    .then(imageResult => {
                        emptyImage = imageResult.url;
                        document.getElementById("chooseCup").innerHTML = '<img src = "' + emptyImage + '" style = "margin: 0 30%; width: 40%;"> <p>Sorry, but that cup is empty. <br> You chose incorrectly<br></p><div id="bazaarButtons"><br><button type="button" id="playAgain" class="choiceButton">Play Again?</button><button type="button" id="leave" class="choiceButton">Leave</button></div>'

                        soundEffect('./Sound/no-dear-wrong-by-Mike-Koenig_from_SoundBibleDOTcom.mp3');
                                        
                        document.getElementById('playAgain').addEventListener('click', repeatShellGame);
                        document.getElementById('leave').addEventListener('click', leaveShellGame);
                    });
                }
                else {
                    // Player won this round!
                    fetch(`https://httpgoats.com/302.jpg`)
                    .then(imageResult => {
                        foundItImage = imageResult.url;
                        document.getElementById("chooseCup").innerHTML = '<img src = "' + foundItImage + '" style = "margin: 0 30%; width: 40%;"> <p><b>Congratulations!</b><br>You found the ball!</p><p>You won a piece of candy for guessing correctly!</p><p>🍬<br></p><div id="bazaarButtons"><br><button type="button" id="playAgain" class="choiceButton">Play Again?</button><button type="button" id="leave" class="choiceButton">Leave</button></div>'

                        soundEffect('./Sound/yeay-by-Jett_Rifkin_from_soundbibleDOTcom.mp3');

                        candyPieces ++;
                    
                        document.getElementById('playAgain').addEventListener('click', repeatShellGame);
                        document.getElementById('leave').addEventListener('click', leaveShellGame);
                    });
                        
                }
            };

            const righthandCupChosen = () => {                
                if (randomNumberChosen >= 8){
                    // Player won this round!
                    fetch(`https://httpgoats.com/302.jpg`)
                    .then(imageResult => {
                        foundItImage = imageResult.url;
                        document.getElementById("chooseCup").innerHTML = '<img src = "' + foundItImage + '" style = "margin: 0 30%; width: 40%;"> <p><b>Congratulations!</b><br>You found the ball!</p><p>You won a piece of candy for guessing correctly!</p><p>🍬<br></p><div id="bazaarButtons"><br><button type="button" id="playAgain" class="choiceButton">Play Again?</button><button type="button" id="leave" class="choiceButton">Leave</button></div>'

                        soundEffect('./Sound/applause-by-Yannick_Lemieux_from_soundbibleDOTcom.mp3');

                        candyPieces ++;

                        document.getElementById('playAgain').addEventListener('click', repeatShellGame);
                        document.getElementById('leave').addEventListener('click', leaveShellGame);
                    });
                }
                else {
                    // Show empty container because player lost:
                    fetch(`https://http.dog/204.jpg`)
                    .then(imageResult => {
                        emptyImage = imageResult.url;
                        document.getElementById("chooseCup").innerHTML = '<img src = "' + emptyImage + '" style = "margin: 0 30%; width: 40%;"> <p>Sorry, but that cup is empty. <br> You chose incorrectly<br></p><div id="bazaarButtons"><br><button type="button" id="playAgain" class="choiceButton">Play Again?</button><button type="button" id="leave" class="choiceButton">Leave</button></div>'

                        soundEffect('./Sound/no-dear-wrong-by-Mike-Koenig_from_SoundBibleDOTcom.mp3');

                        document.getElementById('playAgain').addEventListener('click', repeatShellGame);
                        document.getElementById('leave').addEventListener('click', leaveShellGame);
                    });
                }
            };

            const cupAndBallsGame = document.createElement('div');
            cupAndBallsGame.setAttribute("id", "containerForShellGame");
            cupAndBallsGame.classList.add('result-of-choice');
            cupAndBallsGame.innerHTML = '<div id="chooseCup" style="color: antiquewhite;"><p>The performer is sitting directly on the ground with a square-shaped game area formed by a crudely cut piece of wood in front of him.  On the board there are three earthenware cups and one marble-sized, brightly painted wooden ball.  The performer picks up each of the 3 cups and shows that they are each empty with nothing inside or underneath any of them.  He then turns each of the cups upside down, placing the wooden ball underneath the middle cup as he turns it over. He places the other cups to either side of it and then begins shuffling the cups around the board, mixing their positions constantly in a rapid and confusing manner until you lose track of which cup is which.  Eventually he arranges them in a horizontal line next to each other and stops moving the cups.</p><p>This is a free game being played purely for your own amusement instead of money.  No hustle, no trickery.  Just the fun of purely random luck.</p><p><br><b>Choose which cup you think the marble is underneath:</b></p> <button type="button" id="choseLeftCup" class="choiceButton" style="padding: 15px 10px; border-radius: 50%;">Left</button><button type="button" id="choseMiddleCup" class="choiceButton" style="padding: 15px 10px; border-radius: 50%;">Middle</button><button type="button" id="choseRightCup" class="choiceButton" style="padding: 15px 10px; border-radius: 50%;">Right</button><br></div>'
            bazaarBackground.appendChild(cupAndBallsGame);

            document.getElementById('choseLeftCup').addEventListener('click', leftCupChosen);
            document.getElementById('choseMiddleCup').addEventListener('click', middleCupChosen);
            document.getElementById('choseRightCup').addEventListener('click', righthandCupChosen);

        };

    };
    const bazaarEntertainment = document.getElementById('bazaarEntertainment');
    bazaarEntertainment.addEventListener('click', entertainmentTents);




    setTimeout(function() {
        document.getElementById('bazaar').remove();
        const endOfBazaar = document.createElement('div');
        endOfBazaar.classList.add('gameOver');
        endOfBazaar.setAttribute("id", "endTheBazaar");
        endOfBazaar.innerHTML = '<p>Time is up!  The bazaar has ended!</p><p>I hope you used your time wisely!<br><br></p><p>STORY TO BE CONTINUED...!</p>';
        landingPage.appendChild(endOfBazaar);
        },
        900000        // 900000 = 15 minutes.  The user has 15 minutes to explore the contents of the bazaar before it ends.
    );


};


