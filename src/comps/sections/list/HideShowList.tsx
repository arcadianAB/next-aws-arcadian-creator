import React from "react";

const HideShowList = ({
  list,
  maskedList,
}: {
  list: { title: string }[];
  maskedList: { title: string; description: string }[];
}) => {
  return (
    <ul className="flex w-full flex-col p-[1rem]">
      {list.map((item, i) => (
        <li
          className="group relative flex w-full justify-between bg-dark text-[5vw] text-light "
          key={`${item.title}-${i}`}
        >
          <div
            className="absolute bottom-0 
            flex h-0 w-full 
            origin-bottom 
            justify-between overflow-hidden 
          bg-light px-[1rem] 
          text-dark shadow-light 
            transition-all duration-500 group-hover:h-full
            "
          >
            <p>{maskedList[i].title}</p>
            <p className="self-center text-[2.5vw]">
              {maskedList[i].description}
            </p>
          </div>
          <p className="px-[1rem]">{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default HideShowList;
