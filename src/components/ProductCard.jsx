import React from "react";

const ProductCard = ({
  product,
  cart,
  addToCart,
  removeFromCart
}) => {

  const isInCart = cart.some(
    (item) => item.id === product.id
  );

  return (

    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
      />

      <h4>
        {product.title}
      </h4>

      <p>
        ₹{product.price}
      </p>

      {
        isInCart ? (

          <button
            style={{
              backgroundColor: "#e74c3c",
              color: "white"
            }}
            onClick={() =>
              removeFromCart(product.id)
            }
          >
            Remove From Cart
          </button>

        ) : (

          <button
            onClick={() =>
              addToCart(product)
            }
          >
            Add To Cart
          </button>

        )
      }

    </div>

  );
};

export default ProductCard;