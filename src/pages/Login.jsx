import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import AppContext from "../context/AppContext";

function Login() {
  const { setShowLogin } = useContext(AppContext);
  const [formState, setFormState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function clearForm() {
    return setFormData({ name: "", email: "", password: "" });
  }
  function toggleState() {
    clearForm();
    if (formState === "Login") {
      return setFormState("Sign Up");
    }
    return setFormState("Login");
  }
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slt-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {formState === "Login" ? "Login" : "Sign Up"}
        </h1>
        {formState === "Login" && (
          <p className="text-sm mt-3">
            Welcome back! Please sign in to continue
          </p>
        )}
        {formState === "Sign Up" && (
          <div className="border  border-gray-200 px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="gray"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
            <input
              type="text"
              placeholder="Mary Jones"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="outline-none bg-transparent text-sm border-none"
              required
            />
          </div>
        )}
        <div className="border  border-gray-200 px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="gray"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>{" "}
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            autoComplete="email"
            placeholder="example@email.com"
            className="outline-none bg-transparent text-sm border-none"
          />
        </div>
        <div className="border  border-gray-200 px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="gray"
          >
            <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
          </svg>{" "}
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Password"
            autoComplete="password"
            className="outline-none bg-transparent text-sm border-none"
            required
          />
        </div>
        {formState === "Login" && (
          <p className="text-sm text-blue-600 cursor-pointer my-2">
            Forgot password
          </p>
        )}
        <button className="bg-blue-600 w-full text-white hover:bg-blue-500 trans py-2 rounded-full cursor-pointer">
          {formState === "Login" ? "Login" : "Create account"}
        </button>
        <hr className="my-3 border-gray-300" />
        {formState === "Login" ? (
          <p className="flex items-center justify-between gap-2 text-sm text-gray-600">
            <span>Don't have an account?</span>
            <span
              onClick={toggleState}
              className="cursor-pointer text-blue-600"
            >
              Create account
            </span>
          </p>
        ) : (
          <p className="flex items-center justify-between gap-2 text-sm text-gray-600">
            <span>Already have an account?</span>
            <span
              onClick={toggleState}
              className="cursor-pointer text-blue-600"
            >
              Login
            </span>
          </p>
        )}

        <span
          onClick={() =>setShowLogin(false)}
          className="absolute top-5 right-4 size-7 grid place-items-center cursor-pointer hover:bg-blue-50 shadow-sm trans"
        >
          <img
            src={assets.cross_icon}
            className="size-4 hover:scale-125 trans"
            alt=""
          />
        </span>
      </form>
    </div>
  );
}

export default Login;
