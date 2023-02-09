import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SortIcon from "@mui/icons-material/Sort";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";
import Model from "./model";
import Library from "./Library";

const Nevigation = () => {
  const [showModal,setShowModal] = useState(false);
  const [files,setFiles] = useState([])
  console.log(files)
  return (
    <>
      <header className="flex justify-between items-center w-full px-8 h-[4.5rem] border border-b-[1px] border-b-slate-300 shadow text-font_color transition-all">
        <div className="flex justify-center items-center">
          <div className="h-14 w-14 border-[1px] border-slate-300 rounded-full flex justify-center items-center">
            <div className="h-11 w-11 rounded-full bg-slate-200 border-[1px] border-slate-300 flex justify-center items-center">
              <img src="./453137.png" alt="" className="h-8 w-8 rounded-full" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-normal mx-8">
            Media Library
          </h1>
        </div>
        <div className=" bg-slate-200 p-[0.2rem] hover:bg-slate-300 rounded-full cursor-pointer text-slate-500">
          <CloseIcon />
        </div>
      </header>
      <section className="flex justify-around items-center h-[5rem] w-full px-8 border border-b-[1px] shadow border-b-slate-300 my-3 text-font_color">
        <div onClick={() => setShowModal(true)} className="mx-2 flex justify-center items-center border-[1px] border-slate-300 rounded-md shadow cursor-pointer hover:bg-slate-200">
          <div className="ml-2">
            <FileUploadIcon />
          </div>
          <h3 className="mx-4 my-2">Upload</h3>
        </div>
        <div className="p-2 mx-2 flex justify-center items-center border-[1px] border-slate-300 rounded-md shadow cursor-pointer hover:bg-slate-200">
          <CreateNewFolderIcon />
        </div>
        <div className="p-2 mx-2 flex justify-center items-center border-[1px] border-slate-300 rounded-md shadow cursor-pointer hover:bg-slate-200">
          <EditIcon />
        </div>
        <div className="p-2 mx-2 flex justify-center items-center border-[1px] border-slate-300 rounded-md shadow cursor-pointer hover:bg-slate-200">
          <ContentCopyIcon />
        </div>
        <div className="p-2 mx-2 flex justify-center items-center border-[1px] border-slate-300 rounded-md shadow cursor-pointer hover:bg-slate-200">
          <DeleteOutlineIcon />
        </div>
        <div className="mx-2 pl-2 flex justify-center items-center rounded-3xl bg-emerald-50 cursor-pointer hover:bg-slate-200 w-[70%]">
          <div className="mx-2 py-2  text-select">
            <SearchIcon />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className=" p-2 outline-none hover:bg-slate-200 w-full rounded-3xl text-lg bg-emerald-50"
          />
        </div>
        <div className="mx-2 flex justify-center items-center border-[1px] border-slate-300 rounded-md shadow cursor-pointer hover:bg-slate-200 w-[11%]">
          <div className="px-2 border-r-[1px] border-slate-300">
            <SortIcon />
          </div>
          <h3 className="mx-4 my-2">Creation Date</h3>
        </div>
        <div className=" mx-2 flex justify-center items-center border-[1px] border-slate-300 rounded-md shadow cursor-pointer hover:bg-slate-200">
          <div className="p-2 border-r-[1px] border-slate-300 bg-slate-200 text-gray-900">
            <ViewCompactIcon />
          </div>
          <div className="p-2 ">
            <ListIcon />
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center w-full h-16 p-4">
        <div className="flex justify-start items-center w-[40%] mx-8">
          <div className="mx-2 flex justify-center items-center border-[1px] border-slate-300 rounded-md shadow cursor-pointer hover:bg-slate-200">
            <div className="px-2 border-r-[1px] border-slate-300">
              <SortIcon />
            </div>
            <h3 className="mx-4 my-2">Creation Date</h3>
          </div>
          <div className="mx-2 flex justify-center items-center border-[1px] border-slate-300 rounded-md shadow cursor-pointer hover:bg-slate-200">
            <div className="px-2 border-r-[1px] border-slate-300">
              <SortIcon />
            </div>
            <h3 className="mx-4 my-2">Creation Date</h3>
          </div>
        </div>
        <div className="flex justify-end items-center w-[55%] mx-8">
          <div className="px-6 py-1 mx-1 bg-slate-200 hover:bg-slate-300 rounded-3xl border-[1px] border-slate-300 shadow">
            Flower
          </div>
          <div className="px-6 py-1 mx-1 bg-slate-200 hover:bg-slate-300 rounded-3xl border-[1px] border-slate-300 shadow">
            Fruit
          </div>
          <div className="px-6 py-1 mx-1 bg-slate-200 hover:bg-slate-300 rounded-3xl border-[1px] border-slate-300 shadow">
            Flower
          </div>
          <div className="px-6 py-1 mx-1 bg-slate-200 hover:bg-slate-300 rounded-3xl border-[1px] border-slate-300 shadow">
            Fruit
          </div>
          <div className="ml-[8%] flex justify-center items-center border-[1px] border-slate-300 rounded-md shadow cursor-pointer hover:bg-slate-200">
            <div className="pl-2 ">
              <SortIcon />
            </div>
            <h3 className="mx-4 my-2">Filter</h3>
          </div>
        </div>
      </section>
      <Library />
      <Model isOpen={showModal} onClose={() => setShowModal(false)} Data={(data) => setFiles(data)} />
    </>
  );
};

export default Nevigation;
