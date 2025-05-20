// Script para alternar entre modo claro y oscuro
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay una preferencia guardada en localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Aplicar tema guardado o usar preferencia del sistema
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateToggleButton(true);
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        updateToggleButton(false);
    } else {
        // Si no hay preferencia guardada, usar preferencia del sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            updateToggleButton(true);
        }
    }
    
    // Configurar el botón de alternar tema
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Alternar la clase dark-mode en el body
            document.body.classList.toggle('dark-mode');
            
            // Guardar preferencia en localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                updateToggleButton(true);
            } else {
                localStorage.setItem('theme', 'light');
                updateToggleButton(false);
            }
        });
    }
});

// Función para actualizar la apariencia del botón según el tema
function updateToggleButton(isDark) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const sunIcon = themeToggle.querySelector('.sun-icon');
        const moonIcon = themeToggle.querySelector('.moon-icon');
        
        if (isDark) {
            sunIcon.style.opacity = '0.5';
            moonIcon.style.opacity = '1';
        } else {
            sunIcon.style.opacity = '1';
            moonIcon.style.opacity = '0.5';
        }
    }
}
