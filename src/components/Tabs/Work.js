"use client";
import Image from "next/image";
import { useState } from "react";

const Work = () => {
  const WorkArr = [
    {
      CompanyName: "Ezulix Software Pvt. Ltd.",
      joinDate: "May-2023 - Present",
      image: "/ezulix.webp",
      limit: 250,
      about:
        "Highly skilled and experienced web developer proficient in the MERN stack (MongoDB, Express.js, React, and Node.js). Demonstrated expertise in designing and building dynamic, scalable, and efficient web applications. Proficient in utilizing MongoDB as a flexible NoSQL database for seamless data management. Experienced in developing server-side applications using Express.js, enabling seamless routing and API creation. Expertise in creating interactive user interfaces with React, leveraging component-based architecture for reusable and responsive designs. Skilled in utilizing Node.js for efficient server-side programming, handling concurrent connections, and real-time application development. Strong problem-solving skills and a passion for staying up-to-date with the latest web development trends. Committed to delivering high-quality code and ensuring optimal user experiences.",
    },
    {
      CompanyName: "Consolebit Technologies Pvt. Ltd.",
      joinDate: "Jan-2022 - May-2023",
      image: "/consolebit_logo.jpg",
      limit: 250,
      about:
        "I am React.js developer with a passion for building high-quality, responsive, and scalable web applications.Developed high-quality, reusable code components using React.js.Collaborated closely with designers and other developers to implement UI designsWrote clean, maintainable, and efficient code adhering to industry best practices and standards.",
    },
  ];
  const [arr, setArr] = useState(WorkArr);
  const trimString = (string, limit = 250) => {
    const trim = string
      ? string.length > limit
        ? string.substring(0, limit) + "..."
        : string
      : "---";
    return trim;
  };
  return (
    <>
      <div className="mt-2">
        {arr.map((i, index) => {
          return (
            <div key={index}>
              <div className="flex mt-4 justify-start items-start gap-x-3">
                <Image
                  src={i.image}
                  className="rounded-full"
                  width={50}
                  height={50}
                />
                <div className="text-sm text-gray-200">
                  <p>{i.CompanyName}</p>
                  <p className="mt-2">{i.joinDate}</p>
                  <p className="text-start leading-6 w-[95%] md:w-[80%] text-xs md:text-sm mt-2 text-gray-500">
                    {trimString(i.about, i.limit)}{" "}
                    {i.limit <= 250 ? (
                      <span
                        onClick={() => {
                          let data = [...WorkArr];
                          data[index] = { ...data[index], limit: 999988 };
                          setArr(data);
                        }}
                        className="cursor-pointer text-white"
                      >
                        Show More
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          let data = [...arr];
                          data[index] = { ...data[index], limit: 250 };
                          setArr(data);
                        }}
                        className="cursor-pointer text-white"
                      >
                        Show Less
                      </span>
                    )}
                  </p>
                </div>
              </div>
              {index !== WorkArr.length - 1 && (
                <div className="w-[80%] mt-4 h-[1px] bg-gray-500"></div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Work;
