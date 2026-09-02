import { useState } from "react";

export default function Dish({ item, onAdd }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
    onAdd(item.price); // Passes the price up to the Menu component
  };

  return (
    <div className="menu-card">
      <h3>
        {item.emoji} {item.name} {item.spicy && "🌶️"}
      </h3>
      <p className="category-label">{item.category}</p>
      <p className="price">{item.price} ETB</p>
      
      <div className="card-actions">
        <span className="count-display">Ordered: {count}</span>
        <button className="add-btn" onClick={handleAdd}>Add to Order</button>
      </div>
    </div>
  );
}
