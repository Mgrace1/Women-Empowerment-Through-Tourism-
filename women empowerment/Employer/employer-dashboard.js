
let jobs = [];


function addJob(event) {
    event.preventDefault();

    const jobTitle = document.querySelector(".job-title").value;
    const jobDescription = document.querySelector(".job-description").value;
    const jobSkills = document.querySelector(".job-skills").value;
    const jobDeadline = document.querySelector(".job-deadline").value;

    const newJob = { title: jobTitle, description: jobDescription, skills: jobSkills, deadline: jobDeadline, applicants: [] };
    jobs.push(newJob);

    document.querySelector(".job-form").reset();

    displayJobs();
}

function displayJobs() {
    const jobsContainer = document.querySelector(".jobs-container");
    jobsContainer.innerHTML = ""; 

    jobs.forEach((job, index) => {
        const jobDiv = document.createElement("div");
        jobDiv.classList.add("job-posting");

        jobDiv.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Description:</strong> ${job.description}</p>
            <p><strong>Skills Required:</strong> ${job.skills}</p>
            <p><strong>Deadline:</strong> ${job.deadline}</p>
            <button onclick="editJob(${index})" class="edit-button">Edit</button>
            <button onclick="deleteJob(${index})" class="delete-button">Delete</button>
            <h4>Applicants:</h4>
            <ul class="applicants-list">
                ${job.applicants.length > 0 ? job.applicants.map(applicant => `<li>${applicant}</li>`).join('') : "<li>No applicants yet</li>"}
            </ul>
        `;

        jobsContainer.appendChild(jobDiv);
    });
}

function editJob(index) {
    const job = jobs[index];
    document.querySelector(".job-title").value = job.title;
    document.querySelector(".job-description").value = job.description;
    document.querySelector(".job-skills").value = job.skills;
    document.querySelector(".job-deadline").value = job.deadline;

    jobs.splice(index, 1);
    displayJobs();
}

function deleteJob(index) {
    jobs.splice(index, 1);
    displayJobs();
}

function addApplicant(jobIndex, applicantName) {
    jobs[jobIndex].applicants.push(applicantName);
    displayJobs();
}
