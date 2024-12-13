"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    name: "CANNVISA",
    description: `E-cormerce website. User can register as seller or buyer. As seller, user can create a owner store and sell any items. As buyer, user can add any item to cart and go to checkout with some payment methods online. We use CS-Cart as backend service.`,
    stack: [{ name: "NextJS" }, { name: "Tailwinds" }, { name: "Redux Toolkit" }, { name: "i18next" }, { name: "Axios" }, { name: "Formik" }, { name: "Yup" }, { name: "Moment" }, { name: "Lodash"}],
    image: "/assets/work/thumb1.png",
    live: "https://cannvisa.com/en",
    github: "",
  },
  {
    num: "02",
    name: "NXSYS",
    description: `Tax calculation application for employees. Can be submit revenue`,
    stack: [{ name: "ReactJS" }, { name: "Redux Toolkit" }, { name: "Bootstrap" }, { name: "React Router DOM" }, { name: "Axios" }, { name: "Formik" }, { name: "Yup" }, { name: "Moment" }, { name: "Lodash"}],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    name: "BLUECHIP",
    description: `Social network for people like sport, share best moments when they play sport or anything what they want and connect each people.`,
    stack: [{ name: "ReactJS" }, { name: "Redux Toolkit" }, { name: "Ant Design" }, { name: "React Router DOM" }, { name: "Axios" }, { name: "Formik" }, { name: "Yup" }, { name: "Moment" }, { name: "Lodash"}, { name: "React Dynamic Virtual Scroll" }, { name: "React Dropzone" }, { name : "Socket.IO" }],
    image: "/assets/work/thumb3.png",
    live: "https://application.bluechips.app/login",
    github: "",
  },
  {
    num: "04",
    name: "LACTAPP",
    description: `Real-time chat Application that support customers if they have any doubt with product application. Customer Support department use this application to reply all question of customer.`,
    stack: [{ name: "ReactJS" }, { name: "Redux Toolkit" }, { name: "Material UI" }, { name: "React Router DOM" }, { name: "Axios" }, { name: "Formik" }, { name: "Yup" }, { name: "Moment" }, { name: "Lodash"}, { name: "React Dynamic Virtual Scroll" }, { name: "React Dropzone" }, { name : "Socket.IO" }],
    image: "/assets/work/placeholder_thumb.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    name: "XEPLANNER",
    description: `Environment for users need sell or buy something. User can register as seller or buyer. Seller can introduce anything what they want to sell and buyer can buy it through online payment.`,
    stack: [{ name: "ReactJS" }, { name: "Redux Thunk" }, { name: "Material UI" }, { name: "React Router DOM" }, { name: "Axios" }, { name: "Formik" }, { name: "Yup" }, { name: "Moment" }, { name: "Lodash"}],
    image: "/assets/work/placeholder_thumb.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    name: "INDEPENDENCEPLUS",
    description: `Application for admin who manage patients and nurses in hospital (e.g scheduling patient orientations, assigning nurse of patient who observes, reviews health of patient).`,
    stack: [{ name: "ReactJS" }, { name: "Redux Thunk" }, { name: "Bootstrap" }, { name: "React Router DOM" }, { name: "Apexcharts" }, { name: "Axios" }, { name: "Formik" }, { name: "Yup" }, { name: "Moment" }, { name: "i18next" }],
    image: "/assets/work/placeholder_thumb.png",
    live: "",
    github: "",
  },
];

export default function WorkPage() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.name}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-contain" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
