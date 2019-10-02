let formProd = null;
let tableBody = null;
let imagePreview = null;
let products = [];

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
    tableBody.appendChild(prod.toHTML());
}

document.addEventListener('DOMContentLoaded', e => {
    tableBody = document.querySelector("#products tbody");
    imagePreview = document.getElementById("imagePreview");
    formProd = document.getElementById("addProduct");

    Product.getAllProducts().then(prodArray => {
        products = prodArray;
        products.forEach(p => addProduct(p));
    });

    document.getElementById("photo").addEventListener('change', () => {
        let file = document.getElementById("photo").files[0];
        convertBase64(file);
    });

    formProd.addEventListener("submit", e => {
        e.preventDefault();
        let prod = new Product({
            name: formProd.name.value,
            description: formProd.description.value,
            photo: imagePreview.src
        });
        
        prod.post().then(() => {
            products.push(prod);
            addProduct(prod);
        });
    });
});
