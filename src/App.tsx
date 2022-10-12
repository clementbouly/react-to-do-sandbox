import { useState } from "react";
import "./App.css";
import { Task } from "./models/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      label: "Apprendre React",
    },
    {
      id: 2,
      label: "Apprendre Angular",
    },
    {
      id: 3,
      label: "Apprendre Node Js",
    },
  ]);

  const addTask = () => {
    const id: number = Math.random();
    const randomLabel: string = Math.random().toString(36).substring(2, 7);

    setTasks([
      ...tasks,
      {
        id: id,
        label: randomLabel,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>To do list</h1>
      <div className="tasks__container">
        <ul className="tasks__list">
          {tasks.map((task) => (
            <li key={task.id} className="tasks__item">
              {task.label}
            </li>
          ))}
        </ul>
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
