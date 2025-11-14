// Saudação personalizada
let nome = prompt("Qual é o seu nome?");
let elementoNomeUsuario = document.querySelector("#nome-usuário");
elementoNomeUsuario.textContent = nome && nome.trim() !== "" ? nome : "Visitante";

// Alternância de tema
function alternarTema() {
    document.body.classList.toggle("tema-claro");
}
