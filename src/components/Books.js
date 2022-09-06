import React from "react";
import Image from "next/image";

const Books = (props) => {
  console.log(props.cover);
  return (
    <>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="flex flex-col items-center">
          <div className="relative h-[100px] w-[100px]">
            <Image
              src={`https://covers.openlibrary.org/b/olid/${props.cover}-M.jpg`}
              layout="fill"
            />
          </div>
          <h1>Title</h1>
          <p>Author</p>
          <p>Year</p>
        </div>
      </div>
    </>
  );
};

export default Books;
