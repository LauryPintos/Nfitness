
// BOTONES DE LOS MODALES
let buttons = document.querySelectorAll(".open-modal");
let modals = document.querySelectorAll(".modal");
let closeButtons = document.querySelectorAll(".close");

// MOSTRAR EL MODAL QUE CORRESPONDE AL HACER EL CLICK
buttons.forEach(function(button) {
  button.onclick = function() {
    let modalId = button.getAttribute("data-modal");
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
});

// CERRAR EL MODAL
closeButtons.forEach(function(closeButton) {
  closeButton.onclick = function() {
    let modal = closeButton.closest(".modal");
    modal.style.display = "none";
  }
});

// CERRAR MODAL SI SE HACE CLICK POR FUERA
window.onclick = function(event) {
  modals.forEach(function(modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}