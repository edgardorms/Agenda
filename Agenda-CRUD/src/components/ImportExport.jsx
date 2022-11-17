import React from "react";
import { useContext, useState, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import { useForm } from "react-hook-form";

function ImportExport() {
  const { tasks, setTasks } = useContext(TaskContext);
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState();
  const [carga, setCarga] = useState(true);
  let datos = JSON.stringify(tasks);
  const [uploadbtn, setuploadbtn] = useState(false);

  function load() {
    if (carga) {
      setCarga(false);
    } else {
      setCarga(true);
    }
  }

  const onSubmit = (data) => {
    const receivedFile = data.data[0];
    const reader = new FileReader();
    reader.readAsDataURL(receivedFile);
    reader.onload = function () {
      setFile(reader.result);
    };
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(file);
      const data = await response.json();
      console.log(data);
      setTasks(data);
    }
    fetchData();
  }, [carga, file]);

  const download = (jsonString, fileName = "test.json") => {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:application/octet-stream," + encodeURIComponent(jsonString)
    );
    element.setAttribute("download", fileName);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex items-center justify-between mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mr-5 sm:border sm:border-black sm:bg-gray-100 sm:items-center rounded-lg flex "
      >
        <label
          htmlFor="load"
          className="sm:hidden bg-gradient-to-r  from-sky-700 to-sky-900 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-1 mx-1 first-lettertransition duration-500 ease select-none focus:outline-none focus:shadow-outline:"
        >
          Import
        </label>
        <input
          {...register("data")}
          type="file"
          name="data"
          accept=".json"
          id="load"
          className="ml-5 my-2 hidden sm:block"
          required
        />
        <button
          className="bg-gradient-to-r  from-sky-700 to-sky-900 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-1 mx-1 first-lettertransition duration-500 ease select-none focus:outline-none focus:shadow-outline:"
          onClick={() => load()}
        >
          Submit
        </button>
      </form>
      <button
        className="bg-gradient-to-r  from-green-700 to-green-900 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 mx-1 h-[32px] first-lettertransition duration-500 ease select-none focus:outline-none focus:shadow-outline:"
        onClick={() => download(datos, "agenda.json")}
      >
        Export
      </button>
    </div>
  );
}

export default ImportExport;
