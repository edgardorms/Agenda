import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import AgendaDownload from "./components/AgendaDownload";

function App() {
  return (
    <div>
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
        <AgendaDownload/>
      </div>
    </div>
  );
}
export default App;
