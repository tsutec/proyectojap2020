var category = {};

<<<<<<< HEAD
=======
var category = {};


>>>>>>> 47cb1164c268d8ff550803fba484b7ef11bfb8db

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
<<<<<<< HEAD
=======

>>>>>>> 47cb1164c268d8ff550803fba484b7ef11bfb8db
            category = resultObj.data;
            var obj = JSON.parse(category);

            document.getElementById("user-r").innerHTML =
                "Descripcion: " + obj.description + " " + obj.user + "<br>" +
                "Fecha:" + obj.dateTime;
<<<<<<< HEAD
=======
            coments = resultObj.data;



            showComents(coments);

>>>>>>> 47cb1164c268d8ff550803fba484b7ef11bfb8db
        }
    });


});