const content1 = document.getElementById("dbug");
const content2 = document.getElementById("bgame");
const content3 = document.getElementById("efun");
const content4 = document.getElementById("mqual");

function showInfo(card){
    if (card.id == "dbug"){
        card.innerHTML = "We find and document any bugs found in Final Escort during testing"
    } else if (card.id == "bgame"){
        card.innerHTML = "We try our best to break the game to expose any hidden errors within"
    } else if (card.id == "efun"){
        card.innerHTML = "We make sure all core gameplay mechanics and systems are fun as well as functional"
    } else if (card.id == "mqual"){
        card.innerHTML = "We help to ensure everything is top notch by the time it gets to the player"
    }
}

function hideInfo(card){
    if (card.id == "dbug"){
        card.innerHTML = "Document Bugs"
    } else if (card.id == "bgame"){
        card.innerHTML = "Break the Game"
    } else if (card.id == "efun"){
        card.innerHTML = "Ensure Fun Gameplay"
    } else if (card.id == "mqual"){
        card.innerHTML = "Maintain Quality Standards"
    }
}

function showMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("smbutton");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}