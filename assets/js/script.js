const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const tbody = document.querySelector("tbody")
const cuenta = document.querySelector("#cuenta-tareas")
const cuentaRealizadas = document.querySelector("#realizadas")
const tareas = [
    { id: 1, nombre: "Estudiar react", completado: false },
    { id: 2, nombre: "Estudiar javascript", completado: false },
    { id: 3, nombre: "Estudiar redux", completado: false },
]

renderTareas()

function renderTareas() {
    let html = ""
    for (let tarea of tareas) {
        html += `<tbody>
        <tr>    
    <td>${tarea.id}</td>
    <td>${tarea.nombre}</td>
    <td>${tarea.completado
                ? `<h4 style="color: green;" id="pendiente">Realizada</h4>`
                : `<h4 style="color: red;" id="pendiente">Pendiente</h4>`
            }
    </td>
    <td>
    <label for="opt1" id="label1"></label>
    ${tarea.completado
        ? `<input name="opt1"type="checkbox" id="opt1" onclick="pintar(${tarea.id})" checked="true">`
        : `<input name="opt1"type="checkbox" id="opt1" onclick="pintar(${tarea.id})">`
    }
    <button class="delete" onclick="borrar(${tarea.id})"> Eliminar</button></td>
    </tr>
    </tbody>`;
    }
    const arr = tareas.filter((tarea) => tarea.completado == true);
    const conteo = arr.length;
    tbody.innerHTML = html;
    cuenta.innerHTML = "Total Tareas: " + tareas.length;
    cuentaRealizadas.innerHTML = "Total Realizadas: " + conteo;
}


btnAgregar.addEventListener("click", () => {
    if (tareaInput.value == "") {
        alert("Debe agregar un valor");
        return;
    }
    const nuevaTarea = tareaInput.value;
    const nuevaId = tareas.length;
    tareas.push({ id: nuevaId + 1, nombre: nuevaTarea, completado: false });
    tareaInput.value = "";
    renderTareas();
})  

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    renderTareas();
}

function pintar(id) {
    tareas.map((tarea) => {
        if (tarea.id == id) tarea.completado = !tarea.completado;
    });
    renderTareas();
}
