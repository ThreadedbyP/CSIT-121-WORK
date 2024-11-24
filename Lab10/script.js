// Open the overlay menu
function openNav() {
    const overlay = document.getElementById("myNav");
    overlay.style.width = "100%"; // Expand overlay
    document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Close the overlay menu
function closeNav() {
    const overlay = document.getElementById("myNav");
    overlay.style.width = "0"; // Collapse overlay
    document.body.style.overflow = "auto"; // Allow scrolling
}
