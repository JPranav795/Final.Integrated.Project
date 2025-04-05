// Hamburger menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Reveal secret
document.getElementById('reveal-btn').addEventListener('click', () => {
    const secret = document.getElementById('secret');
    secret.classList.toggle('hidden');
    if (!secret.classList.contains('hidden')) {
        secret.style.animation = 'bounceIn 1s ease';
    }
});

// Flavor button
document.getElementById('flavor-btn').addEventListener('click', () => {
    const images = document.querySelectorAll('.products img');
    images.forEach(img => {
        img.style.transform = 'rotate(360deg)';
        setTimeout(() => img.style.transform = 'rotate(0deg)', 1000);
    });
});

// Signup button
document.getElementById('signup-btn').addEventListener('click', () => {
    alert('Welcome to the Purple Nut Crew!');
});