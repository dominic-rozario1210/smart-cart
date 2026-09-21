import React from "react";

import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";

import productsData from "../data/productsData.json";

const Home = ({
  cart,
  addToCart,
  removeFromCart
}) => {

  return (

    <>

      <Banner />

      <div className="product-card-container">

        {
          productsData.products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />

          ))
        }

      </div>

    </>

  );
};

export default Home;