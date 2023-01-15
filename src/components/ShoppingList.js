import React, { useState } from "react"
import Item from "./Item"

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  function HandleClickCategory(e) {
    setSelectedCategory(e.target.value)
  }
  const itemDisplayAfterFilter = items.filter((item) => {
    if (selectedCategory === "All") {
      return true
    } else {
      return item.category === selectedCategory
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={HandleClickCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemDisplayAfterFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
