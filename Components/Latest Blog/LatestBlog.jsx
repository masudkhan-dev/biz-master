import Image from "next/image";
import React from "react";

// react icons
import { FaRegUser, FaRegComments } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

// image
import title from "@/public/title_left.png";
import blog1 from "@/public/blog_1.png";
import blog2 from "@/public/blog_2.png";
import blog3 from "@/public/blog_3.png";


import client1 from "@/public/client-1.png";
import client2 from "@/public/client-2.png";
import client3 from "@/public/client-3.png";
import client4 from "@/public/Symbol.png";

const LatestBlog = () => {
  return (
    <main>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <div>
            {/* title */}
            <div className="pt-20">
              <div className="flex items-center justify-center gap-2">
                <Image src={title} width={20} height={20} alt="title" />
                <p className="text-[#196164]  text-sm">Latest Blog</p>
              </div>
              <h2 className="text-[#19352D] text-center text-2xl lg:text-5xl font-bold px-5 lg:px-96 mt-5">
                Strategic Solutions for Business Growth
              </h2>
            </div>

            {/* body */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 lg:mx-24">
                <div className="relative">
                  <div className="z-10">
                    <Image
                      src={blog1}
                      width={200}
                      height={200}
                      alt="blog image 1"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white rounded-3xl shadow-xl z-20 -mt-10 p-4 mx-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <FaRegUser className="text-[#19352D]" />
                        <p className="text-[#7A7A7A] text-sm">By Admin</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRegComments className="text-[#19352D]" />
                        <p className="text-[#7A7A7A] text-sm">Comments</p>
                      </div>
                    </div>
                    <div className="border-t border-[#F3F5F4] my-3"></div>
                    <p className="text-base text-[#19352D] font-bold px-5">
                      Transformation Strategy Advisors Operat
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="z-10">
                    <Image
                      src={blog1}
                      width={200}
                      height={200}
                      alt="blog image 1"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white rounded-3xl shadow-xl z-20 -mt-10 p-4 mx-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <FaRegUser className="text-[#19352D]" />
                        <p className="text-[#7A7A7A] text-sm">By Admin</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRegComments className="text-[#19352D]" />
                        <p className="text-[#7A7A7A] text-sm">Comments</p>
                      </div>
                    </div>
                    <div className="border-t border-[#F3F5F4] my-3"></div>
                    <p className="text-base text-[#19352D] font-bold px-5">
                      Transformation Strategy Advisors Operat
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="z-10">
                    <Image
                      src={blog1}
                      width={200}
                      height={200}
                      alt="blog image 1"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white rounded-3xl shadow-xl z-20 -mt-10 p-4 mx-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <FaRegUser className="text-[#19352D]" />
                        <p className="text-[#7A7A7A] text-sm">By Admin</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRegComments className="text-[#19352D]" />
                        <p className="text-[#7A7A7A] text-sm">Comments</p>
                      </div>
                    </div>
                    <div className="border-t border-[#F3F5F4] my-3"></div>
                    <p className="text-base text-[#19352D] font-bold px-5">
                      Transformation Strategy Advisors Operat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscribe */}
            {/* Let's Do Great */}
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default LatestBlog;
