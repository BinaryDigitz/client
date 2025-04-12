import React, { useState } from "react";
import AppContext from "./AppContext";
import { useNavigate, Link } from "react-router-dom";

function AppProvider({ children }) {
  const navigate = useNavigate()
  const [ user, setUser ] = useState(1);

  const values = {
    navigate,
    Link,
    user,
    setUser
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppProvider;
