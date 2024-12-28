"use client";
import Image from "next/image";

// image
import title from "@/public/title_left.png";

import service1 from "@/public/service-1.png";
import service2 from "@/public/service-2.png";
import service3 from "@/public/service-3.png";
import service4 from "@/public/service-4.png";

import client1 from "@/public/client-1.png";
import client2 from "@/public/client-2.png";
import client3 from "@/public/client-3.png";
import client4 from "@/public/Symbol.png";

import about1 from "@/public/about_1.png";

import aboutIcon1 from "@/public/about-icon-1.png";
import aboutIcon2 from "@/public/about-icon-2.png";
import aboutIcon3 from "@/public/about-icon-3.png";
import aboutIcon4 from "@/public/about-icon-4.png";

// react icons
import { FaArrowRightLong } from "react-icons/fa6";

const LatestService = () => {
  return (
    <main>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <div>
            {/* title */}
            <div className="my-20">
              <div className="flex items-center justify-center ">
                <Image src={title} width={20} height={20} alt="title" />
                <p>Latest service</p>
              </div>
              <h2 className="text-[#19352D] text-center text-2xl lg:text-5xl font-bold px-5 lg:px-96 mt-5">
                Empowering Business The Excellence
              </h2>
            </div>

            {/* body */}
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center lg:mx-32">
                {/* card 1 */}
                <div className="flex items-center gap-4 lg:gap-5 shadow-xl w-[21em] lg:w-[32em] rounded-xl py-2 lg:py-0">
                  <Image src={service1} width={200} height={200} alt="title" />
                  <div className="flex flex-col items-start gap-2 lg:gap-5">
                    <h2 className="text-sm lg:text-base text-black font-bold">
                      Efficiency Experts
                    </h2>
                    <p className="text-xs lg:text-sm text-[#7A7A7A] ">
                      Many desktop publishing packages web page editors now use
                      Lorem Ipsum a default model text, and a search
                    </p>
                    <button className="flex items-center gap-2 text-xs lg:text-sm font-bold">
                      Read More <FaArrowRightLong />
                    </button>
                  </div>
                </div>

                {/* card 2 */}
                <div className="flex items-center gap-4 lg:gap-5 shadow-xl w-[21em] lg:w-[32em] rounded-xl py-2 lg:py-0">
                  <Image src={service2} width={200} height={200} alt="title" />
                  <div className="flex flex-col items-start gap-2 lg:gap-5">
                    <h2 className="text-sm lg:text-base text-black font-bold">
                      Management
                    </h2>
                    <p className="text-xs lg:text-sm text-[#7A7A7A] ">
                      Many desktop publishing packages web page editors now use
                      Lorem Ipsum a default model text, and a search
                    </p>
                    <button className="flex items-center gap-2 text-xs lg:text-sm font-bold">
                      Read More <FaArrowRightLong />
                    </button>
                  </div>
                </div>

                {/* card 3 */}
                <div className="flex items-center gap-4 lg:gap-5 shadow-xl w-[21em] lg:w-[32em] rounded-xl py-2 lg:py-0">
                  <Image src={service3} width={200} height={200} alt="title" />
                  <div className="flex flex-col items-start gap-2 lg:gap-5">
                    <h2 className="text-sm lg:text-base text-black font-bold">
                      Success Accelerators
                    </h2>
                    <p className="text-xs lg:text-sm text-[#7A7A7A] ">
                      Many desktop publishing packages web page editors now use
                      Lorem Ipsum a default model text, and a search
                    </p>
                    <button className="flex items-center gap-2 text-xs lg:text-sm font-bold">
                      Read More <FaArrowRightLong />
                    </button>
                  </div>
                </div>

                {/* card 4 */}
                <div className="flex items-center gap-4 lg:gap-5 shadow-xl w-[21em] lg:w-[32em] rounded-xl py-2 lg:py-0">
                  <Image src={service4} width={200} height={200} alt="title" />
                  <div className="flex flex-col items-start gap-2 lg:gap-5">
                    <h2 className="text-sm lg:text-base text-black font-bold">
                      Growth and Innovation
                    </h2>
                    <p className="text-xs lg:text-sm text-[#7A7A7A] ">
                      Many desktop publishing packages web page editors now use
                      Lorem Ipsum a default model text, and a search
                    </p>
                    <button className="flex items-center gap-2 text-xs lg:text-sm font-bold">
                      Read More <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Let's Do Great */}
            <div className="flex flex-col lg:flex-row justify-center items-center my-10">
              <div className="bg-[#19352D] rounded-t-2xl lg:rounded-tl-2xl lg:rounded-tr-none lg:rounded-bl-2xl lg:rounded-br-none px-10 py-3 lg:py-5">
                <h2 className="text-[#C4F500] text-xl lg:text-2xl font-bold">
                  Let’s Do Great!
                </h2>
                <p className="text-white text-xs lg:text-sm mt-2 lg:mt-5">
                  Dictum ultrices porttitor amet nec sollicitudin mi molestie
                </p>
              </div>

              <div className="flex items-center bg-[#C4F500] rounded-b-2xl lg:rounded-bl-none lg:rounded-br-2xl lg:rounded-tl-none lg:rounded-tr-2xl pl-2 py-5 lg:py-8 px-5">
                <div className="flex items-center">
                  <div className="flex gap-5 items-center -ml-8">
                    <div className="flex items-center">
                      <div className="flex -space-x-4 pl-8">
                        <Image
                          src={client1}
                          width={40}
                          height={40}
                          alt="client 1"
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src={client2}
                          width={40}
                          height={40}
                          alt="client 2"
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src={client3}
                          width={40}
                          height={40}
                          alt="client 3"
                          className="rounded-full border-2 border-white"
                        />
                      </div>
                      <div>
                        <Image
                          src={client4}
                          width={40}
                          height={40}
                          alt="client 4"
                          className="rounded-full -ml-[26px] z-20"
                        />
                      </div>

                      <div className="">
                        <h2 className="text-[#000] text-base font-bold">
                          2.80 million+
                        </h2>
                        <p className="text-[#7A7A7A] text-xs lg:text-sm">
                          Worldwide clients
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-3">
                  <button className="text-xs lg:text-sm border-2 border-[#196164] rounded-xl p-3">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* About  */}
            <div>
              <div className="flex flex-col lg:flex-row justify-center  ">
                <div className="lg:absolute lg:-ml-96 lg:mt-8 z-20">
                  <Image
                    src={about1}
                    width={500}
                    height={500}
                    alt="about 1"
                    className="shadow-xl rounded-xl"
                  />
                </div>
                <div className="lg:relative lg:ml-[30em] hidden lg:block">
                  <Image
                    src={about1}
                    width={500}
                    height={500}
                    alt="about 2"
                    className="shadow-xl rounded-xl"
                  />
                </div>
              </div>

              {/* about icon  */}
              <div className="flex justify-center lg:justify-end items-center gap-4 lg:px-52 mt-1.5 bg-[#EBF3EE] ">
                <Image
                  src={aboutIcon1}
                  width={70}
                  height={20}
                  alt="about icon 1"
                  className=""
                />
                <Image
                  src={aboutIcon2}
                  width={70}
                  height={20}
                  alt="about icon 2"
                  className=""
                />
                <Image
                  src={aboutIcon3}
                  width={70}
                  height={20}
                  alt="about icon 3"
                  className=""
                />
                <Image
                  src={aboutIcon4}
                  width={70}
                  height={20}
                  alt="about icon 4"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LatestService;
