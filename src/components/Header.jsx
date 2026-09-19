import React from 'react'

const Header = ({ cart }) => {

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (

    <header className="header-container">

      <h2>Smart Cart</h2>

      <nav>
        <ul className="header-list">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
        </ul>
      </nav>

      <div className="cart-btn">

        <button>
          🛒 Cart ({cartCount})
        </button>

      </div>

    </header>

  )
}

export default Header