let box = document.getElementById("contents");

function contents_IsClicked() {
    if (box.style.display == "none") {
        box.style.display = "inline-block";
        box.style.animation = "movein 0.5s linear 1";
    } else {
        box.style.animation = "movein 0.5s reverse 1";
        box.style.display = "none";
    }
}