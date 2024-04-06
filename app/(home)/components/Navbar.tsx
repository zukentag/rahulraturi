import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
const Navbar = () => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/rahulraturi/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      link: "https://leetcode.com/rahulraturi2002/",
      label: "Leetcode",
      icon: <SiLeetcode />,
    },
    {
      link: "https://github.com/zukentag",
      label: "GitHub",
      icon: <FaGithub />,
    },
  ];

  return (
    <nav className="py-10 flex justify-between ">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-yellow-500 -rotate-2">
        Rahul Ratuti 👾
      </h1>
      <div className="flex gap-4">
        {socials.map((s, index) => {
          return (
            <Link href={s.link} key={index} aria-label={s.label}>
              <div className="w-5 h-5 hover:scale-125 transition-all">
                {s.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
