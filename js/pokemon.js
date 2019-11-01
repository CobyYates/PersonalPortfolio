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
const theData = getAPIData("https://pokeapi.co/api/v2/pokemon/")
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

function getPokeNumber(charURL) {
  if(id < 10) return `00${id}`
  if(id > 9 && id < 100) {
    return `0${id}`
  } else return id
}

// var card = document.querySelector('.card');
//   card.addEventListener('click', function() {
//     card.classList.toggle('is-flipped');
// });

function populateDOM(single_pokemon) {
    let pokeScene = document.createElement("div")
    let cardDiv = document.createElement("div");
    let pokeFDiv = document.createElement("div");
    let pokeBDiv = document.createElement("div");
    let name = document.createElement("h3");
    // let height = document.createElement("p");
    let pic = document.createElement("img");

    // let pokeNum = getCharNumber(single_pokemon.url);
    /* pic.setAttribute("class", "photo");
      pokeFDiv.setAttribute("class", "card");*/
    cardDiv.className = "card";
    pokeFDiv.className = "card__face card__face--front";
    pokeBDiv.className = "card__face card__face--back";

    let pokeNum = getPokeNumber(single_pokemon.id)

    name.textContent = `${single_pokemon.name}`
    height.textContent = single_pokemon.height
    // pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${charNum}.png`;
    pic.src = `../assets/images/00${pokeNum.id}.png`

    cardDiv.appendChild(pokeBDiv);
    pokeFDiv.appendChild(pic);
    cardDiv.appendChild(pokeFDiv);
    pokeBDiv.appendChild(name);
    pokeBDiv.appendChild(height);

    mainArea.appendChild(pokeScene);
}
