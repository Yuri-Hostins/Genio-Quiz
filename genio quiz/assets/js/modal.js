// JavaScript para o modal
var modalSobre = document.getElementById("modal-sobre");
var botaoSobre = document.getElementById("botao-sobre");
var fecharSobre = document.getElementsByClassName("fechar")[0];

botaoSobre.addEventListener("click", function () {
  modalSobre.style.display = "block";
});

fecharSobre.addEventListener("click", function () {
  modalSobre.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalSobre) {
    modalSobre.style.display = "none";
  }
});

// JavaScript para o modal de contato
var modalContato = document.getElementById("modal-contato");
var botaoContato = document.getElementById("botao-contato");
var fecharContato = document.getElementsByClassName("fechar")[1];

botaoContato.addEventListener("click", function () {
  modalContato.style.display = "block";
});

fecharContato.addEventListener("click", function () {
  modalContato.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalContato) {
    modalContato.style.display = "none";
  }
});
