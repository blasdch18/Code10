import { useState } from "react";
import {TaskForm, TaskCard} from "./components";

function App() {

  const [ taskList, setTaskList ] = useState([]);

  function addTask(text) {
    const newTask = {
      text: text,
      datetime: new Date(),
    };
    const listaTemporal = taskList;
    listaTemporal.push(newTask);
    setTaskList(listaTemporal);
    console.log(taskList);
  }

  return (
    <div className="container my-5">
      <h1 className="display-3">Todo App</h1>
      <TaskForm onSubmitFunction = {addTask} />
      <div className="text-primary">
        <hr/>
      </div>        
      <div>
        {
          taskList.map((index, task) => {
            return (<TaskCard 
                      key={index}
                      texto={task.text} 
                      fecha={task.datetime}
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