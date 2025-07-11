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

document.getElementById("menuButton").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open"); // Toggle the 'open' class
});
document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('modal-title').textContent = this.dataset.title;
        document.getElementById('modal-description').textContent = this.dataset.description;
        document.getElementById('modal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("menu").classList.remove("open");
});
