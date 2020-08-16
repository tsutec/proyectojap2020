document.addEventListener('DOMContentLoaded', function() {

        var a = document.createElement("a");
        a.classList.add("py-2", "d-none", "d-md-inline-block");
        a.href = "#";
        a.innerHTML = localStorage.getItem('Correo');
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


            localStorage.removeItem("Correo");
            window.location.href = "index.html";


        });

    }

    , false);