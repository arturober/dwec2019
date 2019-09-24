function createLi(text) {
    let li = document.createElement("li");
    li.innerText = text;
    let span = document.createElement("span");
    span.innerText = "X";
    span.classList.add("close");
    li.appendChild(span);

    span.addEventListener("click", e => {
        li.parentElement.removeChild(li);
    });
    
    return li;
}

document.addEventListener("DOMContentLoaded", e => {
    let input = document.getElementById("item");
    let list = document.getElementById("list");
    let butFirst = document.getElementById("first");
    let butLast = document.getElementById("last");

    butLast.addEventListener("click", e => {
        let li = createLi(input.value);
        list.appendChild(li);
        input.value = "";
    });

    butFirst.addEventListener("click", e => {
        let li = createLi(input.value);
        let firstLi = list.firstElementChild;
        list.insertBefore(li, firstLi);
        input.value = "";
    });

    console.log(list.dataset.val1);
    console.log(list.dataset.val2);
    list.dataset.val3 = "99";
});