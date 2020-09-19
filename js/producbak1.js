var categoriesArray = []; /*Carga los datos del json*/

function showCategoriesList(array) { /*Recorre los valores del arreglo y muestra los valores*/

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let category = array[i];

        htmlContentToAppend += `
        
        
        
        
        <div class="comte">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" alt="` + category.name + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">   
                        <h4 class="mb-1">` + category.name + `</h4>
                      
                        <small class="text-muted">` + category.productCount + ` artículos</small>
                    </div>
                    <div>` + category.description + `</div>
                </div>
            </div>
        </div>
        `

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; /*Muestra todo como listado*/
    }
}
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(CATEGORIES_URL).then(function(resultObj) { /*Se obtiene la direcci{ón desde init del json y ejecuta la funcion*/
        if (resultObj.status === "ok") {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
        }
    });

});



document.getElementById("sortCostDesc").addEventListener("click", function() {
    //la logica que se va desencadenar despues mi evento clic en el la etiqueta que tiene como id sortCostDesc



});