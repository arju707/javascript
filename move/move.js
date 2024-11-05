function up(){
const circle = document.getElementById("circle");
let currenttop= parseInt(window.getComputedStyle(circle).top);
circle.style.top=(currenttop-5)+"px";

}
function down(){
    const circle = document.getElementById("circle");
    let currenttop= parseInt(window.getComputedStyle(circle).top);
    circle.style.top=(currenttop+5)+"px";
}

function left(){
    const circle = document.getElementById("circle");
    let currenttop= parseInt(window.getComputedStyle(circle).left);
    circle.style.left=(currenttop-5)+"px";
}

function right(){
    const circle = document.getElementById("circle");
    let currenttop= parseInt(window.getComputedStyle(circle).left);
    circle.style.left=(currenttop+5)+"px";
}