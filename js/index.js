let lang = ["HTML", "CSS", "JavaScript", "SASS", "LESS", "VueJS", "C#", "C++"]
let frameworks = ["Bootstrap", "Vuetify", "Flexbox", "CSS Grid", ""]
let software = ["VS Code", "Adobe Illustrator", "Adobe InDesign", "Adobe XD", "Google SketchUp", "Xactimate", "FileZilla", ""]
let additional = ["Netlify", "UX/UI Design", "WordPress", "Bluehost", "Git Certified", "A+ Training", "App Design"]

const arrInfo = (arr) => {
    text = "<ul>"
    for (i = 0; i < arr.length; i++) {
        text += "<li>" + arr[i] + "</li>"    
    }
    text += "</ul>"
    return text
}

document.getElementById("lang").innerHTML = arrInfo(lang)
document.getElementById("frameworks").innerHTML = arrInfo(frameworks)
document.getElementById("software").innerHTML = arrInfo(software)
document.getElementById("additional").innerHTML = arrInfo(additional)

let box = document.getElementsByClassName("box")
box.classList.add('animated pulse infinite')