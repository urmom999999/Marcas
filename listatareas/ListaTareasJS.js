$(document).ready(function () {

    let tareas = {pendientes: ["Hacer este trabajo", "Arreglar eso"],
                  completadas: ["Cocinar", "Limpiar"]};

if (localStorage.getItem('tareas')) {
        tareas = JSON.parse(localStorage.getItem('tareas'));}

//Cargar datos
    if (localStorage.getItem('tareas')) {
        tareas = JSON.parse(localStorage.getItem('tareas'));
    }
    const $inputTarea = $('#AñadirTarea');
    const $btnAgregar = $('#AgregarTareaBtn');
    const $btnOrdenar = $('#OrdenarTareas');
    const $listaTareas = $('#listaTareas');
    const $listaCompletadas = $('#listaCompletadas');

//ACTUALIZAR la funcion despues de cada accion
    function cargarDatos() {
        localStorage.setItem('tareas', JSON.stringify(tareas));
        $listaTareas.empty();
        $listaCompletadas.empty();
//cargar pendientes
        tareas.pendientes.forEach((tarea, index) => {
            const $li = $(`
                <li><span>${tarea}</span>
                    <button class="completar-btn" data-index="${index}">Completar</button>
                    <button class="borrar-btn" data-index="${index}">Borrar</button>
                </li>
            `);
            $listaTareas.append($li);});
//Cargar completadas
        tareas.completadas.forEach((tarea, index) => {
            const $li = $(`
                <li>
                    <span>${tarea}</span>
                    <button class="mover-btn" data-index="${index}">Mover a Pendientes</button>
                    <button class="borrar-btn" data-index="${index}">Borrar</button>
                </li>
            `);
            $listaCompletadas.append($li);
        });
    }

//agregar
    function agregarTarea() {
        const nuevaTarea = $inputTarea.val().trim();
        if (nuevaTarea) {
            tareas.pendientes.push(nuevaTarea);
            $inputTarea.val('');
            cargarDatos();
        }
    }

//agregarTarea
    $btnAgregar.on('click', agregarTarea);

//sort no funciona

//ordenar
    $btnOrdenar.on('click', function () {
        tareas.pendientes.sort(function(a, b) {
            return a.localeCompare(b, undefined, {sensitivity: 'base'});
        });
        cargarDatos();
    });
//compeltar
    $listaTareas.on('click', '.completar-btn', function () {
        const index = $(this).data('index');
        const tarea = tareas.pendientes[index];
        
//actualizar
        tareas.completadas.push(tarea);
        tareas.pendientes.splice(index, 1);
        cargarDatos();});
//borrar
    $listaTareas.on('click', '.borrar-btn', function () {
        const index = $(this).data('index');
        tareas.pendientes.splice(index, 1);
        cargarDatos();
    });
//mover a pendientes
    $listaCompletadas.on('click', '.mover-btn', function () {
        const index = $(this).data('index');
        const tarea = tareas.completadas[index];
        
//actualizar
        tareas.pendientes.push(tarea);
        tareas.completadas.splice(index, 1);
        
        cargarDatos();
    });
//boorrar en completadas
    $listaCompletadas.on('click', '.borrar-btn', function () {
        const index = $(this).data('index');
        tareas.completadas.splice(index, 1);
        cargarDatos();
    });
    cargarDatos();
});