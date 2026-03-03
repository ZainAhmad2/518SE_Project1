document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderHome();
});
function renderNavbar() {
    const nav = document.createElement("nav");

    nav.innerHTML = `
        <div class="nav-container">
            <h2 class="logo">Zain's Personal Portfolio</h2>

            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    `;

    document.body.prepend(nav);
}

function renderHome() {
    const app = document.getElementById("app");

    const homeSection = document.createElement("section");
    homeSection.className = "home";

    homeSection.innerHTML = `
        <div class="home-content">
            <h1>Zain Ahmad</h1>
            <h3>Robotic Process Automation (RPA) Developer | Computer Science Graduate Student</h3>

            <p>
               Hello, my name is Zain Ahmad and I am graduate student at SUNY Albany and am currently working for New York's
               Information Technology Services (ITS) as a Robotic Process Automation (RPA) Developer. I have a strong passion for 
               software development and am hopeful you see that as you go through the rest of my website!
            </p>

            <button id="projectsBtn">View My Projects!</button>
        </div>
    `;

    app.appendChild(homeSection);

    document
        .getElementById("projectsBtn")
        .addEventListener("click", () => {
            window.location.href = "projects.html";
        });
}