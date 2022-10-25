const inputEl = document.getElementById("hero-input")
const btnEl = document.getElementById("hero-btn")
const lengthEl = document.getElementById("lenght")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const myValuesFromLocalStorage = JSON.parse( localStorage.getItem("myValues"))
myValues = []

if (myValuesFromLocalStorage) {
    render(localStorage.getItem("input"))
}



btnEl.addEventListener("click", function() {
    localStorage.clear()
    myValues = []
    render(inputEl.value)  
})

function render(input) {
    if (input) {
        let lengthHTML = `${input} meters = ${feet(input).toFixed(3)} feet | 
        ${input} feet = ${meter(input).toFixed(3)} meters`

        lengthEl.innerHTML = lengthHTML
        myValues.push(lengthHTML)
        
        let volumeHTML = `${input} liters = ${gallon(input).toFixed(3)} gallons | 
        ${input} gallons = ${litter(input).toFixed(3)} liters`
        
        volumeEl.innerHTML = volumeHTML
        myValues.push(volumeHTML)

        let massHTML = `${input} kilos = ${pound(input).toFixed(3)} pounds | 
        ${input} pounds = ${killogram(input).toFixed(3)} killos`

        massEl.innerHTML = massHTML
        myValues.push(massHTML)
        localStorage.setItem("myValues", JSON.stringify(myValues))
        localStorage.setItem("input", input)
    } else {
        lengthEl.innerHTML = ""
        volumeEl.innerHTML = ""
        massEl.innerHTML = ""
    }
}


function feet(intMeter){
    return intMeter * 3.28084
}

function meter(intFeet){
    return intFeet * 0.3048
}

function gallon(intLitter){
    return intLitter / 3.8
}

function litter(intGallons){
    return intGallons * 3.8
}

function pound(intKillo){
    return intKillo * 2.2046
}

function killogram(intPound){
    return intPound * 0.4535
}


var iconEl = document.getElementById("icon")
iconEl.onclick = function() {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contain("dark-theme")) {
        iconEl.src = "imgs/sun.png"
    } else {
        iconEl.src = "imgs/moon.png"
    }
}