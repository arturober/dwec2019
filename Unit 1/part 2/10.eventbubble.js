function click(e) {
    console.log("you have clicked " + this.id + 
    ". Target: " + e.target.id + ". Phase: " + event.eventPhase);
}

document.addEventListener("DOMContentLoaded", e => {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    
    div1.addEventListener("click", click);
    div2.addEventListener("click", click);
    div3.addEventListener("click", click);
});