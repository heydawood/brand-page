import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaCirclePlus } from "react-icons/fa6";

function App() {
  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <NavBar />

        <div className="flex gap-2">

          <div className="relative flex items-center flex-grow ">
            <HiMagnifyingGlass className="absolute ml-2 text-2xl text-white" />
            <input
              className="h-10 flex-grow  rounded-lg border border-white bg-transparent pl-10 text-white"
              type="text"
            />
          </div>

            <FaCirclePlus className="text-4xl text-white" />
      
        </div>
      </div>
    </>
  );
}

export default App;
