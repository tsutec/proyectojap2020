var cart_products = {}; //Guarda datos JSON de articulos
var cart_arti = {}; //Guarda datos JSON de articulos
var mensaje = ""; //Contiene mensaje que se muestra al finalizaer la compra
var valorEnvioP = 0;
var estatus_dir = "";
var datos_banco = "";
var estatus_final = "";
var datos_pago = "";
var tipo_pago = "";

function validar_cuentabanco() { //Valida los datos bancarios ingresados
    tipo_pago = 2;
    var nombanco = "";
    var cuentabanco = "";
    var userbanco = "";
    var passbanco = "";


    nombanco = $(".nombanco").val();
    userbanco = $(".userbanco").val();
    passbanco = $(".conbanco").val();
    cuentabanco = $(".numbanco").val();
    if (nombanco == "" || userbanco == "" || passbanco == "" || cuentabanco == "") {
        alert("datos invalidos");
        datos_banco = "false";
    } else {
        datos_banco = "true";
        alert("Presione cerrar para continuar");


    }
    return datos_pago;



}

function cargarMensaje() { //Carga el mensaje que esta en JSON y se muestra si la compra se realiza

    getJSONData(CART_MESSAGE).then(function(resultObj) {
        if (resultObj.status === "ok") {
            mensaje = resultObj.data;
            alert(mensaje.msg);
        }
    })
}

function validarpagos() { //Valida los datos de pago y direccion para finalmente realizar compra
    validardireccion();
    if (estatus_dir == "true" && datos_banco == "true") {
        cargarMensaje();
    }
    if (estatus_dir == "true" && datos_pago == "true") {
        cargarMensaje();
    } else {
        alert("datos de direccion o pagos incorectos")
    }
}

function validarTarjeta() { //Verifico si los datos de la tarjeta estan correctos
    tipo_pago = 1;
    tit_car = $(".owncard").val();
    car_num = $(".numcard").val();
    car_cod = $(".pincard").val();
    car_mes_ex = $(".mcard").val();
    car_anio_ex = $(".ycard").val();
    console.log("titular tarjeta ingresado: " + tit_car);
    console.log("numero tarjeta: " + car_num);
    console.log("mes expericacion: " + car_mes_ex);
    console.log("anio que expira: " + car_anio_ex);
    console.log("pin seguridad: " + car_cod);
    if (tit_car == "" || car_num == "" || car_mes_ex == "" || car_anio_ex == "" || car_cod == "") {
        alert("datos invalidos");
        datos_pago = "false";
    } else {
        datos_pago = "true";
        alert("Presione cerrar para continuar");
    }
    return datos_pago;


}


function validardireccion() { //Verifico que se halla ingresado una direccion
    var direccion = "";
    var esquina = "";
    var nro_puerta = "";
    direccion = $("#calledir").val();
    esquina = $("#esqdir").val();
    nro_puerta = $("#numdir").val();
    if (direccion == "" || esquina == "" || car_mes_ex == "" || nro_puerta == "") {
        alert("datos invalidos");
        estatus_dir = "false";
    } else {
        estatus_dir = "true";
        alert("datos correctos de direccion correctos");

    }
    return estatus_dir;
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function actualizar_subtotal() { //Calcula el subtotal luego de ingresar una cantidad nueva para cada elemento
    $('.articulo').each(function() {
        var precio_art = $(this).children(".precio").text();
        var cantidad = ($(this).children(".valor").children().val());
        var subtoT = precio_art * cantidad;
        $(this).find(".subtotalis").text(subtoT);
        calcular_subtotal();
        calcular_envios();
    })
}

function calcular_subtotal() { //Calcula el subtotal de cada producto y lo suma y muestra el subtotal final
    var subtotalfi = 0;
    $('.articulo').each(function() {

        var subtotalfinal = parseInt($(this).find(".subtotalis").text());
        subtotalfi += subtotalfinal;

        document.getElementById("proCost").innerHTML = subtotalfi;
    })
}

function calcular_envios() { //Calcula para el subtotal final el costo de envio y se lo adiciona para obtener el total.
    var total = parseInt(document.getElementById("proCost").textContent);

    var costo_envio = $("input[name='customRadio']:checked").val() * total; //Valor de envio seleccionado
    console.log($("input[name='customRadio']:checked").val());
    document.getElementById("envCost").innerHTML = parseInt(costo_envio);
    total = total + costo_envio;
    document.getElementById("totCost").innerHTML = total;

}

function eliminarArticulo(botonEliminar) { //Elimina un articulo del carrito
    $(botonEliminar).parent().parent().remove();
    actualizar_subtotal();
    calcular_subtotal();
    calcular_envios();

}

function Show_Cart() { //Muestro los elementos del Json de carrito

    getJSONData(CART_URL).then(function(resultObj) { /*Carga los datos del Json a la tabla*/
        var htmlContentToAppend3 = "";
        if (resultObj.status === "ok") {
            cart_products = resultObj.data; /*Carga los datos del JSON*/
            cart_arti = cart_products.articles; /*Carga los datos del JSON*/

            for (i = 0; i < cart_arti.length; i++) {
                price = cart_arti[i].unitCost;
                moneda = cart_arti[i].currency;
                if (moneda == "USD") { //Convierto el valor en  dolares a pesos
                    price = price * 40;
                } else {
                    price = price * 1;
                }
                /*Imprime los datos del Json al tbody*/
                htmlContentToAppend3 += `
                <tr class="articulo" id="table` + i + `">
                <td><img src='` + cart_arti[i].src + `' width="50px"></td>
                <td> ` + cart_arti[i].name + `</td>  
                <td id="price_art` + i + `" class="precio"> ` + price + `</td>
                <td class="valor"><input class="form-control   qty"  style="width:60px;" type="number" onchange="actualizar_subtotal()" value="` + cart_arti[i].count + `" min="1"></td>
                <td><span class="subtotalis" id="productSubtotal` + i + `">` + cart_arti[i].count * price + `</span></td>
                <td><button class="btn btn-primary  delete" type="button" onclick=eliminarArticulo(this)>Eliminar</button></td>
                </tr>
    
            `
                document.getElementById("articulos_carrito").innerHTML = htmlContentToAppend3;
            }
        }
        actualizar_subtotal()
        calcular_subtotal();
        calcular_envios();

    });
}

document.addEventListener("DOMContentLoaded", function(e) {
    Show_Cart();
    actualizar_subtotal();
    calcular_subtotal();
    calcular_envios();


    $('.pconfi').click(function() { //Agrega al boton de comfirmar tarjeta la funcion de validacion

        validarTarjeta();
    });
    $('.bancon').click(function() { //Agrega al boton de comfirmar la funcion de validacion de datos de banco

        validar_cuentabanco();
    });
    $('.fincon').click(function() { //Agrega la funcion de verificacion de los datos para realizar la compra

        validarpagos();
    });

    actualizar_subtotal();
});