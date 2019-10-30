import { films } from "./films.js";
import { people } from "./people.js";
import { planets } from "./planets.js";
import { species } from "./species.js";
import { starships } from "./starships.js";
import { vehicles } from "./vehicles.js";

let mainArea = document.querySelector("main");
let nav = document.querySelector("nav");
let home = document.createElement("button");
let filmBtn = document.createElement("button");
let peopleBtn = document.createElement("button");
let planetsBtn = document.createElement("button");
let speciesBtn = document.createElement("button");
let starshipsBtn = document.createElement("button");
let vehiclesBtn = document.createElement("button");

home.textContent = "HOME";
filmBtn.textContent = "FILMS";
peopleBtn.textContent = "PEOPLE";
planetsBtn.textContent = "PLANETS";
speciesBtn.textContent = "SPECIES";
starshipsBtn.textContent = "STARSHIPS";
vehiclesBtn.textContent = "VEHICLES";

nav.appendChild(home);
nav.appendChild(filmBtn);
nav.appendChild(peopleBtn);
nav.appendChild(planetsBtn);
nav.appendChild(speciesBtn);
nav.appendChild(starshipsBtn);
nav.appendChild(vehiclesBtn);

let filterArea = document.querySelector(".filters")

//People images
function getCharNumber(charURL) {
  let end = charURL.lastIndexOf("/");
  let charID = charURL.substring(end - 2, end);
  if (charID.indexOf("/") !== -1) {
    return charID.slice(1, 2);
  } else {
    return charID;
  }
}

home.addEventListener("click", () => {document.location.href="index.html"})

filmBtn.addEventListener("click", () => {
  mainArea.textContent = ""
  filterArea.textContent = ""
  films.forEach(film => {
    let filmDiv = document.createElement("div");
    let filmTitle = document.createElement("h1");
    let filmCrawl = document.createElement("p");
    let filmEpisode = document.createElement("p");
    let pic = document.createElement("img");

    let charNum = getCharNumber(film.url);
    pic.setAttribute("class", "photo");
    filmDiv.setAttribute("class", "card");

    filmTitle.textContent = film.title;
    filmCrawl.textContent = film.opening_crawl;
    filmEpisode.textContent = `Episode: ${film.episode_id}`;
    pic.src = `https://starwars-visualguide.com/assets/img/films/${charNum}.jpg`;

    filmDiv.appendChild(filmTitle);
    filmDiv.appendChild(pic);
    filmDiv.appendChild(filmCrawl);
    filmDiv.appendChild(filmEpisode);

    mainArea.appendChild(filmDiv);
  });
});

peopleBtn.addEventListener("click", () => {
  mainArea.textContent = ""
  filterArea.textContent = ""
  people.forEach(person => {
    let personDiv = document.createElement("div");
    let name = document.createElement("h1");
    let gender = document.createElement("p");
    let pic = document.createElement("img");

    let charNum = getCharNumber(person.url);
    pic.setAttribute("class", "photo");
    personDiv.setAttribute("class", "card");

    name.textContent = person.name;
    gender.textContent = `Gender: ${person.gender}`;
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;

    personDiv.appendChild(name);
    personDiv.appendChild(pic);
    personDiv.appendChild(gender);

    mainArea.appendChild(personDiv);
  });

  var males = people.filter(person => person.gender === "male")
  
  
const maleCharacters = people.filter(person => person.gender === "male");
const femaleCharacters = people.filter(person => person.gender === "female");
const otherCharacters = people.filter(person => person.gender != "male" && person.gender != "female");

const allDivs = Array.from(document.querySelectorAll("div"));

let maleButton = document.createElement("button");
let femaleButton = document.createElement("button");
maleButton.textContent = "MALES";
maleButton.setAttribute("class", "male")
femaleButton.textContent = "FEMALES";
femaleButton.setAttribute("class", "female")
filterArea.appendChild(maleButton);
filterArea.appendChild(femaleButton);

/*maleButton.addEventListener("click", () => {
  maleCharacters.forEach(character => {
    let matchedDiv = allDivs.find(oneDiv => {
      return oneDiv.firstChild.textContent === character.name;
    });
    if(matchedDiv.getAttribute("style") === "display: none;") {
      maleCharacters.setAttribute("style", "display: revert;")
    } else {
      matchedDiv.setAttribute("style", "display: none;")
    }
    // matchedDiv.classList.add('animated', 'fadeOutLeft')
    sleep(1000).then(() => {
      matchedDiv.setAttribute("style", "display: none;");
    })
    notHuman()
  });
});*/

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

maleButton.addEventListener("click", () => {
  femaleCharacters.forEach(character => {
    let matchedDiv = allDivs.find(oneDiv => {
      return oneDiv.firstChild.textContent === character.name;
    })
    matchedDiv.setAttribute("style", "display: none")
    notHuman()
    
    maleCharacters.forEach(character => {
      let matchedDiv = allDivs.find(oneDiv => {
        return oneDiv.firstChild.textContent === character.name;
      })
      // matchedDiv.classList.add('animated', 'zoomIn')
      matchedDiv.setAttribute("style", "display: revert")
  })
})
})

femaleButton.addEventListener("click", () => {
  maleCharacters.forEach(character => {
    let matchedDiv = allDivs.find(oneDiv => {
      return oneDiv.firstChild.textContent === character.name;
    })
    matchedDiv.setAttribute("style", "display: none")
    notHuman()
    
    femaleCharacters.forEach(character => {
      let matchedDiv = allDivs.find(oneDiv => {
        return oneDiv.firstChild.textContent === character.name;
      })
      // matchedDiv.classList.add('animated', 'zoomIn')
      matchedDiv.setAttribute("style", "display: revert")
  })
})
})

let notHuman = (() => {
  otherCharacters.forEach(character => {
    let matchedDiv = allDivs.find(oneDiv => {
      return oneDiv.firstChild.textContent === character.name;
    });
    matchedDiv.classList.add('animated', 'zoomOutLeft')
    sleep(1000).then(() => {
      matchedDiv.setAttribute("style", "display: none;");
    })
  });
})
});

planetsBtn.addEventListener("click", () => {
  mainArea.textContent = ""
  filterArea.textContent = ""
  planets.forEach(planet => {
    let planetDiv = document.createElement("div");
    let name = document.createElement("h1");
    let diameter = document.createElement("p");
    let terrain = document.createElement("p");
    let population = document.createElement("p");
    let pic = document.createElement("img");

    let charNum = getCharNumber(planet.url);
    pic.setAttribute("class", "photo");
    planetDiv.setAttribute("class", "card");

    name.textContent = planet.name;
    diameter.textContent = `Diameter: ${planet.diameter}`;
    terrain.textContent = `Terrain: ${planet.terrain}`;
    population.textContent = `Population: ${planet.population}`;
    pic.src = planet.url;

    planetDiv.appendChild(name);
    planetDiv.appendChild(pic);
    planetDiv.appendChild(diameter);
    planetDiv.appendChild(terrain);
    planetDiv.appendChild(population);

    mainArea.appendChild(planetDiv);
  });
});

speciesBtn.addEventListener("click", () => {
  mainArea.textContent = ""
  filterArea.textContent = ""
species.forEach(specy => {
    let specyDiv = document.createElement("div");
    let name = document.createElement("h1");
    let classification = document.createElement("p");
    let language = document.createElement("p");
    let pic = document.createElement("img");

    let charNum = getCharNumber(specy.url);
    pic.setAttribute("class", "photo");
    specyDiv.setAttribute("class", "card");

    name.textContent = specy.name;
    classification.textContent = `Classification: ${specy.classification}`;
    language.textContent = `Language: ${specy.language}`;
    pic.src = `https://starwars-visualguide.com/assets/img/species/${charNum}.jpg`;

    specyDiv.appendChild(name);
    specyDiv.appendChild(pic);
    specyDiv.appendChild(classification);
    specyDiv.appendChild(language);

    mainArea.appendChild(specyDiv);

    pic.addEventListener('error', (event) => {
      let badImage = event.target
      badImage.src = './assets/images/Star_Wars_Logo.png'
    })
  });
});

starshipsBtn.addEventListener("click", () => {
  mainArea.textContent = ""
  filterArea.textContent = ""
starships.forEach(starship => {
    let starshipDiv = document.createElement("div");
    let name = document.createElement("h1");
    let model = document.createElement("p");
    let cost = document.createElement("p");
    let hyperdrive = document.createElement("p");
    let pic = document.createElement("img");

    let charNum = getCharNumber(starship.url);
    pic.setAttribute("class", "photo");
    starshipDiv.setAttribute("class", "card");

    name.textContent = starship.name;
    model.textContent = `Model: ${starship.model}`;
    cost.textContent = `Cost: ${starship.cost_in_credits} credits`;
    hyperdrive.textContent = `Hyperdrive Rating: ${starship.hyperdrive_rating}`;
    pic.src = `https://starwars-visualguide.com/assets/img/starships/${charNum}.jpg`;

    starshipDiv.appendChild(name);
    starshipDiv.appendChild(pic);
    starshipDiv.appendChild(model);
    starshipDiv.appendChild(cost);
    starshipDiv.appendChild(hyperdrive);

    mainArea.appendChild(starshipDiv);

    pic.addEventListener('error', (event) => {
      let badImage = event.target
      badImage.src = './assets/images/Star_Wars_Logo.png'
    })
  });
});

vehiclesBtn.addEventListener("click", () => {
  mainArea.textContent = ""
  filterArea.textContent = ""
vehicles.forEach(vehicle => {
    let vehicleDiv = document.createElement("div");
    let name = document.createElement("h1");
    let model = document.createElement("p");
    let cost = document.createElement("p");
    let speedMax = document.createElement("p");
    let pic = document.createElement("img");

    let charNum = getCharNumber(vehicle.url);
    pic.setAttribute("class", "photo");
    vehicleDiv.setAttribute("class", "card");

    name.textContent = vehicle.name;
    model.textContent = `Model: ${vehicle.model}`;
    cost.textContent = `Cost: ${vehicle.cost_in_credits} credits`;
    speedMax.textContent = `Max Speed: ${vehicle.max_atmosphering_speed}`;
    pic.src = `https://starwars-visualguide.com/assets/img/vehicles/${charNum}.jpg`;

    vehicleDiv.appendChild(name);
    vehicleDiv.appendChild(pic);
    vehicleDiv.appendChild(model);
    vehicleDiv.appendChild(cost);
    vehicleDiv.appendChild(speedMax);

    mainArea.appendChild(vehicleDiv);

    pic.addEventListener('error', (event) => {
      let badImage = event.target
      badImage.src = './assets/images/Star_Wars_Logo.png'
    })
  });
});

/* Notes
Filter people who are on the dark side and make their cards glow red. Opposite for those on the good side*/
