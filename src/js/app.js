document.addEventListener('DOMContentLoaded', function() {
    addEventListener();

    darkmode()
});

function darkmode() {  //se crea la consatante darmode que va a quitar y poner la clase dark mode del body al darle click al icono de luna
    const botonDarkMode = document.querySelector('.darck-mode-boton'); 
    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    }); 
}

function addEventListener() {
    //alert('Hola Mundo');
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    //console.log('desde navegacionResponsive');
    const navegacion = document.querySelector('.navegacion');
    //navegacion.classList.toggle('mostrar');     toggle sirve para ponerla si no esta y quitarla si esta
    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    }else{
        navegacion.classList.add('mostrar');
    }
}