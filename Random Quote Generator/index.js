const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can achieve it. - Zig Ziglar",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",    
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",   
    "It does not matter how slowly you go as long as you do not stop. - Confucius"
]

const quoteTag = document.getElementById("quote");
// quoteTag.innerText = "hellow world";
let usedIndex = new Set();

function generateQuote() {
    if (usedIndex.size >= quotes.length) {
        usedIndex.clear();
    }

    while(true){
    const randomIdx = Math.floor(Math.random()*(quotes.length));
    if (usedIndex.has(randomIdx)) continue; // start again while loop from here
    // else
    const quote = quotes[randomIdx]
    quoteTag.innerHTML = quote;
    usedIndex.add(randomIdx);
    break;
    }
     
}