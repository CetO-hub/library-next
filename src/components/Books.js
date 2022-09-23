import React from "react";
import Image from "next/image";
import { CgUnavailable } from "react-icons/cg";

const Books = (props) => {
  return (
    <>
      <div className="grid grid-rows-[1fr_0.7fr_minmax(60px,_0.5fr)] justify-start pb-4 pt-4 border-b-2 border-black border-solid relative">
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
        </div>
        <div className="text-sm w-full text-center self-start mt-2">
          <h1 className="font-bold">
            {props.title.length < 30
              ? props.title
              : props.title.slice(0, 30) + "..."}
          </h1>
        </div>
        <div className="flex text-center flex-col self-end">
          <p className="">{props.author}</p>
          <p>{props.year}</p>
        </div>
      </div>
    </>
  );
};

export default Books;
