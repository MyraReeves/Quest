# 🧝 A Hero's Quest 🧝‍♀️

This was the final JavaScript project for the first of three JavaScript courses within earning the _**Full-Stack Development With JavaScript**_ certificate from the University of Washington.

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

    * After the user creates a character and begins the game, an unseen timer starts.  To allow users enough time to explore the bazaar, is currently set to 15 minutes.  Once that timer reaches zero, a function is called.  Currently, that function ends gameplay with a "To Be Continued..." screen.  As programming time allows, I intend to write better narrative text for that ending screen.  In the future, I would also like it to add in the need to find a specific item or perform a given task before the time runs out, and if the item has not been found (or task has not been completed) before the timeout function reaches zero, then the player loses the game.

2. **Contains form fields, validates those fields**
    * When the user starts the game, they are asked to fill out a character creation form.
    * Name and Race are required fields via HTML constraint validation.

3. **Classes / Objects**
    * The information selected by the user within the character creation form is inputed into a prototype Character class.  A PlayerCharacter object with more specific attributes is then created using a race-specific "extends" class that inherits from the parent prototype.  The result of this is viewable in the browser's console after the user submits the form.  The useWeapon() method is called once before that console log is sent, in order to demonstrate how much damage would be delivered by the user each time they hit with a weapon.
    * NPCs are created during the course of the game using the same group of extension classes.  Each new NPC object becomes visible in the console upon the user first encountering the character.  Each of the NPCs listed in the console for the bazaar will report that zero amount of damage is inflicted by them, because the useWeapon() method is never called for them in the code.  In theory, the only NPC who would inflict damage is Bordan's security guard, but she isn't a named character and she uses grappling instead of a weapon anyways.

4. **Third party APIs**
    * During gameplay, information is fetched from the following free API provider websites:
      * [Deck of Cards](https://www.deckofcardsapi.com/)
      * [HTTP Status Dogs](https://http.dog/)
      * [NASA Open APIs](https://api.nasa.gov/)
    * And the following widget:
      * [Weather Widget](https://weatherwidget.org/)

    * As is visible in the AP-list.js file, in the future I would like to also use [OpenWeatherMap API](https://openweathermap.org/api) and [Zen Quotes API](https://zenquotes.io/), but I ran into complications that couldn't be overcome before the project deadline.  So they were left out for now.

    * With regards to the shell game using the "No Content"/"Found" API images, each time the "Replay" button is clicked by the user the browser chooses a brand new winning random number ("cup") needing to be guessed by the user.  Guessing correctly is due to random luck.

5. **Sound effects**

   * To be added in the near future!

<br>

<br>

In additon, in the near future I also plan on adding an 'Inventory' button which the user will be able to toggle on and off via mouse clicks, to see an inventory of items they have picked up.
