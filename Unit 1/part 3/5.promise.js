// let p = new Promise((resolve, reject) => {
//     console.log("Promise started");
//     setTimeout(() => {
//         console.log("Promised ended");
//         resolve();
//     }, 5000);
// });

// p.then(() => console.log("Instruction after promise"));

// console.log("The program continues before the promise has finished");

function addPromise(n1, n2) {
    return new Promise((resolve, reject) => {
        if(isNaN(n1) || isNaN(n2)) {
            reject("Numbers are not valid");
        }
        setTimeout(() => resolve(n1 + n2), 3000); 
    });
}

document.addEventListener("DOMContentLoaded", e => {
    let addButton = document.getElementById("add");
    let resultPar = document.getElementById("result");
    
    addButton.addEventListener("click", e => {
        let n1 = +document.getElementById("num1").value;
        let n2 = +document.getElementById("num2").value;
        resultPar.innerText = "Loading result...";
        addPromise(n1, n2).then(res => {
            resultPar.innerText = res;
        }).catch(error => {
            resultPar.innerText = error;
        });
    });
});


