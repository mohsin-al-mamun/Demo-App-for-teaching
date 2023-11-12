const arrayOfQuotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing. ",
    author: "Walt Disney",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams. ",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ",
    author: "Oprah Winfrey",
  },
  {
    quote: "You must be the change you wish to see in the world. ",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier. ",
    author: "Mother Teresa",
  },
  {
    quote: "The only thing we have to fear is fear itself. ",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Do one thing every day that scares you. ",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "If someone hits you, don't hit them back. Show mercy and keep patience. When opportunity comes, hit them too harder ",
    author: "Mohsin Al - Mamun",
  },
  {
    quote: "Well done is better than well said. ",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: " Aristotle",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail. ",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Be yourself; everyone else is already taken. ",
    author: "Oscar Wilde",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated",
    author: "Maya Angelou",
  },
];

const quotationsArray = [
  {
    author: "Steve Jobs",
    quotation: "The only way to do great work is to love what you do.",
    wikiLink: "https://en.wikipedia.org/wiki/Steve_Jobs",
  },
  {
    author: "Winston Churchill",
    quotation:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    wikiLink: "https://en.wikipedia.org/wiki/Winston_Churchill",
  },
  {
    author: "Steve Jobs",
    quotation:
      "Your time is limited, don't waste it living someone else's life.",
    wikiLink: "https://en.wikipedia.org/wiki/Steve_Jobs",
  },
  {
    author: "Sun Tzu",
    quotation: "In the midst of chaos, there is also opportunity.",
    wikiLink: "https://en.wikipedia.org/wiki/Sun_Tzu",
  },
  {
    author: "Nelson Mandela",
    quotation:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    wikiLink: "https://en.wikipedia.org/wiki/Nelson_Mandela",
  },
  {
    author: "Theodore Roosevelt",
    quotation: "Believe you can and you're halfway there.",
    wikiLink: "https://en.wikipedia.org/wiki/Theodore_Roosevelt",
  },
  {
    author: "John Lennon",
    quotation: "Life is what happens when you're busy making other plans.",
    wikiLink: "https://en.wikipedia.org/wiki/John_Lennon",
  },
  {
    author: "Tony Robbins",
    quotation: "The only impossible journey is the one you never begin.",
    wikiLink: "https://en.wikipedia.org/wiki/Tony_Robbins",
  },
  {
    author: "Stephen King",
    quotation: "Get busy living or get busy dying.",
    wikiLink: "https://en.wikipedia.org/wiki/Stephen_King",
  },
  {
    author: "Brian Tracy",
    quotation:
      "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    wikiLink: "https://en.wikipedia.org/wiki/Brian_Tracy",
  },
  {
    author: "Jordan Belfort",
    quotation:
      "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    wikiLink: "https://en.wikipedia.org/wiki/Jordan_Belfort",
  },
  {
    author: "Ralph Waldo Emerson",
    quotation:
      "The only person you are destined to become is the person you decide to be.",
    wikiLink: "https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson",
  },
  {
    author: "Bo Bennett",
    quotation: "Success is not in what you have, but who you are.",
    wikiLink: "https://en.wikipedia.org/wiki/Bo_Bennett",
  },
  {
    author: "Franklin D. Roosevelt",
    quotation:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    wikiLink: "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt",
  },
  {
    author: "Muhammad Ali",
    quotation: "Don't count the days, make the days count.",
    wikiLink: "https://en.wikipedia.org/wiki/Muhammad_Ali",
  },
  {
    author: "Eleanor Roosevelt",
    quotation:
      "The future belongs to those who believe in the beauty of their dreams.",
    wikiLink: "https://en.wikipedia.org/wiki/Eleanor_Roosevelt",
  },
  {
    author: "Martin Luther King Jr.",
    quotation:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    wikiLink: "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.",
  },
  {
    author: "Epictetus",
    quotation:
      "It's not what happens to you, but how you react to it that matters.",
    wikiLink: "https://en.wikipedia.org/wiki/Epictetus",
  },
  {
    author: "Charles Kingsleigh",
    quotation:
      "The only way to achieve the impossible is to believe it is possible.",
    wikiLink: "https://en.wikipedia.org/wiki/Charles_Kingsleigh",
  },
  {
    author: "William Butler Yeats",
    quotation:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    wikiLink: "https://en.wikipedia.org/wiki/William_Butler_Yeats",
  },
  {
    author: "Peter Drucker",
    quotation: "The best way to predict the future is to create it.",
    wikiLink: "https://en.wikipedia.org/wiki/Peter_Drucker",
  },
  {
    author: "Vince Lombardi",
    quotation:
      "It's not whether you get knocked down, it's whether you get up.",
    wikiLink: "https://en.wikipedia.org/wiki/Vince_Lombardi",
  },
  {
    author: "Florence Nightingale",
    quotation:
      "I attribute my success to this: I never gave or took any excuse.",
    wikiLink: "https://en.wikipedia.org/wiki/Florence_Nightingale",
  },
  {
    author: "Sam Levenson",
    quotation: "Don't watch the clock; do what it does. Keep going.",
    wikiLink: "https://en.wikipedia.org/wiki/Sam_Levenson",
  },
  {
    author: "Wayne Gretzky",
    quotation: "You miss 100% of the shots you don't take.",
    wikiLink: "https://en.wikipedia.org/wiki/Wayne_Gretzky",
  },
  {
    author: "Helen Keller",
    quotation: "Life is either a daring adventure or nothing at all.",
    wikiLink: "https://en.wikipedia.org/wiki/Helen_Keller",
  },
  {
    author: "Dalai Lama",
    quotation: "The purpose of our lives is to be happy.",
    wikiLink: "https://en.wikipedia.org/wiki/Dalai_Lama",
  },
  {
    author: "Charles Darwin",
    quotation:
      "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    wikiLink: "https://en.wikipedia.org/wiki/Charles_Darwin",
  },
];

export { arrayOfQuotes };
