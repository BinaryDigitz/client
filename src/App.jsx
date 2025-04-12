import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Navbar,
  Result,
  BuyCredit,
  NotFound,
  Footer,
} from "./components/exportComp.js";

function App() {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50 ">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/credit" element={<BuyCredit />} />
          <Route path="/result" element={<Result />} />
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
