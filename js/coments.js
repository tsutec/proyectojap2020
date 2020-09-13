var coments = {};

function showComents(array) {

    let htmlContentToAppend2 = "";

    for (let i = 0; i < array.length; i++) {
        let coments = array[i];

        htmlContentToAppend2 += `
        <a href="products-info.html" class="list-group-item list-group-item-action">
                <div class="comentarios">
            <div id="start">
                <p >Puntuacion:` + coments.score + `</p>
                
            </div>
            <div id="des-p">
                <p>Descripcion:`+ coments.description + `</p>
                
            </div>
            <div id="user-r">
                <p>User:` + coments.user+ `</p>
                
            </div>
            <div id="date_time">
                <p>Fecha:` + coments.dateTime + `</p>
                
            </div>
        </div>
        </a>
        `
      

        document.getElementById("conm").innerHTML = htmlContentToAppend2;
    }
}





document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            coments = resultObj.data;

           

           showComents(coments);
        }
    });


});