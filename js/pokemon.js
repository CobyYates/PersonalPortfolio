/*
TO DO
-Filtering by type colors on top
- Add button effects
- Add multiple types/abilities (google how to do for loop through object prop)
*/

// Navigation
let nav = document.querySelector("nav");
let ul = document.createElement("ul");
let home = document.createElement("li");
let all = document.createElement("li");
let type = document.createElement("li");
let typeDrop = [
  "fire",
  "flying",
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water"
];

class Pokemon {
  constructor(id, name, forms, height, weight, abilities, types) {
    this.id = id;
    this.name = name;
    this.forms = forms;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.types = types;
  }
}
const Cobermon = new Pokemon(
  800,
  "Cobermon",
  [{ name: "Rage" }],
  6,
  250,
  (abilities = [{ ability: { name: "fight" } }]),
  [{ type: { name: "fire" } }]
);

home.textContent = "HOME";
all.textContent = "ALL POKEMON";
type.textContent = "TYPES";

ul.appendChild(home);
nav.appendChild(ul);

home.addEventListener("click", function() {
  document.location.href = "index.html";
});

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

// To create and change the color of circles for types
var container = document.getElementById("types");
for (var i = 0; i < typeDrop.length; i++) {
  container.innerHTML += `<ul> <li> <div class="circle" style="background-color: ${color(
    typeDrop[i]
  )};"></div> ${typeDrop[i]} </li></ul>`;
}

// now, use the returned async data
const theData = getAPIData("https://pokeapi.co/api/v2/pokemon/").then(data => {
  for (const pokemon of data.results) {
    getAPIData(pokemon.url).then(pokeData => {
      simpleFilter(pokeData)
      console.log(pokeData)
      populateDOM(pokeData);
    });
  }
});

const theData2 = getAPIData(
  "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
).then(data => {
  for (const pokemon of data.results) {
    getAPIData(pokemon.url).then(pokeData2 => {
      populateDOM(pokeData2);
    });
  }
});

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s[0].toUpperCase() + s.slice(1);
};

let mainArea = document.querySelector("main");

function getPokeNumber(id) {
  if (id < 10) return `00${id}`;
  if (id > 9 && id < 100) {
    return `0${id}`;
  } else return id;
}

/*let testing = document.querySelector("#test");
function simpleFilter(pokeList) {
  testing.addEventListener("click", () => {
    // console.log(pokeList.name.filter(name => types.type.name === "fire"));
  });
}*/

addButton();

function populateDOM(single_pokemon) {
  let pokeScene = document.createElement("div");
  let pokeDiv = document.createElement("div");
  let pokeFront = document.createElement("div");
  let pokeBack = document.createElement("div");
  let name = document.createElement("h2");
  let pic = document.createElement("img");
  let powers = document.createElement("p");
  let height = document.createElement("p");
  let weight = document.createElement("p");
  let pokeId = document.createElement("p");
  let forms = document.createElement("p");
  let hr = document.createElement("hr");

  pokeScene.setAttribute("class", "scene");
  pokeDiv.setAttribute("class", "card");
  pokeFront.setAttribute("class", "card__face card__face--front");
  pokeBack.setAttribute("class", "card__face card__face--back");
  pic.setAttribute("class", "picDivs");

  let pokeNum = getPokeNumber(single_pokemon.id);

  name.textContent = capitalize(`${single_pokemon.name}`);
  height.textContent = `Height: ${single_pokemon.height}`;
  powers.textContent = `Abilities: ${capitalize(
    single_pokemon.abilities[0].ability.name
  )}`;

  weight.textContent = `Weight: ${single_pokemon.weight}`;
  pokeId.textContent = `ID: ${single_pokemon.id}`;
  forms.textContent = `Forms: ${capitalize(single_pokemon.forms[0].name)}`;

  pic.src = `../assets/images/${pokeNum}.png`;

  pokeFront.appendChild(pic);
  pokeFront.appendChild(name);
  pokeFront.appendChild(forms);
  pokeFront.appendChild(pokeId);
  pokeFront.appendChild(hr);

  pokeBack.appendChild(powers);
  pokeBack.appendChild(height);
  pokeBack.appendChild(weight);

  pokeDiv.appendChild(pokeFront);
  pokeDiv.appendChild(pokeBack);
  pokeScene.appendChild(pokeDiv);

  mainArea.appendChild(pokeScene);

  pokeDiv.addEventListener("click", function() {
    pokeDiv.classList.toggle("is-flipped");
  });

  let type = single_pokemon.types[0].type.name;

  pokeDiv.onmouseover = function() {
    this.setAttribute(
      "style",
      `border: 3px solid ${color(type)}; border-radius: 7px`
    );
  };

  pokeDiv.onmouseleave = function() {
    this.setAttribute("style", `border: none`);
  };
}

function addButton() {
  let add = document.createElement("button");
  add.setAttribute("class", "scene btn");
  mainArea.appendChild(add);

  add.addEventListener("click", function() {
    populateDOM(Cobermon);
  });

  add.onmouseover = function() {
    this.setAttribute("style", `background-color: #555;`);
  };

  add.onmouseleave = function() {
    this.setAttribute("style", `border: none`);
  };
}

function color(type) {
  if (type === "fire") {
    return "red";
  } else if (type === "flying") {
    return "blue";
  } else if (type === "bug") {
    return "green";
  } else if (type === "dark") {
    return "black";
  } else if (type === "dragon") {
    return "#148DEB";
  } else if (type === "electric") {
    return "yellow";
  } else if (type === "fairy") {
    return "#FF2D67";
  } else if (type === "fighting") {
    return "orange";
  } else if (type === "ghost") {
    return "#541482";
  } else if (type === "grass") {
    return "green";
  } else if (type === "ground") {
    return "brown";
  } else if (type === "ice") {
    return "#6CEDFF";
  } else if (type === "normal") {
    return "#FFA292";
  } else if (type === "poison") {
    return "#7025FF";
  } else if (type === "psychic") {
    return "#FF1C79";
  } else if (type === "rock") {
    return "#209E70";
  } else if (type === "steel") {
    return "#209E71";
  } else if (type === "water") {
    return "#1742FF";
  }
}

/* 
Add multiple abilities
Figure out best colors and designs for cards
Add Base HP from video
*/
