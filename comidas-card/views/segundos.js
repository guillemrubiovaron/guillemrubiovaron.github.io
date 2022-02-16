

export default () => {

    let codigo = "";
    function crearElementos() {
        let index = 0;
        _carrito.forEach(platoComprado => {

            if (platoComprado === null) {
                _carrito.splice(index, 1);
            };
            index++
        });

        _platos.forEach(plato => {
            if (plato.tipo === "segundo") {
                codigo += `<personal-card data-id=${plato.id} data-img=${plato.img} data-precio=${plato.precio} data-titulo=${plato.titulo} data-descripcion=${plato.descripcion}></personal-card>`
            }
        });
    }


    crearElementos()

    return `<h1>Segundos</h1>
            <div class="containerPersonal">
                <div class="row row-cols-1 row-cols-md-3 g-4" id="segundosView">
                    ${codigo}
                </div>
            </div>`;
}




