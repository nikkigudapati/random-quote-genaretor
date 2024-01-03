            const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs" 
    },
    {
        text:"every moment is a fresh beginning.",
        author:"T.S Eliot"
    },
    {
        text:"life is like riding a bicycle.",
        author:"eistein"
        
    },
    {
        text:"not all those who wander are lost.",
        author:"tolkein"
           
    },
    // Add more quotes here
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const randomQuote = getRandomQuote();
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

newQuoteButton.addEventListener("click", displayQuote);

// Display an initial quote
displayQuote();
