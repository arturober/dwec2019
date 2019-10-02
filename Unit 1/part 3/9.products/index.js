const SERVER = "http://localhost:3000";
let formProd = null;
let tableBody = null;
let imagePreview = null;

function getProducts() {
    return fetch(`${SERVER}/products`).then(resp => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
    });
}

function sendProduct(product) {
    return fetch(`${SERVER}/products`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
    });
}

function convertBase64(file) {
    let reader = new FileReader();
    reader.addEventListener("load", () => { //Converted into Base64 event (async)
        imagePreview.src = reader.result;
    }, false);
    if (file) { // File has been selected (convert to Base64)
        reader.readAsDataURL(file);
    }
}

function addProduct(prod) {
    let tr = document.createElement("tr");
    let tdDesc = document.createElement("td");
    let tdName = document.createElement("td");
    let tdPhoto = document.createElement("td");
    let img = document.createElement("img");
    img.src = SERVER + "/" + prod.photo;
    tdPhoto.appendChild(img);

    tdDesc.innerText = prod.description;
    tdName.innerText = prod.name;

    tr.appendChild(tdPhoto);
    tr.appendChild(tdName);
    tr.appendChild(tdDesc);
    tableBody.appendChild(tr);
}

document.addEventListener('DOMContentLoaded', e => {
    tableBody = document.querySelector("#products tbody");
    imagePreview = document.getElementById("imagePreview");
    formProd = document.getElementById("addProduct");

    getProducts().then(resp => {
        resp.products.forEach(p => addProduct(p));
    });

    document.getElementById("photo").addEventListener('change', () => {
        let file = document.getElementById("photo").files[0];
        convertBase64(file);
    });

    formProd.addEventListener("submit", e => {
        e.preventDefault();
        let prod = {
            name: formProd.name.value,
            description: formProd.description.value,
            photo: imagePreview.src
        };
        sendProduct(prod).then(resp => {
            addProduct(resp.product);
        });
    });
});
