if (comentsArray.length > 0) {


} else {
    coments = resultObj.data;
    let htmlContentToAppend5 = "";
    let estrellas = "";
    for (let i = 0; i < coments.length; i++) {
        comentsArray.push.coments
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


}
});