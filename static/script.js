const title = document.getElementById("colored-text");

const flags = [
    {
        name: "Agender",
        colors: [
            "#000000", // Black
            "#B9F4BC", // Light green
            "#FFFFFF", // White
            "#B9F4BC", // Light green
            "#000000", // Black
        ],
    },
    {
        name: "NB",
        colors: [
            "#FFF430", // Yellow
            "#FFFFFF", // White
            "#9C59D1", // Purple
            "#000000", // Black
        ],
    },
    {
        name: "Demisexual",
        colors: [
            "#000000", // Black
            "#A4A4A4", // Gray
            "#FFFFFF", // White
            "#6A0DAD", // Purple
        ],
    },
    {
        name: "Trans",
        colors: [
            "#55CDFC", // Light blue
            "#F7A8B8", // Pink
            "#FFFFFF", // White
            "#F7A8B8", // Pink
            "#55CDFC", // Light blue
        ],
    },
];

let currentFlagIndex = 0; // Keeps track of the current flag being used

document.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
        changeColors();
    }
});

function changeColors() {
    const text = title.textContent;
    const flag = flags[currentFlagIndex]; // Get the current flag
    title.innerHTML = ""; // Clear the current text

    // Create span elements for each letter
    Array.from(text).forEach((letter, index) => {
        const span = document.createElement("span");
        // Set color based on the flag's colors
        const colorIndex = index % flag.colors.length;
        span.textContent = letter;
        span.style.color = flag.colors[colorIndex];
        title.appendChild(span);
    });

    // Switch to the next flag after each Enter press
    currentFlagIndex = (currentFlagIndex + 1) % flags.length;
}