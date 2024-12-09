characterName = "----"

/*  HTTP Status Dogs:    https://http.dog/
----------------------------------------------------------------------
No Content dog = https://http.dog/204
No Content cat = https://httpcats.com/204
Found goat = https://httpgoats.com/302

Request Denied dog = https://http.dog/999

This is fine dog = https://http.dog/218

Teapot cat = https://httpcats.com/418

Not Found fish = https://http.fish/404
Not Found goat = https://httpgoats.com/404

Not Acceptable goat = https://httpgoats.com/406
*/

const noContentCat = () => {
    fetch(`https://httpcats.com/204.jpg`)
    .then(imageResult => {
        document.getElementById("noContent1").classList.add('result-of-choice');
        emptyImage = imageResult.url;
        document.getElementById("noContent1").innerHTML = '<img src = "' + emptyImage + '"width = "40%">'
    })
};

const noContentDog = () => {
    fetch(`https://http.dog/204.jpg`)
    .then(imageResult => {
        document.getElementById("noContent2").classList.add('result-of-choice');
        emptyImage = imageResult.url;
        document.getElementById("noContent2").innerHTML = '<img src = "' + emptyImage + '"width = "40%">'
    })
};

const foundIt = () => {
    fetch(`https://httpgoats.com/302.jpg`)
    .then(imageResult => {
        document.getElementById("foundIt").classList.add('result-of-choice');
        foundItImage = imageResult.url;
        document.getElementById("foundIt").innerHTML = '<img src = "' + foundItImage + '"width="40%">'
    })
};

const requestDenied = () => {
    fetch(`https://http.dog/999.jpg`)
    .then(imageResult => {
        document.getElementById("denied").classList.add('result-of-choice');
        deniedImage = imageResult.url;
        document.getElementById("denied").innerHTML = '<img src = "' + deniedImage + '"width="40%">'
    })
};




/*  Deck of Cards:      https://www.deckofcardsapi.com/
----------------------------------------------------------------------
Shuffle cards:  https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
(The above will contain a deck_id)

Draw a Card:    https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
(The count will be the number of cards drawn)
The above will contain:     value   suit    image
Tip from website:  replace <<deck_id>> with "new" to create a shuffled deck and draw cards from that deck in the same request.

Back of Card Image: https://www.deckofcardsapi.com/static/img/back.png
*/
const backOfCard = () => {
    fetch(`https://www.deckofcardsapi.com/static/img/back.png`)
    .then(imageResult => {
        cardBack = imageResult.url;
        document.getElementById("backOfCard").classList.add('result-of-choice');
        document.getElementById("backOfCard").innerHTML = '<p>As the ---- hurries away, you notice two playing cards laying haphazardly on the ground where he had been standing.</p>  <p>It seems that he accidentally dropped them. <br></p> <div style = "margin: 0 25%;"> <img src = "' + cardBack + '"> &emsp; <img src = "' + cardBack + '"alt = "Two playing card backs decorated with intricate and complex black and white geometric patterns"> </div>'
    })
    .catch(error => console.log(error));
};

const generateTwoCards = () => {
    fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=2`)
    .then(response => response.json())
    .then(results => {
        document.getElementById("generateTwoCards").classList.add('result-of-choice');
        const twoCards = results.cards;
        let cards = ""
        for (let i = 0; i < 2; i++) {
        cards += '<img src="' + twoCards[i].image + '" alt="Image of a ' + twoCards[i].value + " of " + twoCards[i].suit + '"> &emsp;';
        }
        document.getElementById("generateTwoCards").innerHTML = '<p>You flip the cards over to look at them, and this is what you see... <br></p><div style = "margin: 0 25%;">' + cards + '</div>';
    })
    .catch(error => console.log(error));
};




/*  NASA Open APIs:     https://api.nasa.gov/
----------------------------------------------------------------------
Astronomy Picture of the Day = GET https://api.nasa.gov/planetary/apod
Example query:  https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
*/
const cosmos = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => response.json())
    .then(results => {
        document.getElementById("cosmos").classList.add('result-of-choice');
        const dailyImage = results.url;
        const altText = results.title;
        document.getElementById("cosmos").innerHTML = '<p>You pay the fortune teller and sit down.<br><br> She smiles and says, <i>"Hello, ' + characterName + '.  I\'ve been waiting for you."</i> &nbsp; From beneath the table cloth draped over her counter, she removes a crystal ball and invites you to stare deep into the swirling, dark green clouds within it. &nbsp; <i>"Clear your mind and focus only on what is within,"</i> she instructs. . . <br><br>. . . As you focus, the sounds of the bazaar fade and everything else around you drops <br>away. . .  <br><br>. . . To your amazement the clouds within the ball suddenly flash a blinding, neon shade of purple and then slowly part! The following mysterious vision is revealed to you : <br><br></p><img src = "' + dailyImage + '" style = "border-radius: 50%; overflow: hidden; width: 400px; height: 400px; border: 2px solid black; display: block; margin: 0 auto;" alt="Image of ' + altText + '">'
        
        // let picture = ""
        // for (let i = 0; i < 2; i++) {
        // picture += '<img src="' + dailyImage[i].image + '" alt="Image of a ' + twoCards[i].value + " of " + twoCards[i].suit + '"> &emsp;';
        // }
        // document.getElementById("cosmos").innerHTML = '<p>You stare deep into the swirling clouds... <br></p>' + picture;
    })
    .catch(error => console.log(error));
};


/*  Weather APIs:
----------------------------------------------------------------------
OpenWeatherMap:   https://openweathermap.org/api
Meteoblue weather:   https://www.meteoblue.com/en/user/login/index
*/
const currentWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=482fa0d7b1ec8b6fd90f126818b8698f`)
    .then(response => response.json())
    // document.getElementById("weather").innerHTML = "Cloudy with a chance of meatballs!  Dun dun duuuuunnnnn!";

    // .catch(error => console.log(error));
}



// formEl.addEventListener('click', function(e) {
//     e.preventDefault();
  
//     const year = yearEl.value;
//     const month = monthEl.value;
//     const date = dateEl.value;
  
//     // Fetch bestselling books for date and add top 5 to page:
//   fetch(`https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction/overview.json?api-key=${myKey}`)
//   .then(response => response.json())
//   .then(data => {const allBooks = data.results.books;
//     let text = ""
//     for (let i = 0; i < 5; i++) {
//       text += "Title: " + allBooks[i].title + "<br> Author(s): " + allBooks[i].author + "<br> Description: " + allBooks[i].description + '<br> <img src="' + allBooks[i].book_image + '" alt="Image of the book cover" width="200" height="300"><br><br>';
//     }
//     document.getElementById("books-container").innerHTML = text;
//   })
//   .catch(error => console.log(error));
  
//   });



/*   Zen Quotes API:    https://zenquotes.io/
----------------------------------------------------------------------
Instructions:       https://docs.zenquotes.io/zenquotes-documentation/

https://zenquotes.io/api/[mode]/[key]?option1=value&option2=value
[mode] = Retrieval type [quotes, today, author, random]. REQUIRED.
[key] = **OPTIONAL**  API key for use with premium subscriptions
[options] = **OPTIONAL**  Additional options

Instructions for How to Fetch Quotes for your Website or App ( https://zenquotes.io/api/quotes/[your_key] ):
    "This is the most efficient way for developers to load random quotes. Use the standard [quotes] API call and store the results as a variable in your project. This will keep a cache of quotes that you can loop locally rather than calling the server each time you want to display a new quote.

    After a set interval (an hour or so), call the ZenQuotes API again to refresh your local app cache. Using this method will keep load times down and free up resources for others as your user base increases. In the event the API service is unavailable, you will still have an available data set in your app to pull from."
*/
