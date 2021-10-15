import React, { useState, useContext } from "react";
import { useEffect } from "react";
import {
  sidebarItems,
  singleUserRows,
  userRows,
  productRows,
  singleProductRows,
} from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(1);
  const [singleUser, setSingleUser] = useState(singleUserRows[index - 1]);
  const [users, setUsers] = useState(userRows);
  const [productIndex, setProductIndex] = useState(1);
  const [products, setProducts] = useState(productRows);
  const [singleProduct, setSingleProduct] = useState(
    productRows[productIndex - 1]
  );
  const [selected, setSelected] = useState("d-home");
  const [showSidebar, setShowSidebar] = useState(false);

  const editUser = (id) => {
    setIndex(id);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setSingleUser(singleUserRows[index - 1]);
  }, [index]);

  const editProduct = (id) => {
    setProductIndex(id);
  };

  const deleteProducts = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setSingleProduct(singleProductRows[productIndex - 1]);
  }, [productIndex]);

  return (
    <AppContext.Provider
      value={{
        sidebarItems,
        users,
        singleUser,
        editUser,
        deleteUser,
        products,
        singleProduct,
        editProduct,
        deleteProducts,
        selected,
        setSelected,
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
