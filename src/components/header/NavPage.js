import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Hero from "../Hero";

function NavPage() {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Hero />} />
        </Routes>
      </section>
    </React.Fragment>
  );
}

export default NavPage;
