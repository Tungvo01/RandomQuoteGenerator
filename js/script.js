var generate = function (){
    var qoutes = {
        "Richard Bach": "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
        "Richard Bach": "True love stories never have endings.",
        "Lao Tzu": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        "Orson Welles":"We're born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we're not alone.",
        "Marilyn Monroe": "I restore myself when I'm alone."
    }

    var authors = Object.keys(qoutes)

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = qoutes[author];


    document.getElementsByClassName("poute")[0].textContent = quote
    document.getElementsByClassName("author")[0].textContent = author
}