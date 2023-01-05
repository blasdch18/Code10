import { useState, useEffect } from "react";
import {TaskForm, TaskCard} from "../../components";
import { get, post, update } from "../../services";

import { Link } from "react-router-dom";

function Home() {

  const [ taskList, setTaskList ] = useState([]);

  async function getTask() {
    const tasks = await get();
    setTaskList(tasks);
  }

  async function addTask(text) {
    const newTask = { name: text, status: 1};
    await post (newTask);
    await getTask();

  }

  async function updateTask(id) {
    const body = { status: 2};
    await update(id, body);
    await getTask();
  }

  useEffect ( () => {
    getTask();
    // que provoca el []: Que se ejecute solo una vez
  }, []);

  return (
    <div className="container my-5">
      <h1 className="display-3">Todo App</h1>
      <Link to="/perfil" className="my-3 btn btn-link"> Ir a Perfil </Link>
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
                      getTask={getTask}
                      updateTask={updateTask}                
                    /> 
                    );
            }
          )
        }
      </div>
    </div>
  );
}

export default Home;