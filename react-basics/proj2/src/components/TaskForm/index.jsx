import { useRef } from "react";

function TaskForm (props) {
    //const [inputTask, setInputTask] = useState("");
    const { onSubmitFunction } = props;
    const inputElement = useRef(null);
/*
    function taskInput(e) {
        //inputTask = e.target.value; // Nadie va a reaccionar, por defecto entra
        setInputTask(e.target.value); // Todos van a reaccionar
    }
*/
    function inputKeyPress(e) {
        console.log(e.key);
        if (e.key ==="Enter") {
            addButton();
        }
    }

    function addButton () {
        if (inputElement.current.value === "") return ;
        onSubmitFunction(inputElement.current.value);
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
                        onKeyPress={inputKeyPress}
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