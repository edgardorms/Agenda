import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="p-10">
      <h1 className="text-2xl font-bold text-white mb-3">Create your task!</h1>
        <input
          placeholder="Write yor task!"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-100 p-3 w-full mb-2"
          autoFocus
        ></input>
        <textarea
          placeholder="Describe your task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-100 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-2  first-letter:transition duration-500 ease select-none focus:outline-none focus:shadow-outline">Save</button>
      </form>
    </div>
  );
}
