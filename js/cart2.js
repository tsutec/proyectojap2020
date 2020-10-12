var cart_products = {};
var cart_arti = {};
var price = 0;
var valorSubtotal = 0;
var array_moneda = [];
const valorEnvioP = 0.15;
const valorEnvioEx = 0.07;
const valorEnvioSt = 0.05;
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



document.addEventListener("DOMContentLoaded", function(e) {


    getJSONData(CART_URL).then(function(resultObj) { /*Carga los datos del Json a la tabla*/
        var htmlContentToAppend3 = "";
        if (resultObj.status === "ok") {
            cart_products = resultObj.data; /*Carga los datos del JSON*/
            cart_arti = cart_products.articles; /*Carga los datos del JSON*/

            for (i = 0; i < cart_arti.length; i++) {


                price = cart_arti[i].unitCost;

                CantProd = cart_arti[i].count;
                moneda = cart_arti[i].currency;
                if (moneda == "USD") { /*Filtra precio en dolares y lo pasa pesos*/
                    alert("Hemos encontrado un articulo en USD se convertira a UYU");
                    moneda = "UYU";
                    price = price * 40;

                } else {
                    price;

                }
                /*Imprime los datos del Json al tbody*/
                htmlContentToAppend3 += `
                <tr>
                <td><img src='` + cart_arti[i].src + `' width="50px"></td>
                <td> ` + cart_arti[i].name + `</td>
                <td id="price_art"> ` + moneda + price + `</td>
                <td><input class="qty" style="width:60px;" type="number" id="Count_Art" value="` + cart_arti[i].count + `" min="1"></td>
                <td><span id="productSubtotal">` + cart_arti[i].count * price + `</span></td>
                </tr>
    
            `
                array_moneda.push(price);
                document.getElementById("articlesWrapper").innerHTML = htmlContentToAppend3;


            }

        }

        var Cart = { /*Realiza los calculos de total,envios, sub-total*/
            $cart: $("#articlesWrapper"),
            /*Selecciona la tabla que tiene los datos*/
            $qtyFields: $("input.qty"),
            /*Selecciona el input para entrar datos*/
            $triggerBtn: $("input.qty"),
            /*Selecciona el input para ejecutar codigo*/
            $subTotalEl: $("#proCost"),
            /*Selecciona el span donde se va insertar el total*/

            calculate: function() { /*Obtiene valores de input y realiza los calculos de subtotal*/

                var total = 0;

                this.$qtyFields.each(function() {

                    var $field = $(this); /*selecciona el campo */

                    var amount = $field.parent().next().text(); /*obtiene la info de campo donde esta el precio unitario*/

                    var amountR = amount.replace(/\s+/g, "").replace(/UYU/, ""); /*Como esta de la forma UYUXXXX, se lo descompone para quede un número*/
                    var n1 = Number($field.val()); /*valor input ingresado*/

                    var n2 = Number(amountR); /*Valor del precio unitario*/

                    var sum = n1 * n2; /*realiza el subtotal sin envio*/
                    input_cat = n1;


                    total += sum; /*Calcula el total en base a la cantidad de prodcutos sin envios*/

                    mon = total;
                });

                var totalStr = total.toFixed(2); /*Al valor del total le agrega ,00 para que quede mejor*/
                var tot = " UYU" + totalStr; /*Agrega la moneda al valor total*/
                console.log(tot);


                return tot;

            },

            trigger: function() { /*Calcula subtotal al presionar el input*/
                var self = this;

                this.$triggerBtn.on("click", function(e) {

                    e.preventDefault();

                    var subtotal = self.calculate();
                    console.log(subtotal);
                    self.$subTotalEl.text(subtotal);



                });


            },

            init: function() { /*Para todo lo que este haciendo luego ejecutar*/

                this.trigger();

                this.$triggerBtn.trigger("click");

                this.$cart.submit(function(e) {

                    e.preventDefault();

                });


            }

        };

        $(function() { /*Ejecuta el codigo luego de cargada la pagina*/

            Cart.init();

        });



    });
    document.getElementById("customRadio1").addEventListener("change",
        function() { /*Calcula costo envio premiun y total*/

            var resultado = mon * valorEnvioP;

            document.getElementById("envCost").innerHTML = "UYU" + Math.round(resultado);
            var total = mon + resultado;;
            var total = mon + resultado;
            var total1 = total.toFixed(2);
            document.getElementById("totCost").innerHTML = "UYU" + total1;
        });

    document.getElementById("customRadio2").addEventListener("change",
        function() {
            var resultado = (mon * valorEnvioEx); /*Calcula costo envio Express y total*/

            document.getElementById("envCost").innerHTML = "UYU" + Math.round(resultado);
            var total = mon + resultado;
            var total1 = total.toFixed(2);
            document.getElementById("totCost").innerHTML = "UYU" + total1;
        });
    document.getElementById("customRadio3").addEventListener("change",
        function() { /*Calcula costo envio standard y total*/
            var sub_total = document.getElementById("productSubtotal").value;

            var resultado = (mon * valorEnvioSt);

            document.getElementById("envCost").innerHTML = "UYU" + Math.round(resultado);
            var total = mon + resultado;
            var total1 = total.toFixed(2);
            document.getElementById("totCost").innerHTML = "UYU" + total1;

        });


});