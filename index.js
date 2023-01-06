// define the points variables
let homePoints = 0
let guestPoints = 0

let homePointEl = document.getElementById("home-pointel")
let guestPointEl = document.getElementById("guest-pointel")

function add1() {
    homePoints += 1
    homePointEl.textContent = homePoints
}

function add2() {
    homePoints += 2
    homePointEl.textContent = homePoints
}

function add3() {
    homePoints += 3
    homePointEl.textContent = homePoints
}

function guestAdd1() {
    guestPoints += 1
    guestPointEl.textContent = guestPoints
}

function guestAdd2() {
    guestPoints += 2
    guestPointEl.textContent = guestPoints
}

function guestAdd3() {
    guestPoints += 3
    guestPointEl.textContent = guestPoints
}