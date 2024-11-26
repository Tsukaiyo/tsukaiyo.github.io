
document.addEventListener("DOMContentLoaded", function(){
    const content1 = document.getElementById("dbug");
    const content2 = document.getElementById("bgame");
    const content3 = document.getElementById("efun");
    const content4 = document.getElementById("mqual");

    conmotor = document.getElementById("motorinfo")
    concognitive = document.getElementById("cognitiveinfo")
    convision = document.getElementById("visioninfo")
    conhearing = document.getElementById("hearinginfo")
    conspeech = document.getElementById("speechinfo")

    const selectMenu = document.getElementById("options");
    selectMenu.value = "motor";
    menuChange("motor");
});

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

function menuChange(type){
    console.log("menuChange called with type:", type);
    setAllFalse();
    if(type === "motor"){
        conmotor.style.display = 'block';
    } else if (type === "cognitive"){
        concognitive.style.display = 'block';
    } else if (type === "hearing"){
        conhearing.style.display = 'block';
    } else if (type === "vision"){
        convision.style.display = 'block';
    } else if (type === "speech"){
        conspeech.style.display = 'block';
    }
}

function setAllFalse(){
    conmotor.style.display = 'none';
    concognitive.style.display = 'none';
    conhearing.style.display = 'none';
    convision.style.display = 'none';
    conspeech.style.display = 'none';
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

    setAllFalse();
    conmotor.style.display = 'block';
}