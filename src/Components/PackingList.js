import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, handleDel, handlePac, setItems }) {
  const [sortBy, setSortBy] = useState("input");
  function B() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }
  let A = items;
  if (sortBy === "input") {
    A = items;
  }
  if (sortBy === "description") {
    A = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    A = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {A.map((item) => (
          <Item
            item={item}
            handleDel={handleDel}
            key={item.id}
            handlePac={handlePac}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={B}>Clear list</button>
      </div>
    </div>
  );
}
