class BotonQuitar extends HTMLElement {
    constructor() {
        super();
    };
    connectedCallback() {
        this.innerHTML = `
                <button class="btn btn-danger btnPropio" ><i class="fas fa-shopping-cart"></i> Quitar </button>
            `;

        let btn = this.querySelector("button");

        let precio = parseInt(this.dataset.precio);
        let trQuitar = parseInt(this.dataset.quitar);
        let tbody = document.getElementById('tbody');


        btn.onclick = () => {
            //my trQuitar es lo mismo que el indice del array _carrito

            let trBorrar = document.getElementById(trQuitar);
            tbody.removeChild(trBorrar)
            _carrito[trQuitar] = null;

            let cambioSpan = document.getElementById('precioCarrito');
            let contadorNuevo = parseInt(cambioSpan.innerText) - precio;
            cambioSpan.innerHTML = contadorNuevo;

            let contadorDinero = document.getElementById('contador-dinero');
            contadorDinero.innerHTML = contadorNuevo

            console.log(_carrito)

        };

    }


}
window.customElements.define("boton-quitar", BotonQuitar);