import { useState } from "react";

function TaskForm () {
    const [inputTask, setInputTask] = useState("");


    function taskInput(e) {
        inputTask = e.target.value; // Nadie va a reaccionar
        setInputTask(e.target.value); // Todos van a reaccionar
    }

    function addButton () {
        console.log("hola");
    }

    return (
        <div className="card p-3 shadow" >
                <div className="input-group">    
                    <input 
                        id="input_task"
                        type="text"
                        className="form-control"
                        placeholder="My new task ..."
                    />
                    <button 
                        className="btn btn-outline-primary" 
                        type="button" 
                        id="button-addon2"
                        onClick={addButton}    
                    > Add 
                    </button>           
                </div>
        </div>
    );
}

export default TaskForm;