import MenuItem from "./MenuItem";

const menuItems = [
  {
     id: 1,
    name: "Buna", 
    price: 80, 
    description: "Traditional Ethiopian coffee", 
    category: "Drink", 
    emoji: "☕" 
},

  { 
    id: 2, 
    name: "Shiro", 
    price: 150, 
    description: "Traditional Ethiopian chickpea stew", 
    category: "Main", 
    emoji: "🍲" 
},

  { id: 3, 
    name: "Tibs", 
    price: 250, 
    description: "Sautéed beef with vegetables", 
    category: "Main", 
    emoji: "🥩" 
},

  { id: 4, 
    name: "Chechebsa", 
    price: 120, 
    description: "Spiced flatbread with honey", 
    category: "Breakfast", 
    emoji: "🥞" 
},

  { id: 5, 
    name: "Spris", 
    price: 60, 
    description: "Mixed fruit juice layer", 
    category: "Drink", 
    emoji: "🍹" 
},

  { id: 6, 
    name: "Doro Wat", 
    price: 350,
    description: "Spicy chicken stew with egg", 
    category: "Main", 
    emoji: "🍗" 
},

  { id: 7, 
    name: "Fatira", 
    price: 100, 
    description: "Thin bread with egg and honey", 
    category: "Breakfast", 
    emoji: "🍳" 
},

  { id: 8, 
    name: "Baklava", 
    price: 90, 
    description: "Sweet pastry with nuts and honey", 
    category: "Dessert", 
    emoji: "🍯" 
}

];

export default function Menu() {
  return (
    <main className="menu-section">
      <h2>OUR MENU</h2>
      <div className="menu-grid">
        
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            category={item.category}
            emoji={item.emoji}
          />
        ))}
      </div>
    </main>
  );
}