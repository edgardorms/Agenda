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
    <div className="max-w-lg h-[250px] w-[248px] mx-auto bg-yellow-100 border border-slate-600 ">
      <form onSubmit={handleSubmit} className="p-10 grid justify-items-center ">
      
        <input
          placeholder="Write yor task!"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-yellow-50 placeholder:text-black p-3 w-5/6 mb-2"
          autoFocus
        ></input>
        <textarea
          placeholder="Describe your task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-yellow-50 placeholder:text-black p-3 w-5/6 mb-2"
        ></textarea>
        <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 my-2 py-2 w-[100px] first-letter:transition duration-500 ease select-none focus:outline-none focus:shadow-outline">Save</button>
      </form>
    </div>
  );
}
