let cardList = document.querySelector(".cards");
let cards = [
  {
    title: 'Quiz App',
    url: 'https://dlarenzo.github.io/quiz-app/'
  },
  {
    title: 'Memory Game',
    url: 'https://dlarenzo.github.io/memory-game/'
  },
  {
    title: 'Product List',
    url: 'https://dlarenzo.github.io/product-list/'
  },
  {
    title: 'The Legend Club',
    url: 'https://dlarenzo.github.io/the-legend-club/'
  }
];

// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link
// Look up how to push an object to an array

let myObject = {}




//push new objects
cards.push();


//write the following code to start creating your map:

cards.map((card) => {
  console.log(card);

  let str = `<div class="card">
  <div class="card-inner">
    <div class="card-front">
      <h2>${card.title}</h2>
    </div>
    <div class="card-back">
      <a href="./zelda-club/index.html" target="_blank">${card.url}</a>
    </div>
  </div>
</div>`

  //take cardsList and use innerHTML method with this symbol (+=) then use the backticks after

  //then copy and the html card you have in your html layout

  //then instead of adding a name in between the h2 elements, include code that would make it
    //example ${card.title}
  return cardList.innerHTML += str;


})