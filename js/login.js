var dir = "";
var status = 0;



function obt_datos() {
    var priNom = $("#prin-nom").val();
    var segNom = $("#seg-nom").val();
    var priApe = $("#pri-ape").val();
    var segApe = $("#seg-ape").val();
    var numfi = $("#num-fi").val();
    var numMo = $("#num-mo").val();
    var userNi = $("Usuario1").val();
    var correoUser = $("coe").val();
    console.log("El  primer nombre ingresado fue " + priNom);
    console.log("El  segundo nombre ingresado fue " + segNom);
    console.log("El  primer apellido ingresado fue " + priApe);
    console.log("El  segundo apellido ingresado fue " + segApe);
    console.log("Numero fijo ingresado " + numfi);
    console.log("Numero movil ingresado " + numMo);

    var usuario = {
        unick: userNi,
        pNom: priNom,
        sNom: segNom,
        pApe: priApe,
        sApe: segApe,
        nfi: numfi,
        nmo: numMo,
        correo: correoUser

    };
    usuarios.push(usuario)
    localStorage.setItem("users_sto", JSON.stringify(usuarios));

    //...
    var storedNames = JSON.parse(localStorage.getItem("users_sto"));


    console.log(storedNames);

}


const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("sub-ines");
const id_l = document.getElementById("log");


function logear() {
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = loginForm.usuario.value;
        const password = loginForm.contra.value;
        const apro = username;
        const pass = password;


        if (username === username && password === password) {
            alert("Credenciales correctas");
            status = 1;
            eliminarElemento(log);
            window.location.href = "index.html";
        } else {
            alert("error  usuario o contraseña incorecta");
            location.reload();
            status = 0;
        }
    });
}


function redireccionar(status) {

    if (status == 1) {
        window.location.href = "index.html"
    } else {
        alert("error");

    }
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {

});