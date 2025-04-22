document.addEventListener('DOMContentLoaded', function() {
    const signupButton = document.querySelector('.signup-button');
    const modal = document.getElementById('signupModal');
    const closeButton = document.querySelector('.close-button');
    const okButton = document.querySelector('.ok-button');
    const cancelButton = document.querySelector('.cancel-button');

    function openModal() {
        modal.style.display = 'block';
        document.body.classList.add('modal-open'); 
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); 
    }

    signupButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    okButton.addEventListener('click', closeModal); 
    cancelButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});