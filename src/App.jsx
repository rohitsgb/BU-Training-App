import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/styles/index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import TaskManager from "./pages/Task Manager";
import Page404 from "./pages/Page404";
import Navbar from "./components/Navbar";
import userflow from 'userflow.js'


const App = () => {

    userflow.init('ct_zrgciwjrrnf3xmmsrr2ce5odea')
    userflow.identifyAnonymous({
      website_lead: true
    })
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="/taskmanager" element={<TaskManager />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
