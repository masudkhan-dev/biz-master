import React from "react";
import Image from "next/image";

// react icons
import { FiArrowUpRight } from "react-icons/fi";

// image
import title from "@/public/title_left.png";

import P1 from "@/public/Portfolio-1.png";
import P2 from "@/public/Portfolio-2.png";
import P3 from "@/public/Portfolio-3.png";
import P4 from "@/public/Portfolio-4.png";

const LatestPortfolio = () => {
  return (
    <main>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <div>
            {/* title */}
            <div className="pt-20">
              <div className="flex items-center justify-center gap-2">
                <Image src={title} width={20} height={20} alt="title" />
                <p>Latest Portfolio</p>
              </div>
              <h2 className="text-[#19352D] text-center text-2xl lg:text-5xl font-bold px-5 lg:px-96 mt-5">
                Transform Business with Guidance
              </h2>
            </div>

            {/* body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:mx-40 mt-5 lg:-mt-10">
              <div className="flex flex-col justify-center items-center ">
                <Image src={P1} width={500} height={400} alt="Portfolio 1" />

                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-[#7A7A7A] text-sm my-2">
                      Development Coaches
                    </p>
                    <h2 className="text-[#19352D] font-bold text-bases">
                      Digital Transformation Advisors
                    </h2>
                  </div>
                  <button className="bg-[#196164] text-white px-4 py-2 rounded-xl">
                    <FiArrowUpRight className="text-2xl" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center lg:mt-24">
                <Image src={P2} width={500} height={400} alt="Portfolio 1" />

                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-[#7A7A7A] text-sm my-2">
                      Development Coaches
                    </p>
                    <h2 className="text-[#19352D] font-bold text-bases">
                      Digital Transformation Advisors
                    </h2>
                  </div>
                  <button className="bg-[#196164] text-white px-4 py-2 rounded-xl">
                    <FiArrowUpRight className="text-2xl" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center lg:-mt-20">
                <Image src={P3} width={500} height={400} alt="Portfolio 1" />

                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-[#7A7A7A] text-sm my-2">
                      Development Coaches
                    </p>
                    <h2 className="text-[#19352D] font-bold text-bases">
                      Digital Transformation Advisors
                    </h2>
                  </div>
                  <button className="bg-[#196164] text-white px-4 py-2 rounded-xl">
                    <FiArrowUpRight className="text-2xl" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Image src={P4} width={500} height={400} alt="Portfolio 1" />

                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-[#7A7A7A] text-sm my-2">
                      Development Coaches
                    </p>
                    <h2 className="text-[#19352D] font-bold text-bases">
                      Digital Transformation Advisors
                    </h2>
                  </div>
                  <button className="bg-[#196164] text-white px-4 py-2 rounded-xl">
                    <FiArrowUpRight className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LatestPortfolio;
