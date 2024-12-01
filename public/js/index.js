const articles = [
    { title: "Breaking News: Market Crash", content: "Stock markets tumble as investors panic.", isLarge: true },
    { title: "World News", content: "Leaders gather for a global climate summit to discuss urgent climate policies.", isLarge: false },
    { title: "Tech Trends", content: "AI technology continues to evolve rapidly, revolutionizing industries worldwide.", isLarge: false },
    { title: "Health Update", content: "New guidelines for a balanced diet released by health authorities.", isLarge: false },
    { title: "Travel Tips", content: "Explore the top destinations to visit in 2024 for an unforgettable adventure.", isLarge: true },
    { title: "Sports Roundup", content: "Catch up on highlights from the weekend's most thrilling games and matches.", isLarge: false },
];

const articleGrid = document.getElementById("article-grid");

setTimeout(() => {
    articles.forEach((article) => {
        const articleDiv = document.createElement("div");
        articleDiv.className = `article ${article.isLarge ? "large" : ""}`;
        articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
        `;
        articleGrid.appendChild(articleDiv);
    });
}, 0);

