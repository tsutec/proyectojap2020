var category1 = {}; /*Contiene los productos*/
var Product_arra_rel = []; /*Contiene los indeces de  productos relacionados*/
var Product_array = []; /*Contiene la info de porductos*/
var coments = {}; /*Contiene los comentarios del Json sin los nuevos*/

$('.carousel').carousel();

$("#vt").click(function() {
    alert("jo");
})

function Hacer_estrellas(score, estrellas) { /*Realiza las estrellas buenas y malas*/
    let estrellas_tot = 5;

    estrellas_malas = (estrellas_tot - score);

    for (i = 0; i < score; i++) {


        estrellas += `<i class="fa fa-star checked"></i>`


    }

    for (i = 0; i < estrellas_malas; i++) {

        estrellas += `<i class="fa fa-star"></i>`

    }


    return estrellas;


}








function Obtener_raltedpro(array) { /*Obtiene los indices de los productos apartir del json de products-info*/
    for (i = 0; i < array.length; i++) {
        Product_arra_rel.push(array[i]);

    }

}




function showImagesGallery(array) { /*Carga las imagenes del JSON para hacer el carousel */
    // images data
    let htmlContentToAppend = "";
    var status = "";
    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];
        if (i == 0) status = 'active'; /*activa o desactiva una foto*/
        else status = "";
        htmlContentToAppend += `
        <div class="carousel-item   ` + status + ` ">
        <img src="` + imageSrc + `"+ class="d-block w-100" alt="">
       </div>
        `

        document.getElementById("mostrar_c").innerHTML = htmlContentToAppend; /*contenedor donde se van mostrar las imagenes*/
    }






}



document.addEventListener("DOMContentLoaded", function(e) { /*Carga la info de los productos*/
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            category1 = resultObj.data;

            let categoryNameHTML = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
            let productCategory = document.getElementById("pro-cat");
            categoryNameHTML.innerHTML = category1.name;
            categoryDescriptionHTML.innerHTML = category1.description;
            productCategory.innerHTML = category1.category;
            productCountHTML.innerHTML = category1.currency + category1.cost;
            productCriteriaHTML.innerHTML = category1.soldCount;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category1.images);
            Obtener_raltedpro(category1.relatedProducts);


        }
    });


});
document.addEventListener("DOMContentLoaded", function(e) { /*Muestro la descripcion,nombre y imagen de los productos relacionados*/
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        var htmlContentToAppend3 = "";
        if (resultObj.status === "ok") {
            Product_array = resultObj.data;
            let click = "click";

            for (i = 0; i < Product_arra_rel.length; i++) {



                htmlContentToAppend3 += `




                <div class="col-sm-4 ">
                <div class="card-img-top">
                    <img src="` + Product_array[Product_arra_rel[i]].imgSrc + `"class="img-thumbnail"  name="zoom" style="cursor:pointer">
                </div>
                <h4>
                    <a href="# " class="font-weight-bold text-dark text-uppercase small ">` + Product_array[Product_arra_rel[i]].name + `</a>
                    <p class="mb-1">` + Product_array[Product_arra_rel[i]].description + `</p>
                    <button class="btn-ver    relate" id="vt" href="product-info.html"> Ver </button>
            </div>

            `

                document.getElementById("relatedProductsInside").innerHTML = htmlContentToAppend3;


                $(".relate").click(function() {
                    window.location.reload();
                })
            }

        }


    });
});








document.addEventListener("DOMContentLoaded", function(e) { /*Carga los comentarios de JSON*/
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {


            coments = resultObj.data;
            let htmlContentToAppend5 = "";
            let estrellas = "";
            for (let i = 0; i < coments.length; i++) {

                estrellas = "";
                estrellas = Hacer_estrellas(coments[i].score, estrellas);
                htmlContentToAppend5 += `
        <a href="products-info.html" class="list-group-item list-group-item-action">
                <div class="comentarios">
                <p>Puntuacion:` + estrellas + `</p
            </div>
            <div id="des-p">
                <p>Descripcion:` + coments[i].description + `</p>
                
            </div>
            <div id="user-r">
                <p>User:` + coments[i].user + `</p>
                
            </div>
            <div id="date_time">
                <p>Fecha:` + coments[i].dateTime + `</p>
                
            </div>
        </div>
        </a>
        `
                document.getElementById("comentario").innerHTML = htmlContentToAppend5;
            }
        }



    });





    function Cargar_start_comentrage() { /*Carga nuevo comentario creado*/
        if (!localStorage.getItem("start_coment") == null || !localStorage.getItem("start_coment") == undefined || !localStorage.getItem("start_coment") == "") {
            var htmlContentToAppend6 = "";
            score = localStorage.getItem("start_coment");
            var descripcion = localStorage.getItem("coment_new");
            var user_coment = localStorage.getItem("coment_user");
            var date_and_time = localStorage.getItem("hour-date");
            estrellas = "";
            estrellas = Hacer_estrellas(score, estrellas);
            htmlContentToAppend6 += `
                <a href="products-info.html" class="list-group-item list-group-item-action">
                    <div class="comentarios">
                        <p>Puntuacion:` + estrellas + `</p>
                    </div>
                    <div id="des-p">
                       <p>Descripcion:` + descripcion + `</p>
                    </div>
                    <div id="user-r">
                        <p>User:` + user_coment + `</p>
                    </div>
                    <div id="date_time">
                        <p>Fecha:` + date_and_time + `</p>
                    </div>
                </a>`
            var coments = localStorage.setItem("start_coment", htmlContentToAppend6);
            document.getElementById("new_coments").innerHTML = localStorage.getItem("start_coment");

        } else {
            document.getElementById("new_coments").style.display = "none"; /*no muestra nada cuando no se ha creado un comentario*/
        }

    }

    Cargar_start_comentrage();

});