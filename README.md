# 🧝 A Hero's Quest 🧝‍♀️

This was my final JavaScript project for the first of three JavaScript courses within earning the _**Full-Stack Development With JavaScript**_ certificate from the University of Washington.

Graded: December 2024

## 📜 Assignment

> _Your project must be interactive (i.e. must have event listeners).  The user must be able to interact with the document with the mouse or keyboard and have the document change / update._
>
> _Your project must include 4 of the 6 following features (but may include more):_
>
> * _One or more Classes (must use static methods and/or prototype methods)_
> * _Testable code (using Jasmine unit tests)_
> * _One or more timing functions_
> * _Form fields_
> * _One or more fetch requests to a 3rd party API_ 
> * _Set/update/change local storage._

## 🧙‍♂️ Features

1. **Timing functions**
    * When the user starts the game, they are presented with a welcome text introducing them to the plot of the game.  This text (above the character creation form) appears on the screen letter-by-letter using CSS.  The animation code I used would have revealed all paragraphs in a screen-high, vertical, left-to-right transition wipe fashion.  So I used a timed delay for the addition of each new paragraph to the DOM, that way letters in the next paragraph would not begin to appear until after the last word in the previous paragraph had finished appearing.

    * The project deadline prevented me from being able to implement the same CSS effect with the storyline narration that appears on later pages, but in the future I would like to do so.

    * After the user creates a character and begins the game, an unseen timer starts.  To allow users enough time to explore the bazaar, it is currently set to 15 minutes.  Once that timer reaches zero, a function is called.  Currently, that function ends gameplay with a "To Be Continued..." screen.  As future programming time allows, I intend to write better narrative text for that ending screen.  In the future, I would also like it to add in the need to find a specific item or perform a given task before the time runs out, and if the item has not been found (or task has not been completed) before the timeout function reaches zero, then the player loses the game.

2. **Contains form fields, validates those fields**
    * When the user starts the game, they are asked to fill out a character creation form.
    * Name and Race are required fields via HTML constraint validation.

3. **Classes / Objects**
    * The information selected by the user within the character creation form is inputed into a prototype Character class.  A PlayerCharacter object with more specific attributes is then created using a race-specific "extends" class that inherits from the parent prototype.  The result of this is viewable in the browser's console after the user submits the form.  The useWeapon() method is called once before that console log is sent, in order to demonstrate how much damage would be delivered by the user each time they hit with a weapon.  Eventually, I will display what each race has on the character creation page itself so that the player will know **before** choosing a race, and then I can delete showing that damage info from the console.
    * NPCs are created during the course of the game using the same group of extension classes as the Player Character.  Each new NPC object becomes visible in the console upon the user first encountering the character.  Of note is that the character Bordan the Magnificent will always be the same race as the player.  In the console log, each of the NPCs who appear in the bazaar will show zero for the amount of possible damage they can inflict with a weapon, because the useWeapon() method is never called for them within the code.  As mentioned above, the instance for the PlayerCharacter in the console was purely to allow the player to know (since no chart currently shows on the character creation screen); there didn't seem to be a need to do that for the NPCs.  In theory, the only NPC inside the bazaar who would inflict damage is Bordan's security guard, but she isn't a named character and she uses grappling instead of a weapon anyways.

4. **Third party APIs**
    * During gameplay, information is fetched from the following free API provider websites:
      * [Deck of Cards](https://www.deckofcardsapi.com/)
      * [HTTP Status Dogs](https://http.dog/)
      * [NASA Open APIs](https://api.nasa.gov/)

      ~~And the following widget:~~
~~(https://weatherwidget.org/)~~  <br>I have removed the widget from showing on the screen (but not the code) until I can get that feature working properly.  I don't intend on having it count as part of what I am turning in for the homework assigment.  I didn't want to remove it from the code completely, since the majority of remove() commands in the DOM reference its id.

    * As is visible in the AP-list.js file, in the future I would like to also use [OpenWeatherMap API](https://openweathermap.org/api) and [Zen Quotes API](https://zenquotes.io/), but I ran into complications that couldn't be overcome before the project deadline.  So they were left out for now.

    * With regards to the shell game using the "No Content"/"Found" API images, each time the "Replay" button is clicked by the user the browser chooses a brand new winning random number ("cup") needing to be guessed by the user.  Guessing correctly is due to random luck.

<br>

<br>

In additon, in the near future I also plan on adding an 'Inventory' button which the user will be able to toggle on and off via mouse clicks, to see an inventory of items they have picked up.

<br>

## 🧞‍♀️ Special Thanks To:

💖 Testing, creative input, and endless moral support received from Chris "Badger" Mackie.

❤️ Additional gameplay improvements provided by members of the Gaming channel within Cinema Therapy's Discord server.

❤️ My fellow UW students and teacher for their enthusiastic support.

### Public domain media used:

🎞️ [Pexels](https://www.pexels.com/) videos by:

* Khairul Onggon
* LayG Traveller

<br>

🖼️ [PickPik](https://www.pickpik.com/) - no source credit is given on their website to the photographers. :(

<br>

🖼️ [Pixabay](https://pixabay.com/) photos by:

* Efraimstochter
* Judi C. Bell

🔊 [Pixabay](https://pixabay.com/) music by:

* Dmitrii Spis

<br>

🖼️ [Public Domain Pictures . net](https://www.publicdomainpictures.net/en/) images by:

* Sheila Brown
* JL Field
* Linnaea Mallette
* Bobby Mikul
* Rajesh Misra
* Venita Oberholster

<br>

🖼️ [PXHere](https://pxhere.com/) - no source credit is given on their website to the photographers. :(

<br>

🔊 [SoundBible](https://soundbible.com/) sound effects by:

* Mike Koenig
* Yannick Lemieux
* Jett Rifkin

<br>

🔊 [Clideo](https://clideo.com/) - there was no mention of who the sound artist was for their music file :(
