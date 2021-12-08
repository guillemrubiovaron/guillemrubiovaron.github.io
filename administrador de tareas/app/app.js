
let formulario=document.getElementById("formulario").addEventListener("submit", guardarTareas);

function guardarTareas(e) {

    let tituloTarea = document.getElementById("tarea").value

    let descripcionTarea = document.getElementById("descripcion").value

    const tarea = {
        tituloTarea,
        descripcionTarea
    };

    if (localStorage.getItem("tareas") === null) {

        let tareas = [];
        tareas.push(tarea)
        localStorage.setItem("tareas", JSON.stringify(tareas))

    } else {
        let tareas = JSON.parse(localStorage.getItem("tareas"))
        tareas.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(tareas))
    }

    obtenerTareas();

 formulario.reset();

    e.preventDefault();
   

}

function obtenerTareas(){

    let tareas= JSON.parse(localStorage.getItem("tareas"))

    let taskView=document.getElementById("tareas");

    taskView.innerHTML=""

    for(let i=0; i<tareas.length;i++){
        let titulo=tareas[i].tituloTarea;
        let descripcion = tareas[i].descripcionTarea;


        taskView.innerHTML+=`<div class="card cardPersonalizada mb-4">
                                 <div class="card-header bgheader"><h5><strong>TAREA:</strong> ${titulo}</h5></div>
                                 <div class="card-body bgcard text-primary">
                                 <p class="card-text"><strong>Descripcion</strong></br>${descripcion}</p>
                               
             
            <a class="btn btn-danger" onclick="borrarTarea('${titulo}')">BORRAR</a>
            </div>
            </div>
        </div>`
      
    }
}

function borrarTarea(titulo){
  let tareas =JSON.parse(localStorage.getItem("tareas"))
  for (let i = 0;i<tareas.length;i++){
      if(tareas[i].tituloTarea==titulo){
          tareas.splice(i,1);
      }
  }
  localStorage.setItem("tareas",JSON.stringify(tareas))
  obtenerTareas();


}

obtenerTareas()