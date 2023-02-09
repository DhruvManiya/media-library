import React from "react";
import MyDropZone from "./MyDropZone";
const model = ({ isOpen, onClose, Data }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] flex justify-center items-center">
        <div
          className="h-full w-full fixed inset-0 -z-10"
          onClick={() => onClose()}
        ></div>
        <div className="w-[50%]">
          <MyDropZone sendData={(data) => Data(data)} />
        </div>
      </div>
    </>
  );
};

export default model;
