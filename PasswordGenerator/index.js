const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
    "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let box1El = document.getElementById("box1")
let box2El = document.getElementById("box2")

function randomNumber() {
    return Math.floor(Math.random() * characters.length)
}

function generatePassword() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        password += characters[randomNumber()]
    }
    return password
}

function placePassword() {
    box1El.textContent = generatePassword()
    box2El.textContent = generatePassword()
}

var iconEl = document.getElementById("icon")
iconEl.onclick = function() {
    document.body.classList.toggle("white-theme")
    if (document.body.classList.contains("white-theme")) {
        iconEl.src = "images/moon.png"
    } else {
        iconEl.src = "images/sun.png"
    }
}