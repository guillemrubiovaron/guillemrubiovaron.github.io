class BotonCompra extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    this.innerHTML = `
          <div class="divBtnAnyadir">
            <button class="btn btn-dark btnPropio" id="btnAdd"><i class="fas fa-shopping-cart"></i> Añadir </button>
          </div>
          `;

    let btn = this.querySelector("button");

    let precio = parseInt(this.dataset.precio);
    let titulo = String(this.dataset.titulo);
    let id=parseInt(this.dataset.id);


    btn.onclick = () => {

      let contadorDinero = document.getElementById('contador-dinero');
      let totalAcumulado = contadorDinero.textContent;
      contadorDinero.innerHTML = parseInt(totalAcumulado) + precio;
      

      let plato = {
        id:id,
        titulo: titulo,
        precio: precio
      }
      _carrito.push(plato);

    };

  }


}
window.customElements.define("boton-compra", BotonCompra);