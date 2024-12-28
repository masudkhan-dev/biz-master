import Image from "next/image";
import React from "react";

// image
import title from "@/public/title_left.png";
import team1 from "@/public/team-1.png";
import team2 from "@/public/team-2.png";
import team3 from "@/public/team-3.png";
import team4 from "@/public/team-4.png";

const OurTeam = () => {
  return (
    <main>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="pb-10">
          <div>
            {/* title */}
            <div className="pt-20">
              <div className="flex items-center justify-center gap-2">
                <Image src={title} width={20} height={20} alt="title" />
                <p>Our Team</p>
              </div>
              <h2 className="text-[#19352D] text-center text-2xl lg:text-5xl font-bold px-5 lg:px-96 mt-5">
                Your Business with the Professional
              </h2>
            </div>
          </div>

          {/* body */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5 lg:mt-10 lg:mx-16">
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src={team1} width={250} height={400} alt="team 1" />
              <h2 className="text-xl font-bold text-[#19352D]">
                Darrell Steward
              </h2>
              <p className="text-[#7A7A7A] text-sm">Human Resource</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src={team2} width={250} height={400} alt="team 1" />
              <h2 className="text-xl font-bold text-[#19352D]">
                Fahad Hossain
              </h2>
              <p className="text-[#7A7A7A] text-sm">Efficiency Experts</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src={team3} width={250} height={400} alt="team 1" />
              <h2 className="text-xl font-bold text-[#19352D]">Javed Tanvir</h2>
              <p className="text-[#7A7A7A] text-sm">Strategic Solutions Pro</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src={team4} width={250} height={400} alt="team 1" />
              <h2 className="text-xl font-bold text-[#19352D]">Nafiz Islam</h2>
              <p className="text-[#7A7A7A] text-sm">Growth Catalyst</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurTeam;
