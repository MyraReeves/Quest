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
        emptyImage = imageResult.url;
        document.getElementById("noContent1").innerHTML = '<img src = "' + emptyImage + '"width = "40%">'
    })
}

const noContentDog = () => {
    fetch(`https://http.dog/204.jpg`)
    .then(imageResult => {
        emptyImage = imageResult.url;
        document.getElementById("noContent2").innerHTML = '<img src = "' + emptyImage + '"width = "40%">'
    })
}

const foundIt = () => {
    fetch(`https://httpgoats.com/302.jpg`)
    .then(jsonResult => {
        deniedImage = jsonResult.url;
        document.getElementById("foundIt").innerHTML = '<img src = "' + deniedImage + '"width="40%">'
    })
}

const requestDenied = () => {
    fetch(`https://http.dog/999.jpg`)
    .then(jsonResult => {
        deniedImage = jsonResult.url;
        document.getElementById("denied").innerHTML = '<img src = "' + deniedImage + '"width="40%">'
    })
}

/*  Deck of Cards:      https://www.deckofcardsapi.com/
----------------------------------------------------------------------
*/



/*  NASA Open APIs:     https://api.nasa.gov/
----------------------------------------------------------------------
Astronomy Picture of the Day = GET https://api.nasa.gov/planetary/apod
Example query:  https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
*/



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
