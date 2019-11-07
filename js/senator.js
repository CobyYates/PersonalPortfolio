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
  console.log(allSenators);
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
    figure.setAttribute("class", "image is-4by3");

    let figureImage = document.createElement("img");
    figureImage.src = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg`;

    figureImage.alt = "Placeholder image";

    figure.appendChild(figureImage);
    cardImage.appendChild(figure);
    card.appendChild(cardImage);
    card.appendChild(cardContent(senator))
    container.appendChild(card);
  });
}


function cardContent(senator) {
    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "card-content");

    let media = document.createElement("div");
    media.setAttribute("class", "media");

    let mediaLeft = document.createElement("div");
    mediaLeft.setAttribute("class", "media-left");

    let figure = document.createElement("figure");
    figure.setAttribute("class", "image is-48x48");

    let img = document.createElement("img");
    img.src = ``
    img.alt = 'Placeholder Image'

    let mediaContent = document.createElement("div");
    mediaContent.setAttribute("class", "media-content");

    let titleP = document.createElement("p");
    titleP.setAttribute("class", "title is-4");
    titleP.textContent = `foo`
    
    let subTitleP = document.createElement("p");
    subTitleP.setAttribute("class", "subtitle is-6");
    subTitleP.textContent = 'bar'

    mediaContent.appendChild(titleP);
    mediaContent.appendChild(subTitleP);
    figure.appendChild(img);
    mediaLeft.appendChild(figure);
    media.appendChild(mediaLeft);
    media.appendChild(mediaContent);
    cardContent.appendChild(media);

    return cardContent
}

/*let mainArea = document.querySelector('main')
  let mainButton = document.createElement('button')
  mainButton.textContent = 'Button'
  mainArea.appendChild(mainButton)
  mainButton.addEventListener('click', function() {
    console.log(allSenators)
  })*/
