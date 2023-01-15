document.getElementById("continuar").addEventListener("click", function () {
    let name = document.getElementById("input").value;
    if (!name) {
        alert("Todos os campos devem ser preenchidos.");
    }
});

