document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Dynamic text effect
    const titles = ["Full Stack Developer", "Web & Mobile App Enthusiast", "Tech Innovator"];
    let count = 0;
    const titleElement = document.querySelector("#home h1");

    function changeTitle() {
        titleElement.textContent = titles[count];
        count = (count + 1) % titles.length;
        setTimeout(changeTitle, 3000);
    }
    changeTitle();

    // Contact form validation
    document.querySelector("#contact button").addEventListener("click", function () {
        const name = document.querySelector("#contact input[type='text']").value;
        const email = document.querySelector("#contact input[type='email']").value;
        const message = document.querySelector("#contact textarea").value;

        if (!name || !email || !message) {
            alert("Please fill out all fields before sending.");
            return;
        }
        alert("Message sent successfully!");
    });
});
