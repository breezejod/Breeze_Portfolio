import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-zinc-900 h-[150vh] scroll-smooth">
        <div>
          <h1 className="pt-20 text-3xl transition-all duration-500 font-sedgwick-ave-display pl-80 text-slate-500 hover:text-slate-400">
            My Story
          </h1>
        </div>
        <div className="mt-8 ml-40 border rounded-md border-slate-700 mr-80">
          <h2 className="container text-base text-justify text-stone-300 pt-7 pl-7 text-gold-500 text-shadow-md pb-7 pr-7">
            <p className="text-neutral-500">
              In the late 2020s, my journey into the fascinating world of NFTs
              began with a chance encounter a{" "}
              <span className="font-bold text-gray-500 transition-all duration-500 cursor-pointer hover:underline underline-offset-4 decoration-primary hover:text-white">
                YouTube shorts video
              </span>{" "}
              that piqued my interest. Amazed by the possibilities, I embarked
              on a quest for knowledge, eager to understand the intricacies of
              this emerging field. <br />
              <br />
              As my exams concluded, I went deeper into the NFT space,
              discovering vibrant communities on platforms like{" "}
              <span className="font-bold text-white transition-all duration-500 cursor-pointer hover:underline underline-offset-4 decoration-primary hover:text-gray-300">
                Discord
              </span>{" "}
              and opportunities for involvement. Despite the initial absence of
              monetary compensation, I passionately pursued connections and
              embraced voluntary roles that allowed me to contribute to this
              dynamic ecosystem. Months of relentless dedication paid off when,
              with the support of friends and mentors, I secured a position with
              modest compensation.
              <br />
              <br />
              <p>
                Little did I know that this was just the beginning of an
                incredible journey. Since that pivotal moment, I have never
                looked back. Each day is an opportunity for growth and
                innovation in the ever-evolving world of NFTs and Web 3.0.
                Today,{" "}
                <span className="text-green-200">
                  I find myself in a thriving space filled with like-minded
                  individuals who share my enthusiasm and commitment
                </span>
                . With over 500 connections in the Web 3.0 realm, I have had the
                privilege of connecting with remarkable people who are not only
                talented but also incredibly supportive. This community has
                become an integral part of my journey, propelling me forward
                with their collective energy and passion.
                <br />
                <br />I am excited to continue pushing the boundaries of what's
                possible in the NFT and Web 3.0 space, forging new connections,
                and contributing to the ongoing transformation of the digital
                landscape. Join me on this exciting journey, where innovation
                knows no bounds, and together, we can shape the future.
              </p>
            </p>
          </h2>
          <div className="flex items-center justify-center pb-4">
            <button className="pt-1 pb-1 pl-1 pr-1 font-medium text-neutral-500 border rounded-lg transition-transform hover:border-slate-700 transform hover:scale-105 hover:text-white">
              Download Web3 Resume
            </button>
          </div>
        </div>
        <h2 className="pt-10 text-3xl transition-all duration-500 pl-80 font-sedgwick-ave-display text-slate-500 hover:text-slate-400">
          My Dev Journey...
        </h2>
        <div className="mt-8 ml-40 border rounded-md border-slate-700 mr-80">
          <div className="container text-base text-justify text-neutral-500 pt-7 pl-7 text-gold-500 text-shadow-md pb-7 pr-7">
            <p>
              I began my journey into programming a year ago when I started my
              first year of engineering. I'm majoring in Computer Science with a
              focus on Artificial Intelligence.{" "}
              <span className="text-neutral-400">
                My goal is to become a developer who can work on all aspects of
                blockchain technology and become proficient in artificial
                intelligence.
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center pb-4">
            <button className="pt-1 pb-1 pl-1 pr-1 font-medium text-neutral-500 border rounded-lg transition-transform hover:border-slate-700 transform hover:scale-105 hover:text-white">
              Download Dev Resume
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #6b8095;
            border-radius: 7px;
          }

          ::-webkit-scrollbar-track {
            background-color: #333;
          }
        `}
      </style>
    </>
  );
};

export default About;
