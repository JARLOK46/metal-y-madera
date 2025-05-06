// Script para reemplazar imágenes faltantes con placeholders SVG
document.addEventListener('DOMContentLoaded', function() {
    // Función para generar un color aleatorio en formato hexadecimal
    function getRandomColor() {
        const colors = ['#e67e22', '#f39c12', '#2c3e50', '#34495e', '#7f8c8d', '#95a5a6'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Función para crear un SVG placeholder con texto
    function createSVGPlaceholder(width, height, text, category) {
        const color = getRandomColor();
        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
            <rect width="${width}" height="${height}" fill="${color}" />
            <text x="50%" y="50%" font-family="Montserrat, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
            <text x="50%" y="65%" font-family="Montserrat, sans-serif" font-size="18" fill="white" text-anchor="middle" dominant-baseline="middle">${category}</text>
        </svg>
        `;
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }

    // Reemplazar imágenes de proyectos
    const projectImages = document.querySelectorAll('.project-card .project-img img');
    projectImages.forEach(img => {
        const card = img.closest('.project-card');
        const category = card.getAttribute('data-category') || 'proyecto';
        const title = card.querySelector('h3').textContent || 'Proyecto';
        img.src = createSVGPlaceholder(600, 400, title, category);
    });

    // Reemplazar imágenes de clientes/testimonios
    const clientImages = document.querySelectorAll('.testimonial-author .author-img img');
    clientImages.forEach((img, index) => {
        const authorName = img.closest('.testimonial-author').querySelector('h4').textContent || `Cliente ${index + 1}`;
        img.src = createSVGPlaceholder(100, 100, authorName.charAt(0), 'Cliente');
        img.style.borderRadius = '50%';
    });

    // Verificar si la imagen de fondo del hero existe, si no, crear un fondo con gradiente
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Aplicar un fondo con gradiente si la imagen no carga
        heroSection.style.backgroundImage = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
    }
});