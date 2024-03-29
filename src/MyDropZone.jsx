import React, { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import DataContext from "./Context/DataContext";

function Previews(props) {
  const ctx = useContext(DataContext);
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({

    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const d = new Date()
      ctx.addData(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            date: d.toLocaleDateString(),
            time: d.toLocaleTimeString(),
          })
        )
      );
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  });

  return (
    <section className="container flex justify-center items-center">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="flex justify-center items-center h-[50vh] w-full bg-white rounded-3xl shadow-2xl"
      >
        <input {...getInputProps()} />
        <p className=" text-font_color text-2xl">
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
    </section>
  );
}

export default Previews;
