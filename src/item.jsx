import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";

const Item = ({ element }) => {
    const [select,setSelect] = useState(false)

  return (
    <div className={`w-[20rem] h-[20rem] rounded-2xl ${select ? `border-[3px] border-select bg-select ` : `border-[1px] border-slate-300 ` } border-[1px] border-slate-300 shadow-md`} onClick={() => setSelect(!select)}>
      <img
        src={element.preview}
        className="h-[15rem] object-cover rounded-t-2xl"
        alt={element.name}
        onLoad={() => {
          URL.revokeObjectURL(element.preview);
        }}
      />
      <h3 className={`h-[1.5rem] overflow-hidden ml-4 mt-1 ${select? 'text-white' :'text-slate-400'} font-semibold`}>{element.name}</h3>
      <div className="flex justify-between items-center mx-4">
        <div className="h-14 flex items-center justify-between w-[50%]">
          {(element.size > Math.pow(2, 20) && (
            <h3 className={`${select? 'text-white' :'text-slate-400'} font-semibold`}>{(element.size / Math.pow(2, 20)).toFixed(2)} MB</h3>
          )) ||
            (element.size > Math.pow(2, 10) && (
              <h3 className={`${select? 'text-white' :'text-slate-400'} font-semibold`}>{(element.size / Math.pow(2, 10)).toFixed(2)} KB</h3>
            ))}
        </div>
        <div className=" w-[50%] flex justify-end items-center">
          <p className={`mr-3 px-4 rounded-xl ${select? 'bg-white' :'bg-slate-400 text-white'} uppercase `}>
            {element.type.split("/")[1]}
          </p>
          <div className={`${select? 'text-white' :'text-slate-400'} scale-[1.3] font-semibold -z-20`}>
            <ImageIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
