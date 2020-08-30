document.addEventListener('DOMContentLoaded', function() {
        const Registro_boton = document.getElementById("registro-form"); /*Obtiene el valor del formulario de registro*/
        const Cuenta_log = document.getElementById("sub-log"); /* Obtiene el valor de boton de registrarse*/



        Cuenta_log.addEventListener("click", (e) => { /*Función para registar en el local storage y hacer la validación después*/
            e.preventDefault();
            var eTok = localStorage.setItem("Tok", 0);
            var eReg1 = localStorage.setItem("Registro", 0); /* Esto sirve para activar o desactivar el alert de registro*/



            localStorage.setItem('Usuario', document.getElementById("Usuario1").value); /*Guardar en el storage el dato ingresado*/

            localStorage.setItem('Pass', document.getElementById("contra1").value); /*Guardar en el storage el dato ingresado*/

            localStorage.setItem('Correo', document.getElementById("coe").value); /*Guardar en el storage el dato ingresado*/

            localStorage.setItem('Telefono', document.getElementById("tl").value); /*Guardar en el storage el dato ingresado*/
            localStorage.setItem("Tok", 1);
            localStorage.setItem("Registro", 1); /* Avisa que se registro ya el usuario*/
            alert("se registro correctamete"); /*Alert de aviso de estado de registro*/

            location.reload(); /*Recarga la página*/
        });













    }

    , false);