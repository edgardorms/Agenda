import { createContext, useState, useEffect } from "react";
//import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);


  
  useEffect(() => {
    //setTasks(data);

    let data = localStorage.getItem("tarea");
    if (data) {
      setTasks(JSON.parse(data));
    }
    ; }, []);

  useEffect(() => {
    localStorage.setItem("tarea", JSON.stringify(tasks));
  }, [tasks]);

  
  

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length + 10,
        description: task.description,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <TaskContext.Provider
      value={{ tasks: tasks, deleteTask: deleteTask, createTask: createTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
