function App() {
  return (
    <div className="flex flex-col h-screen items-center my-6 py-2 mx-36 bg-gray-850 rounded-2xl shadow shadow-blue-100">
      {/* HEADER */}
      <div className="flex flex-col w-full items-center justify-between px-20">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-amber-500">PORTFOLIO</h1>
            <p className="text-2xl text-white font-black">
              Tsahatsy Benedictin
            </p>
          </div>

          <div className="flex h-25 w-25 items-center justify-center pt-5">
            <img
              src="/ben.jpg"
              alt="Photo de profile"
              className="rounded-full shadow-sm shadow-cyan-500"
            />
          </div>
        </div>

        <h1 className="text-xl text-white mb-5">Developpeur</h1>
      </div>

      <div className="w-[80%] h-0.5 bg-gray-700 shadow-2xl shadow-blue-300 mb-2"></div>

      {/* BODY */}
      <h1 className="text-3xl font-bold text-white text-center m-5 shadow shadow-blue-100 rounded-2xl p-2">
        COMPETENCES
      </h1>

      <div className="w-full px-20">
        <div className="flex flex-col gap-5 shadow shadow-blue-100 rounded-2xl px-5">
          <div className="flex justify-between pt-5 items-start m-5">
            <div className="flex items-center gap-2">
              <div className="bg-cyan-800 h-5 w-5 rounded-full"></div>
              <h1 className="text-white">Developpement Web</h1>
            </div>

            <div className="w-[70%] px-16 py-1 shadow shadow-blue-100 rounded-xl gap-2">
              <div className="flex justify-between">
                <p>ReactJS</p>
                <p>90%</p>
              </div>

              <div className="flex justify-between">
                <p>Tailwindcss</p>
                <p>90%</p>
              </div>

              <div className="flex justify-between">
                <p>Express</p>
                <p>90%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div></div>
    </div>
  );
}

export default App;
