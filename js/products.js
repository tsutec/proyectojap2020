const ORDER_ASCENDENTE_PRECIO = "Menor a Mayor"; //Boton de ordenar de menor a mayor precio.
const ORDER_DESENDENTE_PRECIO = "Mayor a Menor"; //Boton de ordenar de mayor a menor precio.
const ORDER_BY_PRODUCT_SOLDT = "Rango de precio"; //Boton de ordenar por rango.
var currentProductosArray = []; //Array donde se van meter los datos del JSON
var currentSortCriteria = undefined; // Variable para ordenar los productos segun la opcion deseada.
var minPrice = undefined; // Guarda el valor minimo de precio al filtrar por precio.
var maxPrice = undefined; //Guarda el valor maximo de precio al filtrar por precio.
var palabra_buscar = undefined; //Guarda el valor del input para filtrar segun el producto deseado.



function sortCategories(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASCENDENTE_PRECIO) { //Realiza la funcion de ordenar el precio al presionar el boton ordenar Mayor a Menor.
        result = array.sort(function(a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_DESENDENTE_PRECIO) { //Realiza la funcion de ordenar el precio al presionar el boton ordenar Menor a Mayor.
        result = array.sort(function(a, b) {
            if (a.name > b.name) { return -1; }
            if (a.name < b.name) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_PRODUCT_SOLDT) { //Ordena segun la cantidad de ventas de los productos.
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if (aCount > bCount) { return -1; }
            if (aCount < bCount) { return 1; }
            return 0;
        });
    }

    return result;
}

function showProductosLista() { //Muestra los productos obtenidos del Json consumido.

    let htmlContentToAppend = "";
    for (let i = 0; i < currentProductosArray.length; i++) {
        let category = currentProductosArray[i];
        let nombreProd = category.name.toLowerCase(); //Pasa el nombre almancenado a minisucula.
        let desProd = category.description.toLowerCase(); //Pasa el nombre almancenado a mayuscula.

        if (((minPrice == undefined) || (minPrice != undefined && parseInt(category.cost) >= minPrice)) &&
            ((maxPrice == undefined) || (maxPrice != undefined && parseInt(category.cost) <= maxPrice)) &&
            ((desProd.indexOf(palabra_buscar)) !== -1 || (nombreProd.indexOf(palabra_buscar)) !== -1) // Busca si existe esa descripcion o ese nombre.
        ) {

            htmlContentToAppend += `
            <div class="comte">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" alt="` + category.name + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">   
                        <h4 class="mb-1">` + category.name + `</h4>
                      
                        <small class="text-muted">` + category.soldCount + ` vendidos</small>
                    </div>
                    
                    <div>` + category.description + `</div>
                    <div>` + category.currency + category.cost + `</div>
                 
                    
                </div>
            </div>
        </div>
        `
        }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowCategories(sortCriteria, categoriesArray) {
    currentSortCriteria = sortCriteria; //Muestra los productos segun si se aplica o un criterio o no.

    if (categoriesArray != undefined) {
        currentProductosArray = categoriesArray;
    }

    currentProductosArray = sortCategories(currentSortCriteria, currentProductosArray);

    //Muestro las categorías ordenadas
    showProductosLista();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            sortAndShowCategories(ORDER_ASCENDENTE_PRECIO, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function() {
        sortAndShowCategories(ORDER_ASCENDENTE_PRECIO);
    });

    document.getElementById("sortDesc").addEventListener("click", function() {
        sortAndShowCategories(ORDER_DESENDENTE_PRECIO);
    });

    document.getElementById("sortByCount").addEventListener("click", function() {
        sortAndShowCategories(ORDER_BY_PRODUCT_SOLDT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function() { //Limpia la informacion ingresada en los campos de max y min precio
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minPrice = undefined;
        maxPrice = undefined;

        showProductosLista();

    });

    document.getElementById("rangeFilterCount").addEventListener("click", function() {
        //Obtengo el mínimo y máximo de los intervalos para aplicar_filtro por cantidad
        //de productos por categoría.
        minPrice = document.getElementById("rangeFilterCountMin").value;
        maxPrice = document.getElementById("rangeFilterCountMax").value;

        if ((minPrice != undefined) && (minPrice != "") && (parseInt(minPrice)) >= 0) {
            minPrice = parseInt(minPrice);
        } else {
            minPrice = undefined;
        }

        if ((maxPrice != undefined) && (maxPrice != "") && (parseInt(maxPrice)) >= 0) {
            maxPrice = parseInt(maxPrice);
        } else {
            maxPrice = undefined;
        }

        showProductosLista();

    });
    Crear_boton_y_img() //Crea el boton de cerrar sesion y carga logo de usuario
});

const aplicar_filtro = () => {
    palabra_buscar = search.value.toLowerCase();
    showProductosLista();
}
search.addEventListener('keyup', aplicar_filtro)
aplicar_filtro();