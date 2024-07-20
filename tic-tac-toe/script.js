var box1_IsClicked = false;
var box2_IsClicked = false;
var box3_IsClicked = false;
var box4_IsClicked = false;
var box5_IsClicked = false;
var box6_IsClicked = false;
var box7_IsClicked = false;
var box8_IsClicked = false;
var box9_IsClicked = false;

function startGame() {
    let grid = document.getElementById("grid");
    if (grid.style.display === "block") {
        grid.style.display = "none";
    } else {
        grid.style.display = "block";
    }

    let btn = document.getElementById("btn");
    btn.style.display = "none";
}

document.getElementById("box1").addEventListener("click", box1_IsClicked)

function box1_IsClicked() {
    if (box1_IsClicked == false) {
        var box1_IsClicked = true;
        boxClick();
    }
}
function boxClick() {
    let box1 = document.getElementById("box1");
    if (box1_IsClicked === true) {
        box1.style.borderColor = "red";
    }
}