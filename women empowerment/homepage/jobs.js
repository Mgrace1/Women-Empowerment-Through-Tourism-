function filterJobs() {
    const searchInput = document.querySelector('.job-search-input').value.toLowerCase();
    const jobs = document.querySelectorAll('.job');

    jobs.forEach(job => {
        const title = job.dataset.title.toLowerCase();
        const location = job.dataset.location.toLowerCase();

        if (title.includes(searchInput) || location.includes(searchInput)) {
            job.style.display = 'block';
        } else {
            job.style.display = 'none';
        }
    });
}

function viewJobDetails(jobTitle) {
    const jobDetails = document.getElementById('jobDetails');
    const jobDetailsContent = document.getElementById('jobDetailsContent');
    
    
    const details = {
        "Tour Guide": "As a Tour Guide, you will lead groups of tourists and provide insights about Rwanda's culture and attractions.",
        "Hotel Receptionist": "Assist guests with check-ins, reservations, and inquiries at a 5-star hotel.",
        "Marketing Specialist": "Develop marketing strategies and manage social media for a tourism company."
    };

    jobDetailsContent.textContent = details[jobTitle] || "Details not available.";
    jobDetails.style.display = 'block';
    document.querySelector('.job-listings').style.display = 'none';
}

function applyForJob() {
    alert('Thank you for applying! We will contact you soon.');
}

function goBackToListings() {
    document.getElementById('jobDetails').style.display = 'none';
    document.querySelector('.job-listings').style.display = 'grid';
}
