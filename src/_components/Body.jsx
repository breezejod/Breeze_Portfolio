  import React from "react";

  const Body = () => {
    return (
      <>
        <div className="bg-zinc-900 h-[90vh] flex items-start justify-start pl-80 pt-10">
          <div className="mt-10 ml-20">
            <a href="https://imgur.com/MSt8p8U">
              <img
                src="https://i.imgur.com/MSt8p8U.png"
                title="source: imgur.com"
                alt="avatar"
                loading="lazy"
                width="300"
                height="300"
                decoding="async"
                data-nimg="1"
                className="rounded-full shadow-lg cursor-pointer hover:shadow-xl"
              />
            </a>
          </div>
          <div className="text-xl font-bold text-white">
            <h1 className="pt-5 pl-5">
              Hi, It's me <span className="text-primary">Breeze.</span>
            </h1>
            <p className="pt-2 pl-5">
              I am a{" "}
              <span className="relative cursor-pointer border-neutral-500 text-neutral-500 after:transition after:absolute hover:after:opacity-100 hover:text-neutral-600">
                <a
                  href="https://gamingsupport.com/blogs/careers/front-end-developer-1?utm_source=bing&utm_medium=cpc&utm_campaign=Gaming%20Support%20General%20advertising&utm_term=gamingsupport&utm_content=Gaming%20Support%20General"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend Developer
                </a>
              </span>{" "}
              <span className="font-semibold"> from India</span>
            </p>
            <p className="mt-5 ml-4 text-sm font-thin mr-80 text-neutral-500 indent-1">
              I'm currently in my second year of engineering, major in{" "}
              <span className="font-bold transition-all duration-500 cursor-help hover:underline underline-offset-4 decoration-primary hover:text-white">
                <a
                  href="https://www.coursera.org/articles/ai-engineer"
                  target="_blank"
                  rel="noreferrer"
                >
                  Computer Science with a specialization in Artificial
                  Intelligence
                </a>
              </span>
              . I'm also very passionate about Web 3. Over the past two years,
              I've been involved in more than 70 projects within the Web3 space.
              I've played a key role in helping these projects achieve over{" "}
              <span className="font-bold transition-all duration-500 cursor-pointer hover:underline underline-offset-4 decoration-primary hover:text-white">2000 ETH in revenue </span> through marketing
              and minting. While I'm still new to Web development, I'm eager to
              learn and grow in this aspect of my career.
            </p>
            <hr className="mt-20 w-30 mr-80 hr-dark"></hr>
          </div>
        </div>
      </>
    );
  };

  export default Body;
