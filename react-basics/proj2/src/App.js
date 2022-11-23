import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <h1 className="display-3">Todo App</h1>
      <TaskForm />
      <div className="text-primary">
            <hr/>
      </div>
        
      <section id="tasks_list">
            
      </section>
    </div>
  );
}

export default App;