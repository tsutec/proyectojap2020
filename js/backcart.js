var cart_products = {};
var cart_arti = {};
var price = 0;
var valorSubtotal = 0;
var moneda = 0;
var CantProd = 0;
var mon = 0;

const valorEnvioP = 0.15;
const valorEnvioEx = 0.07;
const valorEnvioSt = 0.05;
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function(e) {


    getJSONData(CART_URL).then(function(resultObj) {
        var htmlContentToAppend3 = "";
        if (resultObj.status === "ok") {
            cart_products = resultObj.data;
            cart_arti = cart_products.articles;

            for (i = 0; i < cart_arti.length; i++) {


                price = cart_arti[i].unitCost;
                CantProd = cart_arti[i].count;
                moneda = cart_arti[i].currency;
                htmlContentToAppend3 += `
                <tr>
                <td><img src='` + cart_arti[i].src + `' width="50px"></td>
                <td> ` + cart_arti[i].name + `</td>
                <td> ` + cart_arti[i].currency + cart_arti[i].unitCost + `</td>
                <td><input class="form-control" style="width:60px;" type="number" id="Count_Art" value="` + cart_arti[i].count + `" min="1"></td>
                <td><span id="productSubtotal">` + cart_arti[i].currency + cart_arti[i].count * cart_arti[i].unitCost + `</span></td>
                 </tr>
    
            `

                document.getElementById("articlesWrapper").innerHTML = htmlContentToAppend3;
                mon = price * CantProd;

                document.getElementById("proCost").innerHTML = moneda + (price * CantProd);
                document.getElementById("envCost").innerHTML = mon * valorEnvioP;
                document.getElementById("totCost").innerHTML = (mon * valorEnvioP) + mon;

            }

        }

        document.getElementById("Count_Art").addEventListener("change",
            function() {
                var countArt = document.getElementById("Count_Art").value
                var resultado = countArt * price;
                var costo_envio = 0;
                mon = resultado;
                document.getElementById("productSubtotal").innerHTML = moneda + resultado;
                document.getElementById("proCost").innerHTML = moneda + resultado;
                document.getElementById("envCost").innerHTML = resultado * valorEnvioP;
                costo_envio = resultado * valorEnvioP;
                document.getElementById("totCost").innerHTML = resultado + costo_envio;
            });
        document.getElementById("customRadio1").addEventListener("change",
            function() {
                var sub_total = document.getElementById("productSubtotal").value;
                var resultado = mon * valorEnvioP;

                document.getElementById("envCost").innerHTML = Math.round(resultado);
                document.getElementById("totCost").innerHTML = resultado + mon;
            });

        document.getElementById("customRadio2").addEventListener("change",
            function() {
                var resultado = (mon * valorEnvioEx);

                document.getElementById("envCost").innerHTML = Math.round(resultado);
                document.getElementById("totCost").innerHTML = resultado + mon;
            });
        document.getElementById("customRadio3").addEventListener("change",
            function() {
                var sub_total = document.getElementById("productSubtotal").value;

                var resultado = (mon * valorEnvioSt);

                document.getElementById("envCost").innerHTML = resultado;
                document.getElementById("totCost").innerHTML = resultado + mon;
            });


    });

});