const search_input = document.getElementById('search'); //Obtiene el valor del input //
const results = document.getElementById('results'); //Obtiene el div que va mostrar la lista con los resultados.
let productos;
let search_term = '';
const fetchProductos = async() => { // Carga en tiempo en real el JSON de productos.
    productos = await fetch(
        'https://japdevdep.github.io/ecommerce-api/product/all.json'
    ).then(res => res.json());
};
const showproductos = async() => {
    results.innerHTML = ''; //Carga deja en blanco el div.

    await fetchProductos(); // Consulta el Json.

    const ul = document.createElement('ul'); //Crea una lista
    ul.id = "listar"; // Crea un id para la lista, mediante el cual más adelante se le asignaran los valores.
    ul.classList.add('products'); //Crea una clase.
    ul.style.display = "flex"; //Hacer que el div se adapte al espacio que tiene en la página.
    ul.style.flexDirection = "column"; //Hacer que se muestre en columna.
    ul.style.position = "absolue"; // Mostrar fijo dicho div.

    productos //La información del JSON cargada es filtrada para obtener el resultado deseado, en este caso por nombre de producto o descripcion.
        .filter(producto =>
            producto.name.toLowerCase().includes(search_term.toLowerCase()) || producto.description.toLowerCase().includes(search_term.toLowerCase())
        )
        .forEach(producto => { //Recorre el JSON y va creando los productos que cumple con las condicion de arriba.
            const li = document.createElement('li'); //Inserta una lista

            li.classList.add('products-item'); //Agrega una clase




            const product_name = document.createElement('h3'); //Inserta el nombre del producto
            product_name.innerText = producto.name;
            product_name.classList.add('product-name');

            const product_info = document.createElement('div'); // Crea un div para agregar la foto 
            product_info.classList.add('product-info');
            const product_image = document.createElement('img'); // Agrega la foto.
            product_image.src = producto.imgSrc;
            product_image.classList.add('product-img');

            const product_cost = document.createElement('h5'); //Inserta en la lista el precio y moneda del producto.
            product_cost.innerText = producto.currency + producto.cost;
            product_cost.classList.add('product_cost');

            product_info.appendChild(product_cost); //Agrega el valor del precio al div

            li.appendChild(product_name); //Agrega nombre a la lista
            li.appendChild(product_image); //Agrega imagen a la lista


            li.appendChild(product_info); //Agrega precio a la lista.

            ul.appendChild(li); //Genera una lista ordenada 
        });

    results.appendChild(ul); //Agrega al div resulta que va mostrar la lista con los resultados obtenidos.
};



search_input.addEventListener('input', e => { //ejecuta la funcion cuando se escribe en el input

    search_term = e.target.value;
    if (search_term == "") { //No se ingreso nada para buscar, esta vacia la barra de busqueda.


        document.getElementById("listar").style.display = "none"; //No muestra la lista.
    } else {

        showproductos(); //Muestra la lista.
    }


});