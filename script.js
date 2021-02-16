window.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal'),
        btn = document.querySelector('.btn'),
        close = document.querySelector('.close');

    btn.addEventListener('click', openModal);
    close.addEventListener('click', closeModal);

    function openModal() {
        modal.classList.remove('hide');
    };

    function closeModal() {
        modal.classList.add('hide');
    };
});