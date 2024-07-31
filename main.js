var modalOpenButton = document.getElementById("modal-open-button-scrollable");
var modalOverlay = document.getElementById("modal-overlay");
var scrollableModal = document.getElementById("modal-container-scrollable");
var modalClosebutton = document.getElementById("modal-container-close-button");
var bodyPrincipal = document.getElementById("body-principal");

var buttonTheme = document.getElementById("button-theme");
var iconTheme = document.getElementById("icon_theme");

buttonTheme.addEventListener('click', event => {

    if(bodyPrincipal.classList.contains('light')){
        bodyPrincipal.classList.add('dark')
        bodyPrincipal.classList.remove('light')
        iconTheme.classList.add('fa-moon')
        iconTheme.classList.remove('fa-sun')
    } else {
        bodyPrincipal.classList.remove('dark')
        bodyPrincipal.classList.add('light')
        iconTheme.classList.remove('fa-moon')
        iconTheme.classList.add('fa-sun')
    }
})

bodyPrincipal.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

modalOpenButton.addEventListener("click", event => {
    modalOverlay.classList.add("modal-overlay-visible");
    scrollableModal.classList.add("modal-container-visible")

});

const closeModal = () => {
    modalOverlay.classList.remove("modal-overlay-visible");
    scrollableModal.classList.remove("modal-container-visible");
}

modalClosebutton.addEventListener("click", closeModal)
modalOverlay.addEventListener("click", closeModal);