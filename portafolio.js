// Animación de aparición al hacer scroll
const secciones = document.querySelectorAll('.section');

if (secciones.length > 0 && 'IntersectionObserver' in window) {
    const observador = new IntersectionObserver(
        (entradas, obs) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visible');
                    obs.unobserve(entrada.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    secciones.forEach((seccion) => {
        seccion.classList.add('reveal');
        observador.observe(seccion);
    });
} else {
    // Respaldo para navegadores sin IntersectionObserver
    secciones.forEach((seccion) => seccion.classList.add('visible'));
}