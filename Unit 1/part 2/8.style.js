document.addEventListener("DOMContentLoaded", e => {
    let select = document.getElementById("color");
    let div = document.getElementById("div");

    select.addEventListener("change", e => {
        div.style.backgroundColor = select.value;
    });
});