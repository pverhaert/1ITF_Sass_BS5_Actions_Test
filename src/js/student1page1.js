// Author:

// use async/await to fetch a random quote from the quotable API and display it on the page
async function getQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    document.getElementById('quote').textContent = data.content;
}
// run the function every 5 seconds
getQuote();
setInterval(getQuote, 10000);

