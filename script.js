const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon'); 

function toggleTheme() {
    body.classList.toggle('light-mode');
    
    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        themeIcon.className = 'bx bx-moon theme-icon';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.className = 'bx bx-sun theme-icon';
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.className = 'bx bx-moon theme-icon'; 
    }
}

themeToggle.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', loadTheme);

const nome = "Daniel";
let idade = 20;
var cpf = 12121213331; 

document.getElementById('nome').textContent = nome;
document.getElementById('idade').textContent = "idade: " + idade;

function adicionar(){
    idade++;
    document.getElementById('idade').textContent = "idade: " + idade;
}

const typed = new Typed(".multiple-text", {
    strings: [
        "eita",
        "ele gooxxta",
        "uuuuiii",
        "caaavaaaaaaaalo"
    ],
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true
});