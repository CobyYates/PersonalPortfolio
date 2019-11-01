// Reusable async function to fetch data from url param in the function call
async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    // console.log(data.name)
    // console.log(data)
  } catch (error) {
    console.error(error);
  }
}

// now, use the returned async data
const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
.then(data => {
      for (const pokemon of data.results) {
        getAPIData(pokemon.url)
        .then(pokeData => {
          populateDOM(pokeData)
        })
      }
  }
);

let mainArea = document.querySelector("main");

function getPokeNumber(id) {
  if(id < 10) return `00${id}`
  if(id > 9 && id < 100) {
    return `0${id}`
  } else return id
}

var card = document.querySelector('.card');
  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});

function populateDOM(single_pokemon) {
    let pokeScene = document.createElement("div")
    let pokeDiv = document.createElement("div");
    let pokeFDiv = document.createElement("div");
    let pokeBDiv = document.createElement("div");
    let name = document.createElement("h3");
    let pic = document.createElement("img");

    pokeScene.setAttribute('class', 'scene')
    pokeDiv.setAttribute('class', 'card')
    pokeFDiv.setAttribute('class', 'card__face card__face--front')
    pokeBDiv.setAttribute('class', 'card__face card__face--back')
    pic.setAttribute('class', 'picDivs')

    let pokeNum = getPokeNumber(single_pokemon.id)

    name.textContent = `${single_pokemon.name}`

    pic.src = `../assets/images/${pokeNum}.png`

    pokeFDiv.appendChild(pic)
    pokeFDiv.appendChild(name)

    // pokeBDiv.appendChild(height)
    // pokeBDiv.appendChild(height)

    pokeDiv.appendChild(pokeFDiv)
    pokeDiv.appendChild(pokeBDiv)
    pokeScene.appendChild(pokeDiv)

    mainArea.appendChild(pokeScene)
}
