/*
Make a list at the top that shows how many...
-Democrats
-Republicans
-Males
-Females
*/

async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

let allSenators = [];
let simpleSenators = [];
let republicans = [];
let democrats = [];
let independents = []
const theData = getAPIData("senators.json").then(data => {
  allSenators = data.results[0].members;
  simpleSenators = simpleMap(allSenators);
  republicans = simpleFilter(simpleSenators, 'R');
  democrats = simpleFilter(simpleSenators, 'D');
  independents = simpleFilter(simpleSenators, 'ID');
  console.log(totalVotes(simpleSenators));
  heroContent(democrats)
  console.log(oldestSenator(simpleSenators))
  console.log(sortSenatorsByAge(simpleSenators))  //Swtiching these changes the order of the senators
  populateDOM(simpleSenators);
});

// MAP
function simpleMap(arr) {
  let results = arr.map(senator => {
    return {
      id: senator.id,
      name: `${senator.first_name} ${senator.last_name}`,
      party: senator.party,
      age: `${calculate_age(new Date(senator.date_of_birth))}`,
      gender: senator.gender,
      total_votes: senator.total_votes,
      title: `${senator.title}, ${senator.state}`,
      info: `Seniority: ${senator.seniority}
        Senate Class: ${senator.senate_class}
        Next Election: ${senator.next_election}`,
      missed: senator.missed_votes,
      // present: senator.total_present, not needed
      // You can use code from journal for star wars pilot to find highest percentage
      // party_votes: votes_with_party_pct
    };
  });
  return results;
}

// FILTER - 
function simpleFilter(arr, partyType) {
  return arr.filter(senator => {
    senator.party === "partyType";
  });
}

const testArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const testReduce = testArray.reduce((acc, num) => {
  return acc + num;
}, 0);

function totalVotes(senatorList) {
  const results = senatorList.reduce((acc, senator) => {
    return acc + senator.total_votes;
  }, 0);
  return results;
}

console.log(testReduce);

function oldestSenator(senatorList) {
  const results = senatorList.reduce((oldest, senator) => {
    return (oldest.age || 0) > senator.age ? oldest : senator
  }, {})
  return results
}

function sortSenatorsByAge(senatorList) {
  return senatorList.sort((a, b) => {
    return a.age - b.age
  })
}


const hero = document.querySelector(".hero");

function heroContent(senator) {
  console.log(senator)
}


const container = document.querySelector(".container");

function populateDOM(senator_arr) {
  senator_arr.forEach(senator => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let cardImage = document.createElement("div");
    cardImage.setAttribute("class", "card-image");

    let figure = document.createElement("figure");
    figure.setAttribute("class", "image is-4by4");

    let figureImage = document.createElement("img");
    figureImage.src = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg`;

    figureImage.alt = "Placeholder image";

    figure.appendChild(figureImage);
    cardImage.appendChild(figure);
    card.appendChild(cardImage);
    card.appendChild(cardContent(senator));
    container.appendChild(card);

    figureImage.addEventListener("error", event => {
      let badImage = event.target;
      badImage.src = "../assets/images/doug jones.jpg";
    });
  });
}

function cardContent(senator) {
  let cardContent = document.createElement("div");
  cardContent.setAttribute(
    "class",
    "card-content has-background-grey-darker has-text-white"
  );

  let media = document.createElement("div");
  media.setAttribute("class", "media");

  let mediaLeft = document.createElement("div");
  mediaLeft.setAttribute("class", "media-left ");

  let figure = document.createElement("div");
  figure.setAttribute("class", "image is-48x48");

  let party = document.createElement("div");
  party.textContent = senator.party;
  //party colors
  if (senator.party === "R") {
    party.setAttribute("class", "republican partyColor");
  } else if (senator.party === "D") {
    party.setAttribute("class", "democrat partyColor");
  } else if (senator.party === "ID") {
    party.setAttribute("class", "independent partyColor");
  }

  let newLine = document.createElement("br");
  newLine.textContent = "";

  let mediaContent = document.createElement("div");
  mediaContent.setAttribute("class", "media-content");

  let titleP = document.createElement("p");
  titleP.setAttribute("class", "title is-5 has-text-white");
  titleP.textContent = senator.name;

  let subTitleP = document.createElement("p");
  subTitleP.setAttribute("class", "subtitle is-6 has-text-white");
  subTitleP.textContent = senator.title;

  let content = document.createElement("div");
  content.setAttribute("class", "content");
  content.textContent = senator.info;

  let votes = document.createElement("div");
  votes.setAttribute("class", "votes is-flex");

  let votesTitle = document.createElement("h3");
  votesTitle.setAttribute("class", "title is-4 has-text-white");
  votesTitle.textContent = `-Votes-`;

  let totalVotes = document.createElement("p");
  totalVotes.textContent = `Total: ${senator.total_votes}`;

  let missedVotes = document.createElement("p");
  missedVotes.textContent = `Missed: ${senator.missed}`;

  // let totalPresent = document.createElement("p");
  // totalPresent.textContent = `Present: ${senator.present}`;

  let age = document.createElement("p");
  age.textContent = `Age: ${senator.age}`;

  mediaContent.appendChild(titleP);
  mediaContent.appendChild(subTitleP);
  figure.appendChild(party);
  mediaLeft.appendChild(figure);
  media.appendChild(mediaLeft);

  media.appendChild(mediaContent);
  content.appendChild(votesTitle);
  content.appendChild(votes);
  votes.appendChild(totalVotes);
  votes.appendChild(missedVotes);
  // votes.appendChild(totalPresent);
  content.appendChild(age);

  cardContent.appendChild(media);
  cardContent.appendChild(content);

  return cardContent;
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
