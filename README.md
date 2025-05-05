# Metal y Madera - Sitio Web Promocional

Este proyecto es un sitio web promocional para servicios profesionales de construcción especializado en trabajos de metal y madera. El sitio web está diseñado para mostrar los servicios ofrecidos, proyectos realizados, testimonios de clientes y facilitar el contacto con potenciales clientes.

## Características

- Diseño moderno y atractivo con efectos visuales
- Totalmente responsive (adaptable a móviles, tablets y escritorio)
- Secciones para servicios, proyectos, testimonios y contacto
- Galería de proyectos con filtrado por categorías
- Carrusel de testimonios
- Formulario de contacto funcional
- Animaciones al hacer scroll
- Botón de WhatsApp para contacto rápido

## Estructura del Proyecto

```
Metal y madera/
├── css/
│   └── styles.css          # Estilos principales
├── img/
│   └── placeholder.svg     # Imagen placeholder (reemplazar con imágenes reales)
├── js/
│   └── main.js             # JavaScript principal
├── index.html              # Página principal
└── README.md               # Este archivo
```

## Tecnologías Utilizadas

- HTML5
- CSS3 (con animaciones y flexbox/grid)
- JavaScript (vanilla)
- Font Awesome (para iconos)
- Google Fonts
- AOS (Animate On Scroll)

## Instalación y Uso

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/metal-y-madera.git
   ```

2. Abre el archivo `index.html` en tu navegador para ver el sitio web.

3. Para desarrollo, puedes usar cualquier servidor local como Live Server en VS Code.

## Personalización

### Imágenes

Reemplaza las imágenes placeholder en la carpeta `img/` con imágenes reales de proyectos, clientes y fondos. Se recomienda optimizar las imágenes para web antes de subirlas.

### Información de Contacto

Actualiza la información de contacto en la sección correspondiente del archivo `index.html`:

```html
<div class="contact-item">
    <div class="contact-icon">
        <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="contact-text">
        <h3>Dirección</h3>
        <p>Av. Principal 123, Ciudad</p>
    </div>
</div>
```

### Proyectos

Actualiza la sección de proyectos con trabajos reales, siguiendo la estructura existente:

```html
<div class="project-card" data-category="metal">
    <div class="project-img">
        <img src="img/proyecto1.jpg" alt="Proyecto de estructura metálica">
    </div>
    <div class="project-info">
        <h3>Estructura Metálica Industrial</h3>
        <p>Diseño y construcción de estructura para nave industrial</p>
        <a href="#" class="btn-view-project">Ver Detalles</a>
    </div>
</div>
```

## Configuración del Repositorio GitHub

Para crear un repositorio en GitHub y subir este proyecto:

1. Crea una cuenta en GitHub si aún no tienes una.

2. Crea un nuevo repositorio en GitHub:
   - Ve a https://github.com/new
   - Nombra tu repositorio (por ejemplo, "metal-y-madera")
   - Puedes hacerlo público o privado según tus preferencias
   - Haz clic en "Crear repositorio"

3. Inicializa Git en tu carpeta local y sube el proyecto:

   ```bash
   # Navega a la carpeta del proyecto
   cd "c:\programacion\Metal y madera"
   
   # Inicializa Git
   git init
   
   # Añade todos los archivos
   git add .
   
   # Crea el primer commit
   git commit -m "Versión inicial del sitio web"
   
   # Configura el repositorio remoto (reemplaza USER con tu nombre de usuario y REPO con el nombre de tu repositorio)
   git remote add origin https://github.com/USER/REPO.git
   
   # Crea y cambia a la rama principal
   git branch -M main
   
   # Sube los cambios a GitHub
   git push -u origin main
   ```

## Mejoras Futuras

- Implementar backend para el formulario de contacto
- Añadir más proyectos y categorías
- Implementar una sección de blog
- Añadir más animaciones e interactividad
- Optimizar el rendimiento y SEO

## Licencia

Este proyecto está disponible para uso personal y comercial.

---

© 2023 Metal & Madera. Todos los derechos reservados.