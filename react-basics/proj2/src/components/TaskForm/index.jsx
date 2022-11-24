import { useState, useRef } from "react";

function TaskForm () {
    const [inputTask, setInputTask] = useState("");
    const inputElement = useRef(null);


    function taskInput(e) {
        //inputTask = e.target.value; // Nadie va a reaccionar, por defecto entra
        setInputTask(e.target.value); // Todos van a reaccionar
    }

    function addButton () {
        console.log(inputElement.current.value);
        inputElement.current.value = "";
    }

    return (
        <div className="card p-3 shadow" >
                <div className="input-group">    
                    <input 
                        id="input_task"
                        type="text"
                        className="form-control"
                        placeholder="My new task ..."
                        onChange={taskInput}
                        ref={inputElement}
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