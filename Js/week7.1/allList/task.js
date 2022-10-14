/*
+ Reglas de nuestra clase
    1. Se debe recibir 3 parametros cuando instanciemos esto
    2. Tenemos 3 estados
        status 1 = create
        status 2 = done
        status 3 = delete
    3. Tendremos una function para poder renderizar nuestra tarea
    4. Tendremos una function para poder actualizar nuestra tarea
    5. Tendremos una function para eliminar nuestra tarea
    
    +CRUD -> CREATE - READ - UPDATE - DELETE
*/

// Esta es la mejor forma en la que instanciamos a la clase task
// const task =  new Task("Tarea1", new Date(), 1);

// Importante una clase empieza siempre en mayuscula 
/* 

*/

export class Task {
    constructor(name, date, status) {
        this._name = name;
        this._date = date;
        this._status = status;
    }
    static destroyRender(id) {
        const element = document.querySelector(`#task-${id}`);
        element.remove();
    }

    static updateRender(id, name) {
        const texto = document.querySelector(`#task-name-${id}`);
        // Si quieren cambiar el texto de un elemento pueden usar
        // * innerText => Antiguo
        // * textContent => Moderno
        texto.textContent = name;
    }

    render () {
        return`
            <div id="task-${this._id}" class="item__task">
                <input type="checkbox" />
                <h6>${this._name}</h6>
                <button onclick="edit(${this._id})">
                    <img src="./img/edit.png"/ width="15">
                </button>
                <button onclick="destroy(${this._id})">
                    <img src="./img/delete.png"/ width="15">
                </button>
            </div>`;
    }
}
/*
class Persona {
    constructor(name) {
        this._name = nombre;
    }
}
*/
//const persona = new Persona("Pepe");

//console.log(persona.nombre);
