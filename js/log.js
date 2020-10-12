$('.toggle').click(function() { /*Animación del formulario*/

    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});



const LrReg = localStorage.getItem("Registro"); /*Ver el valor de Registro en el localstorage*/
const var_tok = localStorage.getItem("Tok");



var contar_pag = localStorage.setItem("contador", 0); /*Se inicializa  la variable en Local Storage*/
var calcular_pag = localStorage.getItem("contador"); /*Se obtiene el valor de la varible en Local Storage*/

function hacer() { /* Realiza el loging o no según el valor de LocalStorage*/
    if (calcular_pag !== 2) {

        hacer_Alert();
        hacer_login();
    } else {

        retornar();
    }



}
hacer();


function hacer_Alert() { /*Alert para indicar que debe inicar sesion si quiere continuar*/
    if (LrReg == 0 || LrReg == null) {
        localStorage.removeItem('Usuario');
        localStorage.setItem("contador", 2);
        localStorage.removeItem("Correo");
        localStorage.removeItem('Pass');
        localStorage.removeItem('Telefono');
        localStorage.setItem("Tok", 0);
        localStorage.clear();

        alert("Debes estar registrado para iniciar sesion, sino tienes una crea la cuenta ahora");
    } else {
        alert("ya tiene cuenta");
        /* localStorage.setItem("Toekpass", 0);*/
        /*Se le da ese valor para después volver a mostrar el  alert de registro*/

    }

}

function retornar() { /*Nos lleva al index en caso de un error o credenciales erroneas o que se halla cerrado la sesion y se quiera volver atrás*/
    if (localStorage.getItem("contador") == 2) {

        alert("ya no esta más logueado o hubo problema en autentificación"); /*Avisar en que estado se encuentra el usuario */
        windows.location.href = "index.html"; /*Vuelve a cargar el login*/
    }


}

function hacer_login() { /*Ejecuta proceso de  login y guarda los datos en el LocalStorage*/

    document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById("login-form"); /*Filtra por id del formulario login-form un valor que va ser utilizado para validar*/
            const loginButton = document.getElementById("sub-ines"); /*Filtra por el botón iniciar sesion  para ejecutar el código a partir de este*/







            loginButton.addEventListener("click", (e) => {
                e.preventDefault();
                const username = loginForm.correo.value; /*Obtiene el valor del campo correo ingresado en el formulario  login-form*/
                const password = loginForm.contra.value; /*Obtiene el valor del campo contraseña en el formulario login-form*/


                var Cor_reg = localStorage.getItem("Correo");
                var User_reg = localStorage.getItem("Usuario");
                var Pas_reg = localStorage.getItem("Pass");


                if (username == " " && password == " ") { /*Validacion de los datos ingresador para poder ingresar a la homepage*/
                    /*localStorage.setItem("Toekpass", 0);*/
                    localStorage.set("Tok", 0);
                    retornar();

                }

                if (Cor_reg == " " && Pas_reg == " ") { /*Validacion de los datos ingresador para poder ingresar a la homepage*/
                    /* (localStorage.setItem("Toekpass", 0);*/
                    localStorage.set("Tok", 0);
                    retornar();


                }
                if (username === Cor_reg && password === Pas_reg) {



                    localStorage.setItem("contador", 1); /*Asigna el valor a contador de 1*/
                    localStorage.setItem("Registro", 0);
                    window.location.href = "homepage.html"; /*Redirecciona a homepage*/
                    /* localStorage.setItem("Toekpass", 0);*/
                } else {
                    alert("error  correo invalido o contraseña incorecta"); /*Mensaje de error de validación*/
                    localStorage.setItem("Registro", 0);
                    location.reload(); /*Vuelve a recargar la página*/

                }

            });

        }

        , false);

}
hacer_login();