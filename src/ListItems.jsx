import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
const ListItems = ({ element, alltrue, allfalse }) => {
  const [select, setSelect] = useState(false);

  return (
    <tr
      className={` border-[1px] ${
        select || alltrue ? "border-[2px] border-select" : "border-slate-200"
      } h-32 m-t-[1px]`}
    >
      <td>
        <Checkbox checked={alltrue || select} onClick={() => {setSelect(!select || alltrue);allfalse(false)}} />
      </td>
      <td className=" text-slate-400 scale-[1.1] font-semibold">
        <ImageIcon />
      </td>
      <td>
        <img
          src={element.preview}
          alt={element.name}
          className="h-20 w-20 object-cover rounded-xl"
        />
      </td>
      <td className="text-select font-bold">{element.name}</td>
      {(element.size > Math.pow(2, 20) && (
        <td>{(element.size / Math.pow(2, 20)).toFixed(2)} MB</td>
      )) ||
        (element.size > Math.pow(2, 10) && (
          <td>{(element.size / Math.pow(2, 10)).toFixed(2)} KB</td>
        ))}
      <td>
        {element.date} {element.time}
      </td>
      <td>User Name</td>
    </tr>
  );
};

export default ListItems;
