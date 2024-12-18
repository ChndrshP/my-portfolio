"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
  FaReact,
  FaBootstrap,
  FaGit,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiDocker,
} from "react-icons/si";
// 

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description: "Hey, I’m Chandresh! I’m a Computer Science student at VIT Bhopal, passionate about coding and creating stuff that works. I’ve built projects like algorithm visualizers and image search engines, using React, Node.js, and Docker.           Outside of tech, I play guitar and do a bit of digital art. Always exploring new things and figuring out how to make them work!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Chandresh Patel"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "chndrsh25@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi"
    },
  ]
};

//experience data

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Throughout my career, I have gained valuable experience in various roles that have sharpened my skills as a web developer. I thrive in dynamic environments, collaborating with teams and contributing to projects that drive innovation and achieve impactful results.",
  items: [
    {
      company: "NextCache",
      position: "Web Developer",
      duration: "September 2024 - Present"
    },
    {
      company: "Ethnus",
      position: "Web Developer",
      duration: "November 2023 - January 2024"
    },
  ],
};

//education data

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Built a solid base in computer science while diving into cool projects along the way.",
  items: [
    {
      institution: "Vellore Institute of Technology, Bhopal",
      degree: "BTech",
      duration: "2021-2025",
    },
    {
      institution: "DAV Sr. Sec School, Chandigarh",
      degree: "Intermediate",
      duration: "2020-2021",
    },
    {
      institution: "St. Stephen's School, Chandigarh",
      degree: "High School",
      duration: "2009-2019",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "I have developed a diverse skill set through my experiences in various projects and roles. Below are some of the key skills that I specialize in:", skillList: [
      {
        icon: <FaHtml5 />,
        name: "HTML 5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3",
      },
      {
        icon: <FaJs />,
        name: "Javascript",
      },
      {
        icon: <FaNode />,
        name: "Node.js",
      },
      {
        icon: <FaReact />,
        name: "React.js",
      },
      {
        icon: <FaBootstrap />,
        name: "Bootstrap",
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
      },
      {
        icon: <SiExpress />,
        name: "Express.js",
      },
      {
        icon: <FaGit />,
        name: "Git",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind.css",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
      },
      {
        icon: <SiDocker />,
        name: "Docker",
      },
    ],
};



const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>

            {/* experince */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10
                   rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60ox] 
                    text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10
                   rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60ox] 
                    text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl 
                     flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent
                      transition-all duration-300">
                                {skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>



            {/* about */}
            <TabsContent value="about"
              className="w-full text-center xl:text-left">

              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px]
           mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center
               xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-md">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;