import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "./Verify.css";
import { StoreContext } from "../../context/StoreContext";

const Verify = () => {
   const [searchParams] = useSearchParams();
   const orderId = searchParams.get("orderId");
   const success = searchParams.get("success");
   const { API_URL } = useContext(StoreContext);
   const navigate = useNavigate();

   // Add console logs to check orderId and success
   console.log("orderId:", orderId);
   console.log("success:", success);

   const verifyPayment = async () => {
      const response = await axios.post(API_URL + "/api/order/verify", {
         success,
         orderId,
      });

      if (response.data.success) {
         navigate("/myorders");
      } else {
         navigate("/");
      }
   };

   useEffect(() => {
      verifyPayment();
   }, []);

   return (
      <div className="verify">
         <div className="spinner"></div>
      </div>
   );
};

export default Verify;
