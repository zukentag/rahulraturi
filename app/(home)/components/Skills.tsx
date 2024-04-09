import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiCplusplus,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedis,
  SiStripe,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      title: "React",
      Icon: <SiReact className="w-10 h-10 mx-auto" />,
    },
    {
      title: "Next.js",
      Icon: <SiNextdotjs className="w-10 h-10 mx-auto" />,
    },

    {
      title: "Node.js",
      Icon: <SiNodedotjs className="w-10 h-10 mx-auto" />,
    },
    {
      title: "MongoDB",
      Icon: <SiMongodb className="w-10 h-10 mx-auto" />,
    },

    {
      title: "Express",
      Icon: <SiExpress className="w-10 h-10 mx-auto" />,
    },
    {
      title: "Redis",
      Icon: <SiRedis className="w-10 h-10 mx-auto" />,
    },
    {
      title: "Stripe",
      Icon: <SiStripe className="w-10 h-10 mx-auto" />,
    },

    {
      title: "Tailwind",
      Icon: <SiTailwindcss className="w-10 h-10 mx-auto" />,
    },
    {
      title: "Git",
      Icon: <SiGit className="w-10 h-10 mx-auto" />,
    },
    // {
    //   title: "Javascript",
    //   Icon: <SiJavascript className="w-10 h-10 mx-auto" />,
    // },
    // {
    //   title: "C++",
    //   Icon: <SiCplusplus className="w-10 h-10 mx-auto" />,
    // },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        title="Skills 💪"
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
