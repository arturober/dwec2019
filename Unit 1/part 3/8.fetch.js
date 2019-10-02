const SERVER = "http://localhost:3000";

fetch(`${SERVER}/products/3`).then(resp => {
    if(!resp.ok) throw new Error(resp.statusText);
    return resp.json();
}).then(json => console.log(json))
.catch(e => console.error(e));

