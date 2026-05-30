import { useEffect, useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const initialItems = [
  { id: 1, description: "Passport", quantity: 1, packed: false },
  { id: 2, description: "Phone charger", quantity: 1, packed: true },
  { id: 3, description: "Travel insurance", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(function () {
    const savedItems = localStorage.getItem("travelListItems");
    return savedItems ? JSON.parse(savedItems) : initialItems;
  });

  useEffect(
    function () {
      localStorage.setItem("travelListItems", JSON.stringify(items));
    },
    [items]
  );

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleTogglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <section className="project-panel">
        <p className="eyebrow">Recruiter quick view</p>
        <h2>Persistent trip packing list with sorting and progress tracking</h2>
        <p>
          A focused React CRUD app that demonstrates controlled forms,
          immutable state updates, derived stats, localStorage persistence, and
          responsive UI polish.
        </p>
      </section>
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
        onClearItems={() => setItems([])}
      />
      <Stats items={items} />
    </div>
  );
}
