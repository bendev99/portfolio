import AppBar from "./components/AppBar";

function App() {
  return (
    <div className="flex flex-col items-center m-16 bg-gray-850 rounded-2xl shadow shadow-blue-100">
      {/* HEADER */}
      <div className="flex w-full justify-between items-center p-5">
        <div>
          <h1 className="text-lg font-bold text-amber-400">PORFOLIO</h1>
          <p className="text-white">Benedictin</p>
        </div>
        <div className="flex h-25 w-25 items-center justify-center">
          <img
            src="/ben.jpg"
            alt="Photo de profile"
            className="rounded-full shadow-sm shadow-cyan-500"
          />
        </div>
      </div>

      <div className="w-[80%] h-0.5 bg-gray-700 shadow-2xl shadow-blue-300"></div>

      {/* BODY */}
      <div>
        <h1 className="text-white">BODY</h1>
      </div>

      {/* FOOTER */}
      <div></div>
    </div>
  );
}

export default App;
