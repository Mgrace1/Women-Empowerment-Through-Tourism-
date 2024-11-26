document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreContent = this.previousElementSibling;
            if (moreContent.style.display === 'block') {
                moreContent.style.display = 'none';
                this.textContent = 'Read More';
            } else {
                moreContent.style.display = 'block';
                this.textContent = 'Read Less';
            }
        });
    });
});
