var category = {};

var category = {};



document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {

            category = resultObj.data;
            var obj = JSON.parse(category);

            document.getElementById("user-r").innerHTML =
                "Descripcion: " + obj.description + " " + obj.user + "<br>" +
                "Fecha:" + obj.dateTime;
            coments = resultObj.data;



            showComents(coments);

        }
    });


});