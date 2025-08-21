import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdOpenInNew } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";
import { motion } from "framer-motion";

const App = () => {
  const github = "https://github.com/bendev99";
  const whatsapp = +261343786570;
  const telegram = +261343786570;
  const email = "benbenedictin@gmail.com";

  return (
    <div className="flex flex-col min-h-screen max-w-screen items-center my-6 py-5 mx-36 bg-gray-900 rounded-2xl shadow shadow-blue-100">
      {/* HEADER */}
      <div className="flex flex-col w-full items-center justify-between px-20">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <motion.h1
              initial={{ transform: "translateX(-100px)" }}
              animate={{ transform: "translateX(0px)" }}
              transition={{ type: "spring" }}
              className="text-3xl font-bold text-cyan-500"
            >
              PORTFOLIO
            </motion.h1>
            <motion.p
              initial={{ transform: "translateX(-150px)" }}
              animate={{ transform: "translateX(0px)" }}
              transition={{ type: "spring" }}
              className="text-2xl text-cyan-600 font-bold"
            >
              Tsahatsy Benedictin
            </motion.p>
          </div>

          <div className="flex gap-8 mt-5">
            <div className="flex flex-col gap-2 items-center justify-center">
              {/* Icon github */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ all: "easeOut", duration: 0.5 }}
                className="flex items-center my-auto gap-2"
              >
                <a
                  href={github}
                  className="peer order-2 text-2xl cursor-pointer text-cyan-800"
                >
                  <BsGithub size={28} />
                </a>
                <p className="text-gray-600 -ml-2 order-1 opacity-0 transition-opacity duration-300 peer-hover:opacity-100 pointer-events-none">
                  Github
                </p>
              </motion.div>

              {/* Icon whatsApp */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ all: "easeOut", duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <a
                  href={`http://wa.me/${whatsapp}`}
                  className="peer order-2 text-2xl cursor-pointer text-cyan-800"
                >
                  <BsWhatsapp size={28} />
                </a>
                <p className="text-gray-600 -ml-8 order-1 opacity-0 transition-opacity duration-300 peer-hover:opacity-100 pointer-events-none">
                  WhatsApp
                </p>
              </motion.div>

              {/* Icon Gmail */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ all: "easeOut", duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <a
                  href={`mailto:${email}`}
                  className="peer order-2 text-2xl cursor-pointer text-cyan-800 "
                >
                  <CgMail size={32} />
                </a>
                <p className="text-gray-600 order-1 opacity-0 transition-opacity duration-300 peer-hover:opacity-100 pointer-events-none">
                  Gmail
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="relative h-28 w-28">
                <img
                  src="/ben.jpg"
                  alt="Photo de profile"
                  className="h-28 w-28 rounded-full object-cover"
                />
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
                className="w-28 h-28 pointer-events-none absolute inset-0 rounded-full shadow-md shadow-cyan-500"
              ></motion.div>
            </div>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ all: "easeOut", duration: 0.5 }}
          className="text-xl text-cyan-500 font-bold mb-5"
        >
          DEVELOPPEUR
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ all: "easeOut", duration: 0.5 }}
        className="w-[50%] h-0.5 bg-gray-700/30 shadow-2xl shadow-blue-300 mb-2"
      ></motion.div>

      {/* BODY */}
      {/* Section competences */}
      <div className="flex flex-col w-full items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ all: "easeOut", duration: 0.5 }}
          className="w-[30%] text-3xl font-bold text-white text-center m-5 shadow shadow-blue-100 rounded-2xl p-2"
        >
          COMPETENCES
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ all: "easeOut", duration: 0.5 }}
          className="w-full px-20"
        >
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
        </motion.div>
      </div>

      {/* Section projets */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ all: "easeOut", duration: 0.5 }}
        className="flex flex-col w-full items-center"
      >
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
                  <h1 className="text-white font-bold">Yi-Chat</h1>
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

                <div className="rounded-full hover:scale-101 cursor-pointer items-center text-center">
                  <a
                    href="https://yi-chat.onrender.com/"
                    className="flex flex-col items-center justify-center"
                  >
                    <MdOpenInNew size={35} color="white" />
                    {/* <img src="/logo.svg" alt="" /> */}
                    <p className="text-white text-sm">Navigué</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FOOTER */}

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ all: "easeOut", duration: 0.5 }}
        className="w-full mb-5 mt-16 items-center justify-center"
      >
        <div className="flex shadow shadow-blue-100 p-2  rounded-2xl w-[20%] justify-center mx-auto mb-6">
          <h1 className="text-center text-white text-2xl font-bold">CONTACT</h1>
        </div>

        <div className="flex flex-col mx-20 p-5 shadow shadow-blue-100 rounded-2xl items-center">
          <div className="w-full">
            <div className="flex items-center justify-around gap-5 text-white">
              <div className="flex flex-col gap-2 text-center justify-center">
                <p className="font-bold">Téléphone</p>
                <div className="flex flex-col">
                  <p>033 17 250 84</p>
                  <p>034 37 865 70</p>
                </div>
              </div>

              <div className="w-0.5 h-16 bg-gray-700/30 shadow-2xl shadow-blue-300 mb-2"></div>

              <div className="flex flex-col gap-2 text-center justify-center">
                <p className="font-bold">Réseau sociaux</p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <a
                      href={`http://wa.me/${whatsapp}`}
                      className="flex items-center gap-2"
                    >
                      <BsWhatsapp color="green" />
                      <p>034 37 865 70</p>
                    </a>
                  </div>

                  <div className="flex gap-2 items-center">
                    <a
                      href={`http://t.me/${telegram}`}
                      className="flex items-center gap-2"
                    >
                      <PiTelegramLogo color="cyan" />
                      <p>034 37 865 70</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-0.5 h-16 bg-gray-700/30 shadow-2xl shadow-blue-300 mb-2"></div>

              <div className="flex flex-col gap-2 text-center justify-center">
                <p className="font-bold">Email</p>
                <div className="flex flex-col">
                  <a href={`mailto:${email}`}>
                    <p>benbenedictin@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
