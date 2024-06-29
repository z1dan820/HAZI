document.addEventListener('DOMContentLoaded', () => {
    const brand = document.getElementById('brand');
    const text = brand.textContent;
    brand.textContent = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('letter');
        span.style.left = `${index * 80}px`;
        span.style.animationDelay = `${index * 5}s`;
        brand.appendChild(span);
    });
});
