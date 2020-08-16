var dir = "";
var status = 0;





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

function eliminarElemento(id) {
    imagen = document.getElementById(id);
    if (!imagen) {
        alert("El elemento selecionado no existe");
    } else {
        padre = imagen.parentNode;
        padre.removeChild(imagen);
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {

});