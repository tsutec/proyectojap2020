var usuarios = [];
var btn_save = document.getElementById("datouser");
var cont = 0;
var JSON_Local = JSON.parse(localStorage.getItem("users_sto"));
const Correo_user = localStorage.getItem("correo");
var index;

$(document).ready(function() {

    cargarjson();
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('.avatar').attr('src', e.target.result);
            }

            var imagen = reader.readAsDataURL(input.files[0]);

        }
    }


    $(".file-upload").on('change', function() {
        readURL(this);
    });
});


function guardar_cambios() {

    for (i = 0; i < JSON_Local.length; i++) {

        ar = JSON_Local[i];

        if (ar.correo == Correo_user) {
            ar.pNom = $("#prin-nom").val();
            ar.sNom = $("#seg-nom").val();
            ar.pApe = $("#pri-ape").val();
            ar.sApe = $("#seg-ape").val();
            ar.nfi = $("#num-fi").val();
        } else {
            alert("no entra");
        }

    }
    localStorage.setItem("users_sto", JSON.stringify(JSON_Local));
    console.log(JSON_Local);
    cargarjson();
}


function cargarjson() {


    console.log(JSON_Local);
    console.log(Correo_user);

    for (i = 0; i < JSON_Local.length; i++) {
        index = i;
        ar = JSON_Local[i];

        if (ar.correo == Correo_user) {
            document.getElementById("mail").value = Correo_user;
            document.getElementById("num-mo").value = ar.nfi;
            document.getElementById("prin-nom").value = ar.pNom;
            document.getElementById("seg-nom").value = ar.sNom;
            document.getElementById("pri-ape").value = ar.pApe;
            document.getElementById("seg-ape").value = ar.sApe;
        } else {
            alert("no entra");
        }
    }
}


function borrar_user() {
    console.log(localStorage.getItem("users_sto1"));
    localStorage.setItem("users_sto1", "");
    console.log(localStorage.getItem("users_sto1"));
    cont = 0;
    usuarios = [];
}



$(".saveinfo").click(function() {
    guardar_cambios();
});

$("#salir").click(function() {
    windows.location.href = "index.html";
});