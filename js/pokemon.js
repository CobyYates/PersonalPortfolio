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


function populateDOM(pokeArray) {
    pokeArray.forEach(pokemon => {
        let pokeDiv = document.createElement("div");
        let name = document.createElement("h3")
        let pic = document.createElement("img");

        let charNum = getCharNumber(pokemon.url);
        // pic.setAttribute("class", "photo");
        pokeDiv.setAttribute("class", "card");

        name.textContent = pokemon.name

        pic.src = `https://github.com/fanzeyi/pokemon.json/blob/master/images/${charNum.id}.png`
        // '../images/${pokemon.id}.png'

        pokeDiv.appendChild(name);
        pokeDiv.appendChild(pic);

        mainArea.appendChild(pokeDiv);
    });
}