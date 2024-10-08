import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
   const API_URL = "https://food-del-backend-saqf.onrender.com";
   return (
      <div>
         <ToastContainer />
         <Navbar />
         <hr />
         <div className="app-content">
            <Sidebar />
            <Routes>
               <Route path="/add" element={<Add API_URL={API_URL} />} />
               <Route path="/list" element={<List API_URL={API_URL} />} />
               <Route path="/orders" element={<Orders API_URL={API_URL} />} />
            </Routes>
         </div>
      </div>
   );
};

export default App;
