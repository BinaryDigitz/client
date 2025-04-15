import React, { useState } from "react";
import AppContext from "./AppContext";
import { useNavigate, Link } from "react-router-dom";
import { assets } from "../assets/assets";

function AppProvider({ children }) {
  const baseUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [ token, setToken ] = useState(() => localStorage.getItem('token') || null)
  const [ credit, setCredit ] = useState(false)
  const [ showLogin, setShowLogin ] = useState(false)
  const [ user, setUser ] = useState(null);
  const [ image, setImage ] = useState(assets.sample_img_1)
  const [ isLoading, setLoading ] = useState(false)
  const [ isImageLoaded, setImageLoaded ] = useState(true)
  const [ input, setInput ] = useState('')
  
  const values = {
    Link,
    baseUrl,
    navigate,
    user, setUser,
    image, setImage,
    input, setInput,
    token, setToken,
    credit, setCredit,
    isLoading, setLoading,
    showLogin, setShowLogin,
    isImageLoaded, setImageLoaded,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppProvider;
