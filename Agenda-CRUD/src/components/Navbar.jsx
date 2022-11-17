import ImportExport from "./ImportExport";
import agendaimg from '../../public/agenda.png';

function Navbar() {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-500 to-sky-700 h-[80px] w-full flex items-center justify-around">
        <h1 className=" px-4 py-2 text-white text-2xl font-extrabold flex items-center">
          Agenda App <img src={agendaimg} className="h-7 w-7 ml-4 bg-white rounded-md"></img>
        </h1>
        
      </div>
    </>
  );
}

export default Navbar;
