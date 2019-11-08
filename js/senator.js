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

const theData = getAPIData("senators.json").then(data => {
  allSenators = data.results[0].members;
  populateDOM(allSenators);
});

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
    card.appendChild(cardContent(senator))
    container.appendChild(card);

    figureImage.addEventListener('error', (event) => {
      let badImage = event.target
      badImage.src = '../assets/images/doug jones.jpg'
    })

  });
}


function cardContent(senator) {
    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "card-content");

    let media = document.createElement("div");
    media.setAttribute("class", "media");

    let mediaLeft = document.createElement("div");
    mediaLeft.setAttribute("class", "media-left");

    let figure = document.createElement("div");
    figure.setAttribute("class", "image is-48x48");

    let party = document.createElement("div");
    party.textContent = senator.party
    //party colors
    if (senator.party === "R") {
      party.setAttribute("class", "republican partyColor")
      console.log(senator.party)
    }
    else if (senator.party === "D") {
      party.setAttribute("class", "democrat partyColor")
      console.log(senator.party)
    }
    else {
      party.setAttribute("class", "independent partyColor")
    }

    let mediaContent = document.createElement("div");
    mediaContent.setAttribute("class", "media-content");

    let titleP = document.createElement("p");
    titleP.setAttribute("class", "title is-4");
    titleP.textContent = `${senator.first_name}
    ${senator.last_name}`
    
    let subTitleP = document.createElement("p");
    subTitleP.setAttribute("class", "subtitle is-6");
    subTitleP.textContent = `test`

    mediaContent.appendChild(titleP);
    mediaContent.appendChild(subTitleP);
    figure.appendChild(party);
    mediaLeft.appendChild(figure);
    media.appendChild(mediaLeft);
    media.appendChild(mediaContent);
    cardContent.appendChild(media);

    return cardContent
}
