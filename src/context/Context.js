import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    useEffect(() => {
        setData(require("./../components/mockData.json").data);
        setColumns(require("./../components/mockData.json").cols);
       
    }, []);
    const values = {
        searchInput,
        setSearchInput,
        data,
        setData,
        columns,
        setColumns,
    };
    return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
