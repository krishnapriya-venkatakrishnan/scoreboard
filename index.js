let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

// initializing the scores to 0
// logic:
//      3 score buttons for home team and guest team.
//      based on the buttons clicked, the scores are added to
//      the respective teams.
// event handlers used:
//      button > onclick()
// note: as and when the score is calculated, the highest score
// team is highlighted(fn: highlight()).
let homeScore = 0;
let guestScore = 0;

function highlight (){
    if (homeScore > guestScore) {
        homeEl.style.border = "3px solid gold"
        guestEl.style.border = "3px solid black"
    } else if (guestScore > homeScore) {
        homeEl.style.border = "3px solid black"
        guestEl.style.border = "3px solid gold"
    } else {
        homeEl.style.border = "3px solid gold"
        guestEl.style.border = "3px solid gold"
    }
}

function addh1(){    
    homeScore += 1
    homeEl.textContent = homeScore
    highlight()
}
function addh2(){
    homeScore += 2
    homeEl.textContent = homeScore
    highlight()
}
function addh3(){
    homeScore += 3
    homeEl.textContent = homeScore
    highlight()
}
function addg1(){
    guestScore += 1
    guestEl.textContent = guestScore
    highlight()
}
function addg2(){
    guestScore += 2
    guestEl.textContent = guestScore
    highlight()
}
function addg3(){
    guestScore += 3
    guestEl.textContent = guestScore
    highlight()
}


