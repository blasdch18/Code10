import { useState, useEffect } from "react";
import {TaskForm, TaskCard} from "./components";

function App() {

  const [ taskList, setTaskList ] = useState([]);

  async function getTask() {
    try {

      const url = "https://6386dc09d9b24b1be3dff078.mockapi.io/tareas";

      const response = await fetch(url);
      const data = await response.json();
      setTaskList(data);

    } catch(error) {
      console.log("Error",error);
    }
  }

  function addTask(text) {
    const newTask = {
      text: text,
      datetime: new Date(),
    };
    //const listaTemporal = taskList;
    //  ... operador de propagacion (spread operator)
    setTaskList([...taskList, newTask]);
  }

  useEffect ( () => {
    getTask();
    // que provoca el []: Que se ejecute solo una vez
  }, []);

  return (
    <div className="container my-5">
      <h1 className="display-3">Todo App</h1>
      <TaskForm onSubmitFunction = {addTask} />
      <div className="text-primary">
        <hr/>
      </div>        
      <div>
        {
          taskList.map((task, index) => {
            return (<TaskCard 
                      key={index}
                      task={task}                       
                    /> 
                    );
            }
          )
        }
      </div>
    </div>
  );
}

export default App;