function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value; 

    const confirmationMessage = document.getElementById("confirmationMessage");

    if (!localStorage.getItem(email)) {
        localStorage.setItem(email, JSON.stringify({ name, password, role }));
        confirmationMessage.style.display = "block";
        confirmationMessage.textContent = `Welcome to WETS, ${name}! You have registered as a ${role}.`;
        document.getElementById("registerForm").reset();
    } else {
        confirmationMessage.style.display = "block";
        confirmationMessage.textContent = "This email is already registered. Please log in.";
    }
}

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const loginMessage = document.getElementById("loginMessage");
    const user = JSON.parse(localStorage.getItem(email)); 

    if (user && user.password === password) {
        loginMessage.style.color = "green";
        loginMessage.style.display = "block";
        loginMessage.textContent = `Welcome back, ${user.name}! Redirecting to your ${user.role} dashboard...`;

        switch (user.role.toLowerCase()) {
            case "admin":
                setTimeout(() => window.location.href = "../Admin/admin-dashboard.html", 2000);
                break;
            case "trainer":
                setTimeout(() => window.location.href = "../Trainer/trainer-dashboard.html", 2000);
                break;
            case "employer":
                setTimeout(() => window.location.href = "../Employer/employer-dashboard.html", 2000);
                break;
            case "trainee":
                setTimeout(() => window.location.href = "../Trainee/trainee-dashboard.html", 2000);
                break;
            default:
                loginMessage.style.color = "red";
                loginMessage.textContent = "Unknown role. Please contact support.";
        }
    } else {
       
        loginMessage.style.color = "red";
        loginMessage.style.display = "block";
        loginMessage.textContent = "Invalid email or password. Please try again.";
    }
}


function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
}

window.onclick = function(event) {
    const sidebar = document.querySelector(".sidebar");
    if (event.target === sidebar) {
        sidebar.style.display = "none";
    }
};

let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => (slide.style.display = 'none'));
    currentSlide++;
    if (currentSlide > slides.length) currentSlide = 1;
    slides[currentSlide - 1].style.display = 'block';
    setTimeout(showSlides, 3000); 
}

showSlides();
