# Quest

This was the final JavaScript project for the first of three JavaScript classes within earning the _**Full-Stack Development With JavaScript**_ certificate from the University of Washington.

Graded: December 2024

## 📜 Assignment Description

> _Your project must be interactive (i.e. must have event listeners).  The user must be able to interact with the document with the mouse or keyboard and have the document change / update._
>
> _Your project must include 4 of the 6 following features (but may include more):_
>
>_One or more Classes (must use static methods and/or prototype methods), testable code (using Jasmine unit tests), one or more timing functions, form fields, one or more fetch requests to a 3rd party API, and set/update/change local storage._

## 🧙‍♂️ Features

1. **Timing functions**
    * When the user starts the game, they are presented with a welcome text introducing them to the plot of the game.  This text (above the character creation form) appears on the screen letter-by-letter using CSS.  The animation code I used would have revealed all paragraphs in a left-to-right transition wipe fashion.  So I used a timed delay for the addition of each new paragraph to the DOM, that way letters in the next paragraph would not begin to appear until after all words in the previous paragraph had completely finished appearing.

    * After the user creates a character they are tasked with finding an item. An unseen timer starts at that point.  Once that timer reaches zero, a function is called.  If the user has not found the requested item by then, the user loses the game and the game ends.

2. **Contains form fields, validates those fields**
    * When the user starts the game, they are asked to fill out a character creation form.

3. **Classes / Objects**
    * The information selected by the user within the character creation form is inputed into a character creation class to create their character object.

4. **Third party APIs**
    * During gameplay, information is fetched from the following free API provider websites:

5. Sets, updates, or changes local storage

6. Testable code
