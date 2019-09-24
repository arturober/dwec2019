document.addEventListener("DOMContentLoaded", e => {
    let ul = document.getElementById("lista");
    // let liList = ul.getElementsByTagName("li");
    // let liList = ul.children;
    // [...liList].forEach(li => console.log(li.textContent));

    let li = ul.firstElementChild;
    while(li !== null) {
        console.log(li.innerText);
        li = li.nextElementSibling;
    }
});