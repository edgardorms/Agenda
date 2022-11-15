import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-3 rounded-md items-center sm:grid sm:grid-cols-3 sm:gap-3">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm m-3">{task.description}</p>
      <div className="flex items-center justify-end">
      <p className="text-yellow-50 text-lg mr-3">date: 12-11-22 3:00pm</p>
      <button className="bg-gradient-to-r from-red-500 to-red-800 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-2 my-4 lg:h-[40px] lg:w-[115px] first-letter:transition duration-500 ease select-none hover:bg-rojo4 focus:outline-none focus:shadow-outline" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
