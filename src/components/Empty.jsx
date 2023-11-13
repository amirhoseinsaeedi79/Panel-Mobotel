import React from "react";

export default function Empty(prop) {
  return (
    <div className=" flex-row-center vazir-bold text-[20px] lg:text-[23px] text-center mt-6 pb-6">
      <span className="blue w-[250px] lg:w-[300px] rounded-xl py-3">{prop.title}</span>
    </div>
  );
}
