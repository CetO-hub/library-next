import React, { useState } from "react";
import Image from "next/image";
import { CgUnavailable } from "react-icons/cg";
import { BiBookAdd } from "react-icons/bi";

const Books = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [addListHovered, setAddListHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }
  function handleMouseEnterList() {
    setAddListHovered(true);
  }
  function handleMouseLeaveList() {
    setAddListHovered(false);
  }

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="grid grid-rows-[1fr_0.7fr_minmax(60px,_0.5fr)] justify-start pb-4 pt-4 border-b-2 border-black border-solid relative"
      >
        <div className="relative h-[150px] w-[109px]">
          {props.cover ? (
            <Image
              src={`https://covers.openlibrary.org/b/olid/${props.cover}-M.jpg`}
              layout="fill"
            />
          ) : (
            <div>
              <h1 className="font-bold text-xs text-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                No Image available
              </h1>
              <CgUnavailable
                size={45}
                className="opacity-10 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
            </div>
          )}
          {isHovered && (
            <div
              onMouseEnter={handleMouseEnterList}
              onMouseLeave={handleMouseLeaveList}
              className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full cursor-pointer group"
            >
              {addListHovered ? (
                <div
                  onMouseLeave={handleMouseLeaveList}
                  className="h-full w-full z-20 text-white flex flex-col justify-center items-center group-hover:transition-all bg-black/90 group-hover:gap-y-8 text-sm"
                >
                  <h4
                    id={props.id}
                    onClick={() => props.saveLocal(props.id)}
                    className="ease-out"
                  >
                    Add locally
                  </h4>
                  <h4
                    onClick={() => props.saveServer(props.id)}
                    className="ease-out"
                  >
                    Add on server
                  </h4>
                </div>
              ) : (
                <div className="z-10 w-full group-hover:scale-110 flex flex-col justify-center items-center">
                  <BiBookAdd size={25} className="fill-white" />
                  <h4 className="text-white font-bold text-sm">Add to list</h4>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="text-sm w-full text-center self-start mt-2">
          <h1 className="font-bold">
            {props.title?.length < 30
              ? props.title
              : props.title?.slice(0, 30) + "..."}
          </h1>
        </div>
        <div className="flex text-center flex-col self-end">
          <p className="">{props.author}</p>
          <p>{props.year}</p>
        </div>
        {isHovered && (
          <div className="absolute w-full h-full top-0 left-0 bg-black/60 flex justify-center items-center"></div>
        )}
      </div>
    </>
  );
};

export default Books;
