
let courses = [];
let announcements = [];
const traineeMessages = {
    Alice: [
        { sender: "Alice", message: "What is the schedule for the course?", time: "10:00 AM" },
        { sender: "Trainer", message: "The course starts at 9:00 AM every Monday.", time: "10:05 AM" }
    ],
    Bob: [
        { sender: "Bob", message: "Can I have extra resources?", time: "11:30 AM" }
    ]
};


function initializeDashboard() {
    displayTraineeList();
    displayCourses();
    displayAnnouncements();
}

function toggleProfileDetails() {
    const profilePopup = document.querySelector(".profile-details");
    profilePopup.style.display = profilePopup.style.display === "block" ? "none" : "block";
}

function closeProfileDetails() {
    document.querySelector(".profile-details").style.display = "none";
}

function displayTraineeList() {
    const traineeList = document.querySelector(".trainee-list");
    traineeList.innerHTML = "";
    for (const trainee in traineeMessages) {
        const traineeCard = document.createElement("div");
        traineeCard.classList.add("trainee-card");
        traineeCard.textContent = trainee;
        traineeCard.onclick = () => openChat(trainee);
        traineeList.appendChild(traineeCard);
    }
}

function openChat(trainee) {
    const chatBox = document.querySelector(".chat-box");
    const chatContent = chatBox.querySelector(".chat-content");
    chatContent.innerHTML = "";
    traineeMessages[trainee].forEach(msg => {
        const messageDiv = document.createElement("div");
        messageDiv.className = msg.sender === "Trainer" ? "trainer-message" : "trainee-message";
        messageDiv.textContent = `${msg.sender}: ${msg.message}`;
        chatContent.appendChild(messageDiv);
    });
    chatBox.style.display = "block";
}

function sendMessage() {
    const chatBox = document.querySelector(".chat-box");
    const replyInput = chatBox.querySelector(".reply-input");
    const trainee = document.querySelector(".trainee-card").textContent;
    const message = replyInput.value.trim();
    if (message) {
        const newMessage = { sender: "Trainer", message, time: new Date().toLocaleTimeString() };
        traineeMessages[trainee].push(newMessage);
        replyInput.value = "";
        openChat(trainee);
    }
}


function addCourse(event) {
    event.preventDefault();
    const form = event.target;
    const newCourse = {
        title: form.courseTitle.value,
        description: form.courseDescription.value,
        schedule: form.courseSchedule.value,
        requirements: form.courseRequirements.value
    };
    courses.push(newCourse);
    form.reset();
    displayCourses();
}

function displayCourses() {
    const courseList = document.querySelector(".course-list");
    courseList.innerHTML = "";
    courses.forEach((course, index) => {
        const courseCard = document.createElement("div");
        courseCard.className = "course-card";
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Schedule:</strong> ${course.schedule}</p>
            <p><strong>Requirements:</strong> ${course.requirements}</p>
            <button onclick="editCourse(${index})">Edit</button>
            <button onclick="deleteCourse(${index})">Delete</button>
        `;
        courseList.appendChild(courseCard);
    });
}

function editCourse(index) {
    const course = courses[index];
    const form = document.querySelector(".add-course-form");
    form.courseTitle.value = course.title;
    form.courseDescription.value = course.description;
    form.courseSchedule.value = course.schedule;
    form.courseRequirements.value = course.requirements;
    deleteCourse(index);
}

function deleteCourse(index) {
    courses.splice(index, 1);
    displayCourses();
}


function postAnnouncement(event) {
    event.preventDefault();
    const form = event.target;
    const content = form.announcementContent.value;
    const date = new Date().toLocaleDateString();
    announcements.push({ content, date });
    form.reset();
    displayAnnouncements();
}

function displayAnnouncements() {
    const container = document.querySelector(".announcements-container");
    container.innerHTML = "";
    announcements.forEach((announcement, index) => {
        const announcementCard = document.createElement("div");
        announcementCard.className = "announcement-card";
        announcementCard.innerHTML = `
            <p><strong>Date:</strong> ${announcement.date}</p>
            <p>${announcement.content}</p>
            <button onclick="editAnnouncement(${index})">Edit</button>
            <button onclick="deleteAnnouncement(${index})">Delete</button>
        `;
        container.appendChild(announcementCard);
    });
}

function editAnnouncement(index) {
    const announcement = announcements[index];
    const form = document.querySelector(".announcement-form");
    form.announcementContent.value = announcement.content;
    deleteAnnouncement(index);
}

function deleteAnnouncement(index) {
    announcements.splice(index, 1);
    displayAnnouncements();
}

initializeDashboard();
