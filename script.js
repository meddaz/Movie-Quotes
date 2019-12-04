var quotes = [
    `"Frankly, my dear, I don't give a damn." - Gone with the Wind`,
    `"I'm gonna make him an offer he can't refuse." - The Godfather`,
    `"Here's looking at you, kid." - Casablanca`,
    `"Fasten your seatbelts. It's going to be a bumpy night." - All About Eve`,
    `"What we've got here is failure to communicate." - Cool Hand Luke`,
    `"You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am." - On the Waterfront`,
    `"May the Force be with you." - Star Wars`,
    `"All right, Mr. DeMille, I'm ready for my close-up." - Sunset Blvd.`,
    `"I have always depended on the kindness of strangers." - A Streetcar Named Desire`,
    `"I love the smell of napalm in the morning." - Apocalypse Now`
];

function newQuote() {
    var randomize = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('display').innerHTML = randomize;
}