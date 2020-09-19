const stars = document.querySelector(".ratings").children; /*Obtener las estrellas señaladas*/
var stat = localStorage.setItem("val", 0); /*Guarda en localstorage las estrellas señaladas*/
var ratingValue = ratingValue;
var ratiLocal = localStorage.setItem("val", ratingValue);
var star_local = localStorage.getItem("val");
var estrelas_coment = "";
var a = document.getElementById("sent"); /*Captura el boton de enviar comenatario*/


function Obtener_newestar() { /*Obtiene las estrellas seleccionadas al hacer el comenario*/
    let index;


    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener("mouseover", function() {
            // console.log(i)
            for (let j = 0; j < stars.length; j++) {
                stars[j].classList.remove("fa-star");
                stars[j].classList.add("fa-star-o");
            }
            for (let j = 0; j <= i; j++) {
                stars[j].classList.remove("fa-star-o");
                stars[j].classList.add("fa-star");
            }

        })
        stars[i].addEventListener("click", function() {
            ratingValue = i + 1;
            index = i;

            var value1 = localStorage.setItem("val", ratingValue);
        })
        stars[i].addEventListener("mouseout", function() {

            for (let j = 0; j < stars.length; j++) {
                stars[j].classList.remove("fa-star");
                stars[j].classList.add("fa-star-o");
            }
            for (let j = 0; j <= index; j++) {
                stars[j].classList.remove("fa-star-o");
                stars[j].classList.add("fa-star");
            }

        })


    }

}
Obtener_newestar();


function Hacer_estrellas_newcoment(star_local, estrelas_coment) {
    var maxStars = 5;
    var estrellas_malas_new = (maxStars - star_local);
    for (var i = 0; i < score; i++) {
        estrelas_coment += `<i class="fa fa-star checked"></i>`
    }
    for (var i = 0; i < estrellas_malas_new; i++) {
        estrelas_coment += `<i class="fa fa-star"></i>`
    }
    return estrelas_coment;
}





document.addEventListener('DOMContentLoaded', function() {

        const sent_coment = document.getElementById("sent-com"); /*Filtra por el botón iniciar sesion  para ejecutar el código a partir de este*/







        sent_coment.addEventListener("click", (e) => {
            e.preventDefault();
            var hoy = new Date();
            var fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
            var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
            var fechayhora = fecha + " " + hora;

            const coment_user = localStorage.getItem("Usuario");
            const coment_coment = document.getElementById("com-com").value;
            var coment_storage_new = localStorage.setItem("coment_new", coment_coment);
            var coment_storage_user = localStorage.setItem("coment_user", coment_user);
            var coment_start = localStorage.setItem("start_coment", localStorage.getItem("val"));
            var hora_feca_coment = localStorage.setItem("hour-date", fechayhora);
            alert("Su comentario se ha creado correctamente");
            window.location.href = "product-info.html";



        });

    }

    , false);