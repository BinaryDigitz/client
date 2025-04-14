import React, { useState } from "react";
import AppContext from "./AppContext";
import { useNavigate, Link } from "react-router-dom";
import { assets } from "../assets/assets";

function AppProvider({ children }) {
  const navigate = useNavigate()
  const [ user, setUser ] = useState(1);
  const [ image, setImage ] = useState(assets.sample_img_1)
  const [ isLoading, setLoading ] = useState(false)
  const [ isImageLoaded, setImageLoaded ] = useState(true)
  const [ input, setInput ] = useState('')

  const values = {
    navigate,
    Link,
    user,
    setUser,
    image,
    setImage,
    isLoading,
    setLoading,
    isImageLoaded,
    setImageLoaded,
    input, setInput
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppProvider;
