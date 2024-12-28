import React from "react";
import Image from "next/image";

// react icons
import { FaMinusSquare } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

// images
import title from "@/public/title_left.png";
import AskQuestionIcon1 from "@/public/counter-icon_1.png";
import AskQuestionIcon2 from "@/public/process-icon-2.png";
import AskQuestionIcon3 from "@/public/process-icon-3.png";
import AskQuestionIcon4 from "@/public/process-icon-4.png";

const AskQuestion = () => {
  return (
    <main>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <div className="bg-[#EBF3EE] pb-10">
            <div>
              {/* title */}
              <div className="flex flex-col items-center lg:items-start lg:mx-20">
                <div className="flex items-center justify-center lg:justify-start mt-16">
                  <Image src={title} width={20} height={20} alt="title" />
                  <p className="ml-2">Ask Question</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-center lg:justify-between mt-4 lg:gap-80">
                  <h2 className="text-[#19352D] text-2xl lg:text-5xl font-bold w-60 lg:w-[10em] text-center lg:text-left mb-4 lg:mb-0">
                    Innovation Moves You Forward
                  </h2>
                  <p className="text-[#7A7A7A] text-xs lg:text-sm w-[22.5em] lg:w-80 text-center lg:text-left">
                    Dictum ultrices porttitor amet nec sollicitudin mi molestie
                    adipiscing netus. Lorem at ac ut morbi ullamcorper molestie
                    lacus loren ipsum dummy text provide happy
                  </p>
                </div>
              </div>

              {/* body */}
              <div className="flex flex-col lg:flex-row gap-8 mx-3 lg:mx-24 mt-10">
                <div className="lg:w-[50%]">
                  <div className="flex items-center gap-2">
                    <FaMinusSquare className="text-[#196164] text-2xl rounded-lg" />
                    <h2 className="text-[#19352D] font-bold text-base">
                      What services do you offer?
                    </h2>
                  </div>

                  <ul>
                    <div className="border-t border-[#C3CFC9] my-3"></div>

                    <li className="text-[#7A7A7A] text-sm text-justify ">
                      We offer a wide range of digital services, including
                      website design and development, e-commerce solutions,
                      search engine optimization, social media management,
                      pay-per-click advertising, brand identity
                    </li>

                    <div className="border-t border-[#C3CFC9] my-3"></div>

                    <li className="flex lg:items-center gap-2 text-[#19352D] font-bold text-base">
                      <FaPlus className="bg-[#C4F500] text-[#196164] rounded text-4xl p-2" />
                      How long does it take for you to complete a project?
                    </li>

                    <div className="border-t border-[#C3CFC9] my-3"></div>

                    <li className="flex lg:items-center gap-2 text-[#19352D] font-bold text-base">
                      <FaPlus className="bg-[#C4F500] text-[#196164] rounded text-4xl p-2" />
                      How long does it take for you to complete a project?
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:w-[50%] lg:mx-16 mx-5">
                  <div className="bg-white rounded-xl shadow-lg flex justify-between items-center p-5 gap-5">
                    <Image
                      src={AskQuestionIcon1}
                      width={60}
                      height={60}
                      alt="Ask Question Icon 1"
                    />
                    <div className="flex flex-col gap-3">
                      <h2 className="font-bold text-2xl">200+</h2>
                      <p className="text-[#7A7A7A] text-xs">Team Members</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl  shadow-lg flex justify-between items-center p-5 gap-5">
                    <Image
                      src={AskQuestionIcon2}
                      width={60}
                      height={60}
                      alt="Ask Question Icon 1"
                    />
                    <div className="flex flex-col gap-3">
                      <h2 className="font-bold text-2xl">10K</h2>
                      <p className="text-[#7A7A7A] text-xs">Complete project</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl  shadow-lg flex justify-between items-center p-5 gap-5">
                    <Image
                      src={AskQuestionIcon3}
                      width={60}
                      height={60}
                      alt="Ask Question Icon 1"
                    />
                    <div className="flex flex-col gap-3">
                      <h2 className="font-bold text-2xl">20K</h2>
                      <p className="text-[#7A7A7A] text-xs">Winning award</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl  shadow-lg flex justify-between items-center p-5 gap-5">
                    <Image
                      src={AskQuestionIcon4}
                      width={60}
                      height={60}
                      alt="Ask Question Icon 1"
                    />
                    <div className="flex flex-col gap-3">
                      <h2 className="font-bold text-2xl">900+</h2>
                      <p className="text-[#7A7A7A] text-xs">Client Review</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AskQuestion;
