// Dark Mode
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Likes
document.querySelectorAll(".like-btn").forEach(button => {
    button.addEventListener("click", () => {
        let count = button.querySelector("span");
        count.textContent = parseInt(count.textContent) + 1;
    });
});

// Comments
document.querySelectorAll(".comment-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let input = btn.previousElementSibling;
        let commentBox = btn.nextElementSibling;

        if (input.value.trim() !== "") {
            let p = document.createElement("p");
            p.textContent = input.value;
            commentBox.appendChild(p);
            input.value = "";
        }
    });
});

// Share Button
document.querySelectorAll(".share-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Blog link copied! 💗");
    });
});
// SEARCH FUNCTION (Fixed for Grid Layout)

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keyup", function () {

        let keyword = searchInput.value.toLowerCase();
        let blogs = document.querySelectorAll(".blog-card");

        blogs.forEach(blog => {
            let title = blog.dataset.title.toLowerCase();

            if (title.includes(keyword)) {
                blog.classList.remove("hidden");
            } else {
                blog.classList.add("hidden");
            }
        });

    });

});