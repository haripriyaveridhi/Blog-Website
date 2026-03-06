document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("blogForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let title = document.getElementById("title").value;
        let category = document.getElementById("category").value;
        let image = document.getElementById("image").value;
        let content = document.getElementById("content").value;

        let today = new Date().toISOString().split("T")[0];

        let newBlog = {
            title,
            category,
            image,
            content,
            date: today,
            likes: 0
        };

        let blogs = JSON.parse(localStorage.getItem("pinkBlogs")) || [];
        blogs.push(newBlog);

        localStorage.setItem("pinkBlogs", JSON.stringify(blogs));

        alert("Blog Published Successfully 💗");

        window.location.href = "explore.html";
    });

    // Dark Mode
    const toggle = document.getElementById("darkToggle");
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });

});