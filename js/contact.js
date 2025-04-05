// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Simplified form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const response = document.getElementById('form-response');
    response.textContent = 'Message sent!';
    response.classList.remove('hidden');
    document.getElementById('contact-form').reset();
});