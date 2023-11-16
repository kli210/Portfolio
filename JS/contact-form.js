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

    function handleFormSubmission() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'submit_form.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                if (xhr.responseText === 'success') {
                    alert('Form submitted successfully!');
                    // You can redirect the user or perform other actions here
                } else {
                    alert('Error submitting the form. Please try again later.');
                }
            }
        };

        var formData = new FormData(contactForm);
        xhr.send(formData);
    }
});