const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = document.querySelector('.icon-sun');
const moonIcon = document.querySelector('.icon-moon');
const html = document.documentElement;

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
        html.setAttribute('data-theme', savedTheme);
    }
    updateIcons();
});

function toggleTheme(){
    const currentTheme = html.getAttribute('data-theme');

    if(currentTheme === 'dark'){
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    updateIcons();
}

function updateIcons(){
    const currentTheme = html.getAttribute('data-theme');

    if(currentTheme === 'dark'){
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

themeToggle.addEventListener('click', toggleTheme);
