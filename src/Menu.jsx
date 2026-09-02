import { useState } from "react";
import { menuData } from "./data";
import CategoryBar from "./CategoryBar";
import Dish from "./Dish";
import OrderForm from "./OrderForm";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [orderTotal, setOrderTotal] = useState(0);

  // Development tip: Console log to track re-renders
  console.log(`State - Category: ${selectedCategory}, Total: ${orderTotal} ETB`);

  // Derive unique categories from the data array
  const categories = ["All", ...new Set(menuData.map((item) => item.category))];

  // Derive the filtered list
  const filteredMenu =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  const handleAddToTotal = (price) => {
    setOrderTotal((prev) => prev + price);
  };

  return (
    <main className="menu-section">
      <div className="order-summary">
        <h2>Running Total: {orderTotal} ETB</h2>
      </div>

      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <Dish key={item.id} item={item} onAdd={handleAddToTotal} />
        ))}
      </div>

      <OrderForm />
    </main>
  );
}