function Crear_boton_y_img() {



    var a = document.createElement("a");
    a.classList.add("py-2", "d-none", "d-md-inline-block");
    a.href = "#";
    a.innerHTML = localStorage.getItem('Usuario');
    a.id = "CorC";

    document.getElementById("list1").appendChild(a);
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add("py-2", "d-none", "d-md-inline-block", "logBtn");
    button.href = "#";
    button.innerText = 'Cerrar Sesion';
    button.id = "LoginOut";
    document.getElementById("list1").appendChild(button);

    document.getElementById("LoginOut").addEventListener("click", function() {
        localStorage.removeItem('Usuario');
        localStorage.setItem("contador", 2);
        localStorage.removeItem("Correo");
        localStorage.removeItem('Pass');
        localStorage.removeItem('Telefono');
        window.location.href = "index.html";

    });
}