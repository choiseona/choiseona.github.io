const quotes = [
  {
    quote: "Happiness is a warm puppy.",
    author: "Charles M. Schulz",
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "This too shall pass.",
    author: "Et hoc transibit",
  },
  {
    quote: "You'll never find a rainbow if you're looking down.",
    author: "Charlie Chaplin",
  },
  {
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley",
  },
  {
    quote: "Drive thy vusiness; let it not drive thee.",
    author: "Benjamin Franklin",
  }
  ,{
    quote: "Some can stay longer in an hour than others can in a week.",
    author: "William Dean Howells",
  },
  {
    quote: "If I haver lost confidence in myselft, I haver the universe against me.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "I'd rather be hated for who I am than be loved for who I'm not.",
    author: "Kurt Cobain",
  },
  {
    quote: "He who would travel happyily must travel light.",
    author: "Antoine de Saint-Exupery",
  }
]

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;