"use client";

import Image from "next/image";

const Tech = () => {
  const TechArr = [
    {
      name: "HTML",
      image: "/html.png",
    },
    {
      name: "CSS",
      image: "/css.webp",
    },
    {
      name: "javascript",
      image: "/javascript.png",
    },
    {
      name: "React",
      image: "/react.png",
    },
    {
      name: "NEXT JS",
      image: "/nextjs.svg",
    },
    {
      name: "TYPESCRIPT",
      image: "/typescript.png",
    },
    {
      name: "NODE JS",
      image: "/nodejs.png",
    },
    {
      name: "Express js",
      image: "/express.png",
    },
    {
      name: "Mongoodb",
      image: "/mongodb.png",
    },
    {
      name: "react native",
      image: "/reactnative.png",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3  lg:grid-cols-4 mt-8  place-items-start gap-x-3 gap-y-10">
        {TechArr.map((i, index) => {
          return (
            <div key={index} className="cursor-pointer flex w-9/12 md:w-auto flex-col justify-center items-center">
              <div className="bg-white p-1 rounded-full">
                <Image alt="tech"
                  className="rounded-full w-14 h-14"
                  src={i.image}
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-center uppercase mt-4 text-xs">{i.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tech;
