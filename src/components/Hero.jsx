import React from "react";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </div>
      <h1 className="text-4xl max-w-[300px] sm:text-7xl lg:max-w-[650px] mx-auto mt-10 text-center">
        Turn text to <span className="text-blue-600">image</span>, in seconds.
      </h1>
      <p className="text-center max-w-xl mx-auto mt-5">
        Unleash your creativity with AI. Turn your imagination inot visual art
        in seconds - just type, and watch the magic happen.
      </p>
      <button className="text:lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex gap-2 rounded-full items-center">
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((item, index) => {
            return (
              <img
                className="hover:scale-105 trans cursor-pointer max-sm:w-10"
                key={index}
                width={70}
                src={
                  index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2
                }
                alt="sample image"
              />
            );
          })}
      </div>
      <p className="mt-2 text-neutral-600">Generated images from imagify</p>
    </div>
  );
}

export default Hero;
