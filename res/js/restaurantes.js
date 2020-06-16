// Al cargar la página, ejecutar la función
$(function () {
    function mostrarCargando() {
        // Mostrar el dialogo 'Cargando'
        $.LoadingOverlay('show', {
            image: '',
            text: 'Cargando ...'
        });

        // Cerrar el dialogo luego de 1500ms
        setTimeout(function() {
            $.LoadingOverlay('hide');
        }, 1500);
    };

    // Al hacer click sobre alguno de los elementos del listado de filtros
    $('.filtro li').on('click', function (event) {
        // Remover la clase 'selected' de todos los elementos
        $('.filtro li').removeClass('selected');
        // Agregar la clase 'selected' al elemento clickeado
        this.className = 'selected';

        // Mostrar recuadro 'Cargando ...'
        mostrarCargando();
    });

    // Al hacer click sobre alguno de los elementos de la paginación
    $('.paginacion a').on('click', function (event) {
        // Verificar que el elemento clickeado haya sido un número de página
        if (!isNaN(parseInt(this.innerText))) {
            // Remover la clase 'active' de todos los elementos
            $('.paginacion a').removeClass('active');
            // Agregar la clase 'active' al elemento clickeado
            this.className = 'active';

            // Mostrar recuadro 'Cargando ...'
            mostrarCargando();
        }
    });
});
