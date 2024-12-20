// Initialisation des animations AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,           // durée des animations
        easing: 'ease-out-quad', // type d'easing
        once: false,             // animations répétées à chaque scroll
        mirror: true,            // animations en remontant aussi
        offset: 50,             // offset (en px) depuis le point de déclenchement
        delay: 0,               // délai global pour toutes les animations
    });
});
