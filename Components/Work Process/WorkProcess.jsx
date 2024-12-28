import Image from "next/image";

// image
import title from "@/public/title_left.png";
import bg from "@/public/Section.png";

import WP1 from "@/public/process-icon-1.png";
import WP2 from "@/public/process-icon-2.png";
import WP3 from "@/public/process-icon-3.png";
import WP4 from "@/public/process-icon-4.png";

import num1 from "@/public/Heading-01.png";
import num2 from "@/public/Heading-02.png";
import num3 from "@/public/Heading-03.png";
import num4 from "@/public/Heading-04.png";

const WorkProcess = () => {
  return (
    <main>
      <div className="container mx-auto px-3 lg:px-0 b">
        <div>
          <div
            className="relative bg-cover bg-center bg-no-repeat h-screen"
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <div>
              {/* title */}
              <div className="pt-20">
                <div className="flex items-center justify-center ">
                  <Image src={title} width={20} height={20} alt="title" />
                  <p>Latest service</p>
                </div>
                <h2 className="text-[#19352D] text-center text-2xl lg:text-5xl font-bold px-5 lg:px-96 mt-5">
                  Unleash Business&#39;s Hid Potential
                </h2>
              </div>

              {/* body */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 justify-center items-center lg:mx-16 mt-16">
                {/* card 1 */}
                <div className="bg-white shadow-xl p-10 rounded-xl mx-[10%] lg:mx-0">
                  <div className="flex items-center justify-between ">
                    <Image src={WP1} width={50} height={50} alt="icon 1" />
                    <Image src={num1} width={50} height={50} alt="number 1" />
                  </div>
                  <div className="text-center">
                    <p className="text-[#7A7A7A] text-xs lg:text-sm mt-4">
                      Technical Operation
                    </p>
                    <h2 className="text-[#19352D] font-bold text-base lg:text-xl">
                      Growth Acceler
                    </h2>
                  </div>
                </div>

                {/* card 2 */}
                <div className="bg-white shadow-xl p-10 rounded-xl mx-[10%] lg:mx-0">
                  <div className="flex items-center justify-between ">
                    <Image src={WP2} width={50} height={50} alt="card 2" />
                    <Image src={num2} width={50} height={50} alt="number 2" />
                  </div>
                  <div className="text-center">
                    <p className="text-[#7A7A7A] text-xs lg:text-sm mt-4">
                      Technical Operation
                    </p>
                    <h2 className="text-[#19352D] font-bold text-base lg:text-xl">
                      Growth Acceler
                    </h2>
                  </div>
                </div>

                {/* card 3 */}
                <div className="bg-white shadow-xl  p-10 rounded-xl mx-[10%] lg:mx-0">
                  <div className="flex items-center justify-between ">
                    <Image src={WP3} width={50} height={50} alt="icon 3" />
                    <Image src={num3} width={50} height={50} alt="number 3" />
                  </div>
                  <div className="text-center">
                    <p className="text-[#7A7A7A] text-xs lg:text-sm mt-4">
                      Technical Operation
                    </p>
                    <h2 className="text-[#19352D] font-bold text-base lg:text-xl">
                      Growth Acceler
                    </h2>
                  </div>
                </div>

                {/* card 4 */}
                <div className="bg-white shadow-xl  p-10 rounded-xl mx-[10%] lg:mx-0">
                  <div className="flex items-center justify-between ">
                    <Image src={WP4} width={50} height={50} alt="title" />
                    <Image src={num4} width={50} height={50} alt="title" />
                  </div>
                  <div className="text-center">
                    <p className="text-[#7A7A7A] text-xs lg:text-sm mt-4">
                      Technical Operation
                    </p>
                    <h2 className="text-[#19352D] font-bold text-base lg:text-xl">
                      Growth Acceler
                    </h2>
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

export default WorkProcess;
