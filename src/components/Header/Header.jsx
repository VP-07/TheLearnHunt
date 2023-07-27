import React, { useRef, useEffect } from "react";
import { Container } from 'reactstrap';
import "../../styles/header.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Courses",
    path: "/courses",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {

  const menuRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch()

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <header className = "header">
   <Container>
   <div className="nav__wrapper d-flex align-items-center justify-content-between">
        <div className = "logo">
          <h2 className = "d-flex align-items-center">
          <i class="ri-treasure-map-line"></i>TheLearnHunt
          </h2>
        </div>

        {/* ======= menu ======= */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu  d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
            <i class="ri-shopping-cart-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
    </div>
   </Container>
  </header>
  )
}

export default Header

