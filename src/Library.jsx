import React, { useContext } from "react";
import ImageIcon from "@mui/icons-material/Image";

const Library = () => {

  return (
    <main className="flex justify-center m-4">
      <section className="grid grid-cols-3 gap-16 w-[70%] place-items-center">
        <div className="w-[20rem] h-[20rem] rounded-2xl border-[1px] border-slate-300 shadow-md">
          <img
            src="./b-book.png"
            alt=""
            className="h-[15rem] object-cover rounded-t-2xl"
          />
          <div className="flex justify-between items-center h-[5rem] mx-4">
            <div className="h-14 flex flex-col justify-between">
              <h3>Name</h3>
              <h3>4.32 MB</h3>
            </div>
            <div className="flex justify-center items-center self-end pb-3">
              <p>PNG</p>
              <div>
                <ImageIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Library;
