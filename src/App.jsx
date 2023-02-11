import { useState } from "react";
import Nevigation from "./Nevigation";
import Library from "./Library";
import DataProvider from "./Context/DataProvider";

function App() {
  const [displayButton, setDisplayButton] = useState(true);
  return (
    <>
      {displayButton ? (
        <div className="flex justify-center items-center w-full h-[100vh]">
          <button
            onClick={() => setDisplayButton(false)}
            className=" bg-select px-8 py-4 rounded-md text-white text-xl hover:scale-[1.1] transition-all"
          >
            Image Library
          </button>
        </div>
      ) : (
        <>
          <DataProvider>
            <Nevigation />
          </DataProvider>
        </>
      )}
    </>
  );
}

export default App;
