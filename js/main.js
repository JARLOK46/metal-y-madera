// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });

    // Referencias a elementos del DOM
    const header = document.querySelector('.header');
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollTopBtn = document.getElementById('scrollToTop');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const testimonialSlider = document.querySelector('.testimonials-slider');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            scrollTopBtn.classList.add('active');
        } else {
            header.classList.remove('scrolled');
            scrollTopBtn.classList.remove('active');
        }
    });

    // Menú móvil toggle
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Botón volver arriba
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Filtrado de proyectos
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Slider de testimonios
    let currentSlide = 0;
    const slideWidth = 100; // Porcentaje

    function goToSlide(index) {
        if (index < 0) {
            index = testimonialCards.length - 1;
        } else if (index >= testimonialCards.length) {
            index = 0;
        }
        currentSlide = index;
        testimonialSlider.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    }

    // Botones de navegación del slider
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Cambiar slide automáticamente cada 5 segundos
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);

    // Formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulación de envío de formulario
            const formData = new FormData(this);
            const formEntries = {};
            
            for (let [key, value] of formData.entries()) {
                formEntries[key] = value;
            }
            
            // Simulación de respuesta exitosa (en un caso real, aquí iría la llamada AJAX)
            setTimeout(() => {
                formMessage.innerHTML = 'Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.';
                formMessage.classList.add('success');
                contactForm.reset();
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    formMessage.innerHTML = '';
                    formMessage.classList.remove('success');
                }, 5000);
            }, 1000);
        });
    }

    // Animación suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Crear carpeta para imágenes si no existe
    function createPlaceholderImages() {
        // Esta función es solo para simular la existencia de imágenes
        // En un entorno real, las imágenes deberían estar ya en la carpeta img
        console.log('Las imágenes deberían estar en la carpeta img/');
    }

    // Llamar a la función para simular imágenes
    createPlaceholderImages();

    // Inicializar efectos visuales adicionales
    function initializeVisualEffects() {
        // Efecto parallax en la sección hero
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
            }
        });

        // Efecto hover en las tarjetas de servicios
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // Inicializar efectos visuales
    initializeVisualEffects();
});