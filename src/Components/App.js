import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  function handle({ item }) {
    setItems((items) => [...items, item]);
  }
  function handleDel(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handlePac(id) {
    setItems((items) =>
      items.map((items) =>
        items.id === id ? { ...items, packed: !items.packed } : items
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form handle={handle} />
      <PackingList
        items={items}
        handleDel={handleDel}
        handlePac={handlePac}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}
