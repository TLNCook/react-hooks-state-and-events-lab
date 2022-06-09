import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, setSelectedCategory] = useState(''); 
  let [filteredItems, setFilteredItems] = useState(items);

  function handleChange() {
    setSelectedCategory(() => {
      selectedCategory = document.getElementById('selectDropdown').value;
      setFilteredItems(items.filter((item) => item.category === selectedCategory));
    });
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select id="selectDropdown" name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
