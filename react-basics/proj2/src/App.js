import { useState } from "react";
import {TaskForm, TaskCard} from "./components";

function App() {

  const [ taskList, setTaskList ] = useState([]);

  function addTask(text) {
    const newTask = {
      text: text,
      datetime: new Date(),
    };
    //const listaTemporal = taskList;
    //listaTemporal.push(newTask);
    setTaskList([...taskList, newTask]);
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