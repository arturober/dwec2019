document.addEventListener("DOMContentLoaded", event => {
    let div = document.getElementById("div1");
    console.log("Children: " + div.children.length);
    console.log("ChildNodes: " + div.childNodes.length);
    console.log(div.children);
    console.log(div.childNodes);
});