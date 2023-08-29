 const inputNuevaTarea = document.querySelector("#nueva-tarea");
 const inputTareaBuscada = document.querySelector("#numero-tarea-buscada");

 const inputPosTareaActualizar = document.querySelector("#numero-tarea-actualizar"); 
 const inputTxtTareaActualizar = document.querySelector("#txt-tarea-actualizar");
 
 const inputPosTareaEliminar = document.querySelector("#numero-tarea-eliminar");
 const CLAVE_TAREAS = "listaTareas";
 
 let listaTareas = "lista vacia";
 /* listaTareas = []; */

 function iniciarListaTareas(){
    listaTareas = JSON.parse(localStorage.getItem(CLAVE_TAREAS));
    if (listaTareas === null){
        listaTareas = [];
        actualizarLocalStorage();
    }

    generarListaTareas();
}



function actualizarLocalStorage() {
    localStorage.setItem(CLAVE_TAREAS, JSON.stringify(listaTareas));
}



function generarListaTareas() {
    document.querySelector("ol").innerHTML = "";
    listaTareas.forEach(tarea => {
        document.querySelector("ol").innerHTML += `
         <li> ${tarea} </li>
    `;
    });
}

function agregar(){
   
     let nuevaTarea = inputNuevaTarea.value;
     document.querySelector("ol").innerHTML+=`
         <li> ${nuevaTarea} </li>`;

     
     listaTareas.push(nuevaTarea);


     localStorage.setItem(CLAVE_TAREAS,JSON.stringify(listaTareas));
    
}

function buscar(){
   document.querySelector("#tarea-buscada").innerHTML = `
    <span>Tarea buscada:</span>
    <h4>${listaTareas[inputTareaBuscada.value - 1]}</h4>
    `; 

  }

  function actualizar(){
    let posTarea = inputPosTareaActualizar.value;
    let txtNuevaTarea = inputTxtTareaActualizar.value;
    
    listaTareas[posTarea - 1] = txtNuevaTarea;

    generarListaTareas();
    actualizarLocalStorage();

  }

  function eliminar(){
    let posTareaEliminar = inputPosTareaEliminar.value - 1;

    listaTareas.splice(posTareaEliminar,1);

    generarListaTareas();
    actualizarLocalStorage();


  }


  function eliminarTodo(){
   /*  localStorage.clear();
    iniciarListaTareas(); */
    listaTareas = [];
    generarListaTareas();
    actualizarLocalStorage();

  }




iniciarListaTareas();