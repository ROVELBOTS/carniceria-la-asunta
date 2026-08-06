// ===== Smooth scroll para navegación =====
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#ofertas' || href === '#nosotros') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== CARGAR OFERTAS DESDE NETLIFY CMS =====
async function cargarOfertas() {
    const contenedor = document.getElementById('contenedorOfertas');
    if (!contenedor) return;

    try {
        // Intentar cargar ofertas desde Netlify CMS
        const response = await fetch('/_data/ofertas/index.json');
        if (!response.ok) throw new Error('No hay ofertas aún');
        
        const ofertas = await response.json();
        
        if (ofertas && ofertas.length > 0) {
            // Mostrar solo las últimas 6 ofertas activas
            const ofertasActivas = ofertas
                .filter(o => o.activa !== false)
                .slice(-6)
                .reverse();
            
            mostrarOfertas(contenedor, ofertasActivas);
        } else {
            mostrarOfertasDefault(contenedor);
        }
    } catch (error) {
        console.log('📢 Cargando ofertas por defecto...');
        mostrarOfertasDefault(contenedor);
    }
}

function mostrarOfertas(contenedor, ofertas) {
    if (ofertas.length === 0) {
        mostrarOfertasDefault(contenedor);
        return;
    }

    contenedor.innerHTML = ofertas.map(o => `
        <div class="oferta-card">
            ${o.imagen ? `<img src="${o.imagen}" alt="${o.titulo}" loading="lazy" />` : ''}
            <span class="badge-oferta">🔥 OFERTA</span>
            <h3>${o.titulo || 'Oferta especial'}</h3>
            ${o.precio ? `<div class="precio-oferta">${o.precio}</div>` : ''}
            <p>${o.descripcion || ''}</p>
            <div class="fecha-oferta">📅 ${o.fecha || 'Esta semana'}</div>
        </div>
    `).join('');
}

function mostrarOfertasDefault(contenedor) {
    const ofertasDefault = [
        {
            titulo: 'Lomo Fino Especial',
            descripcion: 'Corte premium, ideal para parrillada',
            precio: 'Bs. 89/kg',
            imagen: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&auto=format',
            fecha: 'Semana del ' + new Date().toLocaleDateString('es-ES')
        },
        {
            titulo: 'Pollo Orgánico',
            descripcion: 'Libre de hormonas, criado en campo',
            precio: 'Bs. 32/kg',
            imagen: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=300&auto=format',
            fecha: 'Semana del ' + new Date().toLocaleDateString('es-ES')
        },
        {
            titulo: 'Chorizo Artesanal',
            descripcion: 'Receta familiar con especias naturales',
            precio: 'Bs. 55/kg',
            imagen: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=300&auto=format',
            fecha: 'Semana del ' + new Date().toLocaleDateString('es-ES')
        }
    ];
    
    mostrarOfertas(contenedor, ofertasDefault);
}

// ===== MOSTRAR BOTÓN ADMIN PARA USUARIOS AUTENTICADOS =====
function verificarAdmin() {
    // Si el usuario está logueado en Netlify, mostrar botón admin
    if (window.netlifyIdentity && window.netlifyIdentity.currentUser()) {
        const adminLink = document.querySelector('.btn-admin-link');
        if (adminLink) {
            adminLink.style.display = 'inline-block';
        }
    }
}

// ===== INICIALIZAR =====
document.addEventListener('DOMContentLoaded', () => {
    cargarOfertas();
    
    // Verificar si hay usuario admin (solo si Netlify Identity está cargado)
    setTimeout(verificarAdmin, 1000);
});

// Recargar ofertas cada 60 segundos (por si se actualizan)
setInterval(cargarOfertas, 60000);

console.log('🐄 Carnicería La Asunta - Landing Page Profesional');
console.log('📝 Gestiona ofertas en /admin/');