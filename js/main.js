document.getElementById("continuar").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    if (!name) {
        alert("O campo nome deve ser preenchido.");
    }
});

document.getElementById("continuar").addEventListener("click", function () {
    let sname = document.getElementById("sname").value;
    if (!sname) {
        alert("O campo sobrenome deve ser preenchido.");
    }
});

document.getElementById("continuar").addEventListener("click", function () {
    let email = document.getElementById("email").value;
    if (!email) {
        alert("O campo email deve ser preenchido.");
    }
});

document.getElementById("continuar").addEventListener("click", function () {
    let nasc = document.getElementById("nasc").value;
    if (!nasc) {
        alert("O campo data de nascimento deve ser preenchido.");
    }
});

