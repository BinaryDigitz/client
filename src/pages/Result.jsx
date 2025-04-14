import React, { useContext } from "react";
import { assets } from "../assets/assets";
import AppContext from "../context/AppContext";

function Result() {
  const {
    image,
    setImage,
    isLoading,
    setLoading,
    isImageLoaded,
    setImageLoaded,
    input,
    setInput,
  } = useContext(AppContext);

  async function onSubmit(event){
    event.preventDefault()

    setInput('')
  }
  return (
    <form
      onSubmit={onSubmit}
      className=" flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img src={image} alt="image1" className="max-w-sm rounded" />
          <span
            className={`absolute bottom-0 left-0 bg-blue-500 h-1 ${
              isLoading ? "w-full transisition-all duration-[10s]" : "w-0"
            }`}
          ></span>
        </div>
        {isLoading && <p className="">Loading....</p>}
      </div>
      {!isImageLoaded ? (
        <div className="flex w-full max-w-xl bg-neutral-500 text-sm mt-10 p-0.5 rounded-full text-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
          />
          <button
            className="bg-zinc-900 px-10 sm:px-16  py-3 rounded-full text-white"
            type="submit"
          >
            Generate
          </button>
        </div>
      ) : (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full ">
          <p
            onClick={() => setImageLoaded(false)}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
}

export default Result;
