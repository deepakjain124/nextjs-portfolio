"use client";
import { useState } from "react";
import Tech from "./Tech";
import Work from "./Work";
import About from "./About";
import Education from "./Education";

const Tabs = () => {
  const [selected, setSelected] = useState(0);
  const Tabs = [
    {
      id: 1,
      name: "Technologies",
      component:<Tech/>
    },
    {
      id: 2,
      name: "About",
      component:<About/>

    },
    {
      id: 3,
      name: "Work",
      component:<Work/>

    },
    {
      id: 4,
      name: "Education",
      component:<Education/>

    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-4 place-items-start place-content-start  gap-4 ">
        {Tabs.map((i, index) => (
          <p key={index} onClick={()=>setSelected(index)}
            className={`${
              selected === index
                ? "text-white  border-b-4 pb-2 border-primary"
                : "text-gray-500"
            }  font-bold text-xs md:text-sm w-1/2 text-start md:text-start hover:text-primary transition-opacity cursor-pointer `}
          >
            {i.name}
          </p>
        ))}
      </div>
      {Tabs[selected].component}
    </div>
  );
};

export default Tabs;
