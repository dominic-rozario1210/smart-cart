import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ cart }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isCartPage =
    location.pathname === "/cart";

  return (

    <header className="header-container">

      <h2>
        Smart Cart
      </h2>

      <nav>

        <ul className="header-list">

          <li onClick={() => navigate("/")}>
            Home
          </li>

          <li>
            About
          </li>

          <li>
            Contact
          </li>

        </ul>

      </nav>

      <div className="cart-btn">

        <button
          onClick={() => {

            if (isCartPage) {

              navigate(-1);

            } else {

              navigate("/cart");

            }

          }}
        >

          {
            isCartPage
              ? "← Previous"
              : `🛒 Cart (${cartCount})`
          }

        </button>

      </div>

    </header>

  );
};

export default Header;