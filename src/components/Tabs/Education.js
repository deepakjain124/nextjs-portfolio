import Image from "next/image";

const Education = () => {
  const WorkArr = [
    {
      CollegeName: "Modern Institute Of Technology and Research Center",
      joinDate: "August-2018 - August-2022",
      image: "/mitrc_logo.png",
      about:"Computer Science"
    },
   
  ];
  return (
    <>
      <div className="mt-2">
        {WorkArr.map((i, index) => {
          return (
            <div key={index}>
              <div className="flex mt-4 justify-start items-start gap-x-3">
                <Image
                  src={i.image}
                  className="bg-white w-12 h-12 object-contain rounded-full"
                  width={50}
                  height={50}
                />
                <div className="text-sm text-gray-200">
                  <p>{i.CollegeName}</p>
                  <p className="mt-2">{i.joinDate}</p>
                  <p className="text-start leading-6 w-[80%] mt-2 text-gray-500">
                    {i.about}
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

export default Education;
