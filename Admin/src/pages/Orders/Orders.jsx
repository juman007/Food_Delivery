import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import "./Orders.css";

const Orders = ({ API_URL }) => {
   const [orders, setOrders] = useState([]);

   const fecthAllOrders = async () => {
      const response = await axios.get(API_URL + "/api/order/list");
      if (response.data.success) {
         setOrders(response.data.data);
      } else {
         toast.error("Error");
      }
   };

   const statusHandler = async (event, orderId) => {
      const response = await axios.post(API_URL + "/api/order/status", {
         orderId,
         status: event.target.value,
      });

      if (response.data.success) {
         await fecthAllOrders();
         toast.success("Status updated successfully");
      }
   };

   useEffect(() => {
      fecthAllOrders();
   }, []);

   return (
      <div className="order add">
         <h3>Order Page</h3>
         <div className="order-list">
            {orders.map((order, index) => (
               <div key={index} className="order-item">
                  <img src={assets.parcel_icon} alt="" />
                  <div>
                     <p className="order-item-food">
                        {order.items.map((item, index) => {
                           if (index === order.items.length - 1) {
                              return item.name + "x" + item.quantity;
                           } else {
                              return item.name + "x" + item.quantity + ",";
                           }
                        })}
                     </p>
                     <p className="order-item-name">
                        {order.address.firstName + " " + order.address.lastName}
                     </p>
                     <div className="order-item-address">
                        <p>{order.address.street}</p>
                        <p>
                           {order.address.city +
                              ", " +
                              order.address.state +
                              ", " +
                              order.address.country +
                              ", " +
                              order.address.zipCode}
                        </p>
                     </div>
                     <p className="order-item-phone">{order.address.phone}</p>
                  </div>
                  <p>Items : {order.items.length}</p>
                  <p>Items : ${order.amount}</p>
                  <select
                     onChange={(event) => statusHandler(event, order._id)}
                     value={order.status}
                  >
                     <option value="Food Processing">Food Processing</option>
                     <option value="Out for delivery">Out for delivery</option>
                     <option value="Delivered"> Delivered</option>
                  </select>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Orders;
