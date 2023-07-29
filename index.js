let color = "black";
function colera(){
    color = ""
}
function colblk(){
    color = "black"
}
function colred(){
    color = "red"
}
function colblu(){
    color = "blue"
}
function colgrn(){
    color = "green"
}


function but1acti() {
    let button = document.getElementsByClassName("but1")[0];
    butacti(button);
}
function but2acti() {
    let button = document.getElementsByClassName("but2")[0];
    butacti(button);
}
function but3acti() {
    let button = document.getElementsByClassName("but3")[0];
    butacti(button);
}
function but4acti() {
    let button = document.getElementsByClassName("but4")[0];
    butacti(button);
}
function but5acti() {
    let button = document.getElementsByClassName("but5")[0];
    butacti(button);
}
function but6acti() {
    let button = document.getElementsByClassName("but6")[0];
    butacti(button);
}
function but7acti() {
    let button = document.getElementsByClassName("but7")[0];
    butacti(button);
}
function but8acti() {
    let button = document.getElementsByClassName("but8")[0];
    butacti(button);
}
function but9acti() {
    let button = document.getElementsByClassName("but9")[0];
    butacti(button);
}
function but10acti() {
    let button = document.getElementsByClassName("but10")[0];
    butacti(button);
}
function but11acti() {
    let button = document.getElementsByClassName("but11")[0];
    butacti(button);
}
function but12acti() {
    let button = document.getElementsByClassName("but12")[0];
    butacti(button);
}
function but13acti() {
    let button = document.getElementsByClassName("but13")[0];
    butacti(button);
}
function but14acti() {
    let button = document.getElementsByClassName("but14")[0];
    butacti(button);
}
function but15acti() {
    let button = document.getElementsByClassName("but15")[0];
    butacti(button);
}
function but16acti() {
    let button = document.getElementsByClassName("but16")[0];
    butacti(button);
}



function butacti(button) {
    color_check(button);
}


function color_check(button) {
    if (color == "black") {
        button.style.backgroundColor = "black";
    }
    else if (color == ""){
        button.style.backgroundColor = "";
    }
    else if (color == "red"){
        button.style.backgroundColor = "red";
    }
    else if (color == "blue"){
        button.style.backgroundColor = "blue";
    }
    else if (color == "green"){
        button.style.backgroundColor = "green"
    }
}