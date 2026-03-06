document.addEventListener("DOMContentLoaded", function () {

    // Count Blogs
    let blogs = JSON.parse(localStorage.getItem("pinkBlogs")) || [];
    document.getElementById("blogCount").textContent = blogs.length;

    // Dark Mode
    const toggle = document.getElementById("darkToggle");
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });

    // Logout
    const logout = document.getElementById("logoutBtn");

    logout.addEventListener("click", () => {
        alert("Logged out successfully 💗");
        window.location.href = "login.html";
    });

});