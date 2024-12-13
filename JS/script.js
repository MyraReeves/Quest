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
    const weatherButton = '<div id = "weatherButton"></div>'
    // const weatherWidget = '<div id="ww_cf581cbb2c2a8" v=\'1.3\' loc=\'id\' a=\'{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl4025"],"font":"Arial","sl_ics":"one_a","sl_sot":"fahrenheit","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_nme":3,"el_phw":3,"el_whr":3}\'><a href="https://weatherwidget.org/" id="ww_cf581cbb2c2a8_u" target="_blank">HTML Weather Widget for website</a></div><script async src="https://app3.weatherwidget.org/js/?id=ww_cf581cbb2c2a8"></script>';
    // bazaarBackground.innerHTML = weatherWidget;
    bazaarBackground.innerHTML = weatherButton;
    landingPage.appendChild(bazaarBackground);


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
        entranceToBazaar.innerHTML = '<p><br>You have returned back to the central hub of the evening market.<br></p>    <img src="./Images/from_pickpikDOTcom_souk-discount-bazaar-alley-thumb.jpg" alt="A pathway thru piles of goods underneath a canvas roof">  <br><br><br>   <div id="bazaarButtons"><p>Go to:</p><button type="button" id="bazaarFood" class="choiceButton">Food Vendors</button> &emsp; <button type="button" id="bazaarMerchants" class="choiceButton">Merchant Tents</button> &emsp; <button type="button" id="bazaarEntertainment" class="choiceButton">Entertainment Zone</button></div>';
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



    /* ========================================================================================
    |                               BAZAAR - MERCHANT TENTS                                    |
    |==========================================================================================
    */
    const merchantVendors = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        const merchantZone = document.createElement('div');
        merchantZone.classList.add('textArea');
        merchantZone.setAttribute("id", "merchant-zone");
        merchantZone.innerHTML = '<p>Merchants fill the bulk of the outdoor market and encircle most of its perimeter, with some of the wealthiest vendors using semi-permanent structures directly against the outside of the city\'s walls to facilitate their trade. The area is alive with people shuffling hither and yon, and the sound of craftspeople hawking their wares rings through the brisk night air. Stalls offering every manner of goods litter the borders of the pathways, everything from beautiful jewelry to carpentry tools. From weaponry to painted vases, there is a sense that anything in the known world could be found in this market, if you have the coin to pay for it.<br><br></p>      <img src="./Images/merchants_tiny-from-pxfuelDOTcom.jpg" alt="Small image of various metal and fabric goods piled up against stone walls in an outdoor marketplace, with a path leading thru the middle">    <p>A psychic with long flowing hair and a glittering black cloak calls out to you as you pass by her prophesies stall.  She bids you come have your fortune read.<br><br></p>    <div id="bazaarButtons"><button type="button" id="agnesNutter" class="choiceButton">Visit the Fortune Teller</button><button type="button" id="supplies" class="choiceButton">Buy Supplies</button><button type="button" id="otherStalls" class="choiceButton">Browse Small Merchandise Stalls</button></div>';
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
        const fortuneTellerRace = 'Human';
        const fortuneTellerGender = 'Female';
        const fortuneTeller = new Human('FORTUNE TELLER', fortuneTellerName, fortuneTellerRace, fortuneTellerGender);
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
            listenToAgnes.innerHTML = '<p>You pay the fortune teller and sit down at her counter.</p><p>She smiles warmly at you and says, <i>"Hello, ' + playerCharacter.name + '.  I\'ve been waiting for you."</i> &nbsp; From beneath the velvet tablecloth draped over her counter, she removes a crystal ball and invites you to stare deep into the swirling, dark green clouds within it. &nbsp; <i>"Clear your mind and focus only on what is within,"</i> she instructs. . . </p><p>As you focus, the sounds of the bazaar fade from behind you and everything else around you drops away. . . &nbsp; . . . To your amazement the clouds within the ball suddenly flash a blinding, neon shade of purple and then slowly part! The following mysterious vision is revealed to you : <br></p><img src = "' + dailyImage + '" style = "border-radius: 50%; overflow: hidden; width: 400px; height: 400px; border: 2px solid black; display: block; margin: 0 auto;" alt="Image of ' + altText + '"><div id="bazaarButtons"><br><button type="button" id="ponder" class="choiceButton">Ponder the meaning of this vision</button><br><br><button type="button" id="supplies" class="choiceButton">Thank her and then <br>leave to go buy supplies</button><button type="button" id="otherStalls" class="choiceButton">What a waste of time!<br>Hurry off to the small merchandise stalls</button><button type="button" id="backToEntrance" class="choiceButton">Leave merchant area</button></div>'
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
        // TO DO
        // What a Nutter! <br>
    };



    ////////////////////////////
    //      BUY SUPPLIES     //
    //////////////////////////
    const buySupplies = () => {
        document.getElementById("weatherButton").nextSibling.remove();
    };


    ////////////////////////////
    //      SMALL STALLS     //
    //////////////////////////
    const smallStalls = () => {
        document.getElementById("weatherButton").nextSibling.remove();
        // Chat & Listen In On Others
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
        entertainmenttZone.innerHTML = '<p>Multi-colored canvas tents gently sway in the night breeze, carrying a colorful cacophony of cheerful sounds. Musical notes drift into the night air, mixing above the hard-packed earth to form its own unique song.  Scattered between the small tents, open-air wooden stage platforms offer entertainment for all walks of life. Bards and poets tell tales of beauty and love lost, circus performers dazzle onlookers with their acrobatic feats, and vagrants and drunkards wander through the crowd proclaiming their laments.</p>       <img src="./Images/bazaar_entertainers1.jpg" alt="Two musicians in turbans and robes sit in front of the sunset playing stringed instruments"><img src="./Images/bazaar_entertainers2.jpg" alt="A green skinned juggler performs on a nautical-themed stage"><img src="./Images/bazaar_entertainers3-1.jpg" alt="A bare-chested man covered in tribal markings holds a column of fire"><img src="./Images/bazaar_entertainers4.jpg" alt="The silhouette of an aerial acrobat posed high in the air in front of the sunset"><img src="./Images/bazaar_entertainers3-2.jpg" alt="A figure dances in front of a line of fire"><img src="./Images/bazaar_entertainers6.jpg" alt="An old male musician with interesting hair and robes plays a large, wooden, stringed instrument">    <p>In the center of the dusty area there sits an eye-catching tent, larger than the rest and lavishly decorated in a bold combination of shimmering gold and dark velvet. Against the starry sky, this tent is a mountain of exotic fabrics and torch light, standing in stark contrast to the darkness above.</p><br><br>      <div id="bazaarButtons"><button type="button" id="bordanTent" class="choiceButton">Enter the tent</button><button type="button" id="shellGame" class="choiceButton">Visit gaming area</button><button type="button" id="watchShow" class="choiceButton">Attend a show</button></div>';
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
                openTent.innerHTML = '<img src = "' + deniedImage + '" style = "margin: 0 30%; width: 40%;"><p>As you reach out your hand to pull back the entrance flap, an angry voice barks, <i>"Can\'t you see the sign!?!"</i></p><p>A muscular dwarf dressed in armor labeled \'Security\' on the chest grabs your wrist and steps in front of the entrance.  Stabbing a stubby finger towards a small hanging sign on the side of the tent, she continues, <i>"Bordan the Magnificent is currently on his break in between performances!  Check back again later if you want to see his show!"</i></p><p>Judging by her angry glare, it is probably best to follow her advice instead of making a scene.</p><br><br>  <div id="bazaarButtons"><button type="button" id="fight" class="choiceButton">Argue with her anyways.<br>No one tells YOU what to do!</button><button type="button" id="shellGame" class="choiceButton">Visit gaming area</button><button type="button" id="watchShow" class="choiceButton">Attend a show</button><button type="button" id="backToEntrance" class="choiceButton">Leave entertainment area</button></div>'
                bazaarBackground.appendChild(openTent);

                document.getElementById('fight').addEventListener('click', fightDwarf);
                document.getElementById('watchShow').addEventListener('click', attendAShow);
                document.getElementById('shellGame').addEventListener('click', introToShellGame);
                document.getElementById('backToEntrance').addEventListener('click', returnToEntrance);
            })
        };
        const bordanTentClosed = document.getElementById('bordanTent');
        bordanTentClosed.addEventListener('click', enterBordanTent);

        // const goBackToEntrance = document.getElementById('backToEntrance');
        // goBackToEntrance.addEventListener('click', returnToEntrance);

        const fightDwarf = () => {

        };


        ///////////////////////////
        //      SHOW TENT       //
        /////////////////////////
        const attendAShow = () => {
            document.getElementById("weatherButton").nextSibling.remove();
            const acrobats = document.createElement('div');
            acrobats.setAttribute("id", "acrobatShow");
            acrobats.classList.add('textArea');
            acrobats.innerHTML = '<p class="non-gameplay-notes">Move along! Move along! Nothing to see here! <br> [This is purely a text area for storyline content that is unrelated to this first homework assignment. Since the plot of rescuing your sister is NOT relevant to this homework assignment this page\'s narrative text will be filled in AFTER this homework assignment has been completed.]<br><br><br></p><div id="bazaarButtons"><button type="button" id="bordanTent" class="choiceButton">Visit that eye-catching<br>gold and velvet draped tent</button><button type="button" id="shellGame" class="choiceButton">Visit gaming area</button><button type="button" id="backToEntrance" class="choiceButton">Leave the entertainment zone</button><br></div>'
            bazaarBackground.appendChild(acrobats);

            document.getElementById('bordanTent').addEventListener('click', enterBordanTent);
            document.getElementById('shellGame').addEventListener('click', introToShellGame);
            document.getElementById('backToEntrance').addEventListener('click', returnToEntrance);
        };
        document.getElementById('watchShow').addEventListener('click', attendAShow);



        ///////////////////////////
        //      SHELL GAME      //
        /////////////////////////
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
            leaving.innerHTML = '<p>That is a smart choice! Your time is better spent elsewhere.  You came here to rescue your sister, NOT to play games!</p><p>Where to next?</p><div id="bazaarButtons"><button type="button" id="bordanTent" class="choiceButton">Visit that eye-catching<br>gold and velvet draped tent</button><br><br><button type="button" id="watchShow" class="choiceButton">Attend a show</button><br><br><br><button type="button" id="backToEntrance" class="choiceButton">Leave the entertainment zone</button><br></div>'
            bazaarBackground.appendChild(leaving);

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

                        document.getElementById('playAgain').addEventListener('click', repeatShellGame);
                        document.getElementById('leave').addEventListener('click', leaveShellGame);
                    });
                }
            };

            const cupAndBallsGame = document.createElement('div');
            cupAndBallsGame.setAttribute("id", "containerForShellGame");
            cupAndBallsGame.classList.add('result-of-choice');
            cupAndBallsGame.innerHTML = '<div id="chooseCup" style="color: antiquewhite;"><p>The performer is sitting directly on the ground with a square-shaped game area formed by a crudely cut piece of wood laid in front of him.  On the board there are three earthenware cups and one marble-sized, brightly painted wooden ball.  The performer picks up each of the 3 cups and shows that they are each empty with nothing inside or underneath any of them.  He then turns each of the cups upside down, placing the wooden ball underneath the middle cup as he turns it over. He places the other cups to either side of it and then begins shuffling the cups around the board, mixing their positions constantly in a rapid and confusing manner until you lose track of which cup is which.  Eventually he arranges them in a horizontal line next to each other and stops moving the cups.</p><p>He reassures you that this is a game being played purely for your own amusement instead of money.  No hustle, no trickery.  Just the fun of purely random luck.</p><p><br><b>Choose which cup you think the marble is underneath:</b></p> <button type="button" id="choseLeftCup" class="choiceButton" style="padding: 15px 10px; border-radius: 50%;">Left</button><button type="button" id="choseMiddleCup" class="choiceButton" style="padding: 15px 10px; border-radius: 50%;">Middle</button><button type="button" id="choseRightCup" class="choiceButton" style="padding: 15px 10px; border-radius: 50%;">Right</button><br></div>'
            bazaarBackground.appendChild(cupAndBallsGame);

            document.getElementById('choseLeftCup').addEventListener('click', leftCupChosen);
            document.getElementById('choseMiddleCup').addEventListener('click', middleCupChosen);
            document.getElementById('choseRightCup').addEventListener('click', righthandCupChosen);

        };

    };

    const bazaarEntertainment = document.getElementById('bazaarEntertainment');
    bazaarEntertainment.addEventListener('click', entertainmentTents);



};





