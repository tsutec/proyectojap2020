const val_storage = 1;

if (val_storage == 1) {




    var a = document.createElement("span"); /*Crear un elemento span para mostrar el usuario almancenado al cargar la página*/
    a.classList.add("py-2", "d-none", "d-md-inline-block");
    a.href = "#";
    a.innerHTML = localStorage.getItem('Usuario');
    a.id = "CorC";
    document.getElementById("user_name").appendChild(a);




    document.getElementById("login-out").addEventListener("click", function() { /*Borra todo lo referido al usuario al cerrar sesion*/
        localStorage.removeItem('Usuario');
        localStorage.setItem("contador", 2);
        localStorage.removeItem("Correo");
        localStorage.removeItem('Pass');
        localStorage.removeItem('Telefono');
        window.location.href = "index.html";
        window.location.reload();
    });

} else {
    window.location.reload();

    window.location.href = "index.html";
}