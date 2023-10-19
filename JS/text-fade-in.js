
    document.addEventListener('DOMContentLoaded', function () {
        const textElements = document.querySelectorAll('.animated-text');
        const delay = 800; // Delay in milliseconds

        textElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('show');
            }, index * delay);
        });
    });