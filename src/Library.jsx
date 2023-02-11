import React, { useContext, useEffect, useMemo, useState } from "react";
import DataContext from "./Context/DataContext";
import Item from "./item";
import { Checkbox } from "@mui/material";
import ListItems from "./ListItems";

const Library = ({ search, grid }) => {
  const ctx = useContext(DataContext);
  const { data: mainData } = useContext(DataContext);

  const filteredData = useMemo(() => {
    return mainData.filter((el) => el.name.includes(search));
  }, [mainData, search]);

  const [filteredDataWithURL, setFilteredDataWithURL] = useState([]);
  const [alltrue, setAlltrue] = useState(false);

  useEffect(() => {
    setFilteredDataWithURL(
      filteredData.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, [filteredData, grid]);

  return (
    <main className="flex justify-center m-4">
      {grid ? (
        <section className="grid grid-cols-3 gap-16 w-[70%] place-items-center">
          {ctx.data.length === 0 ? (
            <p>Upload your Media</p>
          ) : (
            <>
              {!filteredDataWithURL ? (
                <p>Name dosen't match </p>
              ) : (
                filteredDataWithURL.map((item, index) => {
                  return (
                    <div key={index}>
                      <Item element={item} />
                    </div>
                  );
                })
              )}
            </>
          )}
        </section>
      ) : (
        <section className="w-[70%]">
          <table className="w-full border-[1px] border-slate-200">
            <tr>
              <td>
                <Checkbox checked={alltrue} onClick={() => setAlltrue(!alltrue)} />
              </td>
              <td></td>
              <td></td>
              <td className="font-bold">File Name</td>
              <td className="font-bold">Size</td>
              <td className="font-bold">Uploaded at</td>
              <td className="font-bold">Author</td>
            </tr>
            {ctx.data.length === 0 ? (
              <p>Upload your Media</p>
            ) : (
              <>
                {!filteredDataWithURL ? (
                  <p>Name dosen't match </p>
                ) : (
                  filteredDataWithURL.map((item, index) => {
                    return (
                        <ListItems element={item} alltrue={alltrue} allfalse={(bool) => setAlltrue(bool)} />
                    );
                  })
                )}
              </>
            )}
          </table>
        </section>
      )}
    </main>
  );
};

export default Library;
