function click1(event) {
    console.log("A " + event.type + " event has been detected on " + event.target.id);
}

function click2(event) {
    console.log("I'm another event handler for the click event!");
}

let itop = 40;
let ileft = 0;

document.addEventListener("DOMContentLoaded", e => {
    let input = document.getElementById("input1");
    input.addEventListener('click', click1);
    input.addEventListener('click', click2);
    input.addEventListener('keydown', e => {
        e.preventDefault();
        console.log(e);
        if(e.key == "ArrowLeft") e.target.style.left = --ileft + "px";
        if(e.key == "ArrowRight") e.target.style.left = ++ileft + "px";
        if(e.key == "ArrowUp") e.target.style.top = --itop + "px";
        if(e.key == "ArrowDown") e.target.style.top = ++itop + "px";
    });

    // input.removeEventListener('click', click1);

    document.getElementById("a1").addEventListener("click", e => {
        e.preventDefault();
        console.log("You can't go to Google");
    });
});