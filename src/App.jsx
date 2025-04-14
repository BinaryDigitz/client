import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Navbar,
  Result,
  BuyCredit,
  NotFound,
  Login,
  Footer,
} from "./components/exportComp.js";
import AppContext from "./context/AppContext.jsx";

function App() {
 const { showLogin} = useContext(AppContext)
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50 ">
      <header>
        <Navbar />
      </header>
     { showLogin && <Login />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/credit" element={<BuyCredit />} />
          <Route path="/result" element={<Result />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
