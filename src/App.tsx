import React, { useState } from "react";
import bit from "./bit1.png";
import eth from "./eth.png";
import sol from "./sol.png";
import bin from "./bin1.png";
import shi from "./shi.png";
import { useSpring, animated } from "@react-spring/web";
import { ImLinkedin, ImUser } from "react-icons/im";
import { SiLeetcode, SiGithub } from "react-icons/si";

import "./App.css";

function App() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 5000 },
  });
  const [hover, setHover] = useState(false);
  const [text, settext] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoverel, setIsHoverel] = useState(false);
  const [isHoveree, setIsHoveree] = useState(false);
  const [isHovereg, setIsHovereg] = useState(false);
  const handleHover = () => setIsHovered(!isHovered);
  const handleHovere = () => setIsHoveree(!isHoveree);
  const handleHoverg = () => setIsHovereg(!isHovereg);
  const handleHoverl = () => setIsHoverel(!isHoverel);
  const animation = useSpring({
    transform: hover ? "scale(1.1) rotate(360deg)" : "scale(1) rotate(0deg)",
    opacity: hover ? 1 : 0.5,
    config: { mass: 1, tension: 200, friction: 20 },
  });
  return (
    <div className="App text-white bg-[#14172b]">
      <animated.div style={props}>
        <div className=" flex px-4 md:px-10">
          <div className="absolute mb-7 ml-6 mt-14 text-xl font-medium font-tomorrow flex flex-row leading-tight tracking-wide uppercase opacity-75">
            <div className="w-4 h-4 mt-1 rounded-full border-2 mx-auto bg-gradient-to-b from-[#626A881A] to-[#EAB3000F] border-none justify-center items-center">
              <animated.div
                className="relative "
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={animation}
              >
                <img
                  alt="Placeholder"
                  className=" rounded-full block "
                  src="https://photos.angel.co/startups/i/9010539-a9bf9cbfd5c66f7bd7cac2e3b4a666da-medium_jpg.jpg?buster=1658901522"
                />
              </animated.div>
            </div>
            <div
              className={`relative text-xl font-medium cursor-pointer ${
                text
                  ? "bg-gradient-to-r from-purple-600 to-pink-500"
                  : "text-gray-300"
              } rounded-lg px-4`}
              onMouseEnter={() => settext(true)}
              onMouseLeave={() => settext(false)}
            >
              <h1 className="ml-3">trending Assets</h1>
            </div>
          </div>

          <div className="h-screen flex overflow-scroll items-center justify-content-between gap-10  ">
            <div className="my-1 px-1  w-[290.74px] h-[450.08px] md:w-1/2 bg-gradient-to-b from-[#626A881A] to-[#14172b] border-2 border-slate-800 rounded-[20px] lg:my-4 lg:px-4 ">
              <div className="bg-[#14172b] mx-auto w-32 h-28 -mt-12 rounded-full border-2 border-none flex justify-center items-center">
                <div className="w-24 h-24 -mt-10 rounded-full border-2 mx-auto bg-gradient-to-b from-[#626A881A] to-[#EAB3000F] border-none flex justify-center items-center">
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-14 w-14 "
                      src={bit}
                    />
                  </animated.div>
                </div>
              </div>
              <article className="overflow-hidden rounded-lg shadow-lg">
                <div className=" px-12 leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Bitcoin (BTC)
                  </h1>
                </div>
                <div className="bg-[#14172B] shadow-inner shadow-slate-500  px-10 flex items-center justify-center  justify-content-between gap-6 rounded-full p-2">
                  <h1 className="pl-6">$31,812.80</h1>
                  <p className="text-[#00FFA3] font-tomorrow ">+10%</p>
                </div>
                <div className=" leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Price
                  </h1>
                </div>
                <div className="bg-[#14172B] shadow-inner shadow-slate-500 px-10 flex items-center justify-center  justify-content-between gap-6 rounded-full p-2">
                  <h1>$ 60,000</h1>
                </div>
                <div className=" leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    TVL
                  </h1>
                </div>
                <div className="bg-gradient-to-b from-[#35373e1a] to-[#3B3F5700] flex justify-center gap-1 rounded-full p-2">
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={bit}
                    />{" "}
                  </animated.div>
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={eth}
                    />{" "}
                  </animated.div>
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={sol}
                    />{" "}
                  </animated.div>
                </div>
                <div className=" leading-tight  md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Popular Pairs
                  </h1>
                </div>
              </article>
            </div>

            <div className="my-1 px-1  w-[290.74px] h-[450.08px] md:w-1/2 bg-gradient-to-b from-[#626A881A] to-[#14172b] border-2 border-slate-800 rounded-[20px] lg:my-4 lg:px-4 ">
              <div className="bg-[#14172b] mx-auto w-32 h-28 -mt-12 rounded-full border-2 border-none flex justify-center items-center">
                <div className="w-24 h-24 -mt-10 rounded-full border-2 mx-auto bg-gradient-to-b from-[#626A881A] to-[#DC1FFF1A] border-none flex justify-center items-center">
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-14 w-14 "
                      src={sol}
                    />
                  </animated.div>
                </div>
              </div>
              <article className="overflow-hidden rounded-lg shadow-lg">
                <div className=" px-12 leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Solana (SOL)
                  </h1>
                </div>
                <div className="bg-[#14172B] shadow-inner shadow-slate-500  px-10 flex items-center justify-center  justify-content-between gap-6 rounded-full p-2">
                  <h1 className="pl-6">$32.83</h1>
                  <p className="text-[#FF4D4D] font-tomorrow ">-12.32%</p>
                </div>
                <div className=" leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Price
                  </h1>
                </div>
                <div className="bg-[#14172B] shadow-inner shadow-slate-500 px-10 flex items-center justify-center  justify-content-between gap-6 rounded-full p-2">
                  <h1>$ 60,000</h1>
                </div>
                <div className=" leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    TVL
                  </h1>
                </div>
                <div className="bg-gradient-to-b from-[#35373e1a] to-[#3B3F5700] flex justify-center gap-1 rounded-full p-2">
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={eth}
                    />{" "}
                  </animated.div>
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={bit}
                    />{" "}
                  </animated.div>
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={bin}
                    />{" "}
                  </animated.div>
                </div>
                <div className=" leading-tight  md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Popular Pairs
                  </h1>
                </div>
              </article>
            </div>
            <div className="my-1 px-1  w-[290.74px] h-[450.08px] md:w-1/2 bg-gradient-to-b from-[#626A881A] to-[#14172b] border-2 border-slate-800 rounded-[20px] lg:my-4 lg:px-4 ">
              <div className="bg-[#14172b] mx-auto w-32 h-28 -mt-12 rounded-full border-2 border-none flex justify-center items-center">
                <div className="w-24 h-24 -mt-10 rounded-full border-2 mx-auto bg-gradient-to-b from-[#626A881A] to-[#EDF0F41A] border-none flex justify-center items-center">
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-14 w-14 "
                      src={eth}
                    />
                  </animated.div>
                </div>
              </div>
              <article className="overflow-hidden rounded-lg shadow-lg">
                <div className=" px-12 leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Ethereum (ETH)
                  </h1>
                </div>
                <div className="bg-[#14172B] shadow-inner shadow-slate-500  px-10 flex items-center justify-center  justify-content-between gap-6 rounded-full p-2">
                  <h1 className="pl-6">$1,466.45</h1>
                  <p className="text-[#FF4D4D] font-tomorrow ">-11.93%</p>
                </div>
                <div className=" leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Price
                  </h1>
                </div>
                <div className="bg-[#14172B] shadow-inner shadow-slate-500 px-10 flex items-center justify-center  justify-content-between gap-6 rounded-full p-2">
                  <h1>$ 60,000</h1>
                </div>
                <div className=" leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    TVL
                  </h1>
                </div>
                <div className="bg-gradient-to-b from-[#35373e1a] to-[#3B3F5700] flex justify-center gap-1 rounded-full p-2">
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={bit}
                    />{" "}
                  </animated.div>
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={eth}
                    />{" "}
                  </animated.div>
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={sol}
                    />{" "}
                  </animated.div>
                </div>
                <div className=" leading-tight  md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Popular Pairs
                  </h1>
                </div>
              </article>
            </div>
            <div className="my-1 px-1  w-[290.74px] h-[450.08px] md:w-1/2 bg-gradient-to-b from-[#626A881A] to-[#14172b] border-2 border-slate-800 rounded-[20px] lg:my-4 lg:px-4 ">
              <div className="bg-[#14172b] mx-auto w-32 h-28 -mt-12 rounded-full border-2 border-none flex justify-center items-center">
                <div className="w-24 h-24 -mt-10 rounded-full border-2 mx-auto bg-gradient-to-b from-[#626A881A] to-[#EAB3000F] border-none flex justify-center items-center">
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-14 w-14 "
                      src={bin}
                    />
                  </animated.div>
                </div>
              </div>
              <article className="overflow-hidden rounded-lg shadow-lg">
                <div className=" px-12 leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Binance USD (BUSD)
                  </h1>
                </div>
                <div className="bg-[#14172B] shadow-inner shadow-slate-500  px-10 flex items-center justify-center  justify-content-between gap-6 rounded-full p-2">
                  <h1 className="pl-6">$1.00</h1>
                  <p className="text-[#00FFA3] font-tomorrow ">+0.26%</p>
                </div>
                <div className=" leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Price
                  </h1>
                </div>
                <div className="bg-[#14172B] shadow-inner shadow-slate-500 px-10 flex items-center justify-center  justify-content-between gap-6 rounded-full p-2">
                  <h1>$ 60,000</h1>
                </div>
                <div className=" leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    TVL
                  </h1>
                </div>
                <div className="bg-gradient-to-b from-[#35373e1a] to-[#3B3F5700] flex justify-center gap-1 rounded-full p-2">
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={bin}
                    />{" "}
                  </animated.div>
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={eth}
                    />{" "}
                  </animated.div>
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={bit}
                    />{" "}
                  </animated.div>
                </div>
                <div className=" leading-tight  md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Popular Pairs
                  </h1>
                </div>
              </article>
            </div>
            <div className="my-1 px-1  w-[290.74px] h-[450.08px] md:w-1/2 bg-gradient-to-b from-[#626A881A] to-[#14172b] border-2 border-slate-800 rounded-[20px] lg:my-4 lg:px-4 ">
              <div className="bg-[#14172b] mx-auto w-32 h-28 -mt-12 rounded-full border-2 border-none flex justify-center items-center">
                <div className="w-24 h-24 -mt-10 rounded-full border-2 mx-auto bg-gradient-to-b from-[#626A881A] to-[#E42D041A] border-none flex justify-center items-center">
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-14 w-14 "
                      src={shi}
                    />
                  </animated.div>
                </div>
              </div>
              <article className="overflow-hidden rounded-lg shadow-lg">
                <div className=" px-12 leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Shiba Inu (SHIB)
                  </h1>
                </div>
                <div className="bg-[#14172B] shadow-inner shadow-slate-500  px-10 flex items-center justify-center  justify-content-between gap-6 rounded-full p-2">
                  <h1 className="pl-6">$0.00000001948</h1>
                  <p className="text-[#FF4D4D] font-tomorrow ">-8.1%</p>
                </div>
                <div className=" leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Price
                  </h1>
                </div>
                <div className="bg-[#14172B] shadow-inner shadow-slate-500 px-10 flex items-center justify-center  justify-content-between gap-6 rounded-full p-2">
                  <h1>$ 60,000</h1>
                </div>
                <div className=" leading-tight p-2 md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    TVL
                  </h1>
                </div>
                <div className="bg-gradient-to-b from-[#35373e1a] to-[#3B3F5700] flex justify-center gap-1 rounded-full p-2">
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={eth}
                    />{" "}
                  </animated.div>
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={bin}
                    />{" "}
                  </animated.div>
                  <animated.div
                    className="relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={animation}
                  >
                    <img
                      alt="Placeholder"
                      className=" rounded-full block h-9 w-9 "
                      src={bit}
                    />{" "}
                  </animated.div>
                </div>
                <div className=" leading-tight  md:p-4">
                  <h1 className="text-lg text-[#666d98] hover:text-[#8690d2]">
                    Popular Pairs
                  </h1>
                </div>
              </article>
            </div>
          </div>
        </div>
        <footer className="p-4  rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-[#1c203a]">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Made with ❤️{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://abhi-portfolio1890.netlify.app/"
              className="hover:underline"
            >
              Abhinay Reddy
            </a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 gap-6 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://abhi-portfolio1890.netlify.app/"
                className="mr-4 hover:underline  md:mr-6 "
              >
                <ImUser
                  size="30px "
                  style={{
                    transform: `scale(${isHovered ? 1.5 : 1})`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/abhinay-reddy-9375a1203/"
                className="mr-4 hover:underline md:mr-6"
              >
                <ImLinkedin
                  size="30px"
                  style={{
                    transform: `scale(${isHoverel ? 1.5 : 1})`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={handleHoverl}
                  onMouseLeave={handleHoverl}
                />
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/abhinay-thor/"
                target="_blank"
                rel="noreferrer"
                className="mr-4 hover:underline md:mr-6"
              >
                <SiLeetcode
                  size="30px"
                  style={{
                    transform: `scale(${isHoveree ? 1.5 : 1})`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={handleHovere}
                  onMouseLeave={handleHovere}
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/abhi-apple"
                target="_blank"
                rel="noreferrer"
                className="mr-4 hover:underline md:mr-6"
              >
                <SiGithub
                  size="30px"
                  style={{
                    transform: `scale(${isHovereg ? 1.5 : 1})`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={handleHoverg}
                  onMouseLeave={handleHoverg}
                />
              </a>
            </li>
          </ul>
        </footer>
      </animated.div>
    </div>
  );
}

export default App;
