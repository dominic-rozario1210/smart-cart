import React, { useState } from 'react'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import Cart from './components/Cart'
import productsData from './data/productsData.json'
import './App.css'

const App = () => {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ])

    }
  }

  const increaseQuantity = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    )
  }

  return (
    <>
      <Header cart={cart} />

      <Banner />

      <section className="products-section">

        <h2>Our Products</h2>

        <div className="product-card-container">

          {
            productsData.products.map((product) => (

              <ProductCard
                product={product}
                key={product.id}
                addToCart={addToCart}
              />

            ))
          }

        </div>

      </section>

      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />

    </>
  )
}

export default App