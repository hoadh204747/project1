const login = document.querySelector(".js-login");
const modal = document.querySelector(".js-modal");
const closed = document.querySelector(".js-modal-close");

function showLogin() {
    modal.classList.add('open')
}
function hideModal() {
    modal.classList.remove('open')
}

login.addEventListener("click", showLogin);
closed.addEventListener("click", hideModal);