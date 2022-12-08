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

  async function addTask(text) {
    const newTask = JSON.stringify({ name: text });
    try{
      const url = "https://6386dc09d9b24b1be3dff078.mockapi.io/tareas";
      await fetch ( url, {
        method: "POST",
        header: {
          "Content-type": "application/json",
        },
        body: newTask,
      });
      await getTask();

    }catch(error){
      console.log(error);

    }

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