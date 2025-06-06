# Metal y Madera - Sitio Web

## Descripción
Sitio web para una empresa de servicios de construcción especializada en trabajos con metal y madera. El sitio presenta los servicios ofrecidos, proyectos realizados, testimonios de clientes y un formulario de contacto.

## Estructura del Proyecto
- **index.html**: Archivo principal del sitio web
- **css/styles.css**: Estilos del sitio
- **js/main.js**: Funcionalidades principales del sitio
- **js/image-placeholder.js**: Script para generar placeholders de imágenes dinámicamente
- **img/**: Directorio de imágenes

## Solución Implementada
Se ha implementado una solución para mejorar la visualización del sitio web cuando faltan recursos de imágenes:

1. **Creación de placeholders SVG dinámicos**: Se ha desarrollado un script JavaScript (`image-placeholder.js`) que detecta imágenes faltantes y las reemplaza con placeholders SVG generados dinámicamente, mostrando el título del proyecto o la inicial del cliente.

2. **Integración de la biblioteca AOS**: Se ha verificado y asegurado la correcta integración de la biblioteca Animate On Scroll (AOS) para las animaciones del sitio.

3. **Optimización de recursos**: Se ha creado un archivo SVG para el fondo del hero que funciona como alternativa cuando la imagen original no está disponible.

## Cómo Visualizar el Sitio
El sitio web se puede visualizar a través del servidor HTTP local en:

```
http://localhost:8000/
```

## Mejoras Futuras
- Implementar un sistema de gestión de contenidos para facilitar la actualización de proyectos
- Optimizar las imágenes para mejorar el tiempo de carga
- Añadir funcionalidad al formulario de contacto para enviar mensajes
- Implementar una galería de imágenes para cada proyecto