// Reusable async function to fetch data from url param in the function call
async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
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

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

let mainArea = document.querySelector("main");

function getPokeNumber(id) {
  if(id < 10) return `00${id}`
  if(id > 9 && id < 100) {
    return `0${id}`
  } else return id
}

/*function getPowers(arr) {
  for (let i = 0; i < array.length; i++) {
    let arrs = arr[i]    
  }
}*/

function populateDOM(single_pokemon) {
    let pokeScene = document.createElement("div")
    let pokeDiv = document.createElement("div");
    let pokeFront = document.createElement("div");
    let pokeBack = document.createElement("div");
    let name = document.createElement("h3");
    let pic = document.createElement("img");
    let powers = document.createElement("p")
    let height = document.createElement("p")
    let weight = document.createElement("p")
    let pokeId = document.createElement("p")
    let forms = document.createElement("p")

    pokeScene.setAttribute('class', 'scene')
    pokeDiv.setAttribute('class', 'card')
    pokeFront.setAttribute('class', 'card__face card__face--front')
    pokeBack.setAttribute('class', 'card__face card__face--back')
    pic.setAttribute('class', 'picDivs')
    /*height.setAttribute('class', 'details')
    weight.setAttribute('class', 'details')
    powers.setAttribute('class', 'details')*/

    let pokeNum = getPokeNumber(single_pokemon.id)

    name.textContent = capitalize(`${single_pokemon.name}`)
    height.textContent = `Height: ${single_pokemon.height}`
    powers.textContent = `Abilities: ${single_pokemon.abilities[0].ability.name}`
    weight.textContent = `Weight: ${single_pokemon.weight}`
    pokeId.textContent = `ID: ${single_pokemon.id}`
    forms.textContent = `Forms: ${capitalize(single_pokemon.forms[0].name)}`

    console.log(forms)

    pic.src = `../assets/images/${pokeNum}.png`

    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)
    pokeFront.appendChild(forms)
    pokeFront.appendChild(pokeId)

    pokeBack.appendChild(powers)
    pokeBack.appendChild(height)
    pokeBack.appendChild(weight)

    pokeDiv.appendChild(pokeFront)
    pokeDiv.appendChild(pokeBack)
    pokeScene.appendChild(pokeDiv)

    mainArea.appendChild(pokeScene)

  pokeDiv.addEventListener('click', function() {
    pokeDiv.classList.toggle('is-flipped');
  });
}


/* Add multiple abilities
Figure out best colors and designs for cards
*/