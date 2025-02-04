document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".rainbow-text");
    const text = textElement.textContent;
    textElement.textContent = ""; // Clear original text

    // Wrap each letter in a <span>
    [...text].forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        textElement.appendChild(span);
    });

    // Add hover event
    textElement.addEventListener("mouseover", (e) => {
        if (e.target.tagName === "SPAN") {
            const randomHue = Math.floor(Math.random() * 360); // Random color
            e.target.style.color = `hsl(${randomHue}, 100%, 50%)`;
        }
    });

    textElement.addEventListener("mouseout", (e) => {
        if (e.target.tagName === "SPAN") {
            e.target.style.color = ""; // Reset color
        }
    });
});