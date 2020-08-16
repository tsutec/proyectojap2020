const val_storage = localStorage.getItem("contador"); /*Obtiene el valor de contador desde LocalStorage*/


function hacer2() { /*Obtenido el valor de registro ejecuta la instrucción conveniente*/

    if (val_storage == 1) {

        var a = document.createElement("a"); /*Crear un elemento a  para mostrar el usuario almancenado al cargar el homepgae*/
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
            window.location.reload();
        });

    } else {
        window.location.reload();

        window.location.href = "index.html";
    }
}






document.addEventListener('DOMContentLoaded', function() {
    hacer2();

}, false);