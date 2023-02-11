import { createContext } from "react";

const DataContext = createContext({
    data:[],
    addData: () => {},

})

export default DataContext;