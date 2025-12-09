
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

function toggleTheme() {
    body.classList.toggle('light-mode');

    const isLight = body.classList.contains('light-mode');

    if (isLight) {
        themeIcon.className = "bx bx-moon theme-icon";
        localStorage.setItem("theme", "light");
    } else {
        themeIcon.className = "bx bx-sun theme-icon";
        localStorage.setItem("theme", "dark");
    }
}

function loadTheme() {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
        body.classList.add("light-mode");
        themeIcon.className = "bx bx-moon theme-icon";
    }
}

themeToggle.addEventListener("click", toggleTheme);
document.addEventListener("DOMContentLoaded", loadTheme);

new Typed(".multiple-text", {
    strings: [
        "Programador",
        "Desenvolvedor",
        "Criador de Projetos",
        "Caavaaaaaaaaaaalo",
        "Entusiasta de Tecnologia"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
