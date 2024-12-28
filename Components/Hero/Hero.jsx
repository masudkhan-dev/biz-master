"use client";
import Image from "next/image";

// react icons
import { FaArrowRight } from "react-icons/fa";

// images
import logo from "@/public/bg.png";
import title from "@/public/title_left.png";
import hero_container from "@/public/Container.png";
import hero from "@/public/hero.png";

const Hero = () => {
  return (
    <main>
      <div className="container mx-auto px-3 lg:px-0">
        <div
          className="relative bg-cover bg-center bg-no-repeat h-screen"
          style={{ backgroundImage: `url(${logo.src})` }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-40 mt-8 lg:mt-20">
              {/* left section */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left  gap-5 lg:-ml-[2em]">
                <div className="flex items-center gap-2 text-[#196164] font-bold">
                  <Image src={title} width={20} height={20} alt="Title Logo" />
                  <p className="text-sm">Growth Accelerator</p>
                </div>
                <h2 className="text-[#19352D] text-2xl lg:text-5xl font-bold w-full lg:max-w-md ">
                  Transform Your Business Into Profession
                </h2>
                <p className="text-[#7A7A7A] text-xs lg:text-sm  max-w-md">
                  A business consultant is a professional who provides expert
                  advice and guidance to businesses on various aspects.
                </p>
                <div className="flex items-center gap-5">
                  <button className="btn flex items-center gap-2">
                    Learn More <FaArrowRight />
                  </button>
                  <button className="btn2">Our Service</button>
                </div>
              </div>

              {/* right section */}
              <div className="flex justify-center items-center">
                <div className="absolute">
                  <Image
                    src={hero_container}
                    width={350}
                    height={350}
                    alt="Hero Container"
                  />
                </div>
                <div className="relative ml-10">
                  <Image src={hero} width={280} height={280} alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
