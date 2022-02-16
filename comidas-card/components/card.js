class Card extends HTMLElement {
    constructor() {
        super();
    };
    connectedCallback() {

        let img = this.dataset.img;
        let precio = parseInt(this.dataset.precio);
        let titulo = this.dataset.titulo;
        let descripcion = this.dataset.descripcion;
        let id = this.dataset.id;

        this.innerHTML = `
        <div class="col">
        <div class="card">
            <div class="marcoFoto">
                <img src="${img}" class="card-img-top img-card card-img-top" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${descripcion}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Precio: ${precio}€</small>
                <div class="row">
                        <div class="col">
                            <boton-compra data-precio=${precio} data-titulo=${titulo} data-id=${id}></boton-compra>
                        </div>
                        <!-- <div class="col">
                            <boton-quitar data-precio=${precio}></boton-quitar>
                        </div> -->
                    </div>
            </div>
        </div>
    </div>
            `;

    }


}
window.customElements.define("personal-card", Card);


/* 

<!-- <div class="container">
<div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-2">
    <div class="col"> -->
        <div class="card m-3">
            <div class="marcoFoto">
                <img  class="card-img-top img-card" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${descripcion}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Precio: ${precio}€</li>
            </ul>
            <div class="card-body">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <boton-compra data-precio=${precio}></boton-compra>
                        </div>
                        <div class="col">
                            <boton-quitar data-precio=${precio}></boton-quitar>
                        </div>
                    </div>
                </div>                  
            </div>
        </div>
<!--         </div>
</div>
</div> --> */