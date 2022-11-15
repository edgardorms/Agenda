import React from 'react'
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function AgendaDownload() {
    
    const { tasks } = useContext(TaskContext);
    let data= localStorage.getItem("tarea");

    const download = (jsonString, fileName = 'test.json') => {
        // Creamos el elemento para hacer el trigger del download
        const element = document.createElement('a');
        element.setAttribute('href', 'data:application/octet-stream,' + encodeURIComponent(jsonString));
        element.setAttribute('download', fileName);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);  
    }

    function agendaDownloader() {   
        console.log(jsonInfo);

    } 
  return (
    <button
    onClick={()=> download(data, 'agenda.json')}>descargar</button>
  )
}

export default AgendaDownload