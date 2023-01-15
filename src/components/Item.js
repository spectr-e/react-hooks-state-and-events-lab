import React, { useState } from "react"

function Item({ name, category }) {
  const [cart, setCart] = useState("")

  function HandleClickAddToCart(e) {
    cart ? setCart("") : setCart("in-cart")
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={HandleClickAddToCart} className="add">
        {cart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  )
}

export default Item
