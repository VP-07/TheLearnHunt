import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllCourses from "../pages/AllCourses";
import CourseDetails from "../pages/CourseDetails";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;