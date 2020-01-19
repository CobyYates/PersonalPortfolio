// let lang = ["HTML", "CSS", "JavaScript", "SASS", "LESS", "VueJS", "C#", "C++"]
let lang = [
    {name:"HTML", icon: 'fab fa-html5'}, 
    {name: "CSS", icon: "fab fa-css3-alt"}, 
    {name: "JavaScript", icon: "fab fa-js"}, 
    {name: "SASS", icon: "fab fa-sass"}, 
    {name: "LESS", icon: "fab fa-less"}, 
    {name: "VueJS", icon: "fab fa-vuejs"}, 
    {name: "C#", icon: null},
    {name: "C++", icon: null}]
// let frameworks = ["Bootstrap", "Vuetify", "Flexbox", "CSS Grid", ""]
// let software = ["VS Code", "Adobe Illustrator", "Adobe InDesign", "Adobe XD", "Google SketchUp", "Xactimate", "FileZilla", ""]
// let additional = ["Netlify", "UX/UI Design", "WordPress", "Bluehost", "Git Certified", "A+ Training", "App Design"]

// console.log(lang[0])
const arrInfo = (arr) => {
    // console.log(arr[0].icon)
    text = "<ul>"
    
    for (i = 0; i < arr.length; i++) {
        text += "<li>" + `<i class="fa fa-github-square"></i>` + arr[i].name + "</li>"
        // text += "<li>" + "<i class= fa " + arr[i].icon + "></i>" + arr[i].name + "</li>"
        // text += "<li>" + arr[i].name + "</li>"
        // let element = document.getElementById('test')
        // element.classList.add(arr[i].icon)
    }
    return text
}

document.getElementById("lang").innerHTML = arrInfo(lang)
// document.getElementById("frameworks").innerHTML = arrInfo(frameworks)
// document.getElementById("software").innerHTML = arrInfo(software)
// document.getElementById("additional").innerHTML = arrInfo(additional)

let box = document.getElementsByClassName("box")
box.classList.add('animated pulse infinite')
