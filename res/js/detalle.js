// Ejecutar el script una vez cargada la página
$(function () {

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
    $('select').on('change', function (event) {
        // Mostrar "dialogo" de carga
        $.LoadingOverlay('show', {
            image: '',
            text: 'Cargando ...'
        });

        // Cerrar el dialogo luego de 800ms
        setTimeout(function () {
            $.LoadingOverlay('hide');
        }, 800);

        // Obtener origen
        let origen = this.id;

        // De acuerdo al origen, seleccionar el contenedor
        let contenedor = $('#contenedorComidas');
        if (origen === 'bebestibles') {
            contenedor = $('#contenedorBebestibles');
        }

        // Recuperar elemento seleccionado
        let seleccion = this.value;

        // Esconder todos los elementos
        contenedor.children('div').hide();

        // Mostrar sólo el elemento que corresponde a la selección
        contenedor.children('div').each(function (index, element) {
            if (element.id === seleccion) {
                element.style.display = 'block';
            }
        });
    });

    // Al enviar el formulario de reserva
    $('#formReserva').on('submit', function(event) {
        event.preventDefault();

        // Recuperar los datos ingresados por el usuario
        let nombre = $('#reservaNombre').val();
        let correo = $('#reservaEmail').val();
        let cantidad = $('#reservaCantidad').val();
        let comentarios = $('#reservaComentarios').val();

        // Preparar texto
        let texto = `${nombre} (${correo}): Acompañantes ${cantidad}\n${comentarios}`;

        // Vaciar el contenedor de códigos
        $('#codigoqr').empty();

        // Generar código QR
        $('#codigoqr').qrcode({
            height: 256,
            text: texto,
            width: 256
        });
    });
});
