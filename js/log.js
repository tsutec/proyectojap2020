$('.toggle').click(function() {

    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});


document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.getElementById("login-form");
        const loginButton = document.getElementById("sub-ines");

        //localStorage.setItem('Nombre', document.getElementById("user").value);


        loginButton.addEventListener("click", (e) => {
            e.preventDefault();
            const username = loginForm.correo.value;
            const password = loginForm.contra.value;

            localStorage.setItem('Correo', document.getElementById("inputEmail").value);
            localStorage.setItem('Pass', document.getElementById("pass").value);


            const apro = username;
            const pass = password;

            if (username != '' && password != '') {
                //alert("Bienvenid@ " + username);
                alert("Correo:" + localStorage.getItem('Correo'));
                window.location.href = "homepage.html";

            } else {
                alert("error  usuario o contraseña incorecta");
                location.reload();
            }
        });

    }

    , false);