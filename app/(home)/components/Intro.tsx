import Link from "next/link";
import Image from "next/image";
import React from "react";
import My from "@/public/my1.jpg";
import { MovingBorderBtn } from "@/components/ui/moving-border";
import Title from "./Title";
const Intro = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-28 lg:gap-0 lg:flex-row justify-between items-center">
      <div className="space-y-10">
        <h1 className="text-4xl lg:text-7xl bold text-center lg:text-left">
          Hey there 👋, <br />
          <MovingBorderBtn>Rahul Raturi</MovingBorderBtn>
          this side
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          I am a FullStack developer passionate about building modern web
          applications
        </p>

        <Link
          href={"mailto:rahulraturi2002@gmail.com"}
          className="inline-block"
        >
          <Title title="Contact Me 📫" />
        </Link>
      </div>
      <div className="h-70 w-72 mx-auto">
        <div className="glow absolute bottom-[50%]"></div>
        <div className=" relative ">
          <Image src={My} layout="responsive" alt="My-image" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
