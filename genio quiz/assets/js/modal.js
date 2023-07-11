// JavaScript para o modal
var aboutModal = document.getElementById("about_modal");
var aboutBtn = document.getElementById("about_btn");
var aboutClose = document.getElementsByClassName("close")[0];

aboutBtn.addEventListener("click", function() {
  aboutModal.style.display = "block";
});

aboutClose.addEventListener("click", function() {
  aboutModal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == aboutModal) {
    aboutModal.style.display = "none";
  }
});

// JavaScript para o modal de contato
var contactModal = document.getElementById("contact_modal");
var contactBtn = document.getElementById("contact_btn");
var contactClose = document.getElementsByClassName("close")[1];

contactBtn.addEventListener("click", function() {
  contactModal.style.display = "block";
});

contactClose.addEventListener("click", function() {
  contactModal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
});
