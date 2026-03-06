document.addEventListener("DOMContentLoaded", function () {

    const search = document.getElementById("searchExplore");
    const category = document.getElementById("categoryFilter");
    const sort = document.getElementById("sortOption");
    const container = document.getElementById("blogContainer");

    const cards = Array.from(document.querySelectorAll(".blog-card"));

    function updateDisplay() {

        let keyword = search.value.toLowerCase();
        let selectedCategory = category.value;

        cards.forEach(card => {

            let title = card.dataset.title.toLowerCase();
            let cardCategory = card.dataset.category;

            let matchSearch = title.includes(keyword);
            let matchCategory = selectedCategory === "all" || cardCategory === selectedCategory;

            if (matchSearch && matchCategory) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Search
    search.addEventListener("keyup", updateDisplay);

    // Category filter
    category.addEventListener("change", updateDisplay);

    // Sorting
    sort.addEventListener("change", function () {

        let sortedCards = [...cards];

        if (sort.value === "title") {
            sortedCards.sort((a, b) =>
                a.dataset.title.localeCompare(b.dataset.title)
            );
        }

        if (sort.value === "date") {
            sortedCards.sort((a, b) =>
                new Date(b.dataset.date) - new Date(a.dataset.date)
            );
        }

        container.innerHTML = "";
        sortedCards.forEach(card => container.appendChild(card));
    });

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

});