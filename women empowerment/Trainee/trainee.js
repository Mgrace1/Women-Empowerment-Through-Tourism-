let enrolledCourses = [];

function toggleEnrollment(button, courseName) {
    const progressList = document.getElementById("progress-list");
    const noProgressMessage = document.querySelector(".no-progress");

    // Enroll or unenroll from the course
    if (!enrolledCourses.includes(courseName)) {
        enrolledCourses.push(courseName);
        button.textContent = "Unenroll";
        button.disabled = false;

        // Add course to progress
        if (noProgressMessage) noProgressMessage.remove();
        const listItem = document.createElement("li");
        listItem.textContent = courseName;
        progressList.appendChild(listItem);
    } else {
        enrolledCourses = enrolledCourses.filter(course => course !== courseName);
        button.textContent = "Enroll";

        // Remove course from progress
        const items = progressList.querySelectorAll("li");
        items.forEach(item => {
            if (item.textContent === courseName) item.remove();
        });

        // If no courses remain, show message
        if (enrolledCourses.length === 0) {
            const message = document.createElement("p");
            message.className = "no-progress";
            message.textContent = "No courses enrolled yet.";
            progressList.appendChild(message);
        }
    }

    updateJobListingsButton();
}

function updateJobListingsButton() {
    const jobListingsButton = document.querySelector(".job-listings-button");

    // Enable button only if all courses are enrolled
    if (enrolledCourses.length === 8) {
        jobListingsButton.disabled = false;
        jobListingsButton.textContent = "View Job Listings";
    } else {
        jobListingsButton.disabled = true;
        jobListingsButton.textContent = "Check Job Listings";
    }
}

function checkJobListings() {
    if (enrolledCourses.length === 8) {
        alert("Redirecting to job listings...");
        window.location.href = "./job/jobs.html";
    } else {
        alert("Complete all courses to access job listings.");
    }
}

function connectWithTrainer(courseName) {
    alert(`Connecting with the trainer for ${courseName}...`);
    window.location.href = `connect-with-trainer.html?course=${encodeURIComponent(courseName)}`;
}

if (!enrolledCourses.includes(courseName)) {
    // Enroll the course
    enrolledCourses.push(courseName);
    button.textContent = "Unenroll";
    button.classList.add("disabled"); // Add the "disabled" class
    button.disabled = true; // Disable the button
} else {
    // Unenroll the course
    enrolledCourses = enrolledCourses.filter(course => course !== courseName);
    button.textContent = "Enroll";
    button.classList.remove("disabled"); // Remove the "disabled" class
    button.disabled = false; // Enable the button
}
