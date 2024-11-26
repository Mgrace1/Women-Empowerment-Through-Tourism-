function submitApplication(event) {
    event.preventDefault(); 
    
    const fullName = document.querySelector("[name='fullName']").value;
    const email = document.querySelector("[name='email']").value;
    const coverLetter = document.querySelector("[name='coverLetter']").value;
    const resume = document.querySelector("[name='resume']").files[0];

    if (fullName && email && coverLetter && resume) {
       
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.style.display = "block";
        confirmationMessage.style.color = "green";
        confirmationMessage.textContent = `Thank you, ${fullName}! Your application has been successfully submitted.`;

        document.querySelector(".application-form").reset();
    } else {
        alert("Please fill out all fields and upload your resume.");
    }
}

function goBack() {
    window.history.back(); 
}

