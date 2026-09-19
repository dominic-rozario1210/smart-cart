import React from 'react'

const Cart = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) => {

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (

    <section className="cart-section">

      <h2>Shopping Cart</h2>

      {
        cart.length === 0 ? (

          <p className="empty-cart">
            Your cart is empty
          </p>

        ) : (

          <>

            <div className="cart-items">

              {
                cart.map((item) => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="cart-item-details">

                      <h3>{item.title}</h3>

                      <p>
                        ₹{item.price}
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

    </section>

  )
}

export default Cart