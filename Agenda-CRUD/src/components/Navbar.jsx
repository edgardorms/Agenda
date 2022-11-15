function Navbar() {
  return (
    <>
      <div className="fixed z-[1000] bg-gradient-to-r  from-violet-100 to-violet-400 w-full h-[80px] flex flex-row items-center justify-around">
        <h1 className=" hidden px-4 py-2 m-8 text-black text-2xl font-light sm:flex">
          Agenda App
        </h1>
        <div className="flex justify-center">
          <div
            type="button"
            className="bg-gradient-to-r  from-orange-300 to-orange-500 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-2 my-8 mx-1 first-letter:transition duration-500 ease select-none hover:bg-rojo4 focus:outline-none focus:shadow-outline"
          >
           Import
          </div>

          <div
            type="button"
            className="bg-gradient-to-r   from-orange-300 to-orange-500 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-2 m-8 transition duration-500 ease select-none hover:bg-rojo4 focus:outline-none focus:shadow-outline"
          >
            Export
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
