export default function MenuItem({ name, price, description, category, emoji }) {

  const categoryClass = category.toLowerCase();

  return (
    <div className={`menu-card ${categoryClass}`}>
      <h3>{emoji} {name}</h3>
      <p className="description">{description}</p>
      <p className="category-label">{category}</p>

      <p className="price">{price} ETB <span className="tax">(Inc. Tax: {Math.round(price * 1.15)} ETB)</span></p>
    </div>
  );
}