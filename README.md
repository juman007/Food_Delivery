# Full Stack MERN Food Delivery App

## Introduction

This project is a full stack MERN (MongoDB, Express, React, Node.js) food delivery application. It provides a seamless experience for users to browse food items, add them to their cart, place orders, and track order statuses. The app also features an admin panel that enables efficient management of products and delivery statuses. Stripe is integrated as the payment gateway to handle transactions securely.

## Project Overview

The food delivery app simplifies the process of ordering food online. Users can:
- Explore a variety of food items.
- Add items to their cart.
- Checkout securely using Stripe.
- Track their order status.

Admins have the capability to:
- Manage products (add, update, delete).
- Update order and delivery statuses.
- View order history and details.

## Features

### User Features
- **Browse Menu**: Users can browse through the available food items.
- **Add to Cart**: Selected items can be added to the shopping cart.
- **Order Placement**: Users can place orders securely using Stripe.
- **Order Tracking**: Track the current status of placed orders in real-time.

### Admin Features
- **Product Management**: Admins can add, update, and remove food items from the menu.
- **Order Management**: Admins can view all orders and update their status (e.g., preparing, out for delivery, delivered).
- **Dashboard**: Overview of total orders, revenue, and active orders.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose for database modeling)
- **Payment Gateway**: Stripe for secure payment processing
