function Crear_boton_y_img() {

    const Img_user1 = document.createElement("img"); // Crea el logo de inicio de sesion
    Img_user1.src = "img/user-log.png";
    Img_user1.classList.add("py-2", "d-none", "d-md-inline-block", "logo");
    document.getElementById("list1").appendChild(Img_user1);

    var a = document.createElement("a"); // Pone el usuario que esta logueado
    a.classList.add("py-2", "d-none", "d-md-inline-block");
    a.href = "#";
    a.innerHTML = localStorage.getItem('Usuario');
    a.id = "CorC";

    document.getElementById("list1").appendChild(a);
    const button = document.createElement('button'); //Crea el boton de cerra sesion
    button.type = 'button';
    button.classList.add("py-2", "d-none", "d-md-inline-block", "logBtn");
    button.href = "#";
    button.innerText = 'Cerrar Sesion';
    button.id = "LoginOut";
    document.getElementById("list1").appendChild(button);

    document.getElementById("LoginOut").addEventListener("click", function() { //Elimina los datos y cierra la sesion
        localStorage.removeItem('Usuario');
        localStorage.setItem("contador", 2);
        localStorage.removeItem("Correo");
        localStorage.removeItem('Pass');
        localStorage.removeItem('Telefono');
        window.location.href = "index.html";

    });
}