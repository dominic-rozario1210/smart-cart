import React from "react";

const Cart = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) => {

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (

    <div className="cart-page">

      <h1>
        My Cart
      </h1>

      {
        cart.length === 0 ? (

          <h2
            style={{
              fontSize: "24px"
            }}
          >
            Your cart is empty 🛒
          </h2>

        ) : (

          <>

            <div className="cart-items">

              {
                cart.map((item) => (

                  <div
                    className="cart-card"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      ₹{item.price * item.quantity}
                    </p>

                    <div className="quantity-controls">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                ))
              }

            </div>

            <div className="cart-summary">

              <h3>
                Total Items: {totalItems}
              </h3>

              <h3>
                Total Price: ₹{totalPrice}
              </h3>

            </div>

          </>

        )
      }

    </div>

  );
};

export default Cart;