# Personal-Portfolio

This is the home for Coby Yates' Personal Portfolio
Started Fall Semester 2019

# Requirements

## Basic JavaScript

### Proper use of variables with proper scope

```JavaScript
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
```

### Good use of conditional logic and value comparison

```JavaScript
function color(type) {
    if (type === "fire") {
        return 'red'
    }
    else if (type === "flying") {
        return 'blue'
    }
}
```

### Proper use of String manipulation
```JavaScript
```

### Good use of Arrays
```JavaScript
let typeDrop = ["fire", "flying", "bug", "dark", "dragon",
"electric", "fairy", "fighting", "ghost", "grass", "ground",
"ice", "normal", "poison", "psychic", "rock", "steel", "water"]


var container = document.getElementById('types');
 for(var i = 0; i < typeDrop.length; i++){
    container.innerHTML += `<ul> <li> <div class="circle" style="background-color: 
    ${color(typeDrop[i])};"></div> ${typeDrop[i]} </li></ul>`
    console.log(color(typeDrop[i]))
} 
```
### Use of custom JavaScript objects
```JavaScript

```

## Use of ES6

### Proper use of let and const variables

```JavaScript
const otherCharacters = people.filter(person => person.gender != "male" && person.gender != "female");
```
### Use of Arrow functions
```JavaScript
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
```

### Use of Strings using Template Literals
```JavaScript
this.setAttribute("style", `border: 3px solid ${color(type)}; border-radius: 15px`)
```

### Proper declarations of Objects
```JavaScript

```

### Use of Import and Export statements
```JavaScript
export const films = [...]
export const people = [...]
export const planets = [...]
export const species = [...]
export const starships = [...]
export const vehicles = [...]

import { films } from "./films.js";
import { people } from "./people.js";
import { planets } from "./planets.js";
import { species } from "./species.js";
import { starships } from "./starships.js";
import { vehicles } from "./vehicles.js";
```

## Demonstrates use of Basic Data Structures including:
### Using Arrays to store and manipulate collections of data
```JavaScript

```
### Use of Objects with key-value pairs
```JavaScript

```
### Iteration through an Array using loops and Array methods
```JavaScript

```
## Demonstrates us of Object Oriented Programming techniques including:
### Objects with properties and methods accessed using dot notation
```JavaScript

```
### Objects using Constructors properly
```JavaScript

```