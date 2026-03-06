// 🌸 Pink Panorama - DSA Implementation
// ==========================================
// All required DSA concepts in one file
// ==========================================



// ===============================
// 1️⃣ ARRAY / LIST CONCEPT
// ===============================

// Fetch blogs from localStorage if available
let blogs = JSON.parse(localStorage.getItem("pinkBlogs")) || [
    { title: "Pink Morning", likes: 120 },
    { title: "Travel Diaries", likes: 90 },
    { title: "Coding in Pink", likes: 200 }
];

console.log("📌 Original Blog List:");
console.log(blogs);



// ===============================
// 2️⃣ STACK (Undo Delete Feature)
// LIFO - Last In First Out
// ===============================

let deleteStack = [];

function deleteBlog(title) {
    let index = blogs.findIndex(blog => blog.title === title);

    if (index !== -1) {
        deleteStack.push(blogs[index]); // push into stack
        blogs.splice(index, 1);
        console.log("🗑 Deleted:", title);
    }
}

function undoDelete() {
    if (deleteStack.length > 0) {
        let restored = deleteStack.pop(); // pop from stack
        blogs.push(restored);
        console.log("↩ Restored:", restored.title);
    }
}



// ===============================
// 3️⃣ QUEUE (Blog Approval System)
// FIFO - First In First Out
// ===============================

let approvalQueue = [];

function submitForApproval(blog) {
    approvalQueue.push(blog); // enqueue
}

function approveBlog() {
    if (approvalQueue.length > 0) {
        let approved = approvalQueue.shift(); // dequeue
        blogs.push(approved);
        console.log("✅ Approved:", approved.title);
    }
}



// ===============================
// 4️⃣ LINEAR SEARCH
// Time Complexity: O(n)
// ===============================

function linearSearch(title) {
    for (let blog of blogs) {
        if (blog.title === title) {
            return blog;
        }
    }
    return null;
}



// ===============================
// 5️⃣ BINARY SEARCH
// Time Complexity: O(log n)
// (Array must be sorted by title)
// ===============================

function binarySearch(title) {

    let left = 0;
    let right = blogs.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (blogs[mid].title === title)
            return blogs[mid];
        else if (blogs[mid].title < title)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return null;
}



// ===============================
// 6️⃣ BUBBLE SORT (by Likes)
// Time Complexity: O(n²)
// ===============================

function bubbleSortByLikes() {
    for (let i = 0; i < blogs.length - 1; i++) {
        for (let j = 0; j < blogs.length - i - 1; j++) {
            if (blogs[j].likes < blogs[j + 1].likes) {
                let temp = blogs[j];
                blogs[j] = blogs[j + 1];
                blogs[j + 1] = temp;
            }
        }
    }
}



// ===============================
// 7️⃣ QUICK SORT (by Likes)
// Time Complexity: O(n log n)
// ===============================

function quickSort(arr, low, high) {

    if (low < high) {
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {

    let pivot = arr[high].likes;
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j].likes > pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}



// ==========================================
// 🔥 DEMONSTRATION SECTION (Console Output)
// ==========================================

console.log("\n🔎 Linear Search for 'Travel Diaries'");
console.log(linearSearch("Travel Diaries"));


console.log("\n📊 Bubble Sort by Likes");
bubbleSortByLikes();
console.log(blogs);


console.log("\n📊 Quick Sort by Likes");
quickSort(blogs, 0, blogs.length - 1);
console.log(blogs);


console.log("\n🔍 Binary Search for 'Pink Morning'");
console.log(binarySearch("Pink Morning"));


console.log("\n🗑 Deleting 'Pink Morning'");
deleteBlog("Pink Morning");
console.log(blogs);


console.log("\n↩ Undo Delete");
undoDelete();
console.log(blogs);


console.log("\n📥 Queue Example");
submitForApproval({ title: "New Fashion Blog", likes: 50 });
approveBlog();
console.log(blogs);