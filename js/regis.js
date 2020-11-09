var usuarios = [];
var users;
var StoregeUser;
var JSON_USER = [];
var usersArray = [];
$('.toggle').click(function() { /*Animación del formulario*/

    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

function recorrer_array() {


    var correo = $("#inputEmail").val();
    var pass = $("#pass").val();
    var passJson;
    var correJson;
    var ar;

    JSON_USER = JSON.parse(localStorage.getItem("users_sto"));

    console.log(JSON_USER);

    for (i = 0; i < JSON_USER.length; i++) {
        ar = JSON_USER[i];

        if (ar.correo == correo && ar.pass == pass) {
            var correo = localStorage.setItem("correo", correo);
            window.location.href = "homepage.html"

        } else {
            alert("no entra");
        }
    }

}

function cargar_array(array) {
    JSON_USER = array;
    console.log("cargargando JSON USER");
    console.log(JSON_USER);
}

function obt_datos() {

    var numMo = $("#num-mo").val();
    var nicku = $("#Usuario1").val();
    var pass = $("#contra1").val();
    var correo = $("#coe").val();
    var teluser = $("#tl").val();
    var usuario = {
        unick: nicku,
        pass: pass,
        correo: correo,
        pNom: " ",
        sNom: " ",
        pApe: " ",
        sApe: " ",
        nmi: teluser,
        nfi: " "
    }

    usuarios.push(usuario);
    localStorage.setItem("users_sto", JSON.stringify(usuarios));


    var storedNames = JSON.parse(localStorage.getItem("users_sto"));



    console.log(storedNames);

    StoregeUser = storedNames;
    cargar_array(storedNames);

};




document.addEventListener('DOMContentLoaded', function() {
        const Registro_boton = document.getElementById("registro-form"); /*Obtiene el valor del formulario de registro*/
        const Cuenta_log = document.getElementById("sub-log"); /* Obtiene el valor de boton de registrarse*/



        Cuenta_log.addEventListener("click", (e) => { /*Función para registar en el local storage y hacer la validación después*/
            e.preventDefault();
            obt_datos();
            localStorage.setItem("Tok", 1);
            localStorage.setItem("Registro", 1); /* Avisa que se registro ya el usuario*/
            alert("se registro correctamete"); /*Alert de aviso de estado de registro*/
        });

        $("#sub-ines").click(function() {
            recorrer_array();
        });

    }

    , false);