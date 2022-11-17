import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import ImportExport from "./components/ImportExport";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
        <ImportExport />
      </div>
    </div>
  );
}
export default App;
