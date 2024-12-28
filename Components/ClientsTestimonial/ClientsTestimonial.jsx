"use client";
import Image from "next/image";
import React from "react";

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// react icons
import { FaStar } from "react-icons/fa";

// react-fast-marquee
import Marquee from "react-fast-marquee";

// images
import title from "@/public/title_left.png";
import testimonial from "@/public/testimonial.png";
import Link1 from "@/public/Link.png";
import Link2 from "@/public/Link (1).png";

const ClientsTestimonial = () => {
  return (
    <main>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <div>
            {/* title */}
            <div className="flex flex-col items-center lg:items-start lg:mx-20">
              <div className="flex items-center justify-center lg:justify-start mt-16">
                <Image src={title} width={20} height={20} alt="title" />
                <p className="ml-2">Clients Testimoniall</p>
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center lg:items-center lg:justify-between mt-4 lg:gap-80">
                <h2 className="text-[#19352D] text-2xl lg:text-5xl font-bold w-60 lg:w-[10em] text-center lg:text-left mb-4 lg:mb-0">
                  Your Business Goals a Confidence
                </h2>
                <p className="text-[#7A7A7A] text-xs lg:text-sm w-[22.5em] lg:w-80 text-center lg:text-left">
                  Dictum ultrices porttitor amet nec sollicitudin mi molestie
                  adipiscing netus. Lorem at ac ut morbi ullamcorper molestie
                  lacus loren ipsum dummy text provide happy
                </p>
              </div>
            </div>

            {/* body */}
            <div>
              <div className=" mt-14 lg:mt-10 flex justify-center items-center">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  loop={true}
                >
                  <SwiperSlide className="">
                    <div className="bg-[#EBF3EE] lg:mx-[20em] p-5 lg:p-8 lg:py-10 rounded-xl shadow-xl ">
                      <div
                        className="bg-[url('/quote1.png')] bg-no-repeat bg-[position:right_top_var(--bg-top)] bg-[length:var(--bg-width)_var(--bg-height)]"
                        style={{
                          "--bg-width": "10em",
                          "--bg-height": "10em",
                          "--bg-top": "-0.5em",
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-white" />
                        </div>
                        <p className="text-xs lg:text-sm text-[#19352D] text-justify my-5 ">
                          Roofing is the process of installin repai, and
                          maintaining roofs on buildings. It involves various
                          materials such shil tiles,metal, and membranes.
                          Roofing services may include inspections repairs,
                          waterproofing, and installation of new roofs. Proper
                          roofing is crucial for protecting
                        </p>
                        <div className="flex items-center gap-5">
                          <div>
                            <Image
                              src={testimonial}
                              width={50}
                              height={50}
                              alt="title"
                            />
                          </div>
                          <div className="flex flex-col items-start gap-2">
                            <h2 className="text-[#19352D] font-bold text-base ">
                              Michael Ramirez
                            </h2>
                            <p className="text-xs text-[#7A7A7A]">
                              Marketing Manager
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="">
                    <div className="bg-[#EBF3EE] lg:mx-[20em] p-5 lg:p-8 lg:py-10 rounded-xl shadow-xl">
                      <div
                        className="bg-[url('/quote1.png')] bg-no-repeat bg-[position:right_top_var(--bg-top)] bg-[length:var(--bg-width)_var(--bg-height)] "
                        style={{
                          "--bg-width": "10em",
                          "--bg-height": "10em",
                          "--bg-top": "-0.5em",
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-white" />
                        </div>
                        <p className="text-xs lg:text-sm text-[#19352D] text-justify my-5 ">
                          Roofing is the process of installin repai, and
                          maintaining roofs on buildings. It involves various
                          materials such shil tiles,metal, and membranes.
                          Roofing services may include inspections repairs,
                          waterproofing, and installation of new roofs. Proper
                          roofing is crucial for protecting
                        </p>
                        <div className="flex items-center gap-5">
                          <div>
                            <Image
                              src={testimonial}
                              width={50}
                              height={50}
                              alt="title"
                            />
                          </div>
                          <div className="flex flex-col items-start gap-2">
                            <h2 className="text-[#19352D] font-bold text-base ">
                              Michael Ramirez
                            </h2>
                            <p className="text-xs text-[#7A7A7A]">
                              Marketing Manager
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="">
                    <div className="bg-[#EBF3EE] lg:mx-[20em] p-5 lg:p-8 lg:py-10 rounded-xl shadow-xl">
                      <div
                        className="bg-[url('/quote1.png')] bg-no-repeat bg-[position:right_top_var(--bg-top)] bg-[length:var(--bg-width)_var(--bg-height)] "
                        style={{
                          "--bg-width": "10em",
                          "--bg-height": "10em",
                          "--bg-top": "-0.5em",
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-[#B8BB0A]" />
                          <FaStar className="text-white" />
                        </div>
                        <p className="text-xs lg:text-sm text-[#19352D] text-justify my-5 ">
                          Roofing is the process of installin repai, and
                          maintaining roofs on buildings. It involves various
                          materials such shil tiles,metal, and membranes.
                          Roofing services may include inspections repairs,
                          waterproofing, and installation of new roofs. Proper
                          roofing is crucial for protecting
                        </p>
                        <div className="flex items-center gap-5">
                          <div>
                            <Image
                              src={testimonial}
                              width={50}
                              height={50}
                              alt="title"
                            />
                          </div>
                          <div className="flex flex-col items-start gap-2">
                            <h2 className="text-[#19352D] font-bold text-base ">
                              Michael Ramirez
                            </h2>
                            <p className="text-xs text-[#7A7A7A]">
                              Marketing Manager
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            {/* marquee */}
            <div className="mt-20 bg-[#EBF3EE] py-8 lg:py-10">
              <Marquee className="flex items-center gap-5">
                <Image
                  src={Link1}
                  width={350}
                  height={50}
                  alt="link 1"
                  className="ml-5"
                />
                <Image
                  src={Link2}
                  width={400}
                  height={50}
                  alt="link 2"
                  className="ml-5"
                />
                <Image
                  src={Link1}
                  width={350}
                  height={50}
                  alt="LInk 3"
                  className="ml-5"
                />
                <Image
                  src={Link2}
                  width={400}
                  height={50}
                  alt="LInk 3"
                  className="ml-5"
                />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientsTestimonial;
