
let users = [
    { name: "Alice", role: "Trainee" },
    { name: "Bob", role: "Trainer" },
    { name: "Charlie", role: "Employer" }
];

let courses = [
    { title: "Tourism Basics", enrolled: 15 },
    { title: "Customer Service Skills", enrolled: 10 }
];

let jobPostings = [
    { title: "Tour Guide", applicants: 5 },
    { title: "Hotel Manager", applicants: 8 }
];

function displayOverview() {
    document.querySelector(".total-users").textContent = users.length;
    document.querySelector(".active-courses").textContent = courses.length;
    document.querySelector(".job-postings").textContent = jobPostings.length;
}


function generateUserReport() {
    const reportOutput = document.querySelector(".report-output");
    reportOutput.innerHTML = "<h3>User Activity Report</h3>";
    users.forEach(user => {
        reportOutput.innerHTML += `<p>${user.name} - ${user.role}</p>`;
    });
}

function generateCourseReport() {
    const reportOutput = document.querySelector(".report-output");
    reportOutput.innerHTML = "<h3>Course Enrollment Report</h3>";
    courses.forEach(course => {
        reportOutput.innerHTML += `<p>${course.title}: ${course.enrolled} enrolled</p>`;
    });
}


function generateJobReport() {
    const reportOutput = document.querySelector(".report-output");
    reportOutput.innerHTML = "<h3>Job Placement Report</h3>";
    jobPostings.forEach(job => {
        reportOutput.innerHTML += `<p>${job.title}: ${job.applicants} applicants</p>`;
    });
}


function manageUsers() {
    const managementOutput = document.querySelector(".management-output");
    managementOutput.innerHTML = "<h3>Manage Users</h3>";
    users.forEach(user => {
        managementOutput.innerHTML += `<p>${user.name} - ${user.role} <button onclick="removeUser('${user.name}')">Remove</button></p>`;
    });
}


function removeUser(name) {
    users = users.filter(user => user.name !== name);
    manageUsers();
    displayOverview();
}

function monitorContent() {
    const managementOutput = document.querySelector(".management-output");
    managementOutput.innerHTML = "<h3>Active Content Monitoring</h3><p>Currently active content is being monitored.</p>";
}

function resolveIssues() {
    const managementOutput = document.querySelector(".management-output");
    managementOutput.innerHTML = "<h3>Issue Resolution</h3><p>No issues reported at this time.</p>";
}

displayOverview();
