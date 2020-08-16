document.addEventListener('DOMContentLoaded', function() {
        const Botn1 = document.getElementById("register-form");
        const Botnr = document.getElementById("sub-log");
        //localStorage.setItem('Nombre', document.getElementById("user").value);


        Botnr.addEventListener("click", (e) => {
            e.preventDefault();

            const Usuario_r = Botn1.user.value;
            const Pass_r = Botn1.pass1.value;

            const correo = Botn1.ce.value;
            const telso = Botn1.tels.value;

            var user2 = localStorage.setItem('Usuario', document.getElementById("ua").value);

            var pass2 = localStorage.setItem('Pass', document.getElementById("passs").value);
            var coreo3 = localStorage.setItem('Correo', document.getElementById("coe").value);
            var tel1 = localStorage.setItem('Telefono', document.getElementById("tl").value);

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