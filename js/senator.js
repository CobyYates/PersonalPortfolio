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
    subTitleP.textContent = senator.title

    let content = document.createElement("div");
    content.setAttribute("class", "content");
    content.textContent = `Seniority: ${senator.seniority}
Senate Class: ${senator.senate_class}
Next Election: ${senator.next_election}`

    let votes = document.createElement("div");
    votes.setAttribute("class", "votes");

    let votesTitle = document.createElement("h3")    
    votesTitle.setAttribute("class", "title is-4");
    votesTitle.textContent = `Votes`

    let totalVotes = document.createElement("p")
    totalVotes.textContent = `Total: ${senator.total_votes}`

    let missedVotes = document.createElement("p")
    missedVotes.textContent = `Missed: ${senator.missed_votes}`

    let totalPresent = document.createElement("p")
    totalPresent.textContent = `Present: ${senator.total_votes}`

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
    votes.appendChild(totalPresent);


    cardContent.appendChild(media);
    cardContent.appendChild(content);

    return cardContent
}
