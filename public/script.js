window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    const titleContainer = document.querySelector(".title-container");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // If user scrolls past the 100px of padding, fix the header
    if (scrollTop > 200) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.width = "100vw";
        header.style.margin = "0, 0, 0, 2%";
        header.style.paddingTop = "10px"; // Adjust padding when fixed to ensure proper sizing
    } else {
        // When scrolling back up, restore the original layout
        header.style.position = "relative";
        header.style.paddingTop = "10px"; // Original padding
    }

    // Handle title scrolling effect (optional)
    if (scrollTop > 50) {
        titleContainer.style.transform = "translateY(-100%)";
    } else {
        titleContainer.style.transform = "translateY(0)";
    }
});