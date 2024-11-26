function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value.trim();

    const confirmationMessage = document.getElementById("confirmationMessage");

   
    if (!name || !email || !password || !role) {
        confirmationMessage.style.display = "block";
        confirmationMessage.style.color = "red"; 
        confirmationMessage.textContent = "Please fill out all fields.";
        return;
    }

    if (!localStorage.getItem(email)) {
        localStorage.setItem(email, JSON.stringify({ name, password, role }));
        confirmationMessage.style.display = "block";
        confirmationMessage.style.color = "green"; 
        confirmationMessage.textContent = `Welcome to WETS, ${name}! You have registered as a ${role}.`;
        document.getElementById("registerForm").reset();
    } else {
        confirmationMessage.style.display = "block";
        confirmationMessage.style.color = "red"; 
        confirmationMessage.textContent = "This email is already registered. Please log in.";
    }
}

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    const user = JSON.parse(localStorage.getItem(email));

    const loginMessage = document.getElementById("loginMessage");

    if (!email || !password) {
        loginMessage.style.display = "block";
        loginMessage.style.color = "red"; 
        loginMessage.textContent = "Please enter both email and password.";
        return;
    }

    if (user && user.password === password) {
        loginMessage.style.display = "block";
        loginMessage.style.color = "green"; 
        loginMessage.textContent = `Welcome back, ${user.name}! Redirecting to your ${user.role} dashboard...`;

        
        const role = user.role.toLowerCase();
        const dashboardMapping = {
            admin: "../Admin/admin-dashboard.html",
            employer: "../Employer/employer-dashboard.html",
            trainee: "../Trainee/trainee-dashboard.html",
            trainer: "../Trainer/trainer-dashboard.html",
        };

        const redirectUrl = dashboardMapping[role] || "./default-dashboard.html"; 
        setTimeout(() => window.location.href = redirectUrl, 2000);
    } else {
        loginMessage.style.display = "block";
        loginMessage.style.color = "red"; 
        loginMessage.textContent = "Invalid email or password. Please try again.";
    }
}
