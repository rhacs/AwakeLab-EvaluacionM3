/*
    "Log in"
    ============================================================================================
*/

// Ejecutar cuando el documento esté listo
$(function () {
    // Si el usuario ha iniciado sesión
    if (window.localStorage.getItem('loggedin')) {
        // Ocultar botón "Log in"
        $('#login').hide();
        // Mostrar botón "Log out"
        $('#logout').show();
    } else {
        // Ocultar botón "Log out"
        $('#logout').hide();
        // Mostrar botón "Log in"
        $('#login').show();
    }
});

// Al hacer click sobre el botón "Log out"
$('#logout').on('click', function (event) {
    // Prevenir la acción por defecto, si es que la hay
    event.preventDefault();
    // Eliminar la variable del almacenamiento local
    localStorage.removeItem('loggedin');
    // Regargar la página
    location.reload();
});

// Al enviar el formulario de Login
$('#formLogin').on('submit', function (event) {
    // Prevenir el evento por defecto
    event.preventDefault();

    // Recuperar datos ingresados por el usuario
    let user = $('#usuario').val();
    let pass = $('#password').val();

    // Verificar que las credenciales coincidan
    if (user == 'admin' && pass == 'admin') {
        // Almacenar variable local
        localStorage.setItem('loggedin', true);

        // Actualizar página
        window.location.reload();
    } else {
        // Mostrar mensaje de error
        $('#formLogin span').show();
    }
});


/*
    Observador
    ============================================================================================

    Validar que el header esté visible en la página, de lo contrario mostrar una flecha  en la
    parte inferior derecha para dirigirse arriba
*/

// Nueva instancia asincrónica de IntersectionObserver para vigilar la visibilidad de un elemento
var observador = new IntersectionObserver(function (entries) {
    // Si el elemento es visible en la página
    if (entries[0].isIntersecting) {
        // Ocultar "volver arriba"
        $('#volver').slideUp();
    } else {
        // Mostrar "volver arriba"
        $('#volver').slideDown();
    }

    // Umbral en el cual la función se disparará (0-1)
}, { threshold: [0] });

// Agregar el header al observador
observador.observe(document.querySelector('header'));

// Al presionar el ícono ↑, volver a la parte de arriba de la página
$('#volver').on('click', function (event) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

/*
    Menú
    ============================================================================================

    Mostrar menú en dipositivos con pantalla mediana hacia abajo
*/

// Al presionar el botón menu
$('#menu').on('click', function (event) {
    // Barra de navegación
    let nav = $('nav');

    // Verificar si está escondida
    if (nav.is(':hidden')) {
        // Mostrar
        nav.slideDown();
    } else {
        // Ocultar
        nav.slideUp();
    }
});

/*
    Parche
    ============================================================================================

    Cuando se presiona el botón menú en modalidad de dispositivo móvil y se vuelve a modalidad
    escritorio, el nav desaparece, independiente de los parámetros de la hoja de estilos
*/

window.onresize = function () {
    let width = window.innerWidth;

    if (width > 767) {
        $('nav').css('display', 'flex');
    } else {
        $('nav').css('display', 'none');
    }
};

/*
    Fancybox config
    ============================================================================================
*/

$('[data-fancybox]').fancybox({
    // Cerrar popup previo, si existe
    closeExisting: true
});
