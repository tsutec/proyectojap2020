var category5 = {};
var Product_arra_rel = [];
var Product_array = [];


function Obtener_raltedpro(array) {
    for (i = 0; i < array.length; i++) {
        Product_arra_rel.push(array[i]);

    }

}

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            category4 = resultObj.data;

            Obtener_raltedpro(category4.relatedProducts);


        }
    });
});



document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        var htmlContentToAppend3 = "";
        if (resultObj.status === "ok") {
            Product_array = resultObj.data;


            for (i = 0; i < Product_arra_rel.length; i++) {
                htmlContentToAppend3 += `


                <div class="Related_pro">
                <div class="card-img-top">
                    <img src="` + Product_array[Product_arra_rel[i]].imgSrc + `"class="img-thumbnail" name="zoom" style="cursor:pointer">
                </div>
                </div>
        
        `

                document.getElementById("relatedProd").innerHTML = htmlContentToAppend3;



            }

        }


    });
});