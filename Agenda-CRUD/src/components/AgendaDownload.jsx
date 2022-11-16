import React from "react";
import { useContext, useState, useEffect} from "react";
import { TaskContext } from "../context/TaskContext";
import { useForm } from "react-hook-form";

function AgendaDownload() {
  
const { tasks, setTasks} = useContext(TaskContext);
  const { register, handleSubmit } = useForm() 
  const [file, setFile] = useState()
  const [carga, setCarga] = useState(true)
  let datos = JSON.stringify(tasks);

  function changeCarga () {
    if (carga) {
      setCarga(false)
    } else {
      setCarga(true)
    }
  }

  const onSubmit = (data) => {

    const archivo = data.data[0]
    const reader = new FileReader();
     reader.readAsDataURL(archivo);
   reader.onload= function() {setFile(reader.result);}

    console.log(file)
    console.log(reader.result);
    console.log(data.data[0]);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(file);
      const data = await response.json();
      setTasks(data);

    }
    fetchData();
  }, [carga, file]);
  

  const download = (jsonString, fileName = "test.json") => {
    // Creamos el elemento para hacer el trigger del download
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
    <div className="flex">
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('data')} type="file" name="data" />
      <button onClick={()=> changeCarga()}>Submit</button>
    </form>
      <button onClick={() => download(datos, "agenda.json")}>export</button>
    </div>
  );
}

export default AgendaDownload;
