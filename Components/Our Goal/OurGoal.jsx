import React from "react";
import Image from "next/image";

// react icons
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdDone } from "react-icons/md";

// images
import title from "@/public/title_left.png";

const OurGoal = () => {
  return (
    <main>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="mt-10">
          {/* title */}
          <div className="flex flex-col items-center lg:items-start lg:mx-20">
            <div className="flex items-center justify-center lg:justify-start mt-[23em] lg:mt-0 s">
              <Image src={title} width={20} height={20} alt="title" />
              <p className="ml-2">Our Goal</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-center lg:justify-between mt-4 lg:gap-80">
              <h2 className="text-[#19352D] text-2xl lg:text-5xl font-bold w-60 lg:w-[10em] text-center lg:text-left mb-4 lg:mb-0">
                Partnering Business for Success
              </h2>
              <p className="text-[#7A7A7A] text-xs lg:text-sm w-[22.5em] lg:w-80 text-center lg:text-left">
                There are many variations of passages of engineer&#39;s
                available. Have suffered alteration in engineer&#39;s available
              </p>
            </div>
          </div>

          {/* body */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 grid-rows-3 sm:grid-rows-1 gap-0 mx-2 lg:mx-20 mt-10">
              <div className="col-span-1 sm:col-span-1 lg:col-span-1 flex flex-col justify-center items-center gap-5">
                <button className="text-[#19352D] border border-[#196164] px-4 py-2 rounded-lg text-base">
                  Biography
                </button>
                <button className="text-[#19352D] border border-[#196164] px-4 py-2 rounded-lg text-base">
                  Education
                </button>
                <button className="btn">Experience</button>
                <button className="text-[#19352D] border border-[#196164] px-4 py-2 rounded-lg text-base">
                  Skills
                </button>
              </div>

              <div className="col-span-1 sm:col-span-2 lg:col-span-2  flex flex-col  items-start gap-5 mt-5 lg:mt-0 lg:ml-16">
                <div>
                  <div className="flex items-center gap-1">
                    <FaAngleDoubleRight className="text-[#196164]" />
                    <h2 className="font-bold text-base text-[#19352D]">
                      Performance Enhancement Partners
                    </h2>
                  </div>
                  <div className="ml-5">
                    <h2 className="text-[#5E726C] font-bold text-sm my-2">
                      Strategic Solutions Pro
                    </h2>
                    <ul>
                      <li
                        key="success"
                        className="flex items-center gap-2 text-[#7A7A7A] text-sm my-2"
                      >
                        <MdDone /> Success Accelerators
                      </li>
                      <li
                        key="politician"
                        className="flex items-center gap-2  text-[#7A7A7A] text-sm"
                      >
                        <MdDone /> Started politician Club
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <FaAngleDoubleRight className="text-[#196164]" />
                    <h2 className="font-bold text-base text-[#19352D]">
                      Operational Excellence Solutions
                    </h2>
                  </div>
                  <div className="ml-5">
                    <h2 className="text-[#5E726C] font-bold text-sm my-2">
                      Framer Designer & Developer
                    </h2>
                    <ul>
                      <li
                        key="success2"
                        className="flex items-center gap-2 text-[#7A7A7A] text-sm my-2"
                      >
                        <MdDone /> Success Accelerators
                      </li>
                      <li
                        key="politician2"
                        className="flex items-center gap-2  text-[#7A7A7A] text-sm"
                      >
                        <MdDone /> Started politician Club
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-3 lg:col-span-2 flex flex-col items-start gap-y-5 mt-5 lg:mt-0">
                <div>
                  <div className="flex items-center gap-1">
                    <FaAngleDoubleRight className="text-[#196164]" />
                    <h2 className="font-bold text-base text-[#19352D]">
                      Management Mastery Consultan
                    </h2>
                  </div>
                  <div className="ml-5">
                    <h2 className="text-[#5E726C] font-bold text-sm my-2">
                      Profitability Maximizers
                    </h2>
                    <ul>
                      <li
                        key="success3"
                        className="flex items-center gap-2 text-[#7A7A7A] text-sm my-2"
                      >
                        <MdDone /> Success Accelerators
                      </li>
                      <li
                        key="politician3"
                        className="flex items-center gap-2  text-[#7A7A7A] text-sm"
                      >
                        <MdDone /> Started politician Club
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <FaAngleDoubleRight className="text-[#196164]" />
                    <h2 className="font-bold text-base text-[#19352D]">
                      Transformational Strategy
                    </h2>
                  </div>
                  <div className="ml-5">
                    <h2 className="text-[#5E726C] font-bold text-sm my-2">
                      Efficiency Experts
                    </h2>
                    <ul>
                      <li
                        key="success4"
                        className="flex items-center gap-2 text-[#7A7A7A] text-sm my-2"
                      >
                        <MdDone /> Success Accelerators
                      </li>
                      <li
                        key="politician4"
                        className="flex items-center gap-2  text-[#7A7A7A] text-sm"
                      >
                        <MdDone /> Started politician Club
                      </li>
                    </ul>
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

export default OurGoal;
