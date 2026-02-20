const sections = document.querySelectorAll('.page-section');

function showSection(id) {
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

window.onload = () => showSection('home');