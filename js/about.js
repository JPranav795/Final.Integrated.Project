// Hamburger menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Timeline button
document.getElementById('timeline-btn').addEventListener('click', () => {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        item.style.animation = 'slideUp 1s ease';
    });
});

// Team button
document.getElementById('team-btn').addEventListener('click', () => {
    const images = document.querySelectorAll('.team-member img');
    images.forEach(img => {
        img.style.transform = 'rotate(360deg)';
        setTimeout(() => img.style.transform = 'rotate(0deg)', 1000);
    });
});

// Values button
document.getElementById('values-btn').addEventListener('click', () => {
    const cards = document.querySelectorAll('.value-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.background = '#ff00ff';
            setTimeout(() => card.style.background = 'rgba(147, 112, 219, 0.9)', 500);
        }, index * 300);
    });
});