// Reusable async function to fetch data from url param in the function call
async function getPokemonData(url) {
    try {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.name)
    console.log(data)
    populateDOM(data.results)
    } catch(error) {
        console.error(error)
    }
}

const data = getPokemonData('https://pokeapi.co/api/v2/pokemon/')

console.log(data)

let mainArea = document.querySelector("main");

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf("/");
    let charID = charURL.substring(end - 2, end);
    if (charID.indexOf("/") !== -1) {
      return `00${charID.slice(1, 2)}`
    } else {
      return `0${charID}`;
    }
  }

// var card = document.querySelector('.card');
//   card.addEventListener('click', function() {
//     card.classList.toggle('is-flipped');
// });


function populateDOM(pokeArray) {
    pokeArray.forEach(pokemon => {
      let cardDiv = document.createElement("div")
      let pokeFDiv = document.createElement("div");
      let pokeBDiv = document.createElement("div")
      let name = document.createElement("h3")
      let pic = document.createElement("img");

      let charNum = getCharNumber(pokemon.url);
      /* pic.setAttribute("class", "photo");
      pokeFDiv.setAttribute("class", "card");*/
      cardDiv.className = "card"
      pokeFDiv.className = "card__face card__face--front"
      pokeBDiv.className = "card__face card__face--back"

      name.textContent = pokemon.name
      pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${charNum}.png`

      cardDiv.appendChild(pokeBDiv)      
      pokeFDiv.appendChild(pic);
      cardDiv.appendChild(pokeFDiv)
      pokeBDiv.appendChild(name);

      mainArea.appendChild(cardDiv);
    });
}

var card = document.querySelector('.card');
  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});