function showMore(btnText) {

    if (btnText === "smbutton"){
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
    } else if (btnText === "smbutton1"){
        var dots = document.getElementById("dots1");
        var moreText = document.getElementById("more1");
    }

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