document.addEventListener('DOMContentLoaded', function() {
    addEventListener();

    darkmode()
});

function darkmode() {  //se crea la consatante darmode que va a quitar y poner la clase dark mode del body al darle click al icono de luna
    
    //Este bloque de codigo sirve para que el dark mode se active automaticamente si el usuario tiene configurado el dark mode en su sistema operativo
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    //console.log(prefiereDarkMode.matches);
    if(prefiereDarkMode.matches){   
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    //Este bloque de codigo sirve para que el dark mode se active automaticamente si el usuario tiene configurado el dark mode en su sistema operativo
    prefiereDarkMode.addEventListener('change', function() {
        if(prefiereDarkMode.matches){   
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

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