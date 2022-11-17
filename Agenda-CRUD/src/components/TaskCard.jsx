import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskEdit from "./TaskEdit";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="border-b-2 border-red-600 p-3  items-center sm:grid sm:grid-cols-3 sm:gap-3">
        <h1 className="text-xl font-bold capitalize">{task.title}</h1>
        <p className="text-gray-500 text-sm m-3">{task.description}</p>
        <div className="sm:flex items-center justify-end">
          <button
            className="bg-gradient-to-r from-red-500 to-red-800 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-2 mr-3 lg:h-[40px] lg:w-[115px] first-letter:transition duration-500 ease select-none focus:outline-none focus:shadow-outline"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
          <button
            className="bg-gradient-to-r from-green-500 to-green-800 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-2 first-letter:transition duration-500 ease select-none focus:outline-none focus:shadow-outline"
            onClick={handleOpen}
          >
            Edit
          </button>
        </div>
      </div>
      {open ? <TaskEdit {...{ task }} /> : <div></div>}
    </>
  );
}

export default TaskCard;
