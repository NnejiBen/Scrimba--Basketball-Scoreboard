let incrementHomeScore = document.getElementById("home--score")
let incrementGuestScore = document.getElementById("guest--score")
let homeScore = 0
let guestScore = 0

function homeAdd1() {
    incrementHomeScore.textContent = homeScore += 1
}

function homeAdd2() {
    incrementHomeScore.textContent = homeScore += 2
}

function homeAdd3() {
    incrementHomeScore.textContent = homeScore += 3
}

function guestAdd1() {
    incrementGuestScore.textContent = guestScore += 1
}

function guestAdd2() {
    incrementGuestScore.textContent = guestScore += 2
}

function guestAdd3() {
    incrementGuestScore.textContent = guestScore += 3
}

function newGame() {
    document.getElementById("home--score").textContent = 0
    document.getElementById("guest--score").textContent = 0
    homeScore = 0
    guestScore = 0
}

