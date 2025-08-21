const App = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen items-center my-6 py-5 mx-36 bg-gray-900 rounded-2xl shadow shadow-blue-100">
      {/* HEADER */}
      <div className="flex flex-col w-full items-center justify-between px-20">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-amber-500">PORTFOLIO</h1>
            <p className="text-2xl text-white font-black">
              Tsahatsy Benedictin
            </p>
          </div>

          <div className="flex gap-8 mt-5">
            <div className="flex flex-col gap-2 items-center">
              <div className="ml-6 flex space-x-1 items-center text-gray-900 hover:text-gray-500">
                <p className="">Github</p>
                <p className="flex bg-cyan-950 w-8 h-8 rounded-full text-white cursor-pointer items-center justify-center">
                  G
                </p>
              </div>

              <div className="flex space-x-1 items-center text-gray-900 hover:text-gray-500">
                <p className="">Whatsapp</p>
                <p className="flex bg-cyan-950 w-8 h-8 rounded-full text-white cursor-pointer items-center justify-center">
                  W
                </p>
              </div>

              <div className="flex space-x-1 items-center text-gray-900 hover:text-gray-500">
                <p className="ml-8">Gmail</p>
                <p className="flex bg-cyan-950 w-8 h-8 rounded-full text-white cursor-pointer items-center justify-center">
                  M
                </p>
              </div>
            </div>

            <div className="flex h-28 w-28 items-center justify-center rounded-full shadow-sm shadow-cyan-500">
              <div className="flex h-25 w-25 items-center justify-center">
                <img
                  src="/ben.jpg"
                  alt="Photo de profile"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-xl text-white mb-5">Developpeur</h1>
      </div>

      <div className="w-[50%] h-0.5 bg-gray-700/30 shadow-2xl shadow-blue-300 mb-2"></div>

      {/* BODY */}
      {/* Section competences */}
      <div className="flex flex-col w-full items-center">
        <h1 className="w-[30%] text-3xl font-bold text-white text-center m-5 shadow shadow-blue-100 rounded-2xl p-2">
          COMPETENCES
        </h1>

        <div className="w-full px-20">
          <div className="flex flex-col gap-5 shadow shadow-blue-100 rounded-2xl px-12">
            {/* WEB */}
            <div className="flex justify-between pt-5 items-start m-2 ">
              <div className="flex items-center gap-2 my-auto">
                <div className="bg-cyan-900 h-5 w-5 rounded-full"></div>
                <h1 className="text-white font-bold text-2xl">WEB</h1>
              </div>

              <div className="flex flex-col w-[70%] pl-16 py-1 rounded-xl gap-2 text-white">
                <div className="flex justify-between">
                  <p className="font-bold">ReactJS</p>
                  <div className="w-[70%] bg-slate-800 text-center rounded-full">
                    <div className="relative bg-cyan-950 w-[90%] h-6 rounded-l-full"></div>
                    <p className="absolute ml-36 -mt-6">90%</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="font-bold">Tailwindcss</p>
                  <div className="w-[70%] bg-slate-800 text-center rounded-full">
                    <div className="relative bg-cyan-950 w-[80%] h-6 rounded-l-full"></div>
                    <p className="absolute ml-36 -mt-6">80%</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="font-bold">Express</p>
                  <div className="w-[70%] bg-slate-800 text-center rounded-full">
                    <div className="relative bg-cyan-950 w-[60%] h-6 rounded-l-full"></div>
                    <p className="absolute ml-36 -mt-6">60%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%] h-0.5 bg-gray-700/10 shadow-2xl shadow-blue-300 mx-auto"></div>

            {/* MOBILE */}
            <div className="flex justify-between pt-5 items-start m-2 ">
              <div className="flex items-center gap-2 my-auto">
                <div className="bg-cyan-900 h-5 w-5 rounded-full"></div>
                <h1 className="text-white font-bold text-2xl">MOBILE</h1>
              </div>

              <div className="flex flex-col w-[70%] pl-16 py-1 rounded-xl gap-2 text-white">
                <div className="flex justify-between">
                  <p className="font-bold">Flutter</p>
                  <div className="w-[70%] bg-slate-800 text-center rounded-full">
                    <div className="relative bg-cyan-950 w-[85%] h-6 rounded-l-full"></div>
                    <p className="absolute ml-36 -mt-6">85%</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="font-bold">Java</p>
                  <div className="w-[70%] bg-slate-800 text-center rounded-full">
                    <div className="relative bg-cyan-950 w-[45%] h-6 rounded-l-full"></div>
                    <p className="absolute ml-36 -mt-6">45%</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="font-bold">Backend</p>
                  <div className="w-[70%] bg-slate-800 text-center rounded-full">
                    <div className="relative bg-cyan-950 w-[75%] h-6 rounded-l-full"></div>
                    <p className="absolute ml-36 -mt-6">75%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%] h-0.5 bg-gray-700/10 shadow-2xl shadow-blue-300 mx-auto"></div>

            {/* PROGRAMMATION */}
            <div className="flex justify-between pt-5 items-start m-2 ">
              <div className="flex items-center gap-2 my-auto">
                <div className="bg-cyan-900 h-5 w-5 rounded-full"></div>
                <h1 className="text-white font-bold text-2xl">PROGRAMMATION</h1>
              </div>

              <div className="flex flex-col w-[70%] pl-16 py-1 rounded-xl gap-2 text-white">
                <div className="flex justify-between">
                  <p className="font-bold">Robotique</p>
                  <div className="w-[70%] bg-slate-800 text-center rounded-full">
                    <div className="relative bg-cyan-950 w-[75%] h-6 rounded-l-full"></div>
                    <p className="absolute ml-36 -mt-6">75%</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="font-bold">IoT</p>
                  <div className="w-[70%] bg-slate-800 text-center rounded-full">
                    <div className="relative bg-cyan-950 w-[85%] h-6 rounded-l-full"></div>
                    <p className="absolute ml-36 -mt-6">85%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section projets */}
      <div className="flex flex-col w-full items-center">
        <h1 className="w-[20%] text-3xl font-bold text-white text-center m-5 mt-16 shadow shadow-blue-100 rounded-2xl p-2">
          PROJETS
        </h1>

        <div className="w-full px-20">
          <div className="flex flex-col shadow shadow-blue-100 rounded-2xl px-5">
            {/* CHAT-APP */}
            <div className="flex gap-2 p-5 items-start m-2">
              <div className="flex gap-5 items-center justify-between rounded-2xl p-2 w-full">
                <div className="flex flex-col items-center">
                  <img src="/logo.svg" alt="image de fond" className="h-24" />
                  <h1 className="text-white font-bold">Chat-App</h1>
                </div>

                <div>
                  <h1 className="text-white font-bold text-2xl">
                    Fonctionnalités :
                  </h1>
                  <p className="flex flex-col gap-3 ml-5 text-white text-md">
                    <li>Envoi des messages texto en temps réel.</li>
                    <li>Envoi des photos et vidéos.</li>
                    <li>Envoi des documents.</li>
                  </p>
                </div>

                <div className="w-20 h-20 rounded-full hover:scale-101 cursor-pointer items-center text-center">
                  <a href="www.yi-chat.onrender.com">
                    <img src="/logo.svg" alt="" />
                    <p className="text-white text-sm">Navigué</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full m-5 mt-16">
        <div className="flex flex-col mx-20 p-5 shadow shadow-blue-100 rounded-2xl items-center">
          <div className="flex flow-row shadow shadow-blue-100 p-2 rounded-2xl w-[20%] justify-center mb-6">
            <h1 className="text-center text-white text-2xl font-bold">
              CONTACT
            </h1>
          </div>

          <div className="w-full">
            <div className="flex items-center justify-around gap-5 text-white">
              <div className="flex flex-col gap-2 text-center justify-center">
                <p>Téléphone</p>
                <div className="flex flex-col">
                  <p>033 17 250 84</p>
                  <p>034 37 865 70</p>
                </div>
              </div>

              <div className="w-0.5 h-16 bg-gray-700/30 shadow-2xl shadow-blue-300 mb-2"></div>

              <div className="flex flex-col gap-2 text-center justify-center">
                <p>Réseau sociaux</p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <div className=" flex w-5 h-5 bg-green-900 rounded-full items-center justify-center">
                      w
                    </div>
                    <p>034 37 865 70</p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <div className=" flex w-5 h-5 bg-blue-500 rounded-full items-center justify-center">
                      T
                    </div>
                    <p>034 37 865 70</p>
                  </div>
                </div>
              </div>

              <div className="w-0.5 h-16 bg-gray-700/30 shadow-2xl shadow-blue-300 mb-2"></div>

              <div className="flex flex-col gap-2 text-center justify-center">
                <p>Email</p>
                <div className="flex flex-col">
                  <p>benbenedictin@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
