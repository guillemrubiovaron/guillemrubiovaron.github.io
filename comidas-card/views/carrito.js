export default () =>{
    let precioTotal= document.getElementById('contador-dinero');

    let codigo="";

        function crearElementos(){
            let index=0;
            _carrito.forEach(platoComprado=>{

                if(platoComprado===null){
                    _carrito.splice(index,1);
                };
                index++
            });

            let i=0;
            _carrito.forEach(plato => {
                
                if(plato!=null){
                    codigo+=`<tr id=${i}>
                    <td>${plato.titulo}</td>
                    <td>${plato.precio}</td>
                    <td><boton-quitar data-precio=${plato.precio} data-quitar=${i}></boton-quitar></td>
                    </tr>`
            i++

                }
                                
            });           
        }
    
    
        crearElementos()
    
        return `
        <div class="container">
            <div class="row">
                <div class="col">
                    <table class="table table-striped table-success">
                        <thead>
                            <tr>
                                <th scope="col">PLATO</th>
                                <th scope="col">PRECIO</th>
                                <th scope="col">QUITAR</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            ${codigo}
                        </tbody>
                    </table> 
                </div>
                <div class="col">
                    <div class="container precio-total">
                        <p>PRECIO TOTAL </br><span id="precioCarrito" class="precioCarrito">${precioTotal.textContent}</span> €</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    } 
