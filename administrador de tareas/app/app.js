
let btnGuardarText = "Boton Guardar";
let imgGuardarText = "Imagen Guardar";
let formulario = document.getElementById("btn").addEventListener("click", guardarTareas);
let imgGuardar = document.getElementById("imgGuardar").addEventListener("click", guardarTareas);
const miDate = document.getElementById("date");
const miTitulo = document.getElementById("tarea");
const miDescripcion = document.getElementById("descripcion");
let msgError = "";



function guardarTareas(e) {
    /* vamos a ver desde que elemento hemso llamado a la funcion añadir */
    if (e.srcElement)
        tag = e.srcElement.tagName;
    else if (e.target)
        tag = e.target.tagName;

        document.getElementById("h1propio").innerHTML=" LA ULTIMA TAREA HA SIDO AÑADIDA DESDE: "+tag;
    /* alert("Tarea añadida desde: " + tag); */

    let tituloTarea = document.getElementById("tarea").value

    let descripcionTarea = document.getElementById("descripcion").value

    let date = document.getElementById("date").value

    const tarea = {
        tituloTarea,
        descripcionTarea,
        date
    };

    if (tituloTarea == "") {
        alert("Titulo Vacio")
    } else if (descripcionTarea == "") {
        alert("Descripcion Vacia")
    } else if (date == "") {
        alert("Selecione una fecha")
    } else {
        let tareas = JSON.parse(localStorage.getItem("tareas"))
        tareas.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(tareas))
        //imgGuardar.reset()
        miTitulo.value = ""
        miDescripcion.value = ""

    }
    obtenerTareas();

    e.preventDefault();
}

function obtenerTareas() {

    let tareas = JSON.parse(localStorage.getItem("tareas"))

    let taskView = document.getElementById("tareas");

    taskView.innerHTML = ""

    for (let i = 0; i < tareas.length; i++) {
        let titulo = tareas[i].tituloTarea;
        let descripcion = tareas[i].descripcionTarea;
        let date = tareas[i].date;


        taskView.innerHTML +=
            `<div class="card cardPersonalizada mb-4" >
                <div class="card-header bgheader"><h5><strong>TAREA:</strong> ${titulo}</h5><h6>${date}</h6></div>
                    <div class="card-body bgcard text-primary" id=cardBody${i}>
                    <p class="card-text"><strong>Descripcion</strong></br>${descripcion}</p>            
                    <a class="btn btn-danger" onclick="borrarTarea('${titulo}')">BORRAR</a>
                    </div>
                </div>
            </div>`
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function borrarTarea(titulo) {
    let tareas = JSON.parse(localStorage.getItem("tareas"))
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].tituloTarea == titulo) {
            /*   await sleep(2000); */
            tareas.splice(i, 1);
        }
    }
    localStorage.setItem("tareas", JSON.stringify(tareas))
    obtenerTareas();
}

/* Pondrmeos la fecha en el dia actual pro defecto*/
document.getElementById("date").valueAsDate = new Date();

obtenerTareas()