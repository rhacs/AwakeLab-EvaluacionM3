// Ejecutar el script una vez cargada la página
$(function () {
    // Mostrar "dialogo" de carga
    function mostrarCargando() {
        // Mostrar el dialogo 'Cargando'
        $.LoadingOverlay('show', {
            image: '',
            text: 'Cargando ...'
        });

        // Cerrar el dialogo luego de 1500ms
        setTimeout(function () {
            $.LoadingOverlay('hide');
        }, 800);
    };

    // Al enviar el formulario de comentarios
    $('#formComentario').on('submit', function (event) {
        // Prevenir acción por defecto
        event.preventDefault();

        // Recuperar datos ingresados por el usuario
        let nombre = $('#nombre').val();
        let email = $('#email').val();
        let comentario = $('#comentario').val();

        // Preparar contenedores
        let card = $('<div>').addClass('card');
        let cardBody = $('<div>').addClass('card-cuerpo');
        let parrafo = $('<p>').text(comentario);
        let autor = $('<h4>').text(nombre);

        cardBody.append(parrafo).append(autor);
        card.append(cardBody);

        // Agregar elemento a la sección reseñas
        $('#comentarios').prepend(card);
    });

    // Al seleccionar una categoría de comestibles
    $('#comidas').on('change', function (event) {
        // Mostrar "dialogo" de carga
        mostrarCargando();

        // Recuperar elemento seleccionado
        let seleccion = this.value;

        // Esconder todos los elementos
        $('#contenedorComidas').children('div').hide();

        // Mostrar sólo el elemento que corresponde a la selección
        $('#contenedorComidas').children('div').each(function (index, element) {
            if (element.id === seleccion) {
                element.style.display = 'block';
            }
        });
    });

    // Al seleccionar una categoría de bebestibles
    $('#bebestibles').on('change', function (event) {
        // Mostrar "dialogo" de carga
        mostrarCargando();

        // Recuperar el valor del elemento seleccionado
        let seleccion = this.value;

        // Esconder todos los elementos dentro del contenedor
        $('#contenedorBebestibles').children('div').hide();

        // Mostrar sólo el elemento que corresponde a la selección
        $('#contenedorBebestibles').children('div').each(function (index, element) {
            if (element.id === seleccion) {
                element.style.display = 'block';
            }
        });
    });
});
