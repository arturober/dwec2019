class Product {
    constructor(prodJSON) {
        this.id = prodJSON.id || null; 
        this.name = prodJSON.name;
        this.description = prodJSON.description;
        this.photo = prodJSON.photo;
    }

    static async getAllProducts() {
        const resp = await Http.get(`${SERVER}/products`)
        return resp.products.map(p => new Product(p));
    }

    async post() {
        const resp = await Http.post(`${SERVER}/products`, this)
        this.id = resp.product.id;
        this.photo = resp.product.photo;
    }

    delete() {
        return Http.delete(`${SERVER}/products/${this.id}`);
    }

    toHTML() {
        let tr = document.createElement("tr");
        let tdDesc = document.createElement("td");
        let tdName = document.createElement("td");
        let tdPhoto = document.createElement("td");
        let tdDelete = document.createElement("td");
        let spanDel = document.createElement("span");
        spanDel.classList.add("delete");
        spanDel.innerText = "X";
        tdDelete.appendChild(spanDel);
        spanDel.addEventListener("click", e => {
            this.delete().then(() => tr.parentElement.removeChild(tr));
        });

        let img = document.createElement("img");
        img.src = SERVER + "/" + this.photo;
        tdPhoto.appendChild(img);

        tdDesc.innerText = this.description;
        tdName.innerText = this.name;

        tr.appendChild(tdPhoto);
        tr.appendChild(tdName);
        tr.appendChild(tdDesc);
        tr.appendChild(tdDelete);

        return tr;
    }
}