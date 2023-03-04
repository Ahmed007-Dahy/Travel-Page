const modalBox = document.querySelector('.modal');

const openModalFunction = function () {
    modalBox.classList.remove('d-display-none');
};
const closeModalFunction = function () {
    modalBox.classList.add('d-display-none');
};