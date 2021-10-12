import React, { useState, useContext} from "react";
import { useEffect } from "react";
import { singleUserRows } from "./data";
import { userRows } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(1)
  const [singleUser, setSingleUser] = useState(singleUserRows[index - 1])
  const [data, setData] = useState(userRows);

  const editUser = (id) => {
    setIndex(id)
  }

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setSingleUser(singleUserRows[index - 1]);
  }, [index])

  return (
    <AppContext.Provider value={{ singleUser, editUser, data, handleDelete }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };