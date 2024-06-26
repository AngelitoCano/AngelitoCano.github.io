/*botones de informacion de la pagina MAIN INICIO/*/
function toggleContent(activeClass) {
    var allDivs = document.querySelectorAll('.content');
    allDivs.forEach(function(div) {
        if (div.classList.contains(activeClass)) {
            if (div.style.display === 'none' || div.style.display === '') {
                // Mostrar el contenido con animación
                div.style.display = 'block';
                div.style.height = '0px'; // Establecer altura inicialmente a 0
                var height = div.scrollHeight + 'px'; // Obtener altura del contenido
                setTimeout(function() {
                    div.style.height = height; // Aplicar la altura para la animación suave
                }, 10); // Pequeño retraso para permitir que la altura inicial 0px se aplique
                
                // Desplazar la vista hacia el contenido después de permitir el redibujado
                setTimeout(function() {
                    div.scrollIntoView({ behavior: 'smooth' });
                }, 300); // Tiempo de espera correspondiente a la duración de la animación en milisegundos
            } else {
                // Ocultar el contenido con animación
                div.style.height = '0px'; // Reducir la altura a 0 gradualmente
                setTimeout(function() {
                    div.style.display = 'none'; // Ocultar completamente después de la animación
                }, 300); // Tiempo de espera correspondiente a la duración de la animación en milisegundos
            }
        } else {
            div.style.height = '0px'; // Reducir la altura a 0 gradualmente
            setTimeout(function() {
                div.style.display = 'none'; // Ocultar completamente después de la animación
            }, 300); // Tiempo de espera correspondiente a la duración de la animación en milisegundos
        }
    });
}

/*botones de informacion de la pagina MAIN FIN/*/

/* JS de Promociones inicio/*/
$(document).ready(function() {
$('#termsModal .btn-primary').on('click', function() {
    console.log('Términos de Uso aceptados.');
});

$('#privacyModal .btn-primary').on('click', function() {
    console.log('Declaración de Privacidad aceptada.');
});

$('#cookieModal .btn-primary').on('click', function() {
    console.log('Consentimiento de Cookies aceptado.');
});

$('#cookieModal .btn-secondary').on('click', function() {
    console.log('Consentimiento de Cookies rechazado.');
});
});

jQuery(document).ready(function() {
    $('.btn-flotante').click(function(e) {
        e.preventDefault(); // Evita la acción predeterminada del enlace
        $('#formulario-reserva').fadeIn();
    });

    $('#formulario-reserva').click(function(e) {
        if ($(e.target).hasClass('formulario-reserva')) {
            $(this).fadeOut();
        }
    });
});

$(document).ready(function() {
    $('#termsModal .btn-primary').on('click', function() {
      console.log('Términos de Uso aceptados.');
    });

    $('#privacyModal .btn-primary').on('click', function() {
      console.log('Declaración de Privacidad aceptada.');
    });

    $('#cookieModal .btn-primary').on('click', function() {
      console.log('Consentimiento de Cookies aceptado.');
    });

    $('#cookieModal .btn-secondary').on('click', function() {
      console.log('Consentimiento de Cookies rechazado.');
    });
  });
/* JS de Promociones fin/*/