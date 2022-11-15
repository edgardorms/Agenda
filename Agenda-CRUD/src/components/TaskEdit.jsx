import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskEdit = ({ task }) => {
    console.log(task);
  const id = task.id;
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const { updateTask } = useContext(TaskContext);

  const updatedTask = { id, title, description };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(id, updatedTask);
  };

  return (
    <div className="mx-1">
      <form
        onSubmit={handleSubmit}
        className="items-center sm:grid sm:grid-cols-3 sm:gap-3 justify-items-center"
      >
        <input
          placeholder="Update your title!"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-100 p-3 mb-2 w-full"
          autoFocus
        ></input>
        <textarea
          placeholder="Update your description!"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-100 p-3 mb-2 h-[48px] w-full"
        ></textarea>
        <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-2 w-[115px] first-letter:transition duration-500 ease select-none focus:outline-none focus:shadow-outline">
          Save
        </button>
      </form>
    </div>
  );
};

export default TaskEdit;
