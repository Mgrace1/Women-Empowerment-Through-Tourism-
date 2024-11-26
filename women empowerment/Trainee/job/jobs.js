function toggleDescription(id) {
    const description = document.getElementById(id);
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

function submitContactForm(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        // Display a simple confirmation message
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        confirmationMessage.style.display = "block";
        
        // Clear the form fields
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
}
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function () {
        const description = this.parentElement.parentElement.querySelector('.job-description');

        // Toggle display of the job description
        if (description.style.display === "block") {
            description.style.display = "none";
            this.textContent = "▼"; // Change back to dropdown arrow
        } else {
            description.style.display = "block";
            this.textContent = "✖"; // Change to cross
        }
    });
});
