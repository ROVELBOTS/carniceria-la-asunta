# 🥩 Carnicería La Asunta - Landing Page Profesional

[![Netlify Status](https://api.netlify.com/api/v1/badges/tu-badge-aqui/deploy-status)](https://app.netlify.com/sites/tu-sitio/deploys)
[![GitHub license](https://img.shields.io/github/license/ROVELBOTS/carniceria-la-asunta)](https://github.com/ROVELBOTS/carniceria-la-asunta/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/ROVELBOTS/carniceria-la-asunta)](https://github.com/ROVELBOTS/carniceria-la-asunta/stargazers)

Landing page profesional para la **Carnicería La Asunta**, desarrollada por **ROVELBOTS**. Incluye un panel de administración con **Netlify CMS** para que el cliente pueda gestionar sus ofertas semanales sin necesidad de conocimientos técnicos.

## 🌐 Demo

🔗 **Ver sitio en vivo:** [carniceria-la-asunta.netlify.app](https://carniceria-la-asunta.netlify.app)

> ⚠️ *El enlace estará disponible después del despliegue en Netlify.*

---

## ✨ Características

| Característica | Descripción |
|----------------|-------------|
| 📱 **Responsive Design** | Adaptado a todos los dispositivos (móvil, tablet, escritorio) |
| 🛠️ **Netlify CMS** | Panel de administración fácil de usar para el cliente |
| 📝 **Gestión de ofertas** | Crear, editar y publicar ofertas semanales |
| 📅 **Fechas programadas** | Publicar ofertas con fecha específica |
| 🖼️ **Subida de imágenes** | Arrastrar y soltar imágenes desde el panel |
| 🔒 **Autenticación segura** | Acceso con GitHub protegido |
| 📊 **Ofertas predeterminadas** | Contenido de muestra para empezar rápido |
| ⚡ **Rendimiento optimizado** | Carga rápida y eficiente |

## 🚀 Tecnologías utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **HTML5** | Estructura semántica |
| **CSS3** | Estilos y diseño responsive |
| **JavaScript** | Interactividad y lógica |
| **Netlify CMS** | Panel de administración |
| **Netlify** | Alojamiento y despliegue |
| **GitHub** | Control de versiones |
| **Font Awesome** | Íconos profesionales |
| **Google Fonts** | Tipografía moderna |

## 📂 Estructura del proyecto

```bash
carniceria-la-asunta/
│
├── index.html              # Landing page principal
├── README.md               # Documentación del proyecto
│
├── css/
│   └── style.css           # Todos los estilos (responsive)
│
├── js/
│   └── main.js             # Lógica del sitio (ofertas, scroll, etc.)
│
├── admin/                  # Panel de administración
│   ├── index.html          # Interfaz de login del CMS
│   └── config.yml          # Configuración de Netlify CMS
│
├── img/                    # Imágenes del sitio (se llena automáticamente)
│   └── ofertas/            # Imágenes subidas desde el CMS
│
└── _data/                  # Datos dinámicos
    └── ofertas/            # Ofertas creadas desde el CMS
        └── *.md            # Archivos Markdown generados automáticamente