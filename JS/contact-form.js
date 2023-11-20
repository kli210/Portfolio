document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            handleFormSubmission();
        }
    });

    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill out all required fields.');
            return false;
        }

        return true;
    }

});