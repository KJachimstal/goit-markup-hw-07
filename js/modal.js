(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }

    document.addEventListener('keyup', function (event) {
        if (event.key == 'Escape') {
            refs.modal.classList.add('is-hidden');
        }
    });
})();
